from app.core.cloudinary import upload_image
from sqlalchemy.orm import Session

from app.core.security import hash_password
from app.db.models import User
from app.repositories.user_repository import (
    create_user as create_user_record,
    update_user as update_user_record,
)
from app.schemas.user import UserCreate


def create_user(
    db: Session,
    user_data: UserCreate,
    profile_image,
) -> User:
    # Hash password
    hashed_password = hash_password(user_data.password)

    # Upload image
    image_url = upload_image(profile_image.file)

    # Create database model
    new_user = User(
        username=user_data.username,
        bio=user_data.bio,
        password=hashed_password,
        profile_image=image_url,
    )

    # Save through repository
    return create_user_record(db, new_user)


def update_user(
    db: Session,
    user: User,
    username: str,
    bio: str,
    password: str,
    profile_image,
) -> User:
    # Hash new password
    hashed_password = hash_password(password)

    # Upload new image
    image_url = upload_image(profile_image.file)


    # Update user fields
    user.username = username
    user.bio = bio
    user.password = hashed_password
    user.profile_image = image_url

    # Save through repository
    return update_user_record(db, user)