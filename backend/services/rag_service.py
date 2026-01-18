from sqlalchemy.orm import Session
from models import policy, audit_log, framework
from services.ai_service import analyze_document

def retrieve_context(db: Session, query: str):
    """
    Naive RAG: Fetches relevant text from Policies and recent Audit Logs.
    For MVP, we stuff the context window since dataset is small.
    """
    # Fetch Policies
    policies = db.query(policy.Policy).all()
    policy_text = "\n\n".join([f"Policy '{p.title}':\n{p.content}" for p in policies])
    
    # Fetch recent Audit Findings
    logs = db.query(audit_log.AuditLog).order_by(audit_log.AuditLog.created_at.desc()).limit(5).all()
    audit_text = "\n\n".join([f"Audit File '{l.filename}' ({l.status}):\n{l.analysis_result}" for l in logs])

    # Fetch Framework Descriptions
    frameworks = db.query(framework.Framework).all()
    fw_text = "\n\n".join([f"Framework '{f.name}': {f.description}" for f in frameworks])

    return f"""
    Active Frameworks:
    {fw_text}

    Organization Policies:
    {policy_text}

    Recent Audit Findings:
    {audit_text}
    """

def ask_copilot(query: str, db: Session):
    context = retrieve_context(db, query)
    
    system_prompt = f"""
    You are the AI Compliance Copilot for Certixo.
    Your goal is to help the user manage their compliance posture.
    
    Use the following Context to answer the user's question.
    If the answer is not in the context, use your general knowledge of ISO 27001, SOC 2, and GDPR but mention that it is general advice.
    
    CONTEXT DATA:
    {context}
    
    USER QUESTION:
    {query}
    
    Answer concisely and professionally.
    """
    
    return analyze_document("context_provided", query=system_prompt)

def generate_policy_draft(topic: str, complexity: str, tone: str, db: Session):
    # 1. Get relevant frameworks to ensure compliance
    frameworks = db.query(framework.Framework).all()
    fw_names = ", ".join([f.name for f in frameworks])
    
    # 2. Construct a more sophisticated, parameter-aware prompt
    prompt = f"""
    You are an elite Chief Information Security Officer (CISO) and Legal Counsel drafting an institutional mandate.
    
    TOPIC: "{topic}"
    INTENDED COMPLEXITY: {complexity} (Startup=Agile/Minimalist, Enterprise=Comprehensive/Bureaucratic)
    REQUIRED TONE: {tone} (Strict, Friendly, or Legalistic)
    COMPLIANCE TARGETS: [{fw_names}]
    
    Your task:
    Synthesize an auditor-ready policy document that satisfies {fw_names} requirements.
    The level of detail must match the {complexity} profile. 
    Use a {tone} linguistic style throughout.
    
    Structure the document with these Markdown sections:
    1. **Executive Summary**: High-level core objective.
    2. **Scope of Governance**: Applicability across systems/personnel.
    3. **Roles & Accountabilities**: Clear ownership.
    4. **Operational Procedures**: Specific, actionable rules.
    5. **Sanctions & Policing**: Consequences of drift.
    6. **Institutional Mapping**: Explicitly mention how this satisfies {fw_names} controls.
    
    CRITICAL: Output ONLY the markdown content. No conversational preamble.
    """
    
    return analyze_document("context_provided", query=prompt)

def refine_policy_content(current_content: str, instruction: str):
    prompt = f"""
    You are a professional CISO and Policy Auditor.
    
    TASK: Refine, edit, or expand the following policy document based on the user instruction.
    
    USER INSTRUCTION: "{instruction}"
    
    CURRENT POLICY CONTENT:
    {current_content}
    
    Refine the content while maintaining a professional, institutional, and compliance-first tone.
    The response must be in valid Markdown.
    
    CRITICAL: Output ONLY the refined markdown content. No conversational preamble.
    """
    
    return analyze_document("context_provided", query=prompt)
