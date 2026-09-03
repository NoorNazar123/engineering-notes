Bilkul bhai. Is baar `.md` ko **proper interview + quick revision notes** ki tarah bana raha hoon — definitions, key points, differences, examples, common interview questions, aur memory tricks. Direct copy-paste kar lena.

### `oop_phase_2.md`

````markdown
# Python OOP Phase 2 — Interview & Quick Revision Notes

> OOP Phase 2 focuses on the four pillars of OOP and important Python features used with them.

---

# 1. Encapsulation

## Definition

**Encapsulation** means bundling data and the methods that operate on that data inside a class, while controlling how that data is accessed or modified.

### Example

```python
class BankAccount:

    def __init__(self, balance):
        self._balance = balance

    def deposit(self, amount):
        if amount > 0:
            self._balance += amount

    def get_balance(self):
        return self._balance
```
````

Usage:

```python
account = BankAccount(1000)

account.deposit(500)

print(account.get_balance())
```

Output:

```text
1500
```

## Python Access Conventions

```text
name       → Public
_name      → Internal/protected-style convention
__name     → Private-style name mangling
```

### Important

Python does not have strict private fields like some languages.

`_name` is mainly a **developer convention** meaning:

> "This is an internal implementation detail."

---

# 2. @property

## Definition

`@property` allows a method to be accessed like an attribute.

Without property:

```python
user.get_age()
```

With property:

```python
user.age
```

### Example

```python
class User:

    def __init__(self, age):
        self._age = age

    @property
    def age(self):
        return self._age

    @age.setter
    def age(self, value):
        if value < 0:
            raise ValueError("Age cannot be negative")

        self._age = value
```

Usage:

```python
user = User(25)

print(user.age)

user.age = 30
```

## Why use @property?

Main purposes:

- Control access to data
- Validate values
- Hide implementation details
- Keep clean attribute-like syntax

### Remember

```text
@property
    ↓
method behaves like attribute
```

---

# 3. Inheritance

## Definition

**Inheritance** allows a child class to reuse attributes and methods from a parent class.

### Example

```python
class Animal:

    def eat(self):
        print("Animal is eating")


class Dog(Animal):

    def bark(self):
        print("Dog is barking")
```

Usage:

```python
dog = Dog()

dog.eat()
dog.bark()
```

Output:

```text
Animal is eating
Dog is barking
```

## Terminology

```text
Animal
  ↓
Parent / Base class

Dog
  ↓
Child / Derived class
```

### Syntax

```python
class Child(Parent):
    pass
```

## Why inheritance?

- Reuse existing code
- Avoid unnecessary duplication
- Create parent-child relationships
- Extend existing functionality

---

# 4. super()

## Definition

`super()` allows a child class to access functionality from its parent class.

## Parent Constructor

```python
class Animal:

    def __init__(self, name):
        self.name = name


class Dog(Animal):

    def __init__(self, name, breed):
        super().__init__(name)
        self.breed = breed
```

Here:

```python
super().__init__(name)
```

calls the parent constructor.

## Parent Method

`super()` can also call parent methods.

```python
class Animal:

    def eat(self):
        print("Animal is eating")


class Dog(Animal):

    def eat(self):
        super().eat()
        print("Dog is eating")
```

Output:

```text
Animal is eating
Dog is eating
```

## Important Difference

```text
Inheritance
    ↓
Child gets access to parent functionality

super()
    ↓
Child explicitly calls parent functionality
```

### Interview Question

**Is `super()` required for inheritance?**

No.

Inheritance works without `super()`.

`super()` is useful when the child needs to reuse or extend parent functionality.

---

# 5. Polymorphism

## Definition

**Polymorphism** means different classes can provide different behavior through the same method/interface.

### Example

```python
class Dog:

    def sound(self):
        print("Woof")


class Cat:

    def sound(self):
        print("Meow")
```

Both classes have:

```python
sound()
```

But the behavior is different.

```python
dog = Dog()
cat = Cat()

dog.sound()
cat.sound()
```

Output:

```text
Woof
Meow
```

## Simple Formula

```text
Different classes
+
Same method/interface
+
Different behavior
=
Polymorphism
```

### Important

Python polymorphism does **not always require inheritance**.

Example:

```python
class Dog:

    def sound(self):
        print("Woof")


class Cat:

    def sound(self):
        print("Meow")
```

They don't inherit from each other, but both provide `sound()`.

---

# 6. Abstraction

## Definition

**Abstraction** means exposing what an object should do while hiding unnecessary implementation details.

### Real-Life Example

ATM:

```text
Withdraw Money
      ↓
You press the button
      ↓
Money comes out
```

You don't need to know all the internal:

```text
Bank server
Database
Balance checking
Transaction processing
Security checks
```

That hidden complexity is the basic idea of abstraction.

---

# Abstraction in Python

Python commonly uses:

```python
from abc import ABC, abstractmethod
```

### Example

```python
from abc import ABC, abstractmethod


class Payment(ABC):

    @abstractmethod
    def pay(self):
        pass
```

Now child classes must implement `pay()`:

```python
class CardPayment(Payment):

    def pay(self):
        print("Paying with card")


class CashPayment(Payment):

    def pay(self):
        print("Paying with cash")
```

Usage:

```python
card = CardPayment()
cash = CashPayment()

card.pay()
cash.pay()
```

Output:

```text
Paying with card
Paying with cash
```

## Easy Memory Trick

```text
Abstraction = WHAT
Implementation = HOW
```

Example:

```text
Payment
   ↓
WHAT?
pay()
   ↓
HOW?
CardPayment → Card
CashPayment → Cash
```

---

# OOP Four Pillars

| Pillar        | Simple Meaning                                          |
| ------------- | ------------------------------------------------------- |
| Encapsulation | Keep data + related methods together and control access |
| Inheritance   | Reuse parent functionality                              |
| Polymorphism  | Same interface, different behavior                      |
| Abstraction   | Hide implementation details                             |

---

# Encapsulation vs Abstraction

These two are commonly confused.

## Encapsulation

Focuses on:

> **Controlling access to data and keeping data + behavior together.**

Example:

```python
self._balance
```

and methods that control it.

## Abstraction

Focuses on:

> **Hiding unnecessary implementation details and exposing required functionality.**

Example:

```python
payment.pay()
```

You don't need to know how payment is internally processed.

### Quick Difference

```text
Encapsulation → HOW DATA IS CONTROLLED

Abstraction   → WHAT DETAILS ARE HIDDEN
```

---

# Inheritance vs Polymorphism

## Inheritance

Focuses on **code reuse**.

```text
Animal
  ↓
Dog
```

Dog gets functionality from Animal.

## Polymorphism

Focuses on **different behavior through the same interface**.

```text
Dog → sound() → Woof

Cat → sound() → Meow
```

### Quick Difference

```text
Inheritance  → Reuse

Polymorphism → Different behavior
```

---

# super() Quick Revision

```python
super().__init__()
```

→ Calls parent constructor.

```python
super().method()
```

→ Calls parent method.

### Example

```python
class Parent:

    def hello(self):
        print("Hello from Parent")


class Child(Parent):

    def hello(self):
        super().hello()
        print("Hello from Child")
```

---

# @property Quick Revision

```python
@property
def age(self):
    return self._age
```

Allows:

```python
user.age
```

instead of:

```python
user.age()
```

Setter:

```python
@age.setter
def age(self, value):
    self._age = value
```

Allows controlled assignment:

```python
user.age = 25
```

---

# Interview Questions

## Q1. What are the four pillars of OOP?

**Answer:**

The four pillars are:

1. Encapsulation
2. Inheritance
3. Polymorphism
4. Abstraction

---

## Q2. What is encapsulation?

**Answer:**

Encapsulation is the practice of bundling data and related methods inside a class and controlling access to the internal state.

---

## Q3. What is inheritance?

**Answer:**

Inheritance allows a child class to reuse and extend functionality from a parent class.

---

## Q4. What is polymorphism?

**Answer:**

Polymorphism allows different classes to provide different implementations of the same method or interface.

---

## Q5. What is abstraction?

**Answer:**

Abstraction hides unnecessary implementation details and exposes only the required interface or functionality.

---

## Q6. What is super()?

**Answer:**

`super()` allows a child class to access methods and the constructor of its parent class.

---

## Q7. Is super() required for inheritance?

**Answer:**

No. Inheritance works without `super()`. `super()` is used when we explicitly want to reuse or extend parent functionality.

---

## Q8. What is @property?

**Answer:**

`@property` allows a method to be accessed like an attribute and can be combined with setters for validation and controlled assignment.

---

## Q9. Does Python have private variables?

**Answer:**

Python does not enforce strict private variables in the same way as some languages. A single underscore is a convention for internal use, while double underscore triggers name mangling.

---

## Q10. Does polymorphism require inheritance in Python?

**Answer:**

No. Python supports polymorphism through its dynamic and duck-typing nature, so unrelated classes can provide the same method/interface.

---

# OOP Phase 2 Cheat Sheet

```text
Encapsulation
→ Control data access

@property
→ Method behaves like an attribute

Inheritance
→ Reuse parent functionality

super()
→ Explicitly call parent functionality

Polymorphism
→ Same interface, different behavior

Abstraction
→ Hide implementation details
```

---

# One-Line Memory Trick

```text
Encapsulation → Protect / Control
Inheritance   → Reuse
Polymorphism  → Many Forms
Abstraction   → Hide Complexity
```

---

# OOP Phase 2 Status

- [x] Encapsulation
- [x] @property
- [x] Inheritance
- [x] super()
- [x] Polymorphism
- [x] Abstraction

## Next Major Step

# FastAPI 🚀

```

```
