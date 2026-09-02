# Python JSON — Backend Playground

## Goal

Understand how Python works with **JSON data**, especially the JSON patterns used in REST APIs and backend development.

---

# What is JSON?

**JSON = JavaScript Object Notation**

JSON is a **data format** commonly used to exchange data between a frontend, backend, database, and other services.

Example:

```json
{
  "name": "Hammad",
  "age": 20,
  "role": "Developer"
}
```

JSON looks similar to a Python dictionary, but they are not the same thing.

```python
user = {
    "name": "Hammad",
    "age": 20,
    "role": "Developer"
}
```

The Python value above is a `dict`.

A JSON document/string is JSON-formatted data.

---

# Python JSON Conversion

The Python `json` module provides four important functions:

```python
json.dumps()
json.loads()

json.dump()
json.load()
```

## Easy Memory Trick

```text
s = string

dumps → Python → JSON string
loads → JSON string → Python

dump  → Python → JSON file
load  → JSON file → Python
```

---

# 1. `json.dumps()`

## Python → JSON String

```python
import json

user = {
    "name": "Hammad",
    "age": 20
}

data = json.dumps(user)

print(data)
print(type(data))
```

Output:

```text
{"name": "Hammad", "age": 20}
<class 'str'>
```

### Important

`json.dumps()` returns a **Python string** containing JSON-formatted data.

JSON itself is a data format, not a Python data type.

---

# 2. `json.loads()`

## JSON String → Python

```python
import json

data = '{"name": "Hammad", "age": 20}'

user = json.loads(data)

print(user)
print(type(user))
```

Output:

```text
{'name': 'Hammad', 'age': 20}
<class 'dict'>
```

Now `user` is a Python dictionary.

Therefore:

```python
print(user["name"])
```

works.

---

# 3. Nested JSON Data

JSON can contain arrays/lists.

```python
data = '{"name": "Hammad", "skills": ["Python", "FastAPI", "Docker"]}'

user = json.loads(data)

print(user["name"])
print(user["skills"][1])
```

Output:

```text
Hammad
FastAPI
```

The structure is:

```text
user
 ↓
dictionary
 ↓
"skills"
 ↓
list
 ↓
index [1]
 ↓
"FastAPI"
```

---

# 4. List of Dictionaries → JSON

Backend APIs commonly work with multiple objects.

```python
users = [
    {"name": "Hammad", "role": "Developer"},
    {"name": "Ali", "role": "Designer"},
    {"name": "Ahmed", "role": "Developer"}
]

data = json.dumps(users)

print(type(data))
```

Output:

```text
<class 'str'>
```

The entire Python list is converted into one JSON string.

---

# 5. JSON List → Python List

A backend can receive JSON containing multiple objects:

```python
data = '''
[
    {"name": "Hammad", "role": "Developer"},
    {"name": "Ali", "role": "Designer"},
    {"name": "Ahmed", "role": "Developer"}
]
'''

users = json.loads(data)
```

Now:

```python
type(users)
```

is:

```text
list
```

Each item inside the list is a dictionary.

```python
for user in users:
    print(user["name"])
```

Output:

```text
Hammad
Ali
Ahmed
```

---

# 6. `json.dump()`

## Python → JSON File

Use `dump()` when you want to write Python data directly into a JSON file.

```python
users = [
    {"name": "Hammad", "role": "Developer"},
    {"name": "Ali", "role": "Designer"}
]

with open("users.json", "w") as file:
    json.dump(users, file, indent=4)
```

This creates:

```text
users.json
```

---

# 7. `json.load()`

## JSON File → Python

Use `load()` when you want to read JSON data from a file.

```python
with open("users.json", "r") as file:
    users = json.load(file)
```

Now `users` is a normal Python object.

For example:

```python
for user in users:
    print(user["name"])
```

---

# 8. `with open()`

This pattern:

```python
with open("users.json", "r") as file:
    users = json.load(file)
```

means:

```text
Open file
    ↓
Give opened file the name "file"
    ↓
Read/use the file
    ↓
Block finishes
    ↓
File automatically closes
```

`with` helps Python safely manage the file resource.

---

# 9. File Modes

```python
open("users.json", "r")
```

`r` = read

```python
open("users.json", "w")
```

`w` = write

Important:

`w` creates the file if it doesn't exist and replaces its existing contents.

---

# 10. `indent=4`

Without indentation, JSON may look like:

```json
[
  { "name": "Hammad", "role": "Developer" },
  { "name": "Ali", "role": "Designer" }
]
```

With:

```python
json.dump(users, file, indent=4)
```

it becomes easier to read:

```json
[
  {
    "name": "Hammad",
    "role": "Developer"
  },
  {
    "name": "Ali",
    "role": "Designer"
  }
]
```

`indent=4` is mainly for readability.

---

# JSON ↔ Python Mapping

| JSON   | Python          |
| ------ | --------------- |
| object | `dict`          |
| array  | `list`          |
| string | `str`           |
| number | `int` / `float` |
| true   | `True`          |
| false  | `False`         |
| null   | `None`          |

---

# Backend Data Flow

A common API flow looks like:

```text
Frontend
   ↓
JSON request
   ↓
Backend
   ↓
Python objects
   ↓
Business logic
   ↓
Python objects
   ↓
JSON response
   ↓
Frontend
```

This is why understanding JSON is important for backend development.

---

# Four Functions — Interview Ready

### `json.dumps()`

Converts a Python object into a JSON-formatted string.

### `json.loads()`

Converts a JSON-formatted string into a Python object.

### `json.dump()`

Writes a Python object to a JSON file.

### `json.load()`

Reads JSON data from a file and converts it into a Python object.

---

# Common Mistake

Don't name your Python file:

```text
json.py
```

if you are doing:

```python
import json
```

Otherwise Python may import your own `json.py` instead of the standard library's `json` module.

Better:

```text
json_playground.py
json_practice.py
```

---

# Interview Revision

### What is JSON?

A lightweight data format commonly used for exchanging structured data between systems and APIs.

### Is JSON a Python data type?

No. JSON is a data format.

### What does `json.dumps()` do?

Python object → JSON string.

### What does `json.loads()` do?

JSON string → Python object.

### What does `json.dump()` do?

Python object → JSON file.

### What does `json.load()` do?

JSON file → Python object.

### Why use `with open()`?

It manages the file resource and automatically closes the file after the block finishes.

---

# Status

- [x] JSON basics
- [x] `json.dumps()`
- [x] `json.loads()`
- [x] `json.dump()`
- [x] `json.load()`
- [x] Dictionary → JSON
- [x] JSON → Dictionary
- [x] List → JSON
- [x] JSON → List
- [x] Nested JSON
- [x] JSON files
- [x] `with open()`
- [x] Read/write modes
- [x] `indent=4`
- [x] Backend JSON flow
- [x] Common module naming issue

## JSON → COMPLETE ✅

### Next Topic

**Exceptions / Error Handling**

```text
try
 ↓
except
 ↓
else
 ↓
finally
 ↓
raise
```
