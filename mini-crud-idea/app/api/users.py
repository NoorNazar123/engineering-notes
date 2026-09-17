from fastapi import APIRouter, Depends, File, Form, HTTPException, UploadFile
from sqlalchemy.orm import Session

from app.api.dependencies import get_authenticated_user
from app.db.database import get_db
from app.repositories.user_repository import (
    delete_user as delete_user_record,
    get_all_users,
    get_user_by_id,
)
from app.schemas.user import UserResponse
from app.services.user_service import update_user as update_user_service

router = APIRouter(
    prefix="/users",
    tags=["Users"],
)


# =========================
# READ ALL
# =========================


@router.get("", response_model=list[UserResponse])
def get_users(
    db: Session = Depends(get_db),
    current_user=Depends(get_authenticated_user),
):
    return get_all_users(db)


# =========================
# READ ONE
# =========================


@router.get("/{user_id}", response_model=UserResponse)
def get_user(
    user_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(get_authenticated_user),
):
    user = get_user_by_id(db, user_id)

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found",
        )

    if user.id != current_user.id and current_user.role != "admin":
        raise HTTPException(
            status_code=403,
            detail="You can only view your own account",
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
    current_user=Depends(get_authenticated_user),
):
    user = get_user_by_id(db, user_id)

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found",
        )

    if user.id != current_user.id and current_user.role != "admin":
        raise HTTPException(
            status_code=403,
            detail="You can only delete your own account",
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
    current_user=Depends(get_authenticated_user),
):
    user = get_user_by_id(db, user_id)

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found",
        )

    if user.id != current_user.id and current_user.role != "admin":
        raise HTTPException(
            status_code=403,
            detail="You can only delete your own account",
        )

    delete_user_record(db, user)

    return {"message": "User deleted"}