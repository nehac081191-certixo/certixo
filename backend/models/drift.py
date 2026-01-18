from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from datetime import datetime
from database import Base

class DriftCheck(Base):
    __tablename__ = "drift_checks"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String) # e.g. "AWS S3 Encryption"
    description = Column(String)
    integration_type = Column(String) # AWS, GitHub, etc.
    
    status = Column(String) # "Passing", "Failing"
    last_run = Column(DateTime)
    
    alerts = relationship("DriftAlert", back_populates="check")

class DriftAlert(Base):
    __tablename__ = "drift_alerts"
    
    id = Column(Integer, primary_key=True, index=True)
    check_id = Column(Integer, ForeignKey("drift_checks.id"))
    
    message = Column(String) # e.g. "Bucket 'photos' is effectively public"
    severity = Column(String) # Low, Medium, High
    created_at = Column(DateTime, default=datetime.utcnow)
    resolved = Column(Boolean, default=False)
    
    check = relationship("DriftCheck", back_populates="alerts")
