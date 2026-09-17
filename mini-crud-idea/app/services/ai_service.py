from google import genai

from app.core.config import GEMINI_API_KEY

client = genai.Client(api_key=GEMINI_API_KEY)


def generate_bio(description: str) -> str:
    prompt = f"""
Write ONE short, professional developer bio based on this description:

{description}

Rules:
- Return only the bio.
- Do not provide options.
- Do not add headings.
- Do not add explanations.
- Do not use quotation marks.
- Keep it between 2 and 3 sentences.
"""

    response = client.interactions.create(
        model="gemini-3.6-flash",
        input=prompt,
    )

    return response.output_text