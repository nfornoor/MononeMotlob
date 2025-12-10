from sqlalchemy import Column, String, Boolean, DateTime
from sqlalchemy.dialects.sqlite import JSON
from datetime import datetime
from app.database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(String, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    phone = Column(String, nullable=True)
    password_hash = Column(String, nullable=False)
    
    # Verification flags
    education = Column(Boolean, default=False)
    location = Column(Boolean, default=False)
    terms = Column(Boolean, default=False)
    
    # Account status
    is_active = Column(Boolean, default=True)
    role = Column(String, default="member")
    
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)