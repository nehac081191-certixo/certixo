from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Enum
from sqlalchemy.orm import relationship
from datetime import datetime
from database import Base

class InventoryItem(Base):
    __tablename__ = "inventory"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    
    # Categories: Hardware, Software, Data, Document
    category = Column(String) 
    
    # Sub-type: Laptop, Server, SaaS, Database, Policy, Contract
    type = Column(String)
    
    owner = Column(String) # Email or Name
    department = Column(String) # Engineering, HR, Sales
    
    # Classification: Public, Internal, Confidential, Restricted
    classification = Column(String, default="Internal")
    
    status = Column(String, default="Active") # Active, Maintenance, Retired
    
    serial_number = Column(String, nullable=True) # For hardware
    location = Column(String, nullable=True) # Physical location or Cloud Region
    
    # New fields for risk and integrations
    risk_score = Column(Integer, default=0) # 0-100
    integration_source = Column(String, nullable=True) # Jamf, Kandji, Okta, AWS, Azure, Manual
    
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
