from fastapi import FastAPI, Depends, UploadFile, File, Form, HTTPException
from sqlalchemy.orm import Session
import bcrypt
import cloudinary
import cloudinary.uploader
import os
from dotenv import load_dotenv

from database import engine, get_db
from models import Base, User
from schemas import UserCreate, UserResponse


# Load .env
load_dotenv()


# Configure Cloudinary
cloudinary.config(
    cloud_name=os.getenv("CLOUDINARY_CLOUD_NAME"),
    api_key=os.getenv("CLOUDINARY_API_KEY"),
    api_secret=os.getenv("CLOUDINARY_API_SECRET")
)


app = FastAPI()

Base.metadata.create_all(bind=engine)


# =========================
# CREATE
# =========================

@app.post("/users", response_model=UserResponse)
def create_user(
    username: str = Form(),
    password: str = Form(),
    profile_image: UploadFile = File(),
    db: Session = Depends(get_db)
):

    hashed_password = bcrypt.hashpw(
        password.encode("utf-8"),
        bcrypt.gensalt()
    ).decode("utf-8")

    result = cloudinary.uploader.upload(profile_image.file)

    new_user = User(
        username=username,
        password=hashed_password,
        profile_image=result["secure_url"]
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user


# =========================
# READ ALL
# =========================

@app.get("/users", response_model=list[UserResponse])
def get_users(db: Session = Depends(get_db)):

    return db.query(User).all()


# =========================
# READ ONE
# =========================

@app.get("/users/{user_id}", response_model=UserResponse)
def get_user(
    user_id: int,
    db: Session = Depends(get_db)
):

    user = db.query(User).filter(User.id == user_id).first()

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    return user


# =========================
# UPDATE
# =========================

@app.put("/users/{user_id}", response_model=UserResponse)
def update_user(
    user_id: int,
    username: str = Form(),
    password: str = Form(),
    profile_image: UploadFile = File(),
    db: Session = Depends(get_db)
):

    db_user = db.query(User).filter(User.id == user_id).first()

    if not db_user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    # Hash password
    hashed_password = bcrypt.hashpw(
        password.encode("utf-8"),
        bcrypt.gensalt()
    ).decode("utf-8")

    # Upload new image
    result = cloudinary.uploader.upload(profile_image.file)

    # Update all fields
    db_user.username = username
    db_user.password = hashed_password
    db_user.profile_image = result["secure_url"]

    db.commit()
    db.refresh(db_user)

    return db_user

# =========================
# DELETE
# =========================

@app.delete("/users/{user_id}")
def delete_user(
    user_id: int,
    db: Session = Depends(get_db)
):

    user = db.query(User).filter(User.id == user_id).first()

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    db.delete(user)
    db.commit()

    return {
        "message": "User deleted"
    }