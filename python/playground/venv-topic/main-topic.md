# Python Professional — Revision Notes

## Topics Completed

```text
1. Modules & Imports          ✅
2. Packages & Project Structure ✅
3. Virtual Environments       ✅
4. pip                        ✅
5. requirements.txt           ✅
```

---

# 1. Modules & Imports

## What is a Module?

A **module** is a Python file (`.py`) containing reusable code.

Example:

```python
# calculator.py

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b
```

Here:

```text
calculator.py → Module
```

## Why Use Modules?

Modules help us:

- Reuse code
- Organize code
- Separate responsibilities
- Make projects easier to maintain

---

## Import a Module

```python
import calculator

print(calculator.add(4, 5))
```

Access functions using:

```text
module.function()
```

---

## Import With an Alias

```python
import calculator as cal

print(cal.add(4, 5))
```

Here:

```text
calculator → original name
cal        → alias
```

---

## Import Specific Functions

```python
from calculator import add

print(add(4, 5))
```

---

## Import Multiple Functions

```python
from calculator import add, multiply, divide, subtract

print(add(4, 5))
print(multiply(4, 5))
print(divide(4, 5))
print(subtract(4, 5))
```

---

## Avoid Wildcard Imports

Technically:

```python
from calculator import *
```

But avoid this in professional code.

Prefer explicit imports:

```python
from calculator import add, subtract
```

---

## Module Mental Model

```text
.py file
   ↓
Module
   ↓
Reusable functions/classes/code
```

---

# 2. Packages & Project Structure

## What is a Package?

A **package** is a directory used to organize related Python modules.

Simple mental model:

```text
Module  = file
Package = folder
```

Example:

```text
project/
│
├── main.py
│
└── calculator/
    ├── __init__.py
    ├── basic.py
    └── advanced.py
```

Here:

```text
calculator/ → Package
basic.py    → Module
advanced.py → Module
```

---

## `__init__.py`

A package commonly contains:

```text
calculator/
└── __init__.py
```

It is used for package initialization.

It can be empty:

```python
# __init__.py
```

Modern Python can also use namespace packages without `__init__.py`, but you'll commonly see it in application projects.

---

## Import From a Package

```python
from calculator.basic import add
```

Read it as:

```text
calculator → package
basic      → module
add        → function
```

So:

```text
package.module.function
```

---

## Multiple Modules

Example:

```text
calculator/
├── __init__.py
├── basic.py
└── advanced.py
```

`basic.py`:

```python
def add(a, b):
    return a + b
```

`advanced.py`:

```python
def multiply(a, b):
    return a * b
```

Import:

```python
from calculator.basic import add
from calculator.advanced import multiply
```

---

## Real Backend Structure

A future FastAPI project may look like:

```text
backend/
│
├── app/
│   ├── main.py
│   │
│   ├── models/
│   │   └── user.py
│   │
│   ├── schemas/
│   │   └── user.py
│   │
│   ├── routes/
│   │   └── user.py
│   │
│   └── services/
│       └── user.py
│
└── requirements.txt
```

The exact structure will become clearer when we learn FastAPI.

---

# 3. Virtual Environments (`venv`)

## What is a Virtual Environment?

A **virtual environment** is an isolated Python environment for a project.

It allows each project to have its own packages and versions.

---

## Why Use `venv`?

Imagine:

```text
Project A → FastAPI version 1
Project B → FastAPI version 2
```

Without isolation, packages can conflict.

With virtual environments:

```text
Project A
└── .venv
    └── FastAPI version 1

Project B
└── .venv
    └── FastAPI version 2
```

Each project has its own environment.

---

## Create a Virtual Environment

```bash
python3 -m venv .venv
```

Meaning:

```text
python3 → Python interpreter
-m      → Run a Python module
venv    → Virtual environment module
.venv   → Environment name
```

---

## `.venv` Structure

After creation you may see:

```text
.venv/
├── bin/
├── include/
├── lib/
├── lib64/
├── pyvenv.cfg
└── ...
```

### `bin/`

Contains executables such as Python and pip.

### `include/`

Contains files used by some packages when building/installing.

### `lib/`

Contains Python libraries and installed packages.

### `lib64/`

A Linux-related library directory that may appear depending on the system.

### `pyvenv.cfg`

Contains configuration information for the virtual environment.

---

## Activate

On Linux/macOS:

```bash
source .venv/bin/activate
```

Terminal usually becomes:

```text
(.venv) user@computer:~/project$
```

The `(.venv)` means the environment is active.

---

## Check Python

```bash
which python
```

It should point somewhere inside:

```text
.venv/bin/python
```

---

## Deactivate

```bash
deactivate
```

The `(.venv)` disappears.

---

## Git

Do not commit the virtual environment.

Add this to `.gitignore`:

```text
.venv/
```

---

# 4. pip

## What is pip?

`pip` is Python's **package installer**.

It allows us to install external Python packages.

Example:

```bash
pip install requests
```

Think:

```text
Python
   ↓
pip
   ↓
Install external packages
```

---

## Check pip

```bash
pip --version
```

---

## Install

```bash
pip install requests
```

---

## Uninstall

```bash
pip uninstall requests
```

---

## List Packages

```bash
pip list
```

Shows packages installed in the current environment.

---

## Package Information

```bash
pip show requests
```

Shows information such as:

- Version
- Location
- Dependencies

---

## Upgrade

```bash
pip install --upgrade requests
```

Short form:

```bash
pip install -U requests
```

---

## Install Specific Version

```bash
pip install fastapi==0.115.0
```

This installs exactly version `0.115.0`.

---

# 5. requirements.txt

## What is `requirements.txt`?

`requirements.txt` is a file that records the Python packages required by a project.

Example:

```text
fastapi==0.115.0
sqlalchemy==2.0.36
requests==2.32.3
```

---

## Why Use It?

Imagine you push your project to GitHub.

Another developer clones it.

They need to know:

> Which packages does this project require?

They can run:

```bash
pip install -r requirements.txt
```

and install the project's dependencies.

---

# Generate requirements.txt

Use:

```bash
pip freeze > requirements.txt
```

Meaning:

```text
pip freeze
    ↓
Show installed packages

>
    ↓
Redirect output

requirements.txt
    ↓
Save it to this file
```

---

## View requirements.txt

Linux/macOS:

```bash
cat requirements.txt
```

Example:

```text
fastapi==0.115.0
requests==2.32.3
```

---

## Install From requirements.txt

```bash
pip install -r requirements.txt
```

The `-r` means:

```text
Read requirements from this file.
```

---

# Node.js Comparison

Since you already know Node.js, this mental model is useful:

| Node.js         | Python                         |
| --------------- | ------------------------------ |
| `npm`           | `pip`                          |
| `npm install`   | `pip install`                  |
| `package.json`  | `requirements.txt` _(roughly)_ |
| `node_modules/` | `.venv/` _(roughly)_           |

### Important Difference

`package.json` contains more project information:

```json
{
  "scripts": {},
  "dependencies": {},
  "devDependencies": {}
}
```

Traditional `requirements.txt` mainly contains dependencies:

```text
fastapi==0.115.0
requests==2.32.3
```

So don't think they are exact equivalents.

---

# Complete Python Project Workflow

The concepts connect together:

```text
Create Project
      ↓
Create .venv
      ↓
Activate .venv
      ↓
pip install packages
      ↓
Build Application
      ↓
pip freeze > requirements.txt
      ↓
Push project to GitHub
```

Another developer:

```text
Clone Project
      ↓
Create .venv
      ↓
Activate .venv
      ↓
pip install -r requirements.txt
      ↓
Run Application
```

---

# Interview Quick Revision

### What is a module?

A Python `.py` file containing reusable code.

### What is a package?

A directory used to organize Python modules.

### What is `__init__.py`?

A package initialization file commonly used in Python packages.

### What is `venv`?

A tool for creating an isolated Python environment.

### Why use a virtual environment?

To isolate project dependencies and avoid package/version conflicts.

### What is pip?

Python's package installer.

### How do you install a package?

```bash
pip install package_name
```

### How do you see installed packages?

```bash
pip list
```

### How do you create requirements.txt?

```bash
pip freeze > requirements.txt
```

### How do you install dependencies from requirements.txt?

```bash
pip install -r requirements.txt
```

### Should `.venv` be committed to Git?

No.

Add:

```text
.venv/
```

to `.gitignore`.

---

# 🧠 Final Mental Model

```text
                PYTHON PROJECT
                      │
          ┌───────────┴───────────┐
          ↓                       ↓
      Packages                 .venv
          ↓                       ↓
      Modules                  pip
          ↓                       ↓
 Functions / Classes        Packages
                                  ↓
                         requirements.txt
                                  ↓
                         Dependency list
```

---

# Progress

## Python Fundamentals

```text
Variables & Data Types     ✅
Strings                   ✅
Operators                 ✅
Conditions                ✅
Loops                     ✅
Functions                 ✅
Lists                     ✅
Tuples                    ✅
Dictionaries              ✅
Sets                      ✅
JSON                      ✅
Exceptions                ✅
```

## Professional Python

```text
Modules & Imports          ✅
Packages & Structure       ✅
Virtual Environment        ✅
pip                        ✅
requirements.txt           ✅

OOP                        ⏳ ← NEXT
Type Hints                 ⏳
Dataclasses                ⏳
UUID                      ⏳
Datetime                  ⏳
Enum                       ⏳
async/await                ⏳
Logging                    ⏳
Environment Variables      ⏳
Clean Structure            ⏳
Testing Basics             ⏳
```

# Current Position

```text
Python Fundamentals
        ↓
Professional Python
        ↓
Modules                ✅
Packages               ✅
venv                   ✅
pip                    ✅
requirements.txt       ✅
        ↓
➡️ OOP — Classes & Objects
```
