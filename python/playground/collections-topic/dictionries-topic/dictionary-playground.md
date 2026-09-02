# Python Dictionaries

## What is a Dictionary?

A **dictionary** is a mutable collection that stores data in **key-value pairs**.

```python
user = {
    "name": "Hammad",
    "age": 20,
    "role": "Developer"
}
```

Think:

```text
key → value

"name" → "Hammad"
"age"  → 20
"role" → "Developer"
```

Dictionaries are extremely important in backend development because API and JSON data commonly use key-value structures.

---

## 1. Creating a Dictionary

```python
user = {
    "name": "Hammad",
    "age": 20,
    "role": "Developer"
}
```

Empty dictionary:

```python
user = {}
```

---

## 2. Accessing Values

Use the key:

```python
print(user["name"])
print(user["age"])
```

Unlike Lists, dictionaries don't use numeric indexes.

```python
user[0]  # ❌
```

---

## 3. Updating a Value

If the key already exists, its value is changed:

```python
user["role"] = "Senior Developer"
```

---

## 4. Adding a New Key

If the key doesn't exist, Python creates it:

```python
user["city"] = "Karachi"
```

---

## 5. Deleting a Key

```python
del user["city"]
```

---

## 6. Checking if a Key Exists

```python
if "email" in user:
    print("Email exists")
else:
    print("Email not found")
```

`in` checks dictionary **keys**.

---

## 7. `get()`

Safely access a value:

```python
email = user.get("email")
```

If the key doesn't exist, it returns `None`.

You can provide a default:

```python
email = user.get("email", "Email not found")
```

This is useful when working with data where a field may be missing.

---

## 8. `keys()`

Get all keys:

```python
print(user.keys())
```

---

## 9. `values()`

Get all values:

```python
print(user.values())
```

---

## 10. `items()`

Get key-value pairs:

```python
print(user.items())
```

---

## 11. Loop Through Keys

```python
for key in user:
    print(key)
```

---

## 12. Loop Through Values

```python
for value in user.values():
    print(value)
```

---

## 13. Loop Through Keys and Values

```python
for key, value in user.items():
    print(key, value)
```

This is a very common pattern.

---

## 14. `update()`

Add or update multiple key-value pairs:

```python
user.update({
    "role": "Developer",
    "city": "Karachi"
})
```

---

## 15. `pop()`

Remove a specific key:

```python
user.pop("city")
```

`pop()` can also return the removed value:

```python
city = user.pop("city")
print(city)
```

---

## 16. `popitem()`

Remove the last key-value pair:

```python
user.popitem()
```

---

## 17. `setdefault()`

If the key exists, keep its current value.

If it doesn't exist, add it with the default value.

```python
user.setdefault("role", "Developer")
```

---

## 18. Nested Dictionaries

A dictionary can contain another dictionary:

```python
user = {
    "name": "Hammad",
    "address": {
        "city": "Karachi",
        "country": "Pakistan"
    }
}
```

Access nested data:

```python
print(user["address"]["city"])
```

---

## 19. Dictionary Containing a List

```python
user = {
    "name": "Hammad",
    "skills": ["Python", "FastAPI", "Docker"]
}
```

Access a list item:

```python
print(user["skills"][1])
```

Output:

```text
FastAPI
```

---

## 20. List of Dictionaries

Very common in APIs and database results:

```python
users = [
    {"name": "Hammad", "role": "Developer"},
    {"name": "Ali", "role": "Designer"},
    {"name": "Ahmed", "role": "Developer"}
]
```

Loop through them:

```python
for user in users:
    print(user["name"])
```

---

## 21. Filtering Dictionary Data

```python
for user in users:
    if user["role"] == "Developer":
        print(user["name"])
```

Output:

```text
Hammad
Ahmed
```

---

# Important Dictionary Methods

| Method         | Purpose                              |
| -------------- | ------------------------------------ |
| `get()`        | Safely get a value                   |
| `keys()`       | Get keys                             |
| `values()`     | Get values                           |
| `items()`      | Get key + value                      |
| `update()`     | Add/update multiple items            |
| `pop()`        | Remove a specific key                |
| `popitem()`    | Remove last key-value pair           |
| `setdefault()` | Get existing value or create default |
| `clear()`      | Remove everything                    |
| `copy()`       | Create a copy                        |

---

# Backend Connection

Dictionary knowledge is essential for:

```text
Python Dictionary
       ↓
JSON
       ↓
REST API
       ↓
FastAPI
       ↓
Database/API responses
```

For backend development, focus especially on:

```python
user["name"]
user.get("email")
user.keys()
user.values()
user.items()

user.update(...)
user.pop(...)

for key, value in user.items():
    ...
```

---

# Key Mental Model

```text
List
→ index → value

Tuple
→ index → value
→ immutable

Dictionary
→ key → value

Set
→ unique values
```

---

# Interview Definition

> A dictionary in Python is a mutable collection of key-value pairs. Keys are unique and are used to access their corresponding values. Dictionaries are commonly used for structured data, configuration, JSON, and API data.
