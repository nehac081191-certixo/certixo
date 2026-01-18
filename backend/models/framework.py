from sqlalchemy import Column, Integer, String, Text, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

class Framework(Base):
    __tablename__ = "frameworks"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True) # e.g. SOC2, ISO27001
    description = Column(Text)
    
    controls = relationship("Control", back_populates="framework")

class Control(Base):
    __tablename__ = "controls"

    id = Column(Integer, primary_key=True, index=True)
    framework_id = Column(Integer, ForeignKey("frameworks.id"))
    code = Column(String, index=True) # e.g. CC1.1, A.5.1
    name = Column(String)
    description = Column(Text)
    
    # Automation link
    automation_status = Column(String, default="Manual") # Automated, Manual, Hybrid
    integration_source = Column(String, nullable=True) # e.g. AWS, Okta, Jira
    last_evidence_value = Column(String, nullable=True) # e.g. "MFA Enabled"
    status = Column(String, default="Needs Review") # Pass, Fail, Needs Review
    remediation_ticket = Column(String, nullable=True) # Jira Key
    
    framework = relationship("Framework", back_populates="controls")
    audit_logs = relationship("AuditLog", back_populates="control")
