# Python OOP Fundamentals — Phase 1

## 1. OOP

**OOP (Object-Oriented Programming)** is a programming approach where code is organized around **objects**.

An object contains:

- **Attributes** → data/state
- **Methods** → behavior/actions

```text
Student
├── name       → attribute
├── age        → attribute
└── introduce() → method
```

---

## 2. Class

A **class** is a blueprint/template used to create objects.

```python
class Student:
    pass
```

**Interview:**

> A class defines the structure and behavior that its objects will have.

---

## 3. Object

An **object** is an instance of a class.

```python
class Student:
    pass

student = Student()
```

```text
Student → Class
student → Object
```

**Interview:**

> An object is a concrete instance created from a class.

---

## 4. `__init__()`

`__init__()` is automatically called when an object is created.

It is commonly used to initialize instance attributes.

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
```

```python
student = Student("Noor", 25)
```

---

## 5. `self`

`self` refers to the **current object**.

```python
class Student:
    def __init__(self, name):
        self.name = name
```

```python
student1 = Student("Noor")
student2 = Student("Ali")
```

Conceptually:

```text
self → student1 when student1 is used
self → student2 when student2 is used
```

**Interview:**

> `self` gives an instance method access to the current object's attributes and methods.

---

## 6. Instance Attributes

Instance attributes belong to a **specific object**.

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
```

```python
student1 = Student("Noor", 25)
student2 = Student("Ali", 22)
```

```text
student1 → name=Noor, age=25
student2 → name=Ali, age=22
```

Each object can have different values.

---

## 7. Class Attributes

Class attributes belong to the **class** and are normally shared by its objects.

```python
class Student:
    university = "FUUAST"

    def __init__(self, name, age):
        self.name = name
        self.age = age
```

```python
student1 = Student("Noor", 25)
student2 = Student("Ali", 22)

print(student1.university)
print(student2.university)
```

Output:

```text
FUUAST
FUUAST
```

### Key Difference

```python
self.name = name       # Instance attribute
university = "FUUAST"  # Class attribute
```

| Instance Attribute           | Class Attribute           |
| ---------------------------- | ------------------------- |
| Belongs to object            | Belongs to class          |
| Usually different per object | Usually shared            |
| Uses `self`                  | Defined directly in class |

---

## 8. Instance Methods

A method is a function defined inside a class.

```python
class Student:
    def __init__(self, name):
        self.name = name

    def introduce(self):
        print(f"Hi, I am {self.name}")
```

```python
student = Student("Noor")
student.introduce()
```

Output:

```text
Hi, I am Noor
```

Instance methods normally receive `self` as the first parameter.

---

## 9. Multiple Objects

One class can create many objects.

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

student1 = Student("Noor", 25)
student2 = Student("Ali", 22)
student3 = Student("Ahmed", 24)
```

All objects follow the same class structure but can contain different data.

---

## 10. `print()` vs `return`

`print()` displays a value.

```python
def greet(self):
    print("Hello")
```

`return` sends a value back to the caller.

```python
def get_name(self):
    return self.name
```

If a function has no explicit `return`, Python returns:

```python
None
```

Therefore:

```python
student.introduce()
```

is correct when `introduce()` already uses `print()`.

Avoid:

```python
print(student.introduce())
```

unless the method actually returns something.

---

# Complete Example

```python
class Student:
    university = "FUUAST"

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        print(f"Hi, I am {self.name} and I am {self.age} years old.")


student1 = Student("Noor", 25)
student2 = Student("Ali", 22)

student1.introduce()
student2.introduce()

print(student1.university)
print(student2.university)
```

---

# 🧠 Quick Interview Revision

### What is OOP?

Programming approach based on objects containing data and behavior.

### What is a class?

A blueprint for creating objects.

### What is an object?

An instance of a class.

### What is `__init__()`?

A special method automatically called when an object is initialized.

### What is `self`?

Reference to the current object.

### Instance vs Class attribute?

Instance attributes belong to individual objects; class attributes belong to the class and are normally shared.

### What is a method?

A function defined inside a class.

---

# Phase 1 Checklist

- [x] OOP
- [x] Class
- [x] Object
- [x] `__init__()`
- [x] `self`
- [x] Instance attributes
- [x] Class attributes
- [x] Instance methods
- [x] Multiple objects
- [x] `print()` vs `return`

**Status: OOP Fundamentals Phase 1 — COMPLETE ✅**

**Next:** Dataclasses
