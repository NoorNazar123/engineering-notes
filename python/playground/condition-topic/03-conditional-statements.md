# Python Level 1 — Conditional Statements Playground

> **Goal:** Quickly revise Python conditional logic before interviews and backend development.

---

## 1. What is a Condition?

A **condition** is an expression that evaluates to either:

```text
True
```

or

```text
False
```

We use conditions to make decisions in a program.

### Mental Model

```text
Condition
    ↓
True / False
    ↓
Decision
    ↓
Execute appropriate code
```

### Real-world example

Login system:

```text
Enter password
      ↓
Does password match?
   /        \
 True       False
  ↓           ↓
Login       Deny access
```

---

# 2. `if`

`if` executes a block of code when its condition is `True`.

```python
age = 20

if age >= 18:
    print("Adult")
```

### Syntax

```python
if condition:
    # code
```

### Important

Python uses:

- `:` after the condition
- indentation to define the code block

---

# 3. `else`

`else` executes when the `if` condition is `False`.

```python
age = 15

if age >= 18:
    print("Adult")
else:
    print("Minor")
```

Output:

```text
Minor
```

### Mental Model

```text
Condition
   ↓
 ┌───────┐
True   False
 ↓       ↓
if      else
```

---

# 4. `elif`

`elif` means:

> If the previous condition is false, check this condition.

```python
marks = 85

if marks >= 90:
    print("A")
elif marks >= 80:
    print("B")
elif marks >= 70:
    print("C")
else:
    print("F")
```

Output:

```text
B
```

### Important Rule

Python checks an `if / elif / else` chain **from top to bottom**.

The **first condition that evaluates to `True` wins**.

---

# 5. Condition Order

Bad ordering:

```python
marks = 85

if marks >= 60:
    print("D")
elif marks >= 80:
    print("B")
```

Output:

```text
D
```

Why?

```text
85 >= 60 → True
     ↓
Print D
     ↓
Stop checking the chain
```

Even though:

```text
85 >= 80 → True
```

Python never reaches it.

### Better

```python
if marks >= 90:
    print("A")
elif marks >= 80:
    print("B")
elif marks >= 70:
    print("C")
else:
    print("F")
```

---

# 6. Comparison Operators in Conditions

```python
==    # equal value
!=    # not equal
>     # greater than
<     # less than
>=    # greater than or equal
<=    # less than or equal
```

Example:

```python
age = 20

if age >= 18:
    print("Adult")
```

The expression:

```python
age >= 18
```

produces:

```text
True
```

---

# 7. Logical Operators

## `and`

Both conditions must be truthy.

```python
age = 20
has_id = True

if age >= 18 and has_id:
    print("Allowed")
```

Truth table:

```text
True  and True  → True
True  and False → False
False and True  → False
False and False → False
```

---

## `or`

At least one condition must be truthy.

```python
is_admin = False
is_manager = True

if is_admin or is_manager:
    print("Access granted")
```

```text
True  or True  → True
True  or False → True
False or True  → True
False or False → False
```

---

## `not`

Reverses the Boolean value.

```python
is_logged_in = False

if not is_logged_in:
    print("Please login")
```

```text
not True  → False
not False → True
```

---

# 8. Python vs JavaScript

| JavaScript          | Python          |     |      |
| ------------------- | --------------- | --- | ---- |
| `if (condition) {}` | `if condition:` |     |      |
| `else if`           | `elif`          |     |      |
| `&&`                | `and`           |     |      |
| `                   |                 | `   | `or` |
| `!`                 | `not`           |     |      |
| `{}` blocks         | indentation     |     |      |
| `console.log()`     | `print()`       |     |      |

### JavaScript

```javascript
if (age >= 18 && hasId) {
  console.log("Allowed");
}
```

### Python

```python
if age >= 18 and has_id:
    print("Allowed")
```

---

# 9. Nested `if`

A nested `if` is an `if` statement inside another `if`.

```python
age = 25
has_id = True

if age >= 18:
    if has_id:
        print("Entry allowed")
```

Mental model:

```text
First condition
      ↓
    True?
      ↓
Second condition
      ↓
    True?
      ↓
Execute
```

### When to use?

Nested conditions can be useful when the second decision depends on the first.

For simple conditions where both requirements must be true, `and` can be cleaner:

```python
if age >= 18 and has_id:
    print("Allowed")
```

---

# 10. Truthy and Falsy

Python evaluates many values as either truthy or falsy when used as conditions.

### Common falsy values

```python
False
None
0
0.0
""
[]
()
{}
set()
```

### Examples

```python
name = ""

if name:
    print("Has name")
else:
    print("No name")
```

Output:

```text
No name
```

Because:

```text
"" → falsy
```

---

### Non-empty values are generally truthy

```python
name = "Noor"

if name:
    print("Has name")
```

Output:

```text
Has name
```

Similarly:

```python
items = ["Book"]

if items:
    print("Items exist")
```

---

## Useful Python pattern

Instead of:

```python
if len(items) > 0:
    print("Items exist")
```

Python code commonly uses:

```python
if items:
    print("Items exist")
```

---

# 11. `None` vs `False`

Important distinction:

```python
user = None
```

`None` is falsy:

```python
if user:
    print("User exists")
```

This condition is false.

But:

```python
if user is None:
    print("User not found")
```

is `True`.

Why?

Because `is` checks identity.

---

# 12. `==` vs `is`

## `==`

Checks whether two objects have equal values.

```python
a = [1, 2, 3]
b = [1, 2, 3]

print(a == b)
```

Output:

```text
True
```

They contain the same values.

---

## `is`

Checks whether two references refer to the **same object**.

```python
a = [1, 2, 3]
b = [1, 2, 3]

print(a is b)
```

Output:

```text
False
```

They are two separate list objects.

### Mental Model

```text
== → Same value/content?
is → Same exact object?
```

---

## Same object example

```python
a = [1, 2, 3]
b = a

print(a == b)
print(a is b)
```

Output:

```text
True
True
```

Both variables refer to the same list object.

---

# 13. `is None` — Important Backend Pattern

You will frequently see:

```python
if user is None:
    print("User not found")
```

Or:

```python
if user is not None:
    print("User exists")
```

### Why `is`?

We are checking whether the object is specifically `None`.

Don't use:

```python
if user == None:
```

Prefer:

```python
if user is None:
```

---

# 14. Age Exercise

### Original exercise

```text
18 or above → Adult
13–17       → Teenager
Below 13    → Child
```

### My implementation

```python
age = 24

if age >= 18:
    print("adult")
elif age >= 13 and age <= 17:
    print("Teenager")
elif age < 13:
    print("children")
else:
    print("Invalid age")
```

### Improved Python version

```python
age = 24

if age >= 18:
    print("Adult")
elif age >= 13:
    print("Teenager")
else:
    print("Child")
```

### With invalid negative age handling

```python
age = 24

if age < 0:
    print("Invalid age")
elif age >= 18:
    print("Adult")
elif age >= 13:
    print("Teenager")
else:
    print("Child")
```

---

# 15. Temperature Exercise

```python
temperature = 35

if temperature >= 40:
    print("Very Hot")
elif temperature >= 30:
    print("Hot")
elif temperature >= 20:
    print("Normal")
else:
    print("Cold")
```

Output:

```text
Hot
```

Reason:

```text
35 >= 40 → False
35 >= 30 → True
        ↓
       Hot
        ↓
Stop checking the chain
```

---

# 16. Debugging Exercise

### Broken code

```python
age = 20

if age >= 18
    print("Adult")
else:
    print("Minor")
```

### Problem

Missing `:` after the `if` condition.

### Correct code

```python
age = 20

if age >= 18:
    print("Adult")
else:
    print("Minor")
```

Output:

```text
Adult
```

---

# 17. Boolean Playground

### A

```python
age = 20
has_id = True

if age >= 18 and has_id:
    print("A")
```

Output:

```text
A
```

Reason:

```text
True AND True → True
```

---

### B

```python
age = 16
has_id = True

if age >= 18 and has_id:
    print("B")
```

Output:

```text
Nothing
```

Reason:

```text
False AND True → False
```

---

### C

```python
is_admin = False
is_manager = True

if is_admin or is_manager:
    print("C")
```

Output:

```text
C
```

Reason:

```text
False OR True → True
```

---

### D

```python
is_logged_in = False

if not is_logged_in:
    print("D")
```

Output:

```text
D
```

Reason:

```text
not False → True
```

---

# 18. Final Assessment

### Question 1

```python
age = 20

if age >= 18:
    print("Adult")
else:
    print("Minor")
```

Output:

```text
Adult
```

---

### Question 2

```python
name = ""

if name:
    print("Has name")
else:
    print("No name")
```

Output:

```text
No name
```

---

### Question 3

```python
age = 20
has_id = False

if age >= 18 and has_id:
    print("Allowed")
else:
    print("Denied")
```

Output:

```text
Denied
```

---

### Question 4

```python
user = None

if user is None:
    print("Not found")
else:
    print("Found")
```

Output:

```text
Not found
```

---

### Question 5

```python
a = [1, 2]
b = [1, 2]

print(a == b)
print(a is b)
```

Output:

```text
True
False
```

Reason:

```text
== → same values
is → different objects
```

---

# 19. Interview Quick Revision

### Q: What is a condition?

> A condition is an expression that evaluates to either `True` or `False`. We use conditions to make decisions in a program.

### Q: What is `if`?

> `if` executes a block of code when its condition is truthy.

### Q: What is `elif`?

> `elif` checks another condition when the previous condition was false.

### Q: What is `else`?

> `else` executes when none of the previous conditions are true.

### Q: How does Python process an `if/elif/else` chain?

> Python evaluates conditions from top to bottom and executes the first condition that evaluates to true.

### Q: What is a nested `if`?

> An `if` statement inside another `if` statement.

### Q: What does `and` mean?

> Both conditions must be truthy.

### Q: What does `or` mean?

> At least one condition must be truthy.

### Q: What does `not` do?

> It reverses a Boolean value.

### Q: What are truthy/falsy values?

> Values that Python evaluates as true or false when used in a Boolean context.

### Q: Difference between `==` and `is`?

> `==` compares values, while `is` checks whether two references refer to the same object.

### Q: Why use `is None`?

> Because `None` is a specific singleton object, and `is None` checks whether a reference is actually `None`.

---

# 20. Key Rules to Remember

```text
if       → make a decision
elif     → check another condition
else     → fallback
and      → both
or       → at least one
not      → reverse
==       → same value
is       → same object
None     → absence of a value
""       → falsy
[]       → falsy
{}       → falsy
0        → falsy
False    → falsy
```

### Most important mental models

```text
Condition
    ↓
True / False
```

```text
if / elif / else
    ↓
Top → Bottom
    ↓
First True wins
```

```text
== → Same value?
is → Same object?
```

```text
if items:
    ↓
"Does this contain something?"
```

---

## Backend Connection

Conditional logic will later appear everywhere in your FastAPI applications:

```text
Request
   ↓
Validate input
   ↓
Is data valid?
   ↓
Authenticate user
   ↓
Is user authenticated?
   ↓
Authorize user
   ↓
Does user have permission?
   ↓
Execute business logic
```

So although this is a Python fundamentals topic, **conditional logic is directly connected to backend engineering.**
