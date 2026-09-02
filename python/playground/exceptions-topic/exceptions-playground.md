# Python Exceptions — Complete Backend Notes

## Goal

Learn how to detect, handle, raise, and manage errors in Python programs.

Exception handling is especially important in backend development because invalid input, database problems, missing files, authentication failures, and other runtime problems must be handled safely.

---

# 1. What is an Exception?

An **exception** is an error that occurs while a program is running.

Example:

```python
result = 10 / 0
```

Python raises:

```text
ZeroDivisionError
```

Without handling the exception, the program stops.

---

# 2. `try`

Put code that might cause an exception inside `try`.

```python
try:
    result = 10 / 0
```

Think:

```text
try
 ↓
Run risky code
```

---

# 3. `except`

`except` handles an exception raised inside `try`.

```python
try:
    result = 10 / 0

except:
    print("Something went wrong")
```

Flow:

```text
try
 ↓
Error?
 ├── No  → continue
 └── Yes → except
```

---

# 4. Specific Exceptions

Prefer catching the specific exception when you know what can go wrong.

```python
try:
    result = 10 / 0

except ZeroDivisionError:
    print("Cannot divide by zero")
```

This is better than:

```python
except:
```

because it does not hide unrelated errors.

---

# 5. `as error`

You can capture the exception object.

```python
try:
    result = 10 / 0

except ZeroDivisionError as error:
    print(error)
```

Here:

```text
ZeroDivisionError → exception type
error             → variable containing the exception
```

You can call the variable anything:

```python
except ZeroDivisionError as e:
    print(e)
```

or:

```python
except ZeroDivisionError as error:
    print(error)
```

Both are valid.

---

# 6. Common Built-in Exceptions

| Exception             | Meaning                        | Example               |
| --------------------- | ------------------------------ | --------------------- |
| `ValueError`          | Invalid value                  | `int("hello")`        |
| `TypeError`           | Wrong type                     | `"10" + 5`            |
| `KeyError`            | Missing dictionary key         | `user["email"]`       |
| `IndexError`          | Invalid list index             | `users[5]`            |
| `ZeroDivisionError`   | Division by zero               | `10 / 0`              |
| `FileNotFoundError`   | File doesn't exist             | `open("missing.txt")` |
| `AttributeError`      | Attribute/method doesn't exist | `"hello".append()`    |
| `NameError`           | Variable doesn't exist         | `print(username)`     |
| `ImportError`         | Import problem                 | invalid import        |
| `ModuleNotFoundError` | Module doesn't exist           | `import xyz`          |

You don't need to memorize every Python exception.

When an unhandled error occurs, Python's traceback tells you the exception type.

---

# 7. Multiple `except` Blocks

Different exceptions can have different handling.

```python
try:
    number = int("hello")
    result = 10 / number

except ValueError:
    print("Invalid number")

except ZeroDivisionError:
    print("Cannot divide by zero")
```

Python runs the matching `except`.

---

# 8. Multiple Exceptions in One `except`

If different errors need the same handling:

```python
try:
    number = int("hello")

except (ValueError, TypeError) as error:
    print("Invalid input:", error)
```

The exceptions are placed inside a tuple.

---

# 9. `else`

`else` runs **only when the `try` block succeeds**.

```python
try:
    result = 10 / 2

except ZeroDivisionError:
    print("Cannot divide by zero")

else:
    print("Success:", result)
```

Think:

```text
try
 ↓
Error?
 ├── Yes → except
 └── No  → else
```

Memory:

> `else` = "The operation succeeded."

---

# 10. `finally`

`finally` runs whether an exception occurs or not.

```python
try:
    result = 10 / 2

except ZeroDivisionError:
    print("Cannot divide by zero")

finally:
    print("Operation finished")
```

Think:

> `finally` = "Run this at the end no matter what."

This is useful for cleanup operations.

---

# 11. Complete Exception Structure

```python
try:
    # risky code

except SomeError as error:
    # handle error

else:
    # success

finally:
    # always runs
```

All four are optional except that `try` must be followed by at least one `except` or `finally`.

---

# 12. `Exception`

`Exception` is a general base class for most normal application exceptions.

```python
try:
    result = 10 / 0

except Exception as error:
    print("Something went wrong:", error)
```

Use specific exceptions when possible:

```python
except ValueError:
```

Use `Exception` as a general fallback when appropriate.

Avoid silently swallowing errors:

```python
except:
    pass
```

---

# 13. `raise`

`raise` manually creates an exception.

```python
age = 15

if age < 18:
    raise ValueError("User must be 18 or older")
```

Why?

Your program may need to reject data because of a **business rule**, even though Python itself doesn't consider the data invalid.

---

# 14. Backend Validation with `raise`

```python
def register_user(age):

    if age < 18:
        raise ValueError("User must be at least 18")

    return "User registered successfully"
```

Then:

```python
try:
    message = register_user(15)

except ValueError as error:
    print("Registration failed:", error)
```

Flow:

```text
User sends data
      ↓
Validate data
      ↓
Invalid?
      ↓
raise
      ↓
exception
      ↓
except
      ↓
handle error
```

This concept becomes very important in FastAPI.

---

# 15. Re-raising an Exception

Sometimes you catch an exception, perform some work such as logging, and then raise it again.

```python
def divide(a, b):

    try:
        return a / b

    except ZeroDivisionError:
        print("Logging: division failed")
        raise
```

A bare:

```python
raise
```

inside an exception handler means:

> Raise the same exception again.

---

# 16. Custom Exceptions

You can create your own exception class.

```python
class AgeError(Exception):
    pass
```

Then:

```python
raise AgeError("User must be 18 or older")
```

Full example:

```python
class AgeError(Exception):
    pass


def create_user(age):

    if age < 18:
        raise AgeError("User must be 18 or older")

    return "User created"


try:
    print(create_user(15))

except AgeError as error:
    print("Registration failed:", error)
```

Custom exceptions make application errors more meaningful.

---

# 17. Exception Chaining

Python allows one exception to be connected to another.

```python
try:
    age = int("hello")

except ValueError as error:
    raise RuntimeError("Could not process user age") from error
```

`from error` means:

> This new exception happened because of the original exception.

This is useful when converting a low-level error into a meaningful application-level error.

---

# 18. `finally` with `return`

`finally` still runs even if `return` is executed.

```python
def test():

    try:
        return "Success"

    finally:
        print("Finally always runs")
```

Output:

```text
Finally always runs
Success
```

---

# 19. Exception Handling with Files

```python
try:
    with open("users.json", "r") as file:
        users = json.load(file)

except FileNotFoundError:
    print("users.json does not exist")
```

Here we combine:

```text
with
+
open()
+
JSON
+
try/except
```

This is a common pattern when working with files.

---

# 20. How to Know Which Exception to Catch?

You don't have to guess.

Run the code.

Python's traceback tells you the exception type.

Example:

```python
user = {"name": "Hammad"}

print(user["email"])
```

Python reports:

```text
KeyError
```

Therefore:

```python
except KeyError:
```

Another:

```python
numbers = [10, 20]

print(numbers[5])
```

Python reports:

```text
IndexError
```

Therefore:

```python
except IndexError:
```

Practical workflow:

```text
Run code
   ↓
Error
   ↓
Read traceback
   ↓
Find exception type
   ↓
Handle that exception
```

---

# 21. Bad vs Good

### ❌ Too broad

```python
try:
    create_user()

except:
    pass
```

This can hide bugs.

### ✅ Better

```python
try:
    create_user()

except ValueError as error:
    print("Invalid user:", error)
```

---

# 22. Backend Exception Pattern

A common structure is:

```python
try:
    data = process_request()

except ValueError as error:
    handle_validation_error(error)

except DatabaseError as error:
    handle_database_error(error)

else:
    return data

finally:
    cleanup()
```

Later, FastAPI will provide more appropriate ways to convert exceptions into HTTP responses.

---

# Interview Questions

### What is an exception?

An exception is an error that occurs during program execution and can be handled using Python's exception-handling mechanisms.

### Why use `try/except`?

To handle runtime errors gracefully instead of allowing the program to terminate unexpectedly.

### Why use specific exceptions?

To handle different types of errors appropriately.

### What does `as error` do?

It stores the exception object in a variable.

### What does `else` do?

Runs when the `try` block completes without an exception.

### What does `finally` do?

Runs whether an exception occurs or not.

### What does `raise` do?

Manually raises an exception.

### What is a custom exception?

A programmer-defined exception class that inherits from an exception such as `Exception`.

### What does bare `raise` do?

It re-raises the currently handled exception.

---

# Quick Revision

```text
try
    ↓
risky code

except
    ↓
handle error

else
    ↓
runs if successful

finally
    ↓
always runs

raise
    ↓
manually create / re-raise exception
```

---

# Backend Priority

⭐⭐⭐⭐⭐

- `try / except`
- Specific exceptions
- `as error`
- `raise`

⭐⭐⭐⭐

- `finally`
- Multiple `except`
- Custom exceptions
- `Exception`

⭐⭐⭐

- Exception chaining

---

# Status

- [x] `try`
- [x] `except`
- [x] Specific exceptions
- [x] `as error`
- [x] Multiple `except`
- [x] Multiple exceptions in one `except`
- [x] Common built-in exceptions
- [x] `else`
- [x] `finally`
- [x] `Exception`
- [x] `raise`
- [x] Re-raise
- [x] Custom exceptions
- [x] Exception chaining
- [x] File + exception handling
- [x] Backend validation
- [x] Practical programs
- [x] Interview preparation

## EXCEPTIONS → COMPLETE ✅

### Next Topic

**Modules & Imports**

```text
import
from ... import
as
modules
packages
__name__
project structure
```
