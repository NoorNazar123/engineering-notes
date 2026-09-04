# FastAPI — Phase 1: Fundamentals

> **Purpose:** Quick revision + interview preparation
> **Level:** Beginner → Basic API Development

---

# 📌 Phase 1 Overview

In Phase 1, we learned the fundamentals required to create and understand basic FastAPI APIs.

### Topics Covered

- FastAPI setup
- FastAPI application
- Routes / Path Operations
- HTTP methods
- Path Parameters
- Query Parameters
- Request Body
- Pydantic Models
- Headers
- Cookies
- Swagger UI
- ReDoc
- OpenAPI
- Automatic Validation
- HTTP 422 Validation Errors

---

# 1. What is FastAPI?

**FastAPI** is a modern Python web framework used to build APIs.

It is commonly used for:

- REST APIs
- Backend services
- Microservices
- AI/ML APIs
- Full-stack applications

### Important Features

```text
FastAPI
├── Python type hints
├── Pydantic validation
├── Async / await support
├── Automatic API documentation
├── OpenAPI
├── Swagger UI
└── ReDoc
```

### Basic Example

```python
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def home():
    return {
        "message": "Hello FastAPI"
    }
```

Run the server:

```bash
uvicorn main:app --reload
```

---

# 2. Routes / Path Operations

A route connects:

```text
HTTP Method + URL Path
        ↓
Python Function
```

Example:

```python
@app.get("/users")
def get_users():
    return {
        "message": "All users"
    }
```

Here:

```text
GET
 ↓
/users
 ↓
get_users()
```

### Common HTTP Methods

| Method | Purpose               |
| ------ | --------------------- |
| GET    | Read data             |
| POST   | Create data           |
| PUT    | Replace/update data   |
| PATCH  | Partially update data |
| DELETE | Delete data           |

Example:

```python
@app.post("/users")
def create_user():
    return {
        "message": "User created"
    }
```

### Interview Question

**Q: What is a path operation in FastAPI?**

A path operation is a combination of an HTTP method and URL path that is connected to a Python function.

---

# 3. Path Parameters

A path parameter is a value inside the URL path.

```python
@app.get("/users/{user_id}")
def get_user(user_id: int):
    return {
        "user_id": user_id
    }
```

Request:

```text
GET /users/10
```

Response:

```json
{
  "user_id": 10
}
```

The `{user_id}` is the path parameter.

FastAPI sees:

```python
user_id: int
```

and knows that `user_id` should be an integer.

### Invalid Request

```text
GET /users/abc
```

FastAPI will return a validation error.

Usually:

```text
422 Unprocessable Entity
```

### Remember

```text
/users/{user_id}
         ↑
   Path parameter
```

---

# 4. Query Parameters

Query parameters are values after `?`.

Example:

```python
@app.get("/products")
def get_products(
    category: str | None = None,
    limit: int = 10
):
    return {
        "category": category,
        "limit": limit
    }
```

Request:

```text
GET /products?category=phone&limit=5
```

Response:

```json
{
  "category": "phone",
  "limit": 5
}
```

### Query Parameter Syntax

```text
/products?category=phone
          ↑
      Query parameter
```

Multiple query parameters:

```text
/products?category=phone&limit=5
```

### Path vs Query

Path:

```text
/users/10
       ↑
      Path
```

Query:

```text
/users?limit=10
       ↑
     Query
```

### Interview Question

**Q: What is the difference between path and query parameters?**

Path parameters are part of the URL path and usually identify a specific resource.

Query parameters are additional parameters used to filter, search, sort, paginate, or modify the request.

---

# 5. Request Body

A request body contains data sent by the client to the server.

It is commonly used with:

```text
POST
PUT
PATCH
```

Example:

```json
{
  "name": "Laptop",
  "price": 1200,
  "quantity": 2
}
```

FastAPI commonly uses Pydantic models to define the structure of request bodies.

---

# 6. Pydantic Models

Pydantic allows us to define and validate structured data.

```python
from pydantic import BaseModel


class Product(BaseModel):
    name: str
    price: float
    quantity: int
```

Use it in an endpoint:

```python
@app.post("/products")
async def create_product(product: Product):
    return {
        "message": "Product created successfully",
        "product": product
    }
```

Request:

```json
{
  "name": "Laptop",
  "price": 1200,
  "quantity": 2
}
```

### Flow

```text
Client JSON
    ↓
FastAPI
    ↓
Pydantic Model
    ↓
Validation
    ↓
Python Object
    ↓
Function
```

### Why Pydantic?

Pydantic provides:

- Data validation
- Data parsing
- Structured models
- Type-based validation
- Automatic API documentation support

### Interview Question

**Q: Why does FastAPI use Pydantic?**

Pydantic is used to define structured data models and validate incoming and outgoing data using Python type hints.

---

# 7. Headers

HTTP headers contain metadata about an HTTP request.

Example:

```text
Authorization: Bearer my-token-123
```

FastAPI can read headers using `Header`.

```python
from fastapi import Header


@app.get("/profile")
def get_profile(
    authorization: str | None = Header(default=None)
):
    return {
        "authorization": authorization
    }
```

Request:

```text
GET /profile
Authorization: Bearer my-token-123
```

Response:

```json
{
  "authorization": "Bearer my-token-123"
}
```

### Header Flow

```text
Client
   ↓
HTTP Header
   ↓
FastAPI
   ↓
Python Function
```

### Common Headers

```text
Authorization
Content-Type
Accept
User-Agent
```

### Interview Question

**Q: What is an HTTP header?**

An HTTP header contains metadata about a request or response, such as authentication information, content type, or client information.

---

# 8. Cookies

A cookie is small data stored by the browser.

Basic flow:

```text
Server
   ↓
Set-Cookie
   ↓
Browser stores cookie
   ↓
Browser sends cookie
   ↓
Server
```

---

## Set a Cookie

```python
from fastapi import Response


@app.get("/login")
def login(response: Response):

    response.set_cookie(
        key="session_id",
        value="abc123"
    )

    return {
        "message": "Cookie set successfully"
    }
```

The server sends:

```text
Set-Cookie: session_id=abc123
```

The browser stores it.

---

## Read a Cookie

```python
from fastapi import Cookie


@app.get("/profile")
def profile(
    session_id: str | None = Cookie(default=None)
):
    return {
        "session_id": session_id
    }
```

If the browser sends:

```text
session_id=abc123
```

Response:

```json
{
  "session_id": "abc123"
}
```

---

## Delete a Cookie

```python
response.delete_cookie("session_id")
```

---

## Important Cookie Options

```python
response.set_cookie(
    key="session_id",
    value="abc123",
    httponly=True,
    secure=True,
    samesite="lax"
)
```

| Option           | Meaning                                      |
| ---------------- | -------------------------------------------- |
| `httponly=True`  | JavaScript cannot directly access the cookie |
| `secure=True`    | Cookie should be sent over HTTPS             |
| `samesite="lax"` | Helps reduce CSRF risk                       |
| `max_age=3600`   | Cookie lifetime                              |
| `path="/"`       | Cookie applies across the site               |

---

# 9. Header vs Cookie

This is important for interviews.

## Header

Example:

```text
Authorization: Bearer abc123
```

The client explicitly sends the header.

```text
Client
   ↓
Authorization Header
   ↓
Server
```

## Cookie

Example:

```text
session_id=abc123
```

The browser stores the cookie and normally sends it automatically with matching requests.

```text
Server
   ↓
Set-Cookie
   ↓
Browser stores cookie
   ↓
Browser sends cookie
   ↓
Server
```

### Simple Difference

```text
Header
→ Client sends metadata

Cookie
→ Browser stores data and sends it with matching requests
```

---

# 10. Swagger UI

FastAPI automatically generates interactive API documentation.

Open:

```text
http://127.0.0.1:8000/docs
```

This is **Swagger UI**.

Swagger lets you:

- See API endpoints
- See HTTP methods
- See parameters
- See request bodies
- Execute requests
- Inspect responses
- Test APIs directly in the browser

### Example

```text
GET /users/{user_id}

Try it out
    ↓
Enter user_id
    ↓
Execute
    ↓
See response
```

---

# 11. ReDoc

FastAPI also provides ReDoc.

Open:

```text
http://127.0.0.1:8000/redoc
```

ReDoc provides another interface for reading API documentation.

### Swagger vs ReDoc

```text
Swagger UI
→ Interactive API testing

ReDoc
→ API documentation / reading
```

---

# 12. OpenAPI

OpenAPI is a standard specification used to describe APIs.

FastAPI automatically generates an OpenAPI schema.

Open:

```text
http://127.0.0.1:8000/openapi.json
```

You will see JSON describing your API.

Example:

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "FastAPI",
    "version": "0.1.0"
  }
}
```

### Important Relationship

```text
FastAPI
   ↓
Generates OpenAPI specification
   ↓
Swagger UI / ReDoc
   ↓
API Documentation
```

### Interview Question

**Q: What is OpenAPI?**

OpenAPI is a standard specification for describing the structure and behavior of an HTTP API.

---

# 13. Swagger vs OpenAPI

Do not confuse them.

### OpenAPI

The **specification**.

```text
"What does my API look like?"
```

### Swagger UI

The **interactive interface** that displays and allows testing of the API.

```text
"How can I visually explore/test my API?"
```

Think:

```text
OpenAPI
   ↓
API specification

Swagger UI
   ↓
Visual interface for the specification
```

---

# 14. Automatic Validation

FastAPI uses Python type hints and Pydantic to validate data.

Example:

```python
@app.get("/users/{user_id}")
def get_user(user_id: int):
    return {
        "user_id": user_id
    }
```

Valid:

```text
/users/10
```

Invalid:

```text
/users/abc
```

FastAPI automatically detects the problem.

Response:

```text
422 Unprocessable Entity
```

---

# 15. HTTP 422

`422 Unprocessable Entity` commonly appears in FastAPI when request data fails validation.

Example:

```python
class Product(BaseModel):
    name: str
    price: float
    quantity: int
```

Client sends invalid data:

```json
{
  "name": "Laptop",
  "price": "wrong",
  "quantity": 2
}
```

FastAPI validates the request and reports the validation problem.

---

# 16. Complete Phase 1 Example

```python
from fastapi import FastAPI, Header, Cookie, Response
from pydantic import BaseModel

app = FastAPI()


class Product(BaseModel):
    name: str
    price: float
    quantity: int


@app.get("/users/{user_id}")
def get_user(
    user_id: int,
    limit: int = 10
):
    return {
        "user_id": user_id,
        "limit": limit
    }


@app.post("/products")
async def create_product(product: Product):
    return {
        "message": "Product created successfully",
        "product": product
    }


@app.get("/profile")
def profile(
    authorization: str | None = Header(default=None),
    session_id: str | None = Cookie(default=None)
):
    return {
        "authorization": authorization,
        "session_id": session_id
    }


@app.get("/login")
def login(response: Response):
    response.set_cookie(
        key="session_id",
        value="abc123"
    )

    return {
        "message": "Cookie set successfully"
    }
```

---

# 17. Phase 1 Mental Model

Understand the complete request:

```text
                    HTTP REQUEST
                         │
        ┌────────────────┼────────────────┐
        │                │                │
        ↓                ↓                ↓
      Path             Query           Headers
        │                │                │
        └────────────────┼────────────────┘
                         ↓
                       Body
                         ↓
                    Validation
                         ↓
                  Python Function
                         ↓
                     Response
```

Cookies are another part of request/response handling:

```text
Response
   ↓
Set-Cookie
   ↓
Browser
   ↓
Cookie stored
   ↓
Future Request
   ↓
Cookie sent
```

---

# 18. Interview Questions — Phase 1

## FastAPI

**Q: What is FastAPI?**

A modern Python framework for building APIs.

**Q: Why is FastAPI popular?**

Because it provides type-based validation, high performance, async support, and automatic OpenAPI documentation.

---

## Routes

**Q: What is a route/path operation?**

A combination of an HTTP method and URL path mapped to a Python function.

---

## Parameters

**Q: What is a path parameter?**

A value embedded inside the URL path.

```text
/users/{id}
```

**Q: What is a query parameter?**

A value supplied after `?`.

```text
/users?limit=10
```

**Q: Difference between path and query parameters?**

Path parameters identify resources; query parameters commonly filter, search, sort, or paginate resources.

---

## Request Body

**Q: What is a request body?**

Data sent inside an HTTP request, commonly as JSON.

**Q: Which methods commonly use request bodies?**

Usually:

```text
POST
PUT
PATCH
```

---

## Pydantic

**Q: What is Pydantic?**

A Python library used for data validation and structured data models.

**Q: Why use Pydantic with FastAPI?**

To define expected data structures and automatically validate incoming data.

---

## Headers

**Q: What are HTTP headers?**

Metadata sent with HTTP requests or responses.

**Q: How do you read a header in FastAPI?**

Using:

```python
Header()
```

---

## Cookies

**Q: What is a cookie?**

Small data stored by the browser and sent with matching requests.

**Q: How do you set a cookie?**

```python
response.set_cookie()
```

**Q: How do you read a cookie?**

```python
Cookie()
```

**Q: How do you delete a cookie?**

```python
response.delete_cookie()
```

---

## Swagger / OpenAPI

**Q: What is Swagger UI?**

An interactive interface for exploring and testing APIs.

**Q: What is OpenAPI?**

A standard specification describing an API.

**Q: What is `/docs`?**

FastAPI's default Swagger UI endpoint.

**Q: What is `/redoc`?**

FastAPI's default ReDoc endpoint.

**Q: What is `/openapi.json`?**

The generated OpenAPI specification.

---

# 19. Quick Revision Cheat Sheet

```text
FastAPI
→ Python framework for APIs

FastAPI()
→ Creates the application

@app.get()
→ GET endpoint

@app.post()
→ POST endpoint

@app.put()
→ PUT endpoint

@app.patch()
→ PATCH endpoint

@app.delete()
→ DELETE endpoint

/users/{id}
→ Path parameter

/users?limit=10
→ Query parameter

BaseModel
→ Pydantic data model

Header()
→ Read HTTP header

Cookie()
→ Read browser cookie

response.set_cookie()
→ Set cookie

response.delete_cookie()
→ Delete cookie

/docs
→ Swagger UI

/redoc
→ ReDoc

/openapi.json
→ OpenAPI specification

422
→ Validation error
```

---

# 20. Final Phase 1 Checklist

```text
[x] FastAPI setup
[x] Create FastAPI application
[x] Run server with Uvicorn
[x] Routes
[x] HTTP methods
[x] Path parameters
[x] Query parameters
[x] Request body
[x] Pydantic
[x] Headers
[x] Cookies
[x] Swagger UI
[x] ReDoc
[x] OpenAPI
[x] Automatic validation
[x] HTTP 422
```

# 🎯 PHASE 1 COMPLETE

You now understand the **fundamentals of FastAPI API development**.

---

# 🚀 Phase 2 Preview

Next we move from simple examples to **professional FastAPI architecture**.

```text
Phase 2
│
├── APIRouter
├── Project Structure
├── Dependencies
├── Dependency Injection
├── Response Models
├── Status Codes
├── HTTPException
├── Error Handling
├── Advanced Validation
├── Environment Variables
├── Configuration
├── Database
├── Authentication
└── Production API Architecture
```

> **Goal of Phase 2:** Stop putting everything in `main.py` and start building FastAPI applications like a professional backend engineer.
