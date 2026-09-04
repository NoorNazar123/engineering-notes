from fastapi import FastAPI, Response

app = FastAPI()


@app.get("/login")
def login(response: Response):

    response.set_cookie(
        key="session_id",
        value="abc123"
    )

    return {
        "message": "Cookie set successfully"
    }

from fastapi import FastAPI, Cookie

app = FastAPI()


@app.get("/profile")
def profile(session_id: str | None = Cookie(default=None)):

    return {
        "session_id": session_id
    }