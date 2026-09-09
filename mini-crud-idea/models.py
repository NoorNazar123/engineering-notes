# Import SQLAlchemy tools for defining database columns
from sqlalchemy import Column, Integer, String

# Import Base that we created in database.py
# Base is the foundation for our SQLAlchemy models
from database import Base


# User model
# This Python class represents a database table
class User(Base):

    # Name of the PostgreSQL table
    __tablename__ = "users"

    # id column
    # Integer = number
    # primary_key=True = unique ID for each user
    # index=True = makes searching by ID faster
    id = Column(Integer, primary_key=True, index=True)

    # username column
    # String = text
    # nullable=False = username is required
    username = Column(String, nullable=False)

    # password column
    # String = text
    # nullable=False = password is required
    password = Column(String, nullable=False)

    # profile_image column
    # Stores the Cloudinary image URL
    # nullable=True = image is optional
    profile_image = Column(String, nullable=True)