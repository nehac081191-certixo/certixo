from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
from database import Base

class AuditLog(Base):
    __tablename__ = "audit_logs"

    id = Column(Integer, primary_key=True, index=True)
    filename = Column(String, index=True)
    category = Column(String, default="General")
    framework = Column(String, default="General")
    status = Column(String, default="Pending")
    analysis_result = Column(Text)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    control_id = Column(Integer, ForeignKey("controls.id"), nullable=True)
    control = relationship("Control", back_populates="audit_logs")
