from fastapi import APIRouter, Depends, File, Form, UploadFile
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.schemas.user import UserCreate, UserResponse
from app.services.user_service import create_user
from app.schemas.auth import LoginRequest, TokenResponse
from app.services.user_service import create_user, login_user

router = APIRouter(prefix="/auth", tags=["Authentication"])


@router.post("/signup", response_model=UserResponse)
def signup(
    username: str = Form(),
    password: str = Form(),
    bio: str = Form(),
    profile_image: UploadFile = File(),
    db: Session = Depends(get_db),
):
    user_data = UserCreate(
        username=username,
        password=password,
        bio=bio,
    )

    return create_user(
        db=db,
        user_data=user_data,
        profile_image=profile_image,
    )

@router.post("/login", response_model=TokenResponse)
def login(
    credentials: LoginRequest,
    db: Session = Depends(get_db),
):
    access_token = login_user(
        db=db,
        username=credentials.username,
        password=credentials.password,
    )

    return {
        "access_token": access_token,
        "token_type": "bearer",
    }