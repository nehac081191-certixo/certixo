from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Enum, Float
from sqlalchemy.orm import relationship
from datetime import datetime
from database import Base

class Employee(Base):
    __tablename__ = "employees"
    
    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String)
    email = Column(String, unique=True, index=True)
    department = Column(String) # Engineering, Sales, Ops
    title = Column(String)
    location = Column(String)
    
    # Skills (Comma separated for MVP)
    skills = Column(String) 
    
    trainings = relationship("TrainingRecord", back_populates="employee")

class Training(Base):
    __tablename__ = "trainings"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    provider = Column(String) # internal, udemy, coursera
    category = Column(String) # Compliance, Technical, Soft Skills
    duration_mins = Column(Integer)

class TrainingRecord(Base):
    __tablename__ = "training_records"
    
    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("employees.id"))
    training_id = Column(Integer, ForeignKey("trainings.id"))
    
    status = Column(String) # Assigned, In Progress, Completed
    completion_date = Column(DateTime, nullable=True)
    
    employee = relationship("Employee", back_populates="trainings")
    training = relationship("Training")
