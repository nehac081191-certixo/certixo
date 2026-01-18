from sqlalchemy import Column, Integer, String, DateTime, JSON
from datetime import datetime
from database import Base

class DataDiscoveryJob(Base):
    __tablename__ = "data_discovery_jobs"

    id = Column(Integer, primary_key=True, index=True)
    source_name = Column(String) # e.g. AWS S3, GCS, DB
    status = Column(Integer) # 0: Pending, 1: Scanning, 2: Completed, 3: Failed
    scan_type = Column(String) # PII, Sensitive, Custom
    sensitive_count = Column(Integer, default=0)
    findings = Column(JSON) # Detailed findings
    last_run = Column(DateTime, default=datetime.utcnow)
    created_at = Column(DateTime, default=datetime.utcnow)
