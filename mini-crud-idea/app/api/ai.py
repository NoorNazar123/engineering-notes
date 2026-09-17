from fastapi import APIRouter, Depends
from pydantic import BaseModel

from app.api.dependencies import get_authenticated_user
from app.services.ai_service import generate_bio

router = APIRouter(
    prefix="/ai",
    tags=["AI"],
)


class BioRequest(BaseModel):
    description: str


@router.post("/generate-bio")
def generate_bio_endpoint(
    data: BioRequest,
    current_user=Depends(get_authenticated_user),
):
    bio = generate_bio(data.description)

    return {
        "bio": bio,
    }