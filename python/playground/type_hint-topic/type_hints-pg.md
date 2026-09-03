Python Type Hints

What are Type Hints?

Type hints tell developers and tools what type of value is expected.

name: str = "Noor"
age: int = 25

They improve readability, IDE support, static analysis, and documentation.

1. Basic Types

name: str = "Noor"
age: int = 25
price: float = 99.99
is_active: bool = True

Common types:

str

int

float

bool

2. Function Parameters

def add(a: int, b: int):
return a + b

This tells us that a and b are expected to be integers.

3. Return Type

def add(a: int, b: int) -> int:
return a + b

-> int means the function is expected to return an integer.

4. Function Example

def greet(name: str) -> str:
return f"Hello, {name}"

Meaning:

name → str
return → str

5. Lists

Modern Python syntax:

numbers: list[int] = [10, 20, 30]
names: list[str] = ["Ali", "Ahmed", "Noor"]

Meaning:

list[int] → list containing integers
list[str] → list containing strings

6. Dictionaries

scores: dict[str, int] = {
"Ali": 90,
"Ahmed": 85
}

Meaning:

key → str
value → int

7. Tuples

user: tuple[str, int] = ("Noor", 25)

Meaning:

first value → str
second value → int

8. None

Sometimes a function can return a value or None.

Modern Python:

def find_user(user_id: int) -> str | None:
if user_id == 1:
return "Noor"

    return None

str | None means:

str OR None

9. Union Types

A value can have more than one possible type:

user_id: int | str

Meaning:

int OR str

Example:

def show_id(user_id: int | str) -> None:
print(user_id)

10. Optional

You may also see:

from typing import Optional

name: Optional[str] = None

This means:

str OR None

Modern Python commonly uses:

name: str | None = None

11. Any

from typing import Any

data: Any = "hello"
data = 100
data = True

Any means the value can be any type.

Avoid using Any unnecessarily. Prefer specific types.

12. Important: Type Hints Do Not Automatically Enforce Types

Python does not normally reject this just because of the annotation:

age: int = "hello"

Type hints are mainly information for:

Developers

IDEs

Linters

Type checkers

Documentation

Frameworks

Some frameworks, such as FastAPI, can use type hints for validation and request processing.

13. Type Hints vs TypeScript

Since TypeScript is already familiar:

TypeScript

function add(a: number, b: number): number {
return a + b;
}

Python

def add(a: int, b: int) -> int:
return a + b

The concept is similar: describe the expected types.

14. Why Type Hints Matter in FastAPI

FastAPI makes heavy use of Python type hints.

Example:

@app.get("/users/{user_id}")
def get_user(user_id: int):
return {"user_id": user_id}

FastAPI can use the annotation to help with:

Request parsing

Validation

API documentation

Editor support

Data conversion

This is why Type Hints are especially important for Python backend development.

Hands-on Practice

Exercise 1 — Variables

Create:

name: str = "Noor"
age: int = 25
height: float = 5.9
is_developer: bool = True

Exercise 2 — Function

Create:

def add(a: int, b: int) -> int:
return a + b

Exercise 3 — String Function

def greet(name: str) -> str:
return f"Hello, {name}"

Exercise 4 — Collections

numbers: list[int] = [10, 20, 30]
names: list[str] = ["Ali", "Ahmed", "Noor"]

scores: dict[str, int] = {
"Ali": 90,
"Ahmed": 85
}

user: tuple[str, int] = ("Noor", 25)

Exercise 5 — Optional Return

def find_user(user_id: int) -> str | None:
if user_id == 1:
return "Noor"

    return None

Expected:

Noor
None

Interview Questions

What is a type hint?

A type hint specifies the expected type of a variable, function parameter, or return value.

Does Python enforce type hints automatically?

No. Python does not normally enforce annotations at runtime.

What does this mean?

def add(a: int, b: int) -> int:

It means:

a → int
b → int
return → int

What does this mean?

name: str | None

It means:

name can be str or None

Why are type hints important in FastAPI?

FastAPI uses them for things such as validation, request parsing, and automatic API documentation.

Quick Revision

str → string
int → integer
float → decimal number
bool → True / False

list[int] → list of integers
list[str] → list of strings
dict[str, int] → string keys, integer values
tuple[str, int] → string + integer

str | None → string or None
int | str → integer or string

Progress

Modules & Imports ✅
Packages & Structure ✅
Virtual Environment ✅
pip ✅
requirements.txt ✅

Type Hints ✅
Dataclasses ⏳
UUID ⏳
Datetime ⏳
Enum ⏳
Environment Variables ⏳
Logging ⏳
Clean Structure ⏳
Testing Basics ⏳
async/await ⏳

OOP ⏳

Next Topic

Dataclasses
