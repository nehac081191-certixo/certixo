from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
from database import Base

class Policy(Base):
    __tablename__ = "policies"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    content = Column(Text) # Current/Latest Markdown content
    description = Column(String, nullable=True)
    status = Column(String, default="Draft") # Draft, Published, Archived
    version = Column(String, default="1.0")
    category = Column(String, default="General")
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relationships
    organization_id = Column(Integer, ForeignKey("organizations.id"), nullable=True) # Set to True for system policies if needed
    organization = relationship("Organization")

    history = relationship("PolicyVersion", back_populates="policy", cascade="all, delete-orphan")

class PolicyVersion(Base):
    __tablename__ = "policy_versions"

    id = Column(Integer, primary_key=True, index=True)
    policy_id = Column(Integer, ForeignKey("policies.id"))
    version_number = Column(Integer)
    content = Column(Text)
    change_summary = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)

    policy = relationship("Policy", back_populates="history")
