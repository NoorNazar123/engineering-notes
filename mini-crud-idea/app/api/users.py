from fastapi import APIRouter, Depends, File, Form, HTTPException, UploadFile
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.db.models import User
from app.repositories.user_repository import (
    delete_user as delete_user_record,
    get_all_users,
    get_user_by_id,
)
from app.schemas.user import UserCreate, UserResponse
from app.services.user_service import (
    create_user as create_user_service,
    update_user as update_user_service,
)

router = APIRouter(
    prefix="/users",
    tags=["Users"],
)


# =========================
# CREATE
# =========================


@router.post("", response_model=UserResponse)
def create_user(
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

    return create_user_service(
        db=db,
        user_data=user_data,
        profile_image=profile_image,
    )


# =========================
# READ ALL
# =========================


@router.get("", response_model=list[UserResponse])
def get_users(db: Session = Depends(get_db)):
    return get_all_users(db)


# =========================
# READ ONE
# =========================


@router.get("/{user_id}", response_model=UserResponse)
def get_user(
    user_id: int,
    db: Session = Depends(get_db),
):
    user = get_user_by_id(db, user_id)

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found",
        )

    return user


# =========================
# UPDATE
# =========================


@router.put("/{user_id}", response_model=UserResponse)
def update_user(
    user_id: int,
    username: str = Form(),
    bio: str = Form(),
    password: str = Form(),
    profile_image: UploadFile = File(),
    db: Session = Depends(get_db),
):
    user = get_user_by_id(db, user_id)

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found",
        )

    return update_user_service(
        db=db,
        user=user,
        username=username,
        bio=bio,
        password=password,
        profile_image=profile_image,
    )


# =========================
# DELETE
# =========================


@router.delete("/{user_id}")
def delete_user(
    user_id: int,
    db: Session = Depends(get_db),
):
    user = get_user_by_id(db, user_id)

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found",
        )

    delete_user_record(db, user)

    return {"message": "User deleted"}
