Use this as your updated playground.md:

# Python Functions — Interview Ready

## Goal

Quick revision of Python Functions for interviews and backend development.

---

# 1. Function

### Definition

A **function** is a reusable block of code designed to perform a specific task.

### Syntax

```python
def function_name():
    # code
Example
def greet():
    print("Hello")

greet()
Interview Point

Functions improve code reuse, readability, maintainability, and testing.

2. Parameters
Definition

A parameter is a variable defined in a function that receives a value when the function is called.

def greet(name):
    print(name)

Here, name is a parameter.

3. Arguments
Definition

An argument is the actual value passed to a function when calling it.

greet("Noor")

Here, "Noor" is an argument.

Remember
Parameter → variable in function definition
Argument  → actual value passed to function
4. Multiple Parameters

A function can accept multiple parameters.

def student_info(name, age, course):
    print(name)
    print(age)
    print(course)

student_info("Haris", 19, "Python")

Arguments are matched by position.

name   → "Haris"
age    → 19
course → "Python"
5. return
Definition

return sends a value back to the caller and immediately exits the function.

def add(a, b):
    return a + b

result = add(10, 20)

print(result)

Output:

30
Interview Point

A function can return any Python value:

return 10
return "Hello"
return [1, 2, 3]
return {"name": "Noor"}
6. print() vs return
print()

Displays a value on the screen.

def add(a, b):
    print(a + b)
return

Sends the value back to the caller.

def add(a, b):
    return a + b

result = add(10, 20)
Interview Answer

print() displays a value, while return sends a value back to the caller and terminates the function.

7. Function with Conditions

Functions can contain conditions.

def check_num(num):
    if num % 2 == 0:
        return "Even"
    else:
        return "Odd"

print(check_num(14))

Output:

Even
Key Concept
Function
   ↓
Parameter
   ↓
Condition
   ↓
Return
8. Default Parameters
Definition

A default parameter has a predefined value that is used when the caller does not provide an argument.

def welcome(name="Guest"):
    return f"Welcome, {name}!"

welcome()

Output:

Welcome, Guest!

If a value is provided:

welcome("Noor")

Output:

Welcome, Noor!
9. Positional Arguments
Definition

Positional arguments are matched with parameters according to their position.

def employee(name, role, salary):
    print(name, role, salary)

employee("Noor", "Developer", 100000)

Mapping:

"Noor"      → name
"Developer" → role
100000      → salary
10. Keyword Arguments
Definition

Keyword arguments are arguments passed using the parameter name.

def employee(name, role, salary):
    print(name, role, salary)

employee(
    name="Noor",
    role="Developer",
    salary=100000
)

The order can change:

employee(
    salary=100000,
    name="Noor",
    role="Developer"
)
Important Rule

Positional arguments must come before keyword arguments.

employee("Noor", role="Developer", salary=100000)  # Valid
employee(name="Noor", "Developer", 100000)  # Invalid
11. *args
Definition

*args allows a function to accept a variable number of positional arguments.

Python collects them into a tuple.

def show_numbers(*numbers):
    return numbers

result = show_numbers(10, 20, 30)

print(result)

Output:

(10, 20, 30)
Practical Example
def add_all(*numbers):
    total = 0

    for number in numbers:
        total += number

    return total

print(add_all(10, 20, 30, 40))

Output:

100
Interview Answer

*args collects a variable number of positional arguments into a tuple.

12. **kwargs
Definition

**kwargs allows a function to accept a variable number of keyword arguments.

Python collects them into a dictionary.

def user_info(**details):
    return details

result = user_info(
    name="Noor",
    age=25,
    city="Karachi"
)

print(result)

Output:

{
    "name": "Noor",
    "age": 25,
    "city": "Karachi"
}
Interview Answer

**kwargs collects a variable number of keyword arguments into a dictionary.

13. *args vs **kwargs
Feature	*args	**kwargs
Arguments	Positional	Keyword
Stored as	Tuple	Dictionary
Example	f(10, 20)	f(a=10, b=20)
Easy Memory Trick
*args    → Tuple
**kwargs → Dictionary
14. Combining Parameters, *args, and **kwargs
def profile(name, *skills, **details):
    return name, skills, details

result = profile(
    "Noor",
    "Python",
    "FastAPI",
    "PostgreSQL",
    age=25,
    city="Karachi"
)

Conceptually:

name
→ "Noor"

skills
→ ("Python", "FastAPI", "PostgreSQL")

details
→ {
    "age": 25,
    "city": "Karachi"
}
15. Local Scope
Definition

A local variable is a variable created inside a function and normally accessible only within that function.

def test():
    x = 20
    print(x)

test()

Here x is local to test().

16. Global Scope
Definition

A global variable is a variable defined outside functions and belongs to the global scope.

x = 10

def test():
    print(x)

test()

The function can read the global variable.

17. Local vs Global Variable
x = 10

def test():
    x = 20
    print(x)

test()

print(x)

Output:

20
10
Why?

The function creates its own local x.

Inside function → x = 20
Outside function → x = 10
Interview Point

A local variable with the same name as a global variable does not automatically modify the global variable.

18. global Keyword
Definition

The global keyword tells Python that a variable inside a function refers to the global variable.

x = 10

def change():
    global x
    x = 20

change()

print(x)

Output:

20
Professional Note

Avoid unnecessary global mutable state.

Prefer:

def calculate(value):
    return value * 2

over modifying global variables unnecessarily.

19. Function Argument Rules

Remember the general order:

Normal parameters
        ↓
*args
        ↓
**kwargs

Example:

def example(name, age, *skills, **details):
    pass
🎤 Interview Quick Revision
What is a function?

A reusable block of code designed to perform a specific task.

What is a parameter?

A variable defined in a function that receives a value.

What is an argument?

The actual value passed to a function.

What does return do?

Returns a value to the caller and exits the function.

print() vs return?

print() displays a value; return sends a value back to the caller.

What is a default parameter?

A parameter with a predefined value used when no argument is provided.

Positional vs keyword arguments?

Positional arguments are matched by position; keyword arguments are matched by parameter name.

What is *args?

Variable-length positional arguments collected into a tuple.

What is **kwargs?

Variable-length keyword arguments collected into a dictionary.

What is local scope?

Scope inside a function where local variables belong to that function.

What is global scope?

The outer/global scope where variables are defined outside functions.

What does global do?

Allows a function to refer to and modify a global variable.

✅ Today's Coverage
Function definition          ✅
Calling functions            ✅
Parameters                   ✅
Arguments                    ✅
Multiple parameters          ✅
Positional arguments         ✅
Keyword arguments            ✅
Default parameters           ✅
return                       ✅
print vs return              ✅
Function + conditions        ✅
*args                        ✅
**kwargs                     ✅
Combined arguments           ✅
Local scope                  ✅
Global scope                 ✅
global keyword               ✅
⏳ Remaining Function Topics

These will be covered later:

Passing Lists/Dictionaries        ⏳
Returning Collections             ⏳
Multiple Return Values            ⏳
Unpacking Return Values           ⏳
Type Hints                        ⏳
Docstrings                        ⏳
Keyword-only Parameters           ⏳
Positional-only Parameters        ⏳
Lambda Functions                  ⏳
Nested Functions                  ⏳
Closures                          ⏳
Recursion                         ⏳
Higher-Order Functions            ⏳
map() / filter() / reduce()       ⏳
Decorators                        ⏳
Generators / yield                ⏳

Interview strategy: Master the ✅ concepts first. The ⏳ concepts will be covered progressively as we continue Python.
```
