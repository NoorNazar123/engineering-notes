# FastAPI Server Setup Guide

## 1. Create Project Folder

```bash
mkdir fastApi
cd fastApi
```

### What this does?

- `mkdir fastApi` → creates a new folder.
- `cd fastApi` → enters the folder.

---

# 2. Check Python

## Linux / Ubuntu

```bash
python3 --version
```

Linux mein usually `python3` command use hoti hai.

Example:

```text
Python 3.12.x
```

## Windows

```bash
python --version
```

If that doesn't work:

```bash
py --version
```

---

# 3. Create Virtual Environment

A virtual environment keeps project dependencies isolated.

## Linux / Ubuntu

```bash
python3 -m venv venv
```

## Windows

```bash
python -m venv venv
```

or:

```bash
py -m venv venv
```

### Meaning

```text
python3     → Python interpreter
-m venv     → run Python's venv module
venv        → name of our virtual environment
```

Project structure:

```text
fastApi/
└── venv/
```

---

# 4. Activate Virtual Environment

## Linux / Ubuntu

```bash
source venv/bin/activate
```

After activation, terminal will look like:

```text
(venv) user@computer:~/fastApi$
```

`(venv)` means the virtual environment is active.

## Windows CMD

```cmd
venv\Scripts\activate
```

## Windows PowerShell

```powershell
venv\Scripts\Activate.ps1
```

After activation:

```text
(venv) C:\Users\User\fastApi>
```

---

# 5. Upgrade pip

Recommended:

```bash
python -m pip install --upgrade pip
```

On Linux, you can also use:

```bash
python3 -m pip install --upgrade pip
```

Inside an activated `venv`, `python` normally points to the virtual environment's Python.

---

# 6. Install FastAPI

Basic installation:

```bash
pip install fastapi uvicorn
```

### FastAPI

FastAPI is the framework used to build APIs.

### Uvicorn

Uvicorn is the ASGI server that runs our FastAPI application.

Think:

```text
FastAPI
   ↓
Application
   ↓
Uvicorn
   ↓
HTTP Server
   ↓
http://127.0.0.1:8000
```

---

# 7. Create `main.py`

Create:

```text
fastApi/
├── main.py
└── venv/
```

Put this inside `main.py`:

```python
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def home():
    return {"message": "Hello FastAPI"}
```

---

# 8. Understand `main.py`

## Import FastAPI

```python
from fastapi import FastAPI
```

We import the `FastAPI` class.

---

## Create FastAPI Application

```python
app = FastAPI()
```

This creates our FastAPI application object.

The variable name `app` is commonly used.

---

## Create a Route

```python
@app.get("/")
```

This means:

```text
HTTP GET request
        +
"/" path
```

When someone visits:

```text
http://127.0.0.1:8000/
```

FastAPI executes:

```python
def home():
```

---

## Return Response

```python
return {"message": "Hello FastAPI"}
```

FastAPI automatically converts the Python dictionary into JSON.

Response:

```json
{
  "message": "Hello FastAPI"
}
```

---

# 9. Start FastAPI Server

## Recommended command

```bash
uvicorn main:app --reload
```

### Understand the command

```text
uvicorn
```

Runs the Uvicorn server.

```text
main
```

Means:

```text
main.py
```

```text
:
```

Separates module name from application variable.

```text
app
```

Means:

```python
app = FastAPI()
```

```text
--reload
```

Automatically restarts the server when you change your Python code.

So:

```bash
uvicorn main:app --reload
```

means:

> Run the `app` FastAPI application from `main.py` using Uvicorn with automatic reload.

---

# 10. Successful Server Output

You should see something similar to:

```text
Uvicorn running on http://127.0.0.1:8000
Application startup complete.
```

This means:

# Server is Running ✅

---

# 11. Open API in Browser

Open:

```text
http://127.0.0.1:8000
```

You should get:

```json
{
  "message": "Hello FastAPI"
}
```

---

# 12. Swagger API Documentation

FastAPI automatically provides interactive API documentation.

Open:

```text
http://127.0.0.1:8000/docs
```

You will see Swagger UI.

You can test your API directly from the browser.

---

# 13. Alternative Documentation

FastAPI also provides ReDoc.

Open:

```text
http://127.0.0.1:8000/redoc
```

---

# 14. Stop Server

In the terminal where Uvicorn is running:

```text
CTRL + C
```

This stops the development server.

---

# 15. Start Server Again

Activate your virtual environment first.

Linux:

```bash
source venv/bin/activate
```

Windows:

```cmd
venv\Scripts\activate
```

Then:

```bash
uvicorn main:app --reload
```

---

# 16. `fastapi dev` Command

FastAPI also provides a development command:

```bash
fastapi dev main.py
```

If you get:

```text
To use the fastapi command, please install "fastapi[standard]"
```

Install the standard dependencies:

```bash
pip install "fastapi[standard]"
```

Then:

```bash
fastapi dev main.py
```

### Both approaches are valid

```bash
uvicorn main:app --reload
```

or:

```bash
fastapi dev main.py
```

For learning, understanding Uvicorn is important because Uvicorn is the server actually running the ASGI application.

---

# 17. Save Dependencies

After installing packages:

```bash
pip freeze > requirements.txt
```

Project:

```text
fastApi/
├── main.py
├── requirements.txt
└── venv/
```

`requirements.txt` contains the project's installed Python packages.

---

# 18. Install Dependencies on Another Computer

After cloning the project:

Linux:

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

Windows:

```cmd
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

Then run:

```bash
uvicorn main:app --reload
```

---

# 19. Never Push `venv` to GitHub

Add this to `.gitignore`:

```gitignore
venv/
__pycache__/
*.pyc
.env
```

You don't commit the virtual environment.

You commit:

```text
main.py
requirements.txt
.gitignore
```

---

# 20. Complete Setup — Linux

```bash
mkdir fastApi
cd fastApi

python3 -m venv venv

source venv/bin/activate

pip install fastapi uvicorn

uvicorn main:app --reload
```

---

# 21. Complete Setup — Windows

```cmd
mkdir fastApi
cd fastApi

python -m venv venv

venv\Scripts\activate

pip install fastapi uvicorn

uvicorn main:app --reload
```

---

# 22. Mental Model

Remember this:

```text
main.py
   │
   │
   ▼
FastAPI()
   │
   │
   ▼
app
   │
   │
   ▼
Uvicorn
   │
   │
   ▼
HTTP Server
   │
   ▼
127.0.0.1:8000
```

### FastAPI vs Uvicorn

```text
FastAPI  → builds the API/application

Uvicorn  → runs the application as a web server
```

### Most important command

```bash
uvicorn main:app --reload
```

### Most important URLs

```text
API:
http://127.0.0.1:8000

Swagger:
http://127.0.0.1:8000/docs

ReDoc:
http://127.0.0.1:8000/redoc
```

---

# Interview Answer

### What is Uvicorn?

> Uvicorn is an ASGI web server used to run Python web applications such as FastAPI.

### What is FastAPI?

> FastAPI is a modern Python web framework for building APIs with automatic validation, serialization, and interactive API documentation.

### Why use a virtual environment?

> A virtual environment isolates project dependencies so different Python projects can use different package versions without conflicting with each other.

### What does `main:app` mean?

> `main` refers to the `main.py` module, and `app` refers to the FastAPI application object created with `FastAPI()`.

Example:

```python
app = FastAPI()
```

Therefore:

```bash
uvicorn main:app --reload
```

means:

> Run the `app` object from `main.py` using Uvicorn.
