from dotenv import load_dotenv
import os

load_dotenv()

app_name = os.getenv("APP_NAME")
database_url = os.getenv("DATABASE_URL")
jwt_secret = os.getenv("JWT_SECRET")