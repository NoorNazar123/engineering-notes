# Python - Lesson 01: Variables & Data Types

## 🎯 Learning Objectives

- Understand variables and basic data types.
- Print output using `print()`.
- Format strings with f-strings.
- Reassign variables.
- Follow Python naming conventions.
- Use `type()` to check data types.

---

# 📚 Topics Covered

- Variables
- `str`
- `int`
- `float`
- `bool`
- `print()`
- f-string
- Variable Reassignment
- Variable Naming (`snake_case`)
- Constants (Convention)
- `type()`

---

# 📌 Quick Notes

### Variable

A **named container** that stores a value. Its value can be updated during program execution.

### `str`

Stores **text** inside quotes.

```python
name = "Noor"
```

### `int`

Stores **whole numbers**.

```python
age = 25
```

### `float`

Stores **decimal numbers**.

```python
height = 5.8
```

### `bool`

Stores only `True` or `False`.

```python
is_student = True
```

### `print()`

Displays output on the terminal.

### f-string

The recommended way to combine text and variables.

```python
print(f"Hello {name}")
```

### Variable Reassignment

Updates the value of an existing variable.

```python
name = "Noor"
name = "Ali"
```

### Variable Naming

- Use **snake_case**
- Use meaningful names
- Avoid spaces and special characters

✅ `student_name`

❌ `student-name`

❌ `my Name`

### Constants (Convention)

Python has **no built-in constants**.

Use **UPPER_CASE** by convention.

```python
PI = 3.14159
```

### `type()`

Returns the data type of a value.

```python
print(type(name))
```

---

# ❌ Common Mistakes

- Forgetting quotes around strings.
- Using spaces in variable names.
- Using `-` instead of `_`.
- Mixing `str` and `int` using `+`.
- Using meaningless variable names.
- Changing constant values.

---

# 💼 Interview Notes

### What is a Variable?

A variable is a **named container** that stores a value. It allows data to be stored, accessed, and updated during program execution.

---

### What is Variable Reassignment?

Variable reassignment is the process of **updating the value of an existing variable**.

```python
name = "Noor"
name = "Ali"
```

---

### Why use Meaningful Variable Names?

Meaningful variable names improve:

- Readability
- Maintainability
- Collaboration

---

### What is `snake_case`?

`snake_case` is Python's standard naming convention where **words are separated using underscores (`_`)**.

Example:

```python
student_name
course_fee
```

---

### Does Python have Constants?

No. Python has **no built-in constant type**. Developers use **UPPER_CASE** by convention to indicate values that should not change.

---

### What does `type()` do?

The `type()` function **returns the data type** of a value or variable.

---

### Difference between `int` and `float`

| `int`         | `float`         |
| ------------- | --------------- |
| Whole numbers | Decimal numbers |

---

### What is Boolean?

A Boolean is a data type that stores only **two values:** `True` or `False`. It is mainly used in decision-making and conditional statements.

---

### Why use f-strings?

f-strings are the **recommended** way to format strings because they are:

- More readable
- Easier to maintain
- Faster than traditional string formatting

---

# 💡 Senior Engineer Notes

- Variables store **references** to values.
- Write code for humans, not just computers.
- Prefer meaningful variable names.
- Follow Python's `snake_case` convention (PEP 8).
- Use `UPPER_CASE` for constants.
- Prefer f-strings over string concatenation.

---

# ⚡ 30-Second Revision

- Variable → Named container for data.
- Variables can be reassigned.
- `str` → Text
- `int` → Whole numbers
- `float` → Decimal numbers
- `bool` → `True` / `False`
- `print()` → Displays output
- `type()` → Returns data type
- `snake_case` → Python naming standard
- `UPPER_CASE` → Constant convention
- f-strings → Best way to format strings

---

# 🚀 Next Lesson

- Arithmetic Operators
