# FastAPI Project Setup & Folder Structure

## 📁 Project Structure

```text
fastApi/
│
├── __pycache__/
│   └── main.cpython-312.pyc
│
├── venv/
│   ├── bin/
│   ├── include/
│   ├── lib/
│   ├── lib64/
│   └── pyvenv.cfg
│
├── fastapi-set-docs.md
└── main.py
```

---

# 1. `main.py`

`main.py` is the **main Python file** of our FastAPI application.

This is where we write:

- FastAPI application
- Routes / endpoints
- API logic
- Request handling
- Response handling

Example:

```python
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def home():
    return {"message": "Hello FastAPI"}
```

### Remember

> `main.py` = Actual application code

---

# 2. `venv/`

`venv` means **Virtual Environment**.

It creates an isolated Python environment specifically for our project.

Instead of installing packages globally, we install them inside this project environment.

Example:

```bash
python3 -m venv venv
```

Activate:

```bash
source venv/bin/activate
```

After activation:

```bash
(venv) user@computer:~/fastApi$
```

### Why use `venv`?

Different projects may require different package versions.

For example:

```text
Project A → FastAPI 0.x
Project B → FastAPI 1.x
```

A virtual environment keeps their dependencies separated.

### Remember

> `venv/` = Isolated Python environment for the project

---

# 3. `venv/bin/`

Contains executable commands for the virtual environment.

For example:

```text
python
pip
activate
```

We normally don't modify these files manually.

---

# 4. `venv/lib/`

Contains Python libraries/packages installed inside the virtual environment.

For example, after installing FastAPI:

```bash
pip install fastapi
```

FastAPI and its dependencies are stored inside the virtual environment.

---

# 5. `venv/include/`

Contains files required when Python packages need compilation/building.

Normally, we don't interact with this folder directly.

---

# 6. `venv/lib64/`

On some Linux systems, this is related to the system's 64-bit Python libraries.

Normally, we don't modify it manually.

---

# 7. `venv/pyvenv.cfg`

Configuration file created automatically when the virtual environment is created.

It stores information about the Python environment used by the virtual environment.

Example:

```text
home = /usr/bin
include-system-site-packages = false
version = 3.12.x
```

---

# 8. `__pycache__/`

Python automatically creates this folder.

It stores **compiled bytecode/cache files**.

Example:

```text
__pycache__/
└── main.cpython-312.pyc
```

The `.pyc` file is generated from Python code to help Python execute code efficiently.

### Important

We normally **do not manually edit** `__pycache__`.

It can be safely ignored by Git.

### Remember

> `__pycache__/` = Python's automatically generated cache

---

# 9. `fastapi-set-docs.md`

This is our **learning/documentation file**.

We use it to save:

- Setup steps
- Commands
- Folder structure
- Concepts
- Examples
- Revision notes
- Interview notes

### Remember

> `.md` = Markdown documentation/notes

---

# 10. `.gitignore`

`.gitignore` tells Git which files/folders should **NOT be uploaded to GitHub**.

Example:

```gitignore
venv/
__pycache__/
*.pyc
.env
```

We don't push:

```text
venv/
__pycache__/
```

to GitHub.

Why?

Because `venv` can be recreated and `__pycache__` is automatically generated.

---

# 🧠 Quick Revision

| File / Folder  | Meaning                             |
| -------------- | ----------------------------------- |
| `main.py`      | ⭐ Main FastAPI application         |
| `venv/`        | 🐍 Virtual environment              |
| `bin/`         | Environment executables             |
| `lib/`         | Installed Python packages           |
| `include/`     | Package/build include files         |
| `lib64/`       | Linux 64-bit library directory/link |
| `pyvenv.cfg`   | Virtual environment configuration   |
| `__pycache__/` | Python cache                        |
| `.pyc`         | Compiled Python bytecode            |
| `.md`          | Markdown documentation              |
| `.gitignore`   | Files Git should ignore             |

---

# 🎯 Most Important Concept

Think of the project like this:

```text
fastApi/
│
├── main.py          → 👨‍💻 My code
│
├── venv/            → 🐍 My project's Python environment
│
├── __pycache__/     → ⚡ Python-generated cache
│
├── fastapi-set-docs.md → 📚 My notes
│
└── .gitignore       → 🚫 Don't upload these files
```

### Interview Answer

**Q: Why do we use a virtual environment in Python?**

**Answer:**

> A virtual environment creates an isolated Python environment for a project, allowing us to manage project-specific dependencies and versions without affecting the global Python installation or other projects.
