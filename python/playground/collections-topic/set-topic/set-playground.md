# Python Sets — Playground

## Goal

Understand the basic Python Set operations needed for backend development.

---

# What is a Set?

A **Set** is a mutable collection that stores **unique values**.

```python
roles = {"admin", "user", "editor"}
```

### Interview Definition

> A Set is an unordered collection of unique values in Python.

---

# 1. Create a Set

```python
roles = {"admin", "user", "editor"}
```

---

# 2. Duplicates

Sets automatically remove duplicate values.

```python
roles = {"admin", "user", "admin", "editor", "user"}

print(roles)
```

Only unique values remain.

```text
{"admin", "user", "editor"}
```

The order is not guaranteed.

---

# 3. Empty Set

⚠️ Important:

```python
empty = {}
```

This creates an **empty dictionary**, not a Set.

Use:

```python
empty = set()
```

---

# 4. Add One Item

Use `add()`:

```python
skills.add("PostgreSQL")
```

### Remember

```text
add() → one item
```

---

# 5. Add Multiple Items

Use `update()`:

```python
skills.update(["Git", "Linux"])
```

### Remember

```text
update() → multiple items
```

---

# 6. Remove an Item

Use `remove()`:

```python
skills.remove("Git")
```

If the item doesn't exist, `remove()` raises an error.

---

# 7. `discard()`

Use `discard()` when you don't want an error if the item doesn't exist.

```python
skills.discard("Git")
```

### Difference

```text
remove()  → error if missing
discard() → no error if missing
```

---

# 8. Check if an Item Exists

Use `in`:

```python
if "Python" in skills:
    print("Python found")
```

---

# 9. Loop Through a Set

```python
for skill in skills:
    print(skill)
```

Remember that Sets are unordered, so don't depend on the output order.

---

# 10. Length

Use `len()`:

```python
len(skills)
```

---

# 11. Clear

Remove everything:

```python
skills.clear()
```

Result:

```text
set()
```

---

# 12. List → Set

One of the most useful Set operations:

```python
roles = ["admin", "user", "admin", "editor"]

unique_roles = set(roles)
```

Useful when you need to remove duplicates.

```text
List
 ↓
Set
 ↓
Unique values
```

---

# 13. Set → List

You can convert a Set back to a List:

```python
skills_list = list(skills)
```

Remember that Set ordering should not be relied upon.

---

# 14. Union

Union combines two Sets.

```python
frontend = {"HTML", "CSS", "JavaScript"}
backend = {"Python", "FastAPI", "JavaScript"}

all_skills = frontend | backend
```

`JavaScript` appears only once.

### Meaning

> Everything from both Sets.

You can also use:

```python
frontend.union(backend)
```

---

# 15. Intersection

Find values that exist in both Sets.

```python
common = frontend & backend
```

### Meaning

> What do both Sets have in common?

---

# 16. Difference

Find values that exist in the first Set but not the second.

```python
only_frontend = frontend - backend
```

### Meaning

> What does Frontend have that Backend doesn't?

---

# Important Set Operations

```python
A | B    # Union → everything
A & B    # Intersection → common
A - B    # Difference → A only
```

These three are enough for your current backend stage.

---

# Important Set Methods

| Method      | Purpose                       |
| ----------- | ----------------------------- |
| `add()`     | Add one item                  |
| `update()`  | Add multiple items            |
| `remove()`  | Remove item; error if missing |
| `discard()` | Remove item safely            |
| `clear()`   | Remove everything             |
| `copy()`    | Create a copy                 |

Common operations:

```python
len()
in
set()
list()
```

---

# Set vs List vs Tuple vs Dictionary

| Feature      | List       | Tuple            | Set           | Dictionary      |
| ------------ | ---------- | ---------------- | ------------- | --------------- |
| Ordered      | ✅         | ✅               | ❌            | Insertion order |
| Mutable      | ✅         | ❌               | ✅            | ✅              |
| Duplicates   | ✅         | ✅               | ❌            | Keys ❌         |
| Indexing     | ✅         | ✅               | ❌            | Key-based       |
| Main purpose | Collection | Fixed collection | Unique values | Key-value data  |

### Mental Model

```text
List
→ ordered + changeable

Tuple
→ ordered + immutable

Set
→ unique values

Dictionary
→ key → value
```

---

# Backend Use Cases

Sets are useful when you need:

- Unique roles
- Unique permissions
- Remove duplicate data
- Check membership
- Compare two collections

Example:

```python
roles = ["admin", "user", "admin", "editor"]

unique_roles = set(roles)

print(unique_roles)
```

---

# Backend Importance

For your current job-ready backend goal:

```text
Dictionary → ⭐⭐⭐⭐⭐
List       → ⭐⭐⭐⭐⭐
Set        → ⭐⭐⭐
Tuple      → ⭐⭐
```

You don't need advanced Set theory right now.

---

# Interview Revision

### What is a Set?

A collection of unique values.

### Does a Set allow duplicates?

No.

### Can you use indexes?

No.

```python
skills[0]  # ❌
```

### How do you add one item?

```python
skills.add("Python")
```

### How do you add multiple items?

```python
skills.update(["Python", "FastAPI"])
```

### `remove()` vs `discard()`?

```text
remove()  → error if item doesn't exist
discard() → no error if item doesn't exist
```

### How do you remove duplicates from a List?

```python
unique = set(my_list)
```

### How do you combine two Sets?

```python
A | B
```

### How do you find common values?

```python
A & B
```

### How do you find values only in A?

```python
A - B
```

---

# Status

- [x] Create Set
- [x] Unique values
- [x] List → Set
- [x] `add()`
- [x] `update()`
- [x] `remove()`
- [x] `discard()`
- [x] `in`
- [x] Loop
- [x] `len()`
- [x] `clear()`
- [x] Union
- [x] Intersection
- [x] Difference
- [x] Set → List

**Sets → BASIC COMPLETE ✅**

Next:

```text
Sets ✅
   ↓
🔥 JSON
   ↓
Exceptions
   ↓
Modules
   ↓
OOP
   ↓
Type Hints
   ↓
async/await
   ↓
FASTAPI 🚀
```
