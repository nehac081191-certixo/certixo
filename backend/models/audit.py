from sqlalchemy import Column, Integer, String, Text, DateTime, JSON, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
from database import Base

class AuditPlan(Base):
    __tablename__ = "audit_plans"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    framework_id = Column(Integer, ForeignKey("frameworks.id"))
    audit_period_start = Column(DateTime)
    audit_period_end = Column(DateTime)
    scope = Column(JSON) # e.g. ["AWS", "GitHub", "HRIS"]
    status = Column(String, default="Planning") # Planning, Active, Review, Completed
    
    organization_id = Column(Integer, ForeignKey("organizations.id"), nullable=True)
    organization = relationship("Organization")
    
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    framework = relationship("Framework")
    runs = relationship("AuditRun", back_populates="plan")

class AuditRun(Base):
    __tablename__ = "audit_runs"

    id = Column(Integer, primary_key=True, index=True)
    plan_id = Column(Integer, ForeignKey("audit_plans.id"))
    status = Column(String, default="In Progress") # Step-based status
    current_step = Column(String) # Scoping, Sampling, Testing, Reporting
    findings_summary = Column(Text)
    score = Column(Integer)
    
    created_at = Column(DateTime, default=datetime.utcnow)
    
    plan = relationship("AuditPlan", back_populates="runs")
    findings = relationship("AuditFinding", back_populates="run")

class AuditFinding(Base):
    __tablename__ = "audit_findings"

    id = Column(Integer, primary_key=True, index=True)
    run_id = Column(Integer, ForeignKey("audit_runs.id"))
    control_id = Column(Integer, ForeignKey("controls.id"))
    severity = Column(String) # Low, Medium, High, Critical
    description = Column(Text)
    evidence_ref = Column(String) # Link to audit_log or external data
    remediation_status = Column(String, default="Open")
    
    run = relationship("AuditRun", back_populates="findings")
    control = relationship("Control")
