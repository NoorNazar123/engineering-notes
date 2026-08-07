# Python - Lesson 01: Variables & Data Types

## 🎯 Learning Objectives

By the end of this lesson, I can:

- Define a variable.
- Use Python's basic data types.
- Print output using `print()`.
- Format strings using f-strings.
- Reassign variables.
- Follow Python naming conventions.

---

# 📚 Topics Covered

- Variables
- Data Types
  - `str`
  - `int`
  - `float`
  - `bool`
- `print()`
- f-string
- Variable Reassignment
- Variable Naming

---

# 📌 Quick Notes

### Variable

A **named container** that stores a value, which can be accessed and updated during program execution.

### `str` (String)

Stores **text** enclosed in single (`'`) or double (`"`) quotes.

### `int` (Integer)

Stores **whole numbers**.

**Examples:** `25`, `0`, `-10`

### `float`

Stores **decimal (floating-point) numbers**.

**Examples:** `3.14`, `5.8`

### `bool` (Boolean)

Stores only two values:

- `True`
- `False`

Used for decision-making.

### `print()`

Displays output on the terminal.

### f-string

The recommended and most readable way to combine text and variables.

```python
name = "Noor"

print(f"Hello, {name}")
```

### Variable Reassignment

Updates the value of an existing variable.

```python
name = "Noor"

name = "Ali"
```

### Variable Naming

Use **snake_case** and meaningful names.

✅ Good

```python
user_name
student_age
is_verified
```

❌ Bad

```python
a
x1
my Name
123name
```

---

# ❌ Common Mistakes

- Forgetting quotes around strings.
- Using spaces in variable names.
- Mixing `str` and `int` using `+`.
- Using meaningless variable names.

---

# 💼 Interview Notes

### What is a Variable?

A named container used to store data.

### Why do we use Variables?

To store, reuse, and update data.

### Difference between `int` and `float`?

- `int` → Whole numbers
- `float` → Decimal numbers

### What is Boolean?

A data type that stores only `True` or `False`.

### Why use f-strings?

Because they are more readable and easier to maintain than string concatenation.

---

# 💡 Senior Engineer Notes

- A variable stores a **reference** to a value.
- Use meaningful variable names.
- Follow Python's `snake_case` naming convention.
- Prefer f-strings over string concatenation.
- Write code that is easy for humans to read.

---

# ⚡ 30-Second Revision

- Variable = Named container for data.
- `str` = Text.
- `int` = Whole numbers.
- `float` = Decimal numbers.
- `bool` = `True` or `False`.
- `print()` displays output.
- f-strings are recommended.
- Variables can be reassigned.
- Use `snake_case`.

---

# 🚀 Next Lesson

- Variables in Depth
- Operators
