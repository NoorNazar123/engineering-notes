# Python Tuples — Playground

## Goal

Understand Python Tuples and know when to use them instead of Lists.

---

# What is a Tuple?

A **tuple** is an ordered collection that is **immutable**.

```python
backend = (
    "Python",
    "FastAPI",
    "PostgreSQL"
)
```

### Simple definition

> A Tuple is an ordered, immutable collection of values.

---

# List vs Tuple

| Feature           | List | Tuple |
| ----------------- | ---- | ----- |
| Ordered           | ✅   | ✅    |
| Mutable           | ✅   | ❌    |
| Indexing          | ✅   | ✅    |
| Negative indexing | ✅   | ✅    |
| Slicing           | ✅   | ✅    |
| Duplicates        | ✅   | ✅    |
| Looping           | ✅   | ✅    |
| `append()`        | ✅   | ❌    |
| `remove()`        | ✅   | ❌    |
| `sort()`          | ✅   | ❌    |

### Mental Model

```text
List
→ ordered + changeable

Tuple
→ ordered + cannot change
```

---

# 1. Creating a Tuple

```python
skills = (
    "Python",
    "FastAPI",
    "Docker"
)
```

---

# 2. Indexing

```python
skills[0]
skills[1]
```

Tuple indexing works the same way as List indexing.

---

# 3. Negative Indexing

```python
skills[-1]
```

Gets the last item.

```text
-1 → last
-2 → second last
```

---

# 4. Slicing

Tuples support slicing just like Lists.

```python
skills[1:3]
```

---

# 5. `len()`

Get the number of items:

```python
len(skills)
```

---

# 6. `count()`

Count how many times a value appears:

```python
skills.count("Python")
```

---

# 7. `index()`

Find the index of a value:

```python
skills.index("FastAPI")
```

---

# 8. Looping

```python
for skill in skills:
    print(skill)
```

---

# 9. Tuple Unpacking

A tuple can be unpacked into variables:

```python
user = ("Hammad", 20, "Developer")

name, age, role = user
```

Now:

```text
name → Hammad
age  → 20
role → Developer
```

This is called **tuple unpacking**.

---

# 10. Immutability

You cannot change an existing tuple item:

```python
user = ("Hammad", 20)

user[0] = "Ali"
```

❌ This causes a `TypeError`.

The tuple itself cannot be modified.

---

# 11. Tuple Can Contain Different Types

```python
data = (
    "Hammad",
    20,
    True
)
```

A tuple can contain different Python data types.

---

# 12. Tuple Can Contain Mutable Data

A tuple can contain a List:

```python
user = (
    "Hammad",
    ["Python", "FastAPI"]
)
```

You can access the list:

```python
user[1][0]
```

The important point is that **the tuple structure itself cannot be changed**.

---

# Important Tuple Methods

For your backend/job-ready stage, remember:

```text
count()
index()
```

And common built-in functions:

```text
len()
```

Tuples also support:

```text
indexing
negative indexing
slicing
looping
unpacking
```

---

# Backend Connection

Tuples are less important than Lists and Dictionaries for your backend journey.

You'll mainly encounter them when:

- Returning multiple values from a function
- Unpacking data
- Working with database/query results
- Representing fixed collections of values

Example:

```python
user = ("Hammad", 20, "Developer")

name, age, role = user
```

---

# Interview Definition

> A tuple is an ordered and immutable collection in Python. Unlike a list, a tuple cannot be modified after it is created.

### Key Difference

```text
List  → mutable
Tuple → immutable
```

---

# Status

- [x] Create Tuple
- [x] Indexing
- [x] Negative Indexing
- [x] Slicing
- [x] `len()`
- [x] `count()`
- [x] `index()`
- [x] Looping
- [x] Tuple Unpacking
- [x] Immutability
- [x] Nested List inside Tuple

**Tuple → BASIC COMPLETE ✅**
