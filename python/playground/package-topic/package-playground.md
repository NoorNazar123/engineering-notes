# Python Packages & Project Structure

## 1. What is a Package?

A **package** is a directory used to organize related Python modules.

Think:

```text
Module  = Python file
Package = Folder containing Python modules
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

- `calculator/` → Package
- `basic.py` → Module
- `advanced.py` → Module
- `main.py` → Main Python file

---

# 2. Why Do We Need Packages?

Small projects can have a few Python files:

```text
project/
├── main.py
├── calculator.py
└── users.py
```

But a real backend application can contain dozens or hundreds of files.

Instead of keeping everything in one directory, we organize related code into packages:

```text
backend/
│
├── app/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── schemas/
```

Packages help us:

- Organize code
- Separate responsibilities
- Make projects easier to maintain
- Group related modules
- Build scalable applications

---

# 3. `__init__.py`

A package commonly contains:

```text
calculator/
└── __init__.py
```

`__init__.py` is used for package initialization.

It can be completely empty:

```python
# __init__.py
```

Modern Python also supports namespace packages without `__init__.py`, but you will still commonly see `__init__.py` in application projects.

For now, remember:

```text
__init__.py
      ↓
Package initialization file
```

---

# 4. Creating a Package

Example structure:

```text
package-topic/
│
├── main.py
│
└── calculator/
    ├── __init__.py
    ├── basic.py
    └── advanced.py
```

---

# 5. Module Inside a Package

### `basic.py`

```python
def add(a, b):
    return a + b


def subtract(a, b):
    return a - b
```

### `advanced.py`

```python
def multiply(a, b):
    return a * b


def divide(a, b):
    return a / b
```

Here:

```text
calculator/
    ↓
Package

basic.py
    ↓
Module

advanced.py
    ↓
Module
```

---

# 6. Import From a Package

In `main.py`:

```python
from calculator.basic import add, subtract
from calculator.advanced import multiply, divide

print(add(10, 5))
print(subtract(10, 5))
print(multiply(10, 5))
print(divide(10, 5))
```

Output:

```text
15
5
50
2.0
```

---

# 7. Understanding the Import Path

Consider:

```python
from calculator.basic import add
```

Read it from left to right:

```text
calculator
    ↓
package

basic
    ↓
module

add
    ↓
function
```

So:

```text
calculator.basic.add
```

means:

```text
Package → Module → Function
```

---

# 8. Package vs Module

This is an important interview concept.

| Concept       | Meaning                                   |
| ------------- | ----------------------------------------- |
| Module        | A Python `.py` file                       |
| Package       | A directory that organizes Python modules |
| Function      | Reusable block of code                    |
| `__init__.py` | Package initialization file               |

Example:

```text
calculator/
│
├── __init__.py
├── basic.py
└── advanced.py
```

Therefore:

```text
calculator → Package
basic.py   → Module
advanced.py → Module
```

---

# 9. Nested Packages

Packages can contain other packages.

Example:

```text
backend/
│
└── app/
    ├── __init__.py
    │
    ├── users/
    │   ├── __init__.py
    │   ├── models.py
    │   └── services.py
    │
    └── products/
        ├── __init__.py
        ├── models.py
        └── services.py
```

This allows large applications to stay organized.

---

# 10. Real Backend Project Structure

A FastAPI project might eventually look like:

```text
backend/
│
├── app/
│   ├── __init__.py
│   ├── main.py
│   │
│   ├── models/
│   │   ├── __init__.py
│   │   └── user.py
│   │
│   ├── schemas/
│   │   ├── __init__.py
│   │   └── user.py
│   │
│   ├── routes/
│   │   ├── __init__.py
│   │   └── user.py
│   │
│   └── services/
│       ├── __init__.py
│       └── user.py
│
└── requirements.txt
```

You don't need to memorize this structure yet.

As you learn FastAPI, each folder will have a specific purpose.

---

# 11. Why Project Structure Matters

A good project structure separates responsibilities.

For example:

```text
models/
    ↓
Database models

schemas/
    ↓
Request/response data structures

routes/
    ↓
API endpoints

services/
    ↓
Business logic
```

This prevents one file from becoming responsible for everything.

---

# 12. Our Practice

We created:

```text
package-topic/
│
├── main.py
│
└── calculator/
    ├── __init__.py
    ├── basic.py
    └── advanced.py
```

### `basic.py`

```python
def add(a, b):
    return a + b


def subtract(a, b):
    return a - b
```

### `advanced.py`

```python
def multiply(a, b):
    return a * b


def divide(a, b):
    return a / b
```

### `main.py`

```python
from calculator.basic import add, subtract
from calculator.advanced import multiply, divide

print(add(10, 5))
print(subtract(10, 5))
print(multiply(10, 5))
print(divide(10, 5))
```

Output:

```text
15
5
50
2.0
```

---

# 13. Interview Questions

### Q1. What is a Python package?

A package is a directory used to organize related Python modules.

### Q2. What is the difference between a module and a package?

A module is usually a Python `.py` file, while a package is a directory that organizes modules.

### Q3. What is `__init__.py`?

`__init__.py` is commonly used to initialize a Python package. It can also be empty.

### Q4. How do you import a function from a module inside a package?

```python
from calculator.basic import add
```

### Q5. What does this mean?

```python
from calculator.basic import add
```

It means:

```text
calculator → package
basic      → module
add        → function
```

### Q6. Why are packages useful?

They organize code into logical groups, making large applications easier to maintain and scale.

---

# 14. Key Takeaway

Remember this simple hierarchy:

```text
Package
   │
   ├── Module
   │     ├── Function
   │     └── Class
   │
   └── Module
         ├── Function
         └── Class
```

And the import pattern:

```python
from package.module import function
```

Example:

```python
from calculator.basic import add
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
Modules & Imports         ✅
Packages & Structure      ✅
Virtual Environment       ⏳ ← NEXT
pip                       ⏳
requirements.txt          ⏳
OOP                       ⏳
Type Hints                ⏳
Dataclasses               ⏳
UUID                      ⏳
Datetime                  ⏳
Enum                      ⏳
async/await               ⏳
Logging                   ⏳
Environment Variables     ⏳
Clean Structure           ⏳
Testing Basics            ⏳
```

## Current Level

```text
Python Fundamentals
        ↓
Professional Python
        ↓
✅ Modules
        ↓
✅ Packages
        ↓
➡️ Virtual Environments (venv)
```
