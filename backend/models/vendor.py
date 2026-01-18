from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from datetime import datetime
from database import Base

class Vendor(Base):
    __tablename__ = "vendors"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    service_type = Column(String) # SaaS, PaaS, Contractor, etc.
    description = Column(String)
    
    risk_level = Column(String) # Low, Medium, High, Critical
    status = Column(String) # Active, Deprecated, Onboarding
    
    has_soc2 = Column(Boolean, default=False)
    has_iso27001 = Column(Boolean, default=False)
    has_gdpr = Column(Boolean, default=False)
    
    # GST / Tax Compliance
    gstin = Column(String, nullable=True)
    gst_filing_status = Column(String, default="Unknown") # Filed, Pending, Delayed
    last_gst_verification = Column(DateTime)
    
    # Strategic Metrics
    assessment_score = Column(Integer, default=0) # 0-100
    criticality = Column(String, default="Low") # Tier 1, Tier 2, etc.
    ai_analysis = Column(String, nullable=True) # Automated AI Auditor Summary
    
    last_review_date = Column(DateTime)
    next_review_date = Column(DateTime)
    
    owner = Column(String) # Internal owner email
    
    created_at = Column(DateTime, default=datetime.utcnow)
