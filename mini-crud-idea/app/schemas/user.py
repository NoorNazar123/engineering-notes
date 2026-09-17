from pydantic import BaseModel


class UserCreate(BaseModel):
    username: str
    password: str
    bio: str | None = None
    profile_image: str | None = None


class UserResponse(BaseModel):
    id: int
    username: str
    bio: str | None = None
    role: str | None = None
    profile_image: str | None

    class Config:
        from_attributes = True