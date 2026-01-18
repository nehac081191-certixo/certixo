from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from datetime import datetime
from database import Base

class AccessReview(Base):
    __tablename__ = "access_reviews"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True) # e.g. "Q1 2024 User Access Review"
    status = Column(String) # "In Progress", "Completed"
    created_at = Column(DateTime, default=datetime.utcnow)
    due_date = Column(DateTime)
    
    items = relationship("AccessReviewItem", back_populates="review")

class AccessReviewItem(Base):
    __tablename__ = "access_review_items"
    
    id = Column(Integer, primary_key=True, index=True)
    review_id = Column(Integer, ForeignKey("access_reviews.id"))
    
    user_email = Column(String)
    user_name = Column(String)
    system = Column(String) # e.g. "Google Workspace", "AWS", "GitHub"
    role = Column(String) # e.g. "Admin", "Read-Only"
    
    status = Column(String, default="Pending") # "Keep", "Revoke", "Pending"
    reviewed_at = Column(DateTime, nullable=True)
    reviewer_notes = Column(String, nullable=True)
    
    review = relationship("AccessReview", back_populates="items")
