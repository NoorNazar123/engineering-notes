# FastAPI — Phase 1 Fundamentals

## 1. FastAPI Introduction & Architecture

### What is FastAPI?

FastAPI is a modern Python web framework used to build APIs and backend applications.

It is especially useful for:

- REST APIs
- Backend services
- Async applications
- AI/ML APIs
- Microservices

FastAPI is built around **Python type hints** and **ASGI**.

---

## 2. FastAPI Architecture

Basic request flow:

```text
Frontend / Client
       ↓
   HTTP Request
       ↓
    Uvicorn
       ↓
    FastAPI
       ↓
     Route
       ↓
 Python Function
       ↓
   Response
       ↓
     JSON
```

### FastAPI vs Express

```text
Node.js                 Python
   ↓                       ↓
Express.js              FastAPI
   ↓                       ↓
REST API                REST API
```

---

## 3. Creating a FastAPI Application

```python
from fastapi import FastAPI

app = FastAPI()
```

### `FastAPI()`

Creates a FastAPI application instance.

Express equivalent:

```javascript
const app = express();
```

---

## 4. Routes / Endpoints

A route defines how the API responds to a particular URL and HTTP method.

Example:

```python
@app.get("/")
def home():
    return {
        "message": "My FastAPI API"
    }
```

This means:

```text
GET /
   ↓
home()
   ↓
JSON response
```

### Decorator

```python
@app.get("/")
```

`@app.get()` is a Python decorator used by FastAPI to register a GET route.

---

## 5. Multiple Routes

A FastAPI application can have many endpoints.

```python
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def home():
    return {
        "message": "My FastAPI API"
    }


@app.get("/about")
def about():
    return {
        "role": "frontend developer",
        "name": "Noor",
        "experience": "2 years"
    }


@app.get("/skills")
def skills():
    return {
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Next.js"
        ]
    }
```

Available endpoints:

```text
GET /
GET /about
GET /skills
```

---

# 6. Returning JSON

FastAPI can automatically convert Python dictionaries/lists into JSON responses.

Python:

```python
return {
    "name": "Noor",
    "role": "frontend developer"
}
```

API response:

```json
{
  "name": "Noor",
  "role": "frontend developer"
}
```

You don't need to manually use `JSON.stringify()` like in JavaScript.

---

# 7. Running FastAPI

Use Uvicorn:

```bash
uvicorn main:app --reload
```

Meaning:

```text
main
 ↓
main.py

app
 ↓
FastAPI application

--reload
 ↓
Automatically restart server when code changes
```

Server:

```text
http://127.0.0.1:8000
```

---

# 8. FastAPI vs Uvicorn

These are different things.

### FastAPI

A **web framework**.

Responsible for:

- Routes
- Request handling
- Validation
- API structure
- OpenAPI documentation

### Uvicorn

An **ASGI server**.

Responsible for:

- Running the application
- Receiving HTTP requests
- Passing requests to FastAPI
- Sending responses back

Architecture:

```text
Browser / React
      ↓
    HTTP
      ↓
  Uvicorn
      ↓
  FastAPI
      ↓
   Route
      ↓
 Function
```

---

# 9. ASGI

ASGI stands for:

**Asynchronous Server Gateway Interface**

FastAPI uses the ASGI ecosystem.

For now, remember:

```text
FastAPI → ASGI framework
Uvicorn → ASGI server
```

We'll study async/await in detail later.

---

# 10. Automatic API Documentation

FastAPI automatically generates API documentation.

After starting the server:

```text
http://127.0.0.1:8000/docs
```

This opens **Swagger UI**.

You can:

- See available endpoints
- See HTTP methods
- Execute API requests
- Inspect responses
- Test APIs directly from the browser

FastAPI also generates OpenAPI documentation.

---

# 11. Express → FastAPI Comparison

### Express

```javascript
app.get("/users", (req, res) => {
  res.json({
    message: "Users",
  });
});
```

### FastAPI

```python
@app.get("/users")
def users():
    return {
        "message": "Users"
    }
```

Main idea:

```text
Express                         FastAPI

app.get("/users")       →       @app.get("/users")

(req, res)              →       function parameters

res.json(data)          →       return data
```

---

# 12. Important Mental Model

Remember this pattern:

```text
@app.get("/users")
        ↓
HTTP Method + Path
        ↓
Python Function
        ↓
Return Data
        ↓
JSON Response
```

Example:

```python
@app.get("/users")
def get_users():
    return {
        "users": []
    }
```

Request:

```http
GET /users
```

Response:

```json
{
  "users": []
}
```

---

# Interview Questions

### What is FastAPI?

FastAPI is a modern Python web framework for building APIs and backend applications.

### What is Uvicorn?

Uvicorn is an ASGI server commonly used to run FastAPI applications.

### What does `FastAPI()` do?

It creates an instance of the FastAPI application.

### What does `@app.get("/")` do?

It registers a GET endpoint for the `/` path.

### What is a route?

A route defines how an application responds to a specific HTTP method and URL path.

### Why does FastAPI return JSON automatically?

FastAPI serializes Python data structures such as dictionaries and lists into HTTP responses.

### What is ASGI?

ASGI is the interface specification used by modern Python asynchronous web applications and servers.

---

# Phase 1 Progress

```text
1. FastAPI introduction & architecture    ✅
2. Project setup                           ✅
3. FastAPI() application                   ✅
4. Routes / endpoints                      ✅
5. HTTP methods                             ⏳
6. Path parameters                          ⏳
7. Query parameters                         ⏳
8. Request body                             ⏳
9. Pydantic models                          ⏳
10. Response models                         ⏳
11. Status codes                            ⏳
12. Headers & cookies                       ⏳
13. Swagger/OpenAPI                         ⏳
```

## Key Takeaway

```text
FastAPI
   ↓
Create app with FastAPI()
   ↓
Define routes with decorators
   ↓
Execute Python functions
   ↓
Return Python data
   ↓
FastAPI sends JSON response
```
