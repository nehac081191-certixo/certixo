from fastapi import FastAPI, UploadFile, File, Header, HTTPException, Form, Body, Depends
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware
from services.document_service import extract_text_from_pdf
from services.ai_service import analyze_document
from pydantic import BaseModel
import os
from datetime import datetime
from dotenv import load_dotenv

# Import all models early to register with SQLAlchemy Base
from models import audit, audit_log, integration, framework, policy, user, access_review, vendor, drift, inventory, people, risk, data_discovery, data_lineage, organization

from database import SessionLocal, engine, get_db
from sqlalchemy.orm import Session, joinedload
import random

load_dotenv()
INTERNAL_SECRET = os.getenv("CERTIXO_INTERNAL_SECRET")

def verify_internal_secret(x_internal_secret: str = Header(None)):
    if not INTERNAL_SECRET:
         # Skip check if not configured, but log it
         print("WARNING: CERTIXO_INTERNAL_SECRET not set. API is exposed.")
         return
    if x_internal_secret != INTERNAL_SECRET:
        raise HTTPException(status_code=403, detail="Unauthorized institutional access.")

app = FastAPI()

# Allow CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class AnalysisResponse(BaseModel):
    filename: str
    analysis: str

# Create tables
audit_log.Base.metadata.create_all(bind=engine)
integration.Base.metadata.create_all(bind=engine)
framework.Base.metadata.create_all(bind=engine)
policy.Base.metadata.create_all(bind=engine)
user.Base.metadata.create_all(bind=engine)
access_review.Base.metadata.create_all(bind=engine)
vendor.Base.metadata.create_all(bind=engine)
drift.Base.metadata.create_all(bind=engine)
inventory.Base.metadata.create_all(bind=engine)
people.Base.metadata.create_all(bind=engine)
risk.Base.metadata.create_all(bind=engine)
data_discovery.Base.metadata.create_all(bind=engine)
audit.Base.metadata.create_all(bind=engine)
organization.Base.metadata.create_all(bind=engine)


from services.auth_service import get_password_hash, verify_password, create_access_token, get_current_user, check_role

# Declare schemas first
class UserRegister(BaseModel):
    email: str
    password: str
    full_name: str
    role: str = "Viewer"

class UserLogin(BaseModel):
    email: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class UserSchema(BaseModel):
    id: int
    email: str
    full_name: str
    role: str
    company: str
    is_active: bool

    class Config:
        from_attributes = True

class UserCreate(BaseModel):
    email: str
    full_name: str
    company: str = "Certixo"
    role: str = "Viewer"

class RiskSchema(BaseModel):
    id: int
    title: str
    description: str
    category: str

class RiskCreate(BaseModel):
    title: str
    description: str
    impact_score: int
    risk_score: int
    residual_risk: int = 0
    risk_velocity: str = "Medium"
    exposure_value: float = 0.0
    treatment_type: str = "Accept"
    status: str

# --- Enterprise Onboarding Schemas ---

class PolicyGenRequest(BaseModel):
    topic: str
    complexity: str = "Enterprise"
    tone: str = "Strict"

class AuditPlanCreate(BaseModel):
    title: str
    framework_id: int
    audit_period_start: datetime
    audit_period_end: datetime
    scope: list[str]

class AuditPlanSchema(BaseModel):
    id: int
    title: str
    framework_id: int
    status: str
    created_at: datetime

    class Config:
        from_attributes = True

class AuditRunSchema(BaseModel):
    id: int
    plan_id: int
    status: str
    current_step: str
    score: int | None = None
    created_at: datetime

    class Config:
        from_attributes = True

class OrgInviteRequest(BaseModel):
    email: str
    org_name: str

class KYCSubmitRequest(BaseModel):
    token: str
    tax_id: str
    legal_address: str
    industry: str
    employee_count: int

@app.post("/auth/register", response_model=UserSchema)
def register(u: UserRegister, db: Session = Depends(get_db)):
    db_user = db.query(user.User).filter(user.User.email == u.email).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    new_user = user.User(
        email=u.email,
        hashed_password=get_password_hash(u.password),
        full_name=u.full_name,
        role=u.role
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

@app.post("/auth/login", response_model=Token)
def login(u: UserLogin, db: Session = Depends(get_db)):
    db_user = db.query(user.User).filter(user.User.email == u.email).first()
    if not db_user or not verify_password(u.password, db_user.hashed_password):
        raise HTTPException(status_code=401, detail="Incorrect email or password")
    
    access_token = create_access_token(data={"sub": db_user.email})
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/auth/me", response_model=UserSchema)
def read_users_me(current_user: user.User = Depends(get_current_user)):
    return current_user

# --- People & Training Endpoints ---

@app.get("/people")
def get_people(db: Session = Depends(get_db)):
    return db.query(people.Employee).options(joinedload(people.Employee.trainings).joinedload(people.TrainingRecord.training)).all()

@app.get("/people/trainings")
def get_trainings(db: Session = Depends(get_db)):
    return db.query(people.Training).all()

# --- Risk & Alerts Endpoints ---

@app.get("/risks", response_model=list[RiskSchema])
def get_risks(db: Session = Depends(get_db), current_user: user.User = Depends(get_current_user)):
    if current_user.role == "certixo_admin":
        return db.query(risk.RiskItem).all()
    return db.query(risk.RiskItem).filter(risk.RiskItem.organization_id == current_user.organization_id).all()

@app.get("/risks/alerts")
def get_risk_alerts(db: Session = Depends(get_db), current_user: user.User = Depends(get_current_user)):
     if current_user.role == "certixo_admin":
         return db.query(risk.RiskAlert).order_by(risk.RiskAlert.created_at.desc()).all()
     # Alerts are linked to risks, which are linked to orgs
     return db.query(risk.RiskAlert).join(risk.RiskItem).filter(risk.RiskItem.organization_id == current_user.organization_id).order_by(risk.RiskAlert.created_at.desc()).all()

@app.get("/dashboard/summary")
def get_dashboard_summary(db: Session = Depends(get_db), current_user: user.User = Depends(get_current_user)):
    org_id = current_user.organization_id
    
    # Global admin sees all summary (optional, or just for their own "org" if they have one)
    policy_count = db.query(policy.Policy).filter(policy.Policy.organization_id == org_id).count() if not current_user.role == "certixo_admin" else db.query(policy.Policy).count()
    risk_count = db.query(risk.RiskItem).filter(risk.RiskItem.organization_id == org_id).count() if not current_user.role == "certixo_admin" else db.query(risk.RiskItem).count()
    plan_count = db.query(audit.AuditPlan).filter(audit.AuditPlan.organization_id == org_id).count() if not current_user.role == "certixo_admin" else db.query(audit.AuditPlan).count()
    
    return {
        "readiness_index": 94.2, # Still mock until scoring engine is fully wired
        "active_plans": plan_count,
        "published_policies": policy_count,
        "open_risks": risk_count,
        "critical_finding": "S3 Bucket 'backup-prod' is public" if org_id == 1 else "No critical findings detected"
    }

# --- Inventory & Assets Endpoints ---

class InventorySchema(BaseModel):
    id: int
    name: str
    category: str
    type: str
    owner: str
    department: str
    classification: str
    status: str
    serial_number: str | None = None
    location: str | None = None
    risk_score: int
    integration_source: str | None = None

class InventoryCreate(BaseModel):
    name: str
    category: str = "Hardware" # Hardware, Software, Data, Document
    type: str = "Laptop"
    owner: str = "Unassigned"
    department: str = "IT"
    classification: str = "Internal"
    serial_number: str = ""
    location: str = ""

@app.post("/simulate/drift/mfa")
def simulate_mfa_drift(db: Session = Depends(get_db)):
    # 1. Update the Control
    soc2 = db.query(framework.Framework).filter_by(name="SOC 2").first()
    if soc2:
        mfa_control = db.query(framework.Control).filter_by(framework_id=soc2.id, code="CC1.2").first()
        if mfa_control:
            mfa_control.status = "Fail"
            mfa_control.last_evidence_value = "MFA Disabled by Developer (root)"
            mfa_control.remediation_ticket = "JIRA-QC-402"
    
    # 2. Add an Alert
    alert = risk.RiskAlert(
        message="Critical Drift: MFA disabled on Admin Account [AWS:Production]",
        severity="Critical"
    )
    db.add(alert)
    db.commit()
    
    return {"status": "Drift Simulated", "ticket": "JIRA-QC-402"}


@app.get("/inventory", response_model=list[InventorySchema])
def get_inventory(db: Session = Depends(get_db)):
    return db.query(inventory.InventoryItem).all()

@app.post("/inventory")
def create_inventory(i: InventoryCreate, db: Session = Depends(get_db)):
    db_item = inventory.InventoryItem(
        name=i.name,
        category=i.category,
        type=i.type,
        owner=i.owner,
        department=i.department,
        classification=i.classification,
        serial_number=i.serial_number,
        location=i.location,
        risk_score=25, # Default low risk
        integration_source="Manual"
    )
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item

@app.post("/inventory/sync")
def sync_inventory(source: str = Body(..., embed=True), db: Session = Depends(get_db)):
    # Simulate pulling data from external sources
    mock_data = []
    if source == "Jamf": # Hardware
        mock_data = [
            {"name": "Macbook-Pro-Q1", "category": "Hardware", "type": "Laptop", "serial_number": "MS77X2SH", "location": "NY Office", "owner": "jane@corp.com", "risk": 15},
            {"name": "iPad-Admin-99", "category": "Hardware", "type": "Tablet", "serial_number": "IPD220MX", "location": "Remote", "owner": "bob@corp.com", "risk": 40}
        ]
    elif source == "Okta": # Software/SaaS
        mock_data = [
            {"name": "Salesforce", "category": "Software", "type": "SaaS", "location": "Cloud", "owner": "sales-admin@corp.com", "risk": 65},
            {"name": "Zoom", "category": "Software", "type": "SaaS", "location": "Cloud", "owner": "it-support@corp.com", "risk": 20}
        ]
    elif source == "AWS": # Cloud Providers
        mock_data = [
            {"name": "Production-DB-Cluster", "category": "Data", "type": "RDS Instance", "location": "us-east-1", "owner": "devops@corp.com", "risk": 85},
            {"name": "Public-S3-Bucket", "category": "Data", "type": "S3", "location": "global", "owner": "security@corp.com", "risk": 95}
        ]
    
    synced_items = []
    for item in mock_data:
        # Check if exists
        existing = db.query(inventory.InventoryItem).filter_by(name=item["name"]).first()
        if not existing:
            new_item = inventory.InventoryItem(
                name=item["name"],
                category=item["category"],
                type=item["type"],
                serial_number=item.get("serial_number"),
                location=item["location"],
                owner=item["owner"],
                risk_score=item["risk"],
                integration_source=source,
                department="Sync"
            )
            db.add(new_item)
            synced_items.append(new_item)
    
    db.commit()
    return {"status": "Sync Complete", "source": source, "added": len(synced_items)}

@app.post("/inventory/assess/{item_id}")
def assess_risk(item_id: int, db: Session = Depends(get_db)):
    item = db.query(inventory.InventoryItem).filter_by(id=item_id).first()
    if not item:
        raise HTTPException(status_code=404, detail="Asset not found")
    
    # Simulate high-fidelity risk calculation
    new_risk = item.risk_score
    if item.classification == "Restricted":
        new_risk += 20
    if item.type == "S3" and "Public" in item.name:
        new_risk = 100
    
    item.risk_score = min(100, new_risk)
    db.commit()
    db.refresh(item)
    return item

# --- Data Discovery Endpoints ---

@app.get("/data-discovery")
def get_data_discovery(db: Session = Depends(get_db)):
    return db.query(data_discovery.DataDiscoveryJob).all()

# --- Data Lineage Endpoints ---

@app.get("/data-lineage")
def get_data_lineage(db: Session = Depends(get_db)):
    return db.query(data_lineage.DataFlow).all()


class UserCreate(BaseModel):
    email: str
    full_name: str
    company: str = "Certixo"
    role: str = "Viewer"

@app.get("/users")
def get_users(db: Session = Depends(get_db), current_user: user.User = Depends(get_current_user)):
    if current_user.role == "certixo_admin":
        return db.query(user.User).all()
    return db.query(user.User).filter(user.User.organization_id == current_user.organization_id).all()

@app.post("/users")
def create_user(u: UserCreate, db: Session = Depends(get_db), current_user: user.User = Depends(get_current_user)):
    # Certixo admin or Tenant admin can create users in their org
    if current_user.role not in ["certixo_admin", "tenant_admin"]:
        raise HTTPException(status_code=403, detail="Not authorized to invite members")
        
    db_user = user.User(
        email=u.email, 
        full_name=u.full_name, 
        company=current_user.company, 
        role=u.role, 
        organization_id=current_user.organization_id,
        is_active=True # Seeded members are active for demo
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

# --- Drift Detection Endpoints ---

@app.get("/drift/status")
def get_drift_status(db: Session = Depends(get_db)):
    return {
        "checks": db.query(drift.DriftCheck).all(),
        "alerts": db.query(drift.DriftAlert).filter(drift.DriftAlert.resolved == False).order_by(drift.DriftAlert.created_at.desc()).all()
    }

@app.post("/drift/scan")
def run_drift_scan(db: Session = Depends(get_db)):
    # Simulates a new scan finding more issues
    # In reality, this calls cloud APIs
    import random
    
    checks = db.query(drift.DriftCheck).all()
    new_alerts = []
    
    for check in checks:
        check.last_run = datetime.utcnow()
        if random.random() < 0.2: # 20% chance of failure
            check.status = "Failing"
            alert = drift.DriftAlert(check_id=check.id, message=f"Drift detected in {check.name}", severity="Medium")
            db.add(alert)
            new_alerts.append(alert)
        else:
            check.status = "Passing"
            
    db.commit()
    return {"status": "Complete", "new_alerts": len(new_alerts)}

# --- Vendor Risk Endpoints ---

class VendorSchema(BaseModel):
    id: int
    name: str
    service_type: str
    risk_level: str
    status: str
    has_soc2: bool
    has_iso27001: bool
    has_gdpr: bool
    gstin: str | None = None
    gst_filing_status: str = "Unknown"
    assessment_score: int = 0
    criticality: str = "Low"
    ai_analysis: str | None = None
    owner: str

class VendorCreate(BaseModel):
    name: str
    service_type: str = "SaaS"
    description: str = ""
    risk_level: str = "Low"
    owner: str = "IT Admin"
    gstin: str | None = None

@app.get("/vendors", response_model=list[VendorSchema])
def get_vendors(db: Session = Depends(get_db)):
    return db.query(vendor.Vendor).all()

@app.post("/vendors/{vendor_id}/assess")
def assess_vendor(vendor_id: int, db: Session = Depends(get_db)):
    v = db.query(vendor.Vendor).filter(vendor.Vendor.id == vendor_id).first()
    if not v:
        raise HTTPException(status_code=404, detail="Vendor not found")
    
    # Simulate AI Auditor Analysis
    time.sleep(2) # Analysis latency
    
    score = 0
    findings = []
    
    if v.has_soc2: score += 30
    else: findings.append("Missing SOC2 Type II")
    
    if v.has_iso27001: score += 20
    else: findings.append("Missing ISO 27001")
    
    if v.has_gdpr: score += 20
    else: findings.append("GDPR DPA not signed")
    
    if v.gst_filing_status == "Filed": score += 30
    elif v.gst_filing_status == "Delayed": score += 10; findings.append("Delayed GST Filings")
    
    v.assessment_score = score
    v.ai_analysis = "AI ANALYSIS COMPLETED: " + ("No major gaps detected. Solid posture." if not findings else "Identified gaps: " + ", ".join(findings))
    v.status = "Active"
    
    db.commit()
    db.refresh(v)
    return v

@app.post("/vendors")
def create_vendor(v: VendorCreate, db: Session = Depends(get_db)):
    db_v = vendor.Vendor(
        name=v.name,
        service_type=v.service_type,
        description=v.description,
        risk_level=v.risk_level,
        status="Onboarding", # Starts as onboarding
        owner=v.owner,
        gstin=v.gstin,
        last_review_date=datetime.utcnow(),
        assessment_score=0 # Initial score is 0
    )
    db.add(db_v)
    db.commit()
    db.refresh(db_v)
    return db_v

# --- Access Review Endpoints ---

@app.post("/access-reviews/start")
def start_access_review(name: str = Body(..., embed=True), db: Session = Depends(get_db)):
    # 1. Create Campaign
    campaign = access_review.AccessReview(
        name=name,
        status="In Progress",
        due_date=datetime.utcnow()
    )
    db.add(campaign)
    db.commit()
    db.refresh(campaign)
    
    # 2. Mock: Fetch users from "Integrated Systems" and populate items
    # In reality, this would query the APIs of connected integrations
    mock_items = [
        access_review.AccessReviewItem(review_id=campaign.id, user_email="alice@techflow.io", user_name="Alice Admin", system="AWS", role="Administrator"),
        access_review.AccessReviewItem(review_id=campaign.id, user_email="bob@techflow.io", user_name="Bob Developer", system="AWS", role="S3FullAccess"),
        access_review.AccessReviewItem(review_id=campaign.id, user_email="bob@techflow.io", user_name="Bob Developer", system="GitHub", role="Write"),
        access_review.AccessReviewItem(review_id=campaign.id, user_email="charlie@contractor.com", user_name="Charlie Contractor", system="Google Workspace", role="Editor"),
        access_review.AccessReviewItem(review_id=campaign.id, user_email="dave@techflow.io", user_name="Dave DevOps", system="AWS", role="ReadOnly"),
    ]
    db.add_all(mock_items)
    db.commit()
    
    return campaign

@app.get("/access-reviews")
def get_access_reviews(db: Session = Depends(get_db)):
    return db.query(access_review.AccessReview).order_by(access_review.AccessReview.created_at.desc()).all()

@app.get("/access-reviews/{id}/items")
def get_review_items(id: int, db: Session = Depends(get_db)):
    return db.query(access_review.AccessReviewItem).filter(access_review.AccessReviewItem.review_id == id).all()

@app.post("/access-reviews/items/{item_id}/decide")
def decide_access_item(item_id: int, decision: str = Body(..., embed=True), db: Session = Depends(get_db)):
    item = db.query(access_review.AccessReviewItem).filter(access_review.AccessReviewItem.id == item_id).first()
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
        
    item.status = decision # "Keep" or "Revoke"
    item.reviewed_at = datetime.utcnow()
    db.commit()
    
    # Check if all items in this campaign are reviewed
    all_items = db.query(access_review.AccessReviewItem).filter(access_review.AccessReviewItem.review_id == item.review_id).all()
    if all(i.status != "Pending" for i in all_items):
        campaign = db.query(access_review.AccessReview).filter(access_review.AccessReview.id == item.review_id).first()
        campaign.status = "Completed"
        db.commit()
        
    return item

# --- Seeding Admin User ---
# You might want to run this once or check on startup
# --- Policy Endpoints ---

class PolicySchema(BaseModel):
    id: int
    title: str
    content: str
    status: str
    version: int
    category: str
    updated_at: datetime

class PolicyUpdate(BaseModel):
    id: int | None = None
    title: str
    content: str
    category: str = "General"
    change_summary: str = "System update"

class PolicyVersionSchema(BaseModel):
    id: int
    version_number: int
    content: str
    change_summary: str
    created_at: datetime

class PolicyCreate(BaseModel):
    title: str
    content: str
    category: str = "General"

@app.get("/policies", response_model=list[PolicySchema])
def get_policies(db: Session = Depends(get_db), current_user: user.User = Depends(get_current_user)):
    # Global admins see all, others only their org
    if current_user.role == "certixo_admin":
        return db.query(policy.Policy).all()
    return db.query(policy.Policy).filter(policy.Policy.organization_id == current_user.organization_id).all()

@app.post("/policies")
def save_policy(p: PolicyUpdate, db: Session = Depends(get_db)):
    if p.id:
        db_policy = db.query(policy.Policy).filter(policy.Policy.id == p.id).first()
        if not db_policy:
            raise HTTPException(status_code=404, detail="Policy not found")
        # Save old version before updating
        old_version = policy.PolicyVersion(
            policy_id=db_policy.id,
            version_number=db_policy.version,
            content=db_policy.content,
            change_summary=p.change_summary
        )
        db.add(old_version)
        
        # Update policy
        db_policy.title = p.title
        db_policy.content = p.content
        db_policy.category = p.category
        db_policy.version += 1
    else:
        db_policy = policy.Policy(title=p.title, content=p.content, category=p.category)
        db.add(db_policy)
    
    db.commit()
    db.refresh(db_policy)
    return db_policy

@app.get("/policies/{policy_id}/versions", response_model=list[PolicyVersionSchema])
def get_policy_versions(policy_id: int, db: Session = Depends(get_db)):
    return db.query(policy.PolicyVersion).filter(policy.PolicyVersion.policy_id == policy_id).order_by(policy.PolicyVersion.version_number.desc()).all()

from services.rag_service import ask_copilot, generate_policy_draft, refine_policy_content

class RefinePolicyRequest(BaseModel):
    content: str
    instruction: str

@app.post("/policies/generate", dependencies=[Depends(verify_internal_secret)])
def generate_policy(req: PolicyGenRequest, db: Session = Depends(get_db)):
    content = generate_policy_draft(req.topic, req.complexity, req.tone, db)
    return {"content": content}

@app.post("/policies/refine", dependencies=[Depends(verify_internal_secret)])
def refine_policy(req: RefinePolicyRequest):
    content = refine_policy_content(req.content, req.instruction)
    return {"content": content}

@app.post("/chat", dependencies=[Depends(verify_internal_secret)])
def chat_copilot(query: str = Body(..., embed=True), db: Session = Depends(get_db)):
    try:
        response = ask_copilot(query, db)
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

class AuditLogResponse(BaseModel):
    id: int
    filename: str
    category: str
    framework: str
    status: str
    analysis_result: str
    created_at: str

@app.get("/")
def read_root():
    return {"message": "Welcome to Certixo API"}

@app.get("/history", response_model=list[AuditLogResponse])
def get_history(db: Session = Depends(get_db)):
    logs = db.query(audit_log.AuditLog).order_by(audit_log.AuditLog.created_at.desc()).all()
    return [{
        "id": log.id, 
        "filename": log.filename, 
        "category": log.category,
        "framework": log.framework,
        "status": log.status,
        "analysis_result": log.analysis_result, 
        "created_at": log.created_at.isoformat()
    } for log in logs]

@app.get("/stats")
def get_stats(db: Session = Depends(get_db)):
    total = db.query(audit_log.AuditLog).count()
    compliant = db.query(audit_log.AuditLog).filter(audit_log.AuditLog.status == "Compliant").count()
    non_compliant = db.query(audit_log.AuditLog).filter(audit_log.AuditLog.status == "Non-Compliant").count()
    
    score = 0
    if total > 0:
        score = int((compliant / total) * 100)
        
    return {
        "total_documents": total,
        "compliant_count": compliant,
        "non_compliant_count": non_compliant,
        "compliance_score": score
    }

class AnalysisResponse(BaseModel):
    filename: str
    analysis: str

@app.post("/analyze", response_model=AnalysisResponse)
async def analyze_file(
    file: UploadFile = File(...), 
    control_id: int = Form(...),
    db: Session = Depends(get_db),
    _auth: None = Depends(verify_internal_secret)
):
    try:
        content = extract_text_from_pdf(file)
        
        # Phase 2: AI Validation against specific control
        control = db.query(framework.Control).filter(framework.Control.id == control_id).first()
        if not control:
            raise HTTPException(status_code=404, detail="Control not found")

        # Specific Prompt Construction
        prompt = f"""
        You are a strict compliance auditor. Validate the following document against the requirements of {control.framework.name} Control {control.code}: "{control.name}".
        
        Control Description: {control.description}
        
        Document Content:
        {content[:10000]} 

        Determine if this document serves as valid evidence for this control.
        Output your analysis in Markdown.
        1. **Compliance Status**: (Compliant / Non-Compliant / Needs Review)
        2. **Reasoning**: Why?
        3. **Gaps**: What is missing matching the description?
        """
        
        analysis = analyze_document(content, query=prompt)
        
        # Determine status
        status = "Needs Review"
        lower_analysis = analysis.lower()
        if "compliant" in lower_analysis and "non-compliant" not in lower_analysis:
            status = "Compliant"
        elif "non-compliant" in lower_analysis or "gap" in lower_analysis:
            status = "Non-Compliant"
        
        # Save to DB linked to Control
        db_log = audit_log.AuditLog(
            filename=file.filename, 
            control_id=control_id,
            framework=control.framework.name,
            category="Evidence", # Defaulting for now
            status=status,
            analysis_result=analysis
        )
        db.add(db_log)
        db.commit()
        db.refresh(db_log)
        
        return {"filename": file.filename, "analysis": analysis}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# --- Integrations Endpoints ---

class IntegrationSchema(BaseModel):
    name: str
    category: str
    description: str
    status: str

@app.get("/integrations", response_model=list[IntegrationSchema])
def get_integrations(db: Session = Depends(get_db)):
    return db.query(integration.Integration).all()

import time

class ConnectConfig(BaseModel):
    url: str
    apiKey: str

@app.post("/integrations/{name}/connect")
def connect_integration(name: str, config: ConnectConfig, db: Session = Depends(get_db)):
    integ = db.query(integration.Integration).filter(integration.Integration.name == name).first()
    if not integ:
        raise HTTPException(status_code=404, detail="Integration not found")
    
    # Simulate connection verify
    time.sleep(1.5) # Fake network delay
    
    integ.status = "Connected"
    integ.last_sync = datetime.utcnow()
    # In real app, we encrypt and store config
    # integ.config = json.dumps(config.dict()) 
    db.commit()
    return {"status": "Connected", "message": f"Successfully connected to {name}"}

# --- AI Auditor Agent Intelligence ---

@app.post("/ai-auditor/intent-match", dependencies=[Depends(verify_internal_secret)])
def intent_match(db: Session = Depends(get_db)):
    # 1. Fetch relevant policy (Access or SSO)
    p = db.query(policy.Policy).filter(policy.Policy.title.ilike("%access%")).first()
    if not p:
        p = db.query(policy.Policy).first()
    
    policy_content = p.content if p else "Policy: Users must use MFA. Root access is strictly prohibited for daily operations."
    
    # 2. Fetch "System Configuration" from connected integrations
    aws_integ = db.query(integration.Integration).filter(integration.Integration.name == "AWS").first()
    system_config = aws_integ.config if (aws_integ and aws_integ.config) else '{"mfa": "disabled", "root_login": "allowed", "last_backup": "2 days ago"}'
    
    # 3. OpenAI Analysis
    prompt = f"""
    Act as a Certixo AI Compliance Auditor. 
    Compare the following Policy Intent against the actual System Configuration.
    Identify any 'Vibe Mismatches' (critical gaps).
    
    Policy:
    {policy_content}
    
    System Config:
    {system_config}
    
    Return ONLY a JSON object with:
    {{
        "policy_intent": "summarize policy in 15 words",
        "mismatch": "identify the most critical gap",
        "vibe_score": 0-100 score,
        "recommendation": "specific fix"
    }}
    """
    
    try:
        raw_result = analyze_document("", query=prompt)
        # Handle potential markdown formatting from AI
        if "```json" in raw_result:
            raw_result = raw_result.split("```json")[1].split("```")[0].strip()
        import json
        return json.loads(raw_result)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/ai-auditor/anomaly-scan", dependencies=[Depends(verify_internal_secret)])
def anomaly_scan(db: Session = Depends(get_db)):
    # 1. Fetch latest audit logs
    logs = db.query(audit_log.AuditLog).order_by(audit_log.AuditLog.created_at.desc()).limit(20).all()
    log_data = [{"file": l.filename, "category": l.category, "result": l.analysis_result} for l in logs]
    
    if not log_data:
        return {"logs_scanned": 0, "anomalies": [], "message": "No logs found to scan."}

    # 2. OpenAI Log Analysis
    prompt = f"""
    Analyze these audit logs for security anomalies, unauthorized access, or unusual patterns.
    Logs: {json.dumps(log_data)}
    
    Return ONLY a JSON object with:
    {{
        "logs_scanned": {len(log_data)},
        "anomalies": [
            {{"id": 1, "source": "Service Name", "desc": "What happened", "severity": "Critical/Warning/Info"}}
        ]
    }}
    """
    
    try:
        raw_result = analyze_document("", query=prompt)
        if "```json" in raw_result:
            raw_result = raw_result.split("```json")[1].split("```")[0].strip()
        import json
        return json.loads(raw_result)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/ai-auditor/dry-run", dependencies=[Depends(verify_internal_secret)])
def dry_run(framework_name: str = Body(..., embed=True), db: Session = Depends(get_db)):
    # 1. Fetch framework and controls
    fr = db.query(framework.Framework).filter(framework.Framework.name == framework_name).first()
    if not fr:
        raise HTTPException(status_code=404, detail="Framework not found")
        
    controls = db.query(framework.Control).filter(framework.Control.framework_id == fr.id).all()
    
    # 2. Gather evidence linked to these controls
    readiness_data = []
    for c in controls:
        evidence_count = db.query(audit_log.AuditLog).filter(audit_log.AuditLog.control_id == c.id).count()
        readiness_data.append({
            "control": c.name,
            "desc": c.description,
            "evidence_count": evidence_count
        })
        
    # 3. AI "Mock Auditor" Grill
    prompt = f"""
    Act as a strictly professional SOC 2/ISO auditor for Certixo.
    Evaluate organization readiness for {framework_name}.
    Data: {json.dumps(readiness_data)}
    
    Return ONLY a JSON object with:
    {{
        "mock_auditor_score": 0-100,
        "grilling_findings": ["item 1", "item 2"],
        "readiness_verdict": "short verdict"
    }}
    """
    
    try:
        raw_result = analyze_document("", query=prompt)
        if "```json" in raw_result:
            raw_result = raw_result.split("```json")[1].split("```")[0].strip()
        import json
        return json.loads(raw_result)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# --- Framework Endpoints ---

class ControlSchema(BaseModel):
    id: int
    code: str
    name: str
    description: str
    automation_status: str
    integration_source: str | None = None
    last_evidence_value: str | None = None
    status: str
    remediation_ticket: str | None = None

class FrameworkSchema(BaseModel):
    id: int
    name: str
    description: str
    controls: list[ControlSchema] = []

@app.get("/frameworks", response_model=list[FrameworkSchema])
def get_frameworks(db: Session = Depends(get_db)):
    return db.query(framework.Framework).all()

@app.get("/frameworks/{framework_id}/controls")
def get_controls(framework_id: int, db: Session = Depends(get_db)):
    return db.query(framework.Control).filter(framework.Control.framework_id == framework_id).all()

# --- AI Audit Advisory Endpoints ---

@app.post("/audit/recommend-framework", dependencies=[Depends(verify_internal_secret)])
def recommend_framework(company_context: str = Body(..., embed=True)):
    prompt = f"""
    Act as a Senior GRC Consultant at Certixo.
    Company Context: {company_context}
    
    Task: Recommend the most relevant compliance frameworks (e.g., SOC 2, ISO 27001, GDPR, HIPAA).
    
    Return ONLY a JSON list of objects:
    [
      {{"name": "Framework Name", "reason": "Why it's needed", "priority": "High/Medium/Low"}}
    ]
    """
    raw = analyze_document("", query=prompt)
    if "```json" in raw:
        raw = raw.split("```json")[1].split("```")[0].strip()
    import json
    return json.loads(raw)

@app.post("/audit/generate-steps", dependencies=[Depends(verify_internal_secret)])
def generate_audit_steps(framework_name: str = Body(..., embed=True), context: str = Body(..., embed=True)):
    prompt = f"""
    Act as a Lead Certixo Auditor.
    Framework: {framework_name}
    Specific Context: {context}
    
    Task: Generate a surgical 5-step roadmap for this specific audit mission.
    
    Return ONLY a JSON list of strings (the steps).
    """
    raw = analyze_document("", query=prompt)
    if "```json" in raw:
        raw = raw.split("```json")[1].split("```")[0].strip()
    import json
    return json.loads(raw)

# --- Audit Lifecycle Endpoints ---

@app.get("/audit/plans", response_model=list[AuditPlanSchema])
def get_audit_plans(db: Session = Depends(get_db), current_user: user.User = Depends(get_current_user)):
    if current_user.role == "certixo_admin":
        return db.query(audit.AuditPlan).all()
    return db.query(audit.AuditPlan).filter(audit.AuditPlan.organization_id == current_user.organization_id).all()

@app.post("/audit/plans", response_model=AuditPlanSchema)
def create_audit_plan(plan: AuditPlanCreate, db: Session = Depends(get_db), current_user: user.User = Depends(get_current_user)):
    # Limit creation to admins
    if current_user.role not in ["certixo_admin", "tenant_admin"]:
        raise HTTPException(status_code=403, detail="Not authorized to create audit plans")
        
    db_plan = audit.AuditPlan(
        title=plan.title,
        framework_id=plan.framework_id,
        audit_period_start=plan.audit_period_start,
        audit_period_end=plan.audit_period_end,
        scope=plan.scope,
        organization_id=current_user.organization_id
    )
    db.add(db_plan)
    db.commit()
    db.refresh(db_plan)
    return db_plan

@app.post("/audit/plans/{plan_id}/start", response_model=AuditRunSchema, dependencies=[Depends(verify_internal_secret)])
def start_audit_run(plan_id: int, db: Session = Depends(get_db)):
    plan = db.query(audit.AuditPlan).filter(audit.AuditPlan.id == plan_id).first()
    if not plan:
        raise HTTPException(status_code=404, detail="Audit Plan not found")
        
    run = audit.AuditRun(
        plan_id=plan_id,
        status="Active",
        current_step="Scoping"
    )
    db.add(run)
    db.commit()
    db.refresh(run)

    # Trigger Scoping Analysis
    try:
        scoping_analysis(run.id, db)
    except Exception as e:
        print(f"Scoping failed: {e}")

    return run

def scoping_analysis(run_id: int, db: Session):
    run = db.query(audit.AuditRun).filter(audit.AuditRun.id == run_id).first()
    plan = run.plan
    
    # Prerequisite Check
    policies_count = db.query(policy.Policy).count()
    integrations_count = db.query(integration.Integration).filter(integration.Integration.status == "Connected").count()
    logs_count = db.query(audit_log.AuditLog).count()
    
    prompt = f"""
    Act as a Lead Certixo Compliance Assessor.
    Audit Plan: {plan.title}
    Framework: {plan.framework.name}
    Current Environment State:
    - Active Policies: {policies_count}
    - Connected Integrations: {integrations_count}
    - Collected Evidence (Logs): {logs_count}
    
    Task: Evaluate if the environment meets the PREREQUISITES for a full audit.
    Return a summary of "Scoping Findings" and a "Readiness Verdict".
    
    Format: JSON
    {{
       "summary": "Brief assessment of scope coverage",
       "readiness_verdict": "Ready / Not Ready / Partially Ready",
       "missing_prerequisites": ["List of what is missing"]
    }}
    """
    
    raw = analyze_document("", query=prompt)
    import json
    if "```json" in raw:
        raw = raw.split("```json")[1].split("```")[0].strip()
    
    data = json.loads(raw)
    
    run.findings_summary = data['summary']
    run.current_step = "Sampling" if data['readiness_verdict'] == "Ready" else "Review"
    db.commit()

@app.get("/audit/runs/{run_id}", response_model=AuditRunSchema)
def get_audit_run(run_id: int, db: Session = Depends(get_db)):
    run = db.query(audit.AuditRun).filter(audit.AuditRun.id == run_id).first()
    if not run:
        raise HTTPException(status_code=404, detail="Audit Run not found")
    return run

# --- Enterprise Onboarding Flow Endpoints ---

import uuid

@app.post("/admin/invite-tenant")
def invite_tenant(req: OrgInviteRequest, db: Session = Depends(get_db), current_user: user.User = Depends(check_role(["certixo_admin"]))):
    # 1. Create invitation record
    token = str(uuid.uuid4())
    inv = organization.OrgInvitation(
        email=req.email,
        token=token,
        org_name=req.org_name,
        expires_at=datetime.utcnow() # In real app, add 7 days
    )
    db.add(inv)
    db.commit()
    
    # 2. In a real app, trigger email here
    return {"message": "Invitation sent successfully", "invite_link": f"/onboarding?token={token}"}

@app.get("/onboarding/validate/{token}")
def validate_token(token: str, db: Session = Depends(get_db)):
    inv = db.query(organization.OrgInvitation).filter(organization.OrgInvitation.token == token, organization.OrgInvitation.is_used == False).first()
    if not inv:
        raise HTTPException(status_code=404, detail="Invalid or expired invitation token")
    return {"org_name": inv.org_name, "email": inv.email}

@app.post("/onboarding/submit")
def submit_onboarding(req: KYCSubmitRequest, db: Session = Depends(get_db)):
    # 1. Validate token
    inv = db.query(organization.OrgInvitation).filter(organization.OrgInvitation.token == req.token, organization.OrgInvitation.is_used == False).first()
    if not inv:
        raise HTTPException(status_code=400, detail="Invalid token")
        
    # 2. Create Organization in 'onboarding_submitted' status
    org = organization.Organization(
        name=inv.org_name,
        domain=inv.email.split('@')[-1],
        tax_id=req.tax_id,
        legal_address=req.legal_address,
        industry=req.industry,
        employee_count=req.employee_count,
        status="onboarding_submitted",
        invitation_token=req.token,
        onboarded_at=datetime.utcnow()
    )
    db.add(org)
    db.flush() # Get org ID
    
    # 3. Create Tenant Admin User
    new_user = user.User(
        email=inv.email,
        full_name=req.admin_name,
        company=inv.org_name,
        role="tenant_admin",
        organization_id=org.id,
        is_active=False # Inactive until org is approved
    )
    db.add(new_user)
    
    # 4. Mark invitation as used
    inv.is_used = True
    
    db.commit()
    return {"message": "Onboarding details submitted successfully. Certixo team will review and approve within 24 hours."}

@app.get("/admin/pending-approvals")
def get_pending_approvals(db: Session = Depends(get_db), current_user: user.User = Depends(check_role(["certixo_admin"]))):
    return db.query(organization.Organization).filter(organization.Organization.status == "onboarding_submitted").all()

@app.post("/admin/approve-tenant/{org_id}")
def approve_tenant(org_id: int, db: Session = Depends(get_db), current_user: user.User = Depends(check_role(["certixo_admin"]))):
    org = db.query(organization.Organization).filter(organization.Organization.id == org_id).first()
    if not org:
        raise HTTPException(status_code=404, detail="Organization not found")
        
    org.status = "active"
    org.approved_at = datetime.utcnow()
    
    # Activate the admin user
    adm = db.query(user.User).filter(user.User.organization_id == org_id, user.User.role == "tenant_admin").first()
    if adm:
        adm.is_active = True
        
    db.commit()
    return {"message": f"Organization {org.name} has been approved and activated."}

@app.post("/audit/plan/generate-roadmap", dependencies=[Depends(verify_internal_secret)])
def generate_audit_roadmap(req: dict = Body(...)):
    framework = req.get("framework", "SOC 2 Type II")
    industry = req.get("industry", "SaaS")
    cloud_infra = req.get("cloud_infra", "AWS")
    
    prompt = f"""
    You are a Senior GRC Consultant at Certixo. 
    Generate a high-fidelity audit roadmap for a {industry} company on {cloud_infra} targeting {framework} compliance.
    
    Return ONLY a JSON object with:
    {{
        "milestones": [
            {{
                "step": "Phase Name",
                "objective": "What to achieve",
                "days_estimate": 14,
                "evidence_required": ["Item 1", "Item 2"],
                "suggested_owner": "Role"
            }}
        ],
        "risk_advisory": "15-word expert warning about this framework+infra combination."
    }}
    
    Suggest exactly 5 logical phases (e.g., Gap Analysis, Evidence Collection, Internal Audit, etc.).
    """
    
    try:
        from services.ai_service import analyze_document
        raw_result = analyze_document("", query=prompt)
        if "```json" in raw_result:
            raw_result = raw_result.split("```json")[1].split("```")[0].strip()
        import json
        return json.loads(raw_result)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/audit/plan/stress-test", dependencies=[Depends(verify_internal_secret)])
def stress_test_audit_plan(req: dict = Body(...)):
    plan_milestones = req.get("milestones", [])
    framework = req.get("framework", "SOC 2 Type II")
    
    prompt = f"""
    You are a strictly professional and skeptical SOC 2 Auditor.
    Evaluate the following Audit Roadmap for the framework: {framework}.
    
    Plan Details:
    {json.dumps(plan_milestones)}
    
    Task: Identify exactly 3 "High Scrutiny" points or risks in this plan (e.g., unrealistic timelines, missing evidence for specific controls, or ownership bottlenecks).
    
    Return ONLY a JSON list of objects:
    [
        {{
            "risk": "Brief risk title",
            "observation": "15-word auditor observation",
            "severity": "Critical / High / Medium"
        }}
    ]
    """
    
    try:
        from services.ai_service import analyze_document
        raw_result = analyze_document("", query=prompt)
        if "```json" in raw_result:
            raw_result = raw_result.split("```json")[1].split("```")[0].strip()
        import json
        return json.loads(raw_result)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/ai-auditor/refine-step", dependencies=[Depends(verify_internal_secret)])
def refine_audit_step(data: dict = Body(...)):
    step = data.get("step")
    current_data = data.get("currentData")
    instruction = data.get("instruction", "")

    prompt = f"""
    Act as a Senior Compliance Architect for Certixo (Scrut-style GRC).
    Refine the audit plan for the '{step}' step.
    
    Current State: {json.dumps(current_data)}
    User Intent: {instruction}
    
    Return a JSON object with:
    1. "summary": A professional synthesis of the decision.
    2. "plan_patch": A JSON object containing the fields to update in the AuditPlan model (e.g. {{ "framework": "ISO27001" }} or {{ "scope": {{ "inScope": [...] }} }}).
    3. "questions": List of 2-3 institutional questions to guide the user.
    4. "warnings": List of potential compliance risks or gaps found.
    5. "next_step_recommended": The name of the next logical wizard step.
    
    Ensure the response is ONLY valid JSON.
    """
    
    try:
        raw_result = analyze_document("", query=prompt)
        if "```json" in raw_result:
            raw_result = raw_result.split("```json")[1].split("```")[0].strip()
        return json.loads(raw_result)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
