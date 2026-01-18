from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from database import Base

class DataFlow(Base):
    __tablename__ = "data_flows"

    id = Column(Integer, primary_key=True, index=True)
    source = Column(String)
    destination = Column(String)
    data_type = Column(String) # PII, Financial, Metadata
    transport = Column(String) # API, Batch, Streaming
    status = Column(String) # Active, Broken, Risky
    last_detected = Column(DateTime, default=datetime.utcnow)
    created_at = Column(DateTime, default=datetime.utcnow)
