from sqlalchemy import Column, Integer, String, Boolean, DateTime, JSON, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
from database import Base

class Organization(Base):
    __tablename__ = "organizations"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    domain = Column(String, unique=True, index=True)
    status = Column(String, default="invited") # invited, onboarding_submitted, active, suspended
    
    # KYC & Onboarding Details
    tax_id = Column(String, nullable=True)
    legal_address = Column(String, nullable=True)
    industry = Column(String, nullable=True)
    employee_count = Column(Integer, nullable=True)
    
    # Invitation Flow
    invitation_token = Column(String, unique=True, nullable=True)
    invited_at = Column(DateTime, default=datetime.utcnow)
    onboarded_at = Column(DateTime, nullable=True)
    approved_at = Column(DateTime, nullable=True)
    
    # Relationships
    users = relationship("User", back_populates="organization")

class OrgInvitation(Base):
    __tablename__ = "org_invitations"
    
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, index=True)
    token = Column(String, unique=True)
    org_name = Column(String)
    role = Column(String, default="tenant_admin")
    is_used = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    expires_at = Column(DateTime)
