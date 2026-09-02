# Python Modules & Imports

## 1. What is a Module?

A **module** is a Python file (`.py`) that contains reusable code such as:

- Functions
- Variables
- Classes
- Constants

Example:

```python
# calculator.py

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b
```

Here, `calculator.py` is a **module**.

---

## 2. Why Do We Use Modules?

Modules help us:

- Organize code
- Reuse code
- Keep files smaller
- Separate responsibilities
- Make projects easier to maintain

Instead of putting everything into one file:

```text
app.py
```

we can organize code:

```text
project/
├── main.py
├── calculator.py
├── users.py
└── products.py
```

---

# 3. Import a Module

Use `import` to bring another module into your Python file.

### calculator.py

```python
def add(a, b):
    return a + b
```

### main.py

```python
import calculator

print(calculator.add(4, 5))
```

Output:

```text
9
```

### Syntax

```python
import module_name
```

Then access its members using:

```python
module_name.function_name()
```

---

# 4. Import a Module with an Alias

We can give a module a shorter name using `as`.

```python
import calculator as cal

print(cal.add(4, 5))
```

Here:

```text
calculator → original module name
cal        → alias
```

This is useful when a module name is long or commonly given a short name.

---

# 5. Import Specific Functions

Instead of importing the entire module:

```python
import calculator
```

we can import only the functions we need.

```python
from calculator import add

print(add(4, 5))
```

Now we don't need:

```python
calculator.add()
```

We can directly use:

```python
add()
```

---

# 6. Import Multiple Functions

We can import multiple functions from the same module.

```python
from calculator import add, multiply, divide, subtract

print(add(4, 5))
print(multiply(4, 5))
print(divide(4, 5))
print(subtract(4, 5))
```

Output:

```text
9
20
0.8
-1
```

---

# 7. Import Everything

Python allows:

```python
from calculator import *
```

This imports everything from the module.

However, **avoid this in professional code** because it makes it unclear where names came from and can cause naming conflicts.

Prefer:

```python
from calculator import add, subtract
```

---

# 8. Python Built-in Modules

Python provides many modules that we can use without installing them.

### math

```python
import math

print(math.sqrt(25))
```

Output:

```text
5.0
```

### random

```python
import random

number = random.randint(1, 10)

print(number)
```

### datetime

```python
import datetime

print(datetime.datetime.now())
```

These are part of Python's standard library.

---

# 9. Module vs Function

Understand the difference:

```text
calculator.py
     ↓
   Module
     ↓
add()
     ↓
Function
```

For example:

```python
import calculator

calculator.add(10, 5)
```

Here:

```text
calculator → module
add        → function
```

---

# 10. Real Project Example

A small project might look like:

```text
project/
│
├── main.py
├── calculator.py
├── users.py
└── products.py
```

### users.py

```python
def create_user(name):
    return f"User {name} created"
```

### main.py

```python
from users import create_user

print(create_user("Ali"))
```

Output:

```text
User Ali created
```

This allows different parts of the application to stay separated.

---

# 11. Import Styles

### Style 1 — Import the whole module

```python
import calculator

calculator.add(4, 5)
```

### Style 2 — Import with alias

```python
import calculator as cal

cal.add(4, 5)
```

### Style 3 — Import specific functions

```python
from calculator import add

add(4, 5)
```

### Style 4 — Import multiple functions

```python
from calculator import add, subtract, multiply

add(4, 5)
subtract(10, 5)
multiply(3, 4)
```

---

# 12. Our Practice

### calculator.py

```python
def add(a, b):
    return a + b


def multiply(a, b):
    return a * b


def divide(a, b):
    return a / b


def subtract(a, b):
    return a - b
```

### main.py

```python
from calculator import add, multiply, divide, subtract


print("hello", add(4, 5))
print("hello", multiply(4, 5))
print("hello", divide(4, 5))
print("hello", subtract(4, 5))
```

Output:

```text
hello 9
hello 20
hello 0.8
hello -1
```

---

# 13. Interview Questions

### Q1. What is a Python module?

A module is a Python `.py` file containing reusable code such as functions, classes, and variables.

### Q2. How do you import a module?

```python
import calculator
```

### Q3. How do you import a specific function?

```python
from calculator import add
```

### Q4. How do you give a module an alias?

```python
import calculator as cal
```

### Q5. What is the difference between `import` and `from ... import`?

```python
import calculator
```

imports the module, so we access its members using:

```python
calculator.add()
```

Whereas:

```python
from calculator import add
```

imports the specific function, allowing:

```python
add()
```

### Q6. Should we use `from module import *`?

Generally, **no**. Explicit imports are clearer and safer.

---

# 14. Key Takeaway

Remember:

```text
Module = Python file
Import = Bring code from another module
```

Main patterns:

```python
import module
```

```python
import module as alias
```

```python
from module import function
```

```python
from module import function1, function2
```

---

# Progress

```text
Python Fundamentals
├── Variables & Data Types     ✅
├── Strings                   ✅
├── Operators                 ✅
├── Conditions                ✅
├── Loops                     ✅
├── Functions                 ✅
├── Lists                     ✅
├── Tuples                    ✅
├── Dictionaries              ✅
├── Sets                      ✅
├── JSON                      ✅
└── Exceptions                ✅

Professional Python
├── Modules & Imports         ✅
├── Packages & Structure      ⏳ NEXT
├── venv                      ⏳
├── pip                       ⏳
├── requirements.txt          ⏳
├── OOP                       ⏳
├── Type Hints                ⏳
├── Dataclasses               ⏳
├── UUID                      ⏳
├── Datetime                  ⏳
├── Enum                      ⏳
├── async/await               ⏳
├── Logging                   ⏳
├── Environment Variables     ⏳
├── Clean Structure           ⏳
└── Testing Basics            ⏳
```
