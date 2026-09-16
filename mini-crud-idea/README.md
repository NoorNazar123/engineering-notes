# Team Hub Backend

A structured FastAPI backend for managing team members with PostgreSQL, SQLAlchemy, password hashing, and Cloudinary image uploads.

## Features

- Create team members
- Get all team members
- Get a team member by ID
- Update team members
- Delete team members
- Password hashing with bcrypt
- Profile image uploads with Cloudinary
- PostgreSQL database
- Pydantic request/response validation
- Layered backend architecture

## Tech Stack

- Python
- FastAPI
- PostgreSQL
- SQLAlchemy
- Pydantic
- bcrypt
- Cloudinary
- Uvicorn

## Project Structure

```text
app/
├── api/
│   └── users.py
│
├── core/
│   ├── config.py
│   ├── security.py
│   └── cloudinary.py
│
├── db/
│   ├── database.py
│   └── models.py
│
├── repositories/
│   └── user_repository.py
│
├── schemas/
│   └── user.py
│
└── services/
    └── user_service.py

main.py
requirements.txt
.env
.gitignore
```

## Architecture

The backend follows a layered structure:

```text
HTTP Request
     ↓
API Layer
     ↓
Service Layer
     ↓
Repository Layer
     ↓
PostgreSQL
```

### API

Handles HTTP routes, request parameters, dependencies, and responses.

### Services

Contains application/business logic such as password hashing, image uploading, and user workflows.

### Repositories

Handles database operations using SQLAlchemy.

### Schemas

Defines the structure of incoming and outgoing API data using Pydantic.

### Core

Contains shared application infrastructure such as configuration, security, and Cloudinary integration.

### Database

Contains the SQLAlchemy database connection and database models.

## API Endpoints

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | `/users`           | Create a user |
| GET    | `/users`           | Get all users |
| GET    | `/users/{user_id}` | Get one user  |
| PUT    | `/users/{user_id}` | Update a user |
| DELETE | `/users/{user_id}` | Delete a user |

## Setup

### 1. Clone the project

```bash
git clone <your-repository-url>
cd mini-crud-idea
```

### 2. Create a virtual environment

```bash
python3 -m venv venv
```

### 3. Activate it

```bash
source venv/bin/activate
```

### 4. Install dependencies

```bash
pip install -r requirements.txt
```

### 5. Configure environment variables

Create a `.env` file:

```env
DATABASE_URL=your_postgresql_database_url

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Never commit `.env` to Git.

### 6. Run the server

```bash
uvicorn main:app --reload
```

The API will be available at:

```text
http://127.0.0.1:8000
```

Interactive API documentation:

```text
http://127.0.0.1:8000/docs
```

## Development

Run Ruff:

```bash
ruff check app
```

Automatically fix supported issues:

```bash
ruff check app --fix
```

## Current Status

- FastAPI setup
- PostgreSQL connection
- SQLAlchemy models
- Pydantic schemas
- User CRUD
- Password hashing
- Cloudinary image uploads
- Repository layer
- Service layer
- Configuration management
- Security module

## Future Improvements

- Authentication with JWT
- Login system
- User authorization
- Better validation and error handling
- Database migrations with Alembic
- Automated tests with pytest
- Docker
- Production deployment

```

```
