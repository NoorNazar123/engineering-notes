# FastAPI CRUD Mini Project

## Stack

- FastAPI → API framework
- Uvicorn → Run server
- PostgreSQL / Neon → Database
- SQLAlchemy → Database ORM
- Pydantic → Validation / schemas
- bcrypt → Password hashing
- Cloudinary → Image storage
- python-dotenv → `.env` variables
- python-multipart → Form + file upload

---

# 1. Project Structure

```text
mini-crud-idea/
│
├── venv/
├── .env
├── .gitignore
├── main.py
├── database.py
├── models.py
└── schemas.py
```

---

# 2. Setup

Create project:

```bash
mkdir mini-crud-idea
cd mini-crud-idea
```

Create venv:

```bash
python3 -m venv venv
source venv/bin/activate
```

Install:

```bash
pip install fastapi uvicorn sqlalchemy psycopg2-binary bcrypt cloudinary python-multipart python-dotenv
```

Run:

```bash
uvicorn main:app --reload
```

Swagger:

```text
http://127.0.0.1:8000/docs
```

---

# 3. `.env`

```env
DATABASE_URL="your-neon-database-url"

CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
```

`.gitignore`:

```gitignore
.env
venv/
__pycache__/
```

Never push `.env` to GitHub.

---

# 4. Database Flow

```text
FastAPI
   ↓
SQLAlchemy
   ↓
PostgreSQL / Neon
```

`database.py`:

```python
import os
from dotenv import load_dotenv

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(bind=engine)

Base = declarative_base()


def get_db():

    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()
```

Important:

```text
engine → database connection
SessionLocal → creates DB session
Base → parent of models
get_db() → gives DB session to route
```

---

# 5. Model

`models.py`:

```python
from sqlalchemy import Column, Integer, String
from database import Base


class User(Base):

    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, nullable=False)
    password = Column(String, nullable=False)
    profile_image = Column(String, nullable=True)
```

Model = PostgreSQL table structure.

---

# 6. Schema

`schemas.py`:

```python
from pydantic import BaseModel


class UserCreate(BaseModel):

    username: str
    password: str


class UserResponse(BaseModel):

    id: int
    username: str
    password: str
    profile_image: str

    class Config:
        from_attributes = True
```

```text
Model → Database
Schema → API validation
```

---

# 7. CRUD

## CREATE

```text
POST /users
```

Flow:

```text
username + password + image
        ↓
bcrypt password
        ↓
Cloudinary image
        ↓
image URL
        ↓
PostgreSQL
```

Important code:

```python
hashed_password = bcrypt.hashpw(
    password.encode("utf-8"),
    bcrypt.gensalt()
).decode("utf-8")
```

Upload:

```python
result = cloudinary.uploader.upload(profile_image.file)
```

Get URL:

```python
result["secure_url"]
```

Save:

```python
db.add(user)
db.commit()
db.refresh(user)
```

---

# 8. READ

## Get all

```text
GET /users
```

```python
db.query(User).all()
```

## Get one

```text
GET /users/1
```

```python
db.query(User).filter(User.id == user_id).first()
```

Check:

```python
if not user:
    raise HTTPException(
        status_code=404,
        detail="User not found"
    )
```

---

# 9. UPDATE

```text
PUT /users/1
```

Current PUT updates:

```text
username
password
profile_image
```

Flow:

```text
Find user
   ↓
Check user exists
   ↓
Hash password
   ↓
Upload new image
   ↓
Get Cloudinary URL
   ↓
Update database
   ↓
commit()
   ↓
refresh()
```

```python
db_user.username = username
db_user.password = hashed_password
db_user.profile_image = result["secure_url"]

db.commit()
db.refresh(db_user)
```

Because image is uploaded, PUT uses:

```python
Form()
File()
```

---

# 10. DELETE

```text
DELETE /users/1
```

```python
user = db.query(User).filter(User.id == user_id).first()

db.delete(user)
db.commit()
```

Flow:

```text
Find user
 ↓
Delete
 ↓
Commit
 ↓
Response
```

---

# 11. Cloudinary

Cloudinary stores the **actual image**.

PostgreSQL stores the **Cloudinary URL**.

```text
Image
  ↓
Cloudinary
  ↓
Image URL
  ↓
PostgreSQL
```

Example database value:

```text
https://res.cloudinary.com/.../image.png
```

---

# 12. Neon PostgreSQL Commands

Check all users:

```sql
SELECT * FROM users;
```

Check specific columns:

```sql
SELECT id, username, password, profile_image
FROM users;
```

Check table:

```sql
\d users
```

Add missing column:

```sql
ALTER TABLE users
ADD COLUMN profile_image VARCHAR;
```

Important:

```python
Base.metadata.create_all(bind=engine)
```

does NOT update an existing table.

For real projects use **Alembic migrations**.

---

# 13. CRUD Cheat Sheet

```text
POST   → CREATE
GET    → READ
PUT    → UPDATE
DELETE → DELETE
```

SQLAlchemy:

```text
db.query()  → search
filter()    → condition
first()     → one result
all()       → all results
db.add()    → add
commit()    → save
refresh()   → refresh object
delete()    → delete
```

---

# 14. Common Errors

### 422

Request format doesn't match route.

Example:

```text
JSON sent
but Form/File expected
```

### Cloudinary

```text
Must supply api_key
```

Cloudinary configuration is missing/wrong.

### Model

```text
'profile_image' is an invalid keyword argument
```

Add:

```python
profile_image = Column(String)
```

### Database

```text
column "profile_image" does not exist
```

The model has the column but PostgreSQL table doesn't.

Run:

```sql
ALTER TABLE users
ADD COLUMN profile_image VARCHAR;
```

---

# 15. Complete Mental Flow

### POST

```text
Request
 ↓
FastAPI
 ↓
bcrypt
 ↓
Cloudinary
 ↓
PostgreSQL
 ↓
Response
```

### GET

```text
Request
 ↓
FastAPI
 ↓
SQLAlchemy
 ↓
PostgreSQL
 ↓
Response
```

### PUT

```text
Request
 ↓
Find user
 ↓
bcrypt
 ↓
Cloudinary
 ↓
Update PostgreSQL
 ↓
Response
```

### DELETE

```text
Request
 ↓
Find user
 ↓
Delete
 ↓
PostgreSQL
 ↓
Response
```

---

# 16. What You Should Remember

Don't memorize every line.

Understand:

```text
FastAPI
   ↓
Route
   ↓
Receive data
   ↓
Business logic
   ↓
SQLAlchemy
   ↓
PostgreSQL
   ↓
Response
```

For images:

```text
FastAPI → Cloudinary → URL → PostgreSQL
```

For passwords:

```text
Password → bcrypt → Hash → PostgreSQL
```

---

# 17. Next Topics

After this mini project:

```text
CRUD
 ↓
JWT Authentication
 ↓
Login
 ↓
Protected Routes
 ↓
PostgreSQL Relationships
 ↓
Alembic
 ↓
Async FastAPI
 ↓
Docker
 ↓
Deployment
```
