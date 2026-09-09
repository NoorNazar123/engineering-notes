# Pydantic BaseModel is used to create schemas
# Schemas control the data coming INTO and going OUT of the API
from pydantic import BaseModel


# Schema for creating a new user
# It defines what data the client must send
class UserCreate(BaseModel):

    # username must be a string
    username: str

    # password must be a string
    password: str


# Schema for sending user data back to the client
# It defines what the API response should contain
class UserResponse(BaseModel):

    # User ID returned from the database
    id: int

    # Username returned from the database
    username: str

    # Password returned from the database
    password: str

    # Cloudinary image URL
    # str = URL exists
    # None = URL can be empty
    profile_image: str | None


    # Pydantic configuration
    class Config:

        # Allows Pydantic to read data directly from
        # SQLAlchemy model objects
        from_attributes = True