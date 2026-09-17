from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.core.security import decode_access_token
from app.db.models import User
from app.repositories.user_repository import get_user_by_id


def get_current_user(
    db: Session,
    token: str,
) -> User:
    try:
        payload = decode_access_token(token)
    except Exception:
        raise HTTPException(
            status_code=401,
            detail="Invalid or expired token",
        )

    user_id = payload.get("sub")

    if not user_id:
        raise HTTPException(
            status_code=401,
            detail="Invalid token",
        )

    user = get_user_by_id(db, int(user_id))

    if not user:
        raise HTTPException(
            status_code=401,
            detail="User not found",
        )

    return user