# os = built-in Python module
# Used to access environment variables from the operating system
import os

# load_dotenv = loads variables from the .env file
# Example: DATABASE_URL=postgresql://...
from dotenv import load_dotenv

# create_engine = creates SQLAlchemy's database engine
# Engine manages communication/connection with PostgreSQL
from sqlalchemy import create_engine

# sessionmaker = creates a factory for database sessions
# declarative_base = creates the Base class for SQLAlchemy models
from sqlalchemy.orm import sessionmaker, declarative_base


# Load variables from .env into the environment
load_dotenv()


# Get DATABASE_URL from .env
# os.getenv() reads an environment variable
DATABASE_URL = os.getenv("DATABASE_URL")


# Create SQLAlchemy engine
# Engine is responsible for database connectivity
engine = create_engine(DATABASE_URL)


# Create a session factory
# SessionLocal() will create an actual database session
SessionLocal = sessionmaker(bind=engine)


# Create the Base class for SQLAlchemy models
# Models will inherit from this Base
# Example: class User(Base):
Base = declarative_base()


# Dependency function used by FastAPI routes
# It creates and provides a database session for each request
def get_db():

    # Create a new database session
    db = SessionLocal()

    try:
        # Give the session to the FastAPI route
        # yield keeps the session available during the request
        yield db

    finally:
        # Close the session after the request is finished
        # Prevents unused database sessions from staying open
        db.close()