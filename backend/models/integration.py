from sqlalchemy import Column, Integer, String, DateTime, Boolean
from datetime import datetime
from database import Base

class Integration(Base):
    __tablename__ = "integrations"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    category = Column(String) # Accounting, ERP, CRM, SSO
    description = Column(String)
    status = Column(String, default="Disconnected")
    last_sync = Column(DateTime, nullable=True)
    config = Column(String, nullable=True)
