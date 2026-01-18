from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Float
from sqlalchemy.orm import relationship
from datetime import datetime
from database import Base

class RiskItem(Base):
    __tablename__ = "risks"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    description = Column(String)
    
    # Categories: Quality, Safety, Environmental, Operational, Financial
    category = Column(String)
    department = Column(String)
    
    # Scoring
    probability = Column(Integer) # 1-5
    impact = Column(Integer) # 1-5
    risk_score = Column(Integer) # prob * impact
    
    residual_risk = Column(Integer) # Post-mitigation score
    risk_velocity = Column(String) # High, Med, Low
    exposure_value = Column(Float, default=0.0) # Financial Exposure
    
    mitigation_plan = Column(String)
    status = Column(String, default="Open") # Open, Mitigated, Closed, Exceptional
    treatment_type = Column(String) # Avoid, Transfer, Mitigate, Accept
    
    # Relationships
    organization_id = Column(Integer, ForeignKey("organizations.id"), nullable=True)
    organization = relationship("Organization")
    
    created_at = Column(DateTime, default=datetime.utcnow)
    
class RiskAlert(Base):
    __tablename__ = "risk_alerts"
    
    id = Column(Integer, primary_key=True, index=True)
    risk_id = Column(Integer, ForeignKey("risks.id"), nullable=True)
    
    message = Column(String)
    predicted_impact = Column(String) # "High Probability of Failure"
    source = Column(String) # "IoT Sensor", "Production Log", "Market Data"
    created_at = Column(DateTime, default=datetime.utcnow)
