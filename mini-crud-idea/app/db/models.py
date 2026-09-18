from sqlalchemy import Column, Integer, String

from app.db.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)

    username = Column(String, nullable=False, unique=True)
    
    bio = Column(String, nullable=True)

    password = Column(String, nullable=False)

    profile_image = Column(String, nullable=True)

    role = Column(String, nullable=False, default="user")