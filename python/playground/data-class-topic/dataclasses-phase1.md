# Python Dataclasses

## What is a Dataclass?

A **dataclass** is a Python class designed to reduce repetitive boilerplate code when a class mainly stores data.

```python
from dataclasses import dataclass

@dataclass
class User:
    name: str
    age: int
```

Python automatically generates common methods such as `__init__()` and a useful `__repr__()`.

---

## Normal Class vs Dataclass

### Normal Class

```python
class User:
    def __init__(self, name, age):
        self.name = name
        self.age = age
```

### Dataclass

```python
@dataclass
class User:
    name: str
    age: int
```

**Key idea:**

> Dataclass = shorter, cleaner class for data-focused objects.

A dataclass is still a normal Python class and can contain methods.

---

# 1. `@dataclass`

Import it:

```python
from dataclasses import dataclass
```

Use it:

```python
@dataclass
class Product:
    name: str
    price: float
```

Create an object:

```python
product = Product("Laptop", 1000.0)
```

---

# 2. Type Hints

Dataclasses commonly use type hints:

```python
@dataclass
class User:
    name: str
    age: int
```

Important:

> Type hints do NOT automatically enforce types at runtime.

---

# 3. Default Values

A field can have a default value:

```python
@dataclass
class Product:
    name: str
    price: float
    quantity: int = 1
```

Now both work:

```python
Product("Laptop", 1000.0)
Product("Laptop", 1000.0, 5)
```

If quantity isn't provided:

```text
quantity = 1
```

---

# 4. Methods in Dataclasses

A dataclass can have normal methods.

```python
@dataclass
class Product:
    name: str
    price: float
    quantity: int = 1

    def total_cost(self) -> float:
        return self.price * self.quantity
```

```python
product = Product("Laptop", 1000, 2)

print(product.total_cost())
```

Output:

```text
2000
```

**Important:**

> Dataclass does not mean "no methods." It is still a class.

---

# 5. `field()`

Import:

```python
from dataclasses import field
```

`field()` allows us to customize a dataclass field.

The most important use for beginners is:

```python
field(default_factory=list)
```

---

# 6. Mutable Defaults

Mutable Python types include:

```text
list
dict
set
```

For a dataclass field that needs a new mutable value for every object, use `default_factory`.

```python
@dataclass
class User:
    name: str
    skills: list[str] = field(default_factory=list)
```

Now:

```python
user1 = User("Noor")
user2 = User("Ali")

user1.skills.append("Python")
```

Result:

```text
user1.skills → ["Python"]
user2.skills → []
```

Each object gets its **own separate list**.

---

# 7. `default_factory`

`default_factory=list` means:

> Call `list()` to create a new list whenever a new object is created.

```python
skills: list[str] = field(default_factory=list)
```

Equivalent idea:

```text
User 1 → new []
User 2 → new []
User 3 → new []
```

For dictionaries:

```python
settings: dict = field(default_factory=dict)
```

For sets:

```python
tags: set = field(default_factory=set)
```

---

# 8. Normal Collection Methods Still Work

`default_factory` creates a **normal Python collection**.

List:

```python
skills: list[str] = field(default_factory=list)
```

You can use:

```python
skills.append(...)
skills.extend(...)
skills.remove(...)
skills.pop(...)
```

Dictionary:

```python
settings: dict = field(default_factory=dict)
```

You can use:

```python
settings["theme"] = "dark"
settings.update(...)
settings.get(...)
```

Set:

```python
tags: set = field(default_factory=set)
```

You can use:

```python
tags.add(...)
tags.update(...)
tags.remove(...)
```

---

# 9. Immutable vs Mutable Defaults

### Immutable

Normal defaults are fine:

```python
name: str = "Noor"
age: int = 25
coordinates: tuple = (0, 0)
```

### Mutable

Use `default_factory`:

```python
skills: list = field(default_factory=list)
settings: dict = field(default_factory=dict)
tags: set = field(default_factory=set)
```

### Remember

> `field(default_factory=...)` is mainly used to create a fresh mutable value for every object.

---

# 10. `frozen=True`

A frozen dataclass prevents changing fields after object creation.

```python
@dataclass(frozen=True)
class User:
    name: str
    age: int
```

```python
user = User("Noor", 25)

user.age = 26  # Error
```

Normal dataclass:

```python
@dataclass
class User:
    name: str
```

Fields can normally be changed.

Frozen:

```python
@dataclass(frozen=True)
class User:
    name: str
```

Fields cannot normally be reassigned.

---

# Dataclass vs OOP

A dataclass does **not replace OOP**.

```text
OOP
│
├── Classes
├── Objects
├── Encapsulation
├── Inheritance
├── Polymorphism
├── Abstraction
│
└── Dataclasses
      └── Convenient data-focused classes
```

Use a dataclass when the class mainly represents/stores data.

Example:

```text
User
Product
Order
Address
Configuration
```

For more complex behavior and relationships, normal OOP concepts may be needed.

---

# Interview Quick Revision

### What is a dataclass?

> A dataclass is a Python class that automatically generates common boilerplate methods, making data-focused classes shorter and cleaner.

### Why use dataclasses?

> To reduce repetitive code when creating classes mainly used to store data.

### Does a dataclass replace OOP?

> No. A dataclass is still a class and is part of Python's OOP capabilities.

### What does `default_factory` do?

> It creates a new default value for each object, which is especially important for mutable values such as lists, dictionaries, and sets.

### Why use `field(default_factory=list)`?

> To give every object its own independent list.

### Can dataclasses have methods?

> Yes. A dataclass can contain normal instance methods.

### What does `frozen=True` do?

> It prevents normal reassignment of dataclass fields after object creation.

---

# Quick Cheat Sheet

```python
from dataclasses import dataclass, field

@dataclass
class User:
    name: str
    age: int = 18
    skills: list[str] = field(default_factory=list)
```

```text
@dataclass
    ↓
Automatic common boilerplate

field()
    ↓
Customize field behavior

default_factory=list
    ↓
New list for every object

default_factory=dict
    ↓
New dictionary for every object

default_factory=set
    ↓
New set for every object

frozen=True
    ↓
Prevent normal field reassignment
```

---

# Status

- [x] `@dataclass`
- [x] Automatic `__init__()`
- [x] Type hints
- [x] Default values
- [x] Methods in dataclasses
- [x] `field()`
- [x] `default_factory`
- [x] Mutable defaults
- [x] `frozen=True`

**Dataclasses — Core Professional Level: COMPLETE ✅**

**Next topic → UUID**
