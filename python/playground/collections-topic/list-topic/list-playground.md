# Python Lists — Interview & Backend Revision

## 1. What is a List?

A **list** is an ordered, mutable collection in Python.

```python
tasks = ["Login", "Database", "Testing"]
```

### Important properties

- Ordered
- Mutable → items can be changed
- Allows duplicate values
- Can contain different data types
- Uses zero-based indexing

---

# 2. Indexing

```python
tasks = ["Login", "Database", "Testing"]

tasks[0]      # "Login"
tasks[1]      # "Database"
tasks[-1]     # "Testing"
```

### Interview point

Python lists use **zero-based indexing**.

---

# 3. Updating Items

Lists are mutable.

```python
tasks[1] = "PostgreSQL"
```

The original item is replaced.

---

# 4. Adding Items

## append()

Adds **one item at the end**.

```python
tasks.append("Deploy")
```

---

## insert()

Adds an item at a specific index.

```python
tasks.insert(1, "Testing")
```

---

## extend()

Adds multiple items.

```python
tasks.extend(["Testing", "Deploy"])
```

### Important difference

```python
tasks.append(["A", "B"])
```

adds **one list as an item**:

```text
["Login", ["A", "B"]]
```

Whereas:

```python
tasks.extend(["A", "B"])
```

adds both items:

```text
["Login", "A", "B"]
```

---

# 5. Removing Items

## remove()

Removes by **value**.

```python
tasks.remove("Login")
```

Remember:

```python
remove(value)
```

---

## pop(index)

Removes by **index** and returns the removed item.

```python
removed = tasks.pop(1)
```

---

## pop()

Without an index, removes the **last item**.

```python
tasks.pop()
```

---

## clear()

Removes everything.

```python
tasks.clear()
```

Result:

```python
[]
```

---

# 6. Checking an Item

Use `in`.

```python
"Login" in tasks
```

Returns:

```text
True
```

or:

```text
False
```

Useful for checking whether data already exists.

---

# 7. Finding an Item

## index()

Finds the position of a value.

```python
tasks.index("Login")
```

Example result:

```text
0
```

### Important

If the value does not exist, `index()` raises a `ValueError`.

Safe pattern:

```python
if "Login" in tasks:
    position = tasks.index("Login")
```

---

# 8. Counting Items

```python
tasks.count("Login")
```

Returns how many times the value appears.

---

# 9. Length

```python
len(tasks)
```

Returns the number of items.

---

# 10. Sorting

## Ascending

```python
prices.sort()
```

Example:

```python
[500, 100, 800]

# becomes

[100, 500, 800]
```

## Descending

```python
prices.sort(reverse=True)
```

---

# 11. reverse()

`reverse()` does NOT sort.

It simply reverses the current order.

```python
tasks.reverse()
```

Example:

```python
["Login", "Database", "Deploy"]

# becomes

["Deploy", "Database", "Login"]
```

### Important interview difference

```python
sort()
```

→ orders the values.

```python
reverse()
```

→ reverses the existing order.

---

# 12. copy()

Creates a separate list.

```python
backup = tasks.copy()
```

Example:

```python
tasks = ["Login", "Database"]

backup = tasks.copy()

backup.append("Testing")
```

`tasks` remains:

```python
["Login", "Database"]
```

`backup` becomes:

```python
["Login", "Database", "Testing"]
```

---

# 13. Slicing

Basic syntax:

```python
list[start:end]
```

The **start is included**.

The **end is excluded**.

Example:

```python
tasks = ["A", "B", "C", "D"]

tasks[1:3]
```

Result:

```python
["B", "C"]
```

---

## Common slicing

```python
tasks[:3]      # first 3
tasks[2:]      # index 2 to end
tasks[-2:]     # last 2
tasks[:]       # whole list
```

---

# 14. Slicing with Step

Full syntax:

```python
list[start:end:step]
```

Example:

```python
numbers = [1, 2, 3, 4, 5, 6]

numbers[::2]
```

Result:

```python
[1, 3, 5]
```

Step `2` means:

> Move two positions at a time.

---

## Reverse with slicing

```python
numbers[::-1]
```

Result:

```python
[6, 5, 4, 3, 2, 1]
```

---

# 15. Looping Through a List

The basic pattern:

```python
for item in items:
    print(item)
```

Example:

```python
tasks = ["Login", "Database", "Testing"]

for task in tasks:
    print(task)
```

The loop gives you each item one at a time.

```text
task = "Login"
task = "Database"
task = "Testing"
```

---

# 16. Loop + Condition

Very common backend pattern:

```python
prices = [500, 1200, 800, 2500]

for price in prices:
    if price > 1000:
        print(price)
```

This means:

> Go through every price and process only prices greater than 1000.

---

# 17. Counting Items with a Loop

Example:

```python
statuses = [
    "active",
    "inactive",
    "active",
    "active"
]

total = 0

for status in statuses:
    if status == "active":
        total = total + 1

print(total)
```

Result:

```text
3
```

### Important pattern

```text
Initialize
    ↓
Loop
    ↓
Check
    ↓
Update
    ↓
Final result
```

This pattern is useful for understanding data processing before using higher-level methods.

---

# 18. Nested Lists

A list can contain other lists.

```python
products = [
    ["Laptop", 120000],
    ["Phone", 80000],
    ["Tablet", 50000]
]
```

Access:

```python
products[1]
```

Result:

```python
["Phone", 80000]
```

Access inside it:

```python
products[1][0]   # Phone
products[1][1]   # 80000
```

---

# 19. Looping Through Nested Lists

```python
for product in products:
    print(product[0])
    print(product[1])
```

Each iteration:

```text
product = ["Laptop", 120000]

product = ["Phone", 80000]

product = ["Tablet", 50000]
```

---

# 20. List Comprehension

List comprehension is a shorter way to create a new list from an existing list.

Normal loop:

```python
numbers = [1, 2, 3]

squares = []

for number in numbers:
    squares.append(number * number)
```

List comprehension:

```python
squares = [
    number * number
    for number in numbers
]
```

Result:

```python
[1, 4, 9]
```

---

# 21. List Comprehension — Transform

Pattern:

```python
[new_value for item in list]
```

Example:

```python
numbers = [1, 2, 3]

double = [number * 2 for number in numbers]
```

Result:

```python
[2, 4, 6]
```

---

# 22. List Comprehension — Filter

Pattern:

```python
[item for item in list if condition]
```

Example:

```python
numbers = [1, 2, 3, 4, 5, 6]

even = [
    number
    for number in numbers
    if number % 2 == 0
]
```

Result:

```python
[2, 4, 6]
```

---

# 23. Backend Example — Filtering

```python
ages = [15, 22, 17, 30, 14, 25]

adults = [
    age
    for age in ages
    if age >= 18
]
```

Result:

```python
[22, 30, 25]
```

This type of filtering becomes useful when processing collections of API/database data.

---

# ⭐ Most Important List Methods

For backend interviews, remember these especially well:

```python
append()
extend()
insert()

remove()
pop()
clear()

sort()
reverse()

copy()

index()
count()

```

And these built-ins/operators:

```python
len()
in
```

---

# ⭐ Most Important List Concepts

You should be comfortable with:

```python
list[index]
list[-1]

list[start:end]
list[start:end:step]

for item in list:
    ...

[item for item in list]

[item for item in list if condition]
```

---

# ⚠️ Common Interview Traps

### `remove()` vs `pop()`

```python
tasks.remove("Login")  # value
tasks.pop(1)           # index
```

### `sort()` vs `reverse()`

```python
numbers.sort()         # sort values
numbers.reverse()      # reverse current order
```

### `append()` vs `extend()`

```python
items.append(["A", "B"])
```

adds one nested list.

```python
items.extend(["A", "B"])
```

adds two separate items.

### Slicing end index

```python
numbers[1:4]
```

includes indexes:

```text
1, 2, 3
```

Index `4` is excluded.

---

# 🎯 Interview Questions to Revise

1. What is a list in Python?
2. Are Python lists mutable?
3. How does list indexing work?
4. What is negative indexing?
5. Difference between `append()` and `extend()`?
6. Difference between `remove()` and `pop()`?
7. What does `pop()` do without an argument?
8. Difference between `sort()` and `reverse()`?
9. How do you check if an item exists in a list?
10. How do you find an item's index?
11. How do you count occurrences?
12. What is list slicing?
13. What does `list[::-1]` do?
14. How do you loop through a list?
15. What is a nested list?
16. What is list comprehension?
17. Difference between a normal loop and list comprehension?
18. How do you filter a list using comprehension?
19. Why would you use `copy()`?
20. What does `clear()` do?

---

# 🚀 Backend Priority

### ⭐⭐⭐⭐⭐ Must know

- Lists
- Indexing
- Slicing
- Looping
- `append()`
- `extend()`
- `remove()`
- `pop()`
- `in`
- `len()`
- List comprehension
- Nested data basics

### ⭐⭐⭐ Good to know

- `insert()`
- `index()`
- `count()`
- `sort()`
- `reverse()`
- `copy()`
- `clear()`

### 🧠 DSA — Later

Don't spend too much time on:

- complex searching algorithms
- sorting algorithms from scratch
- advanced nested-list algorithms
- complicated list problems

We'll revisit those during **DSA/interview preparation**.

---

# ✅ List Status

**Python Lists = COMPLETE**

Next:

```text
Lists ✅
   ↓
Tuples
   ↓
Dictionaries ⭐⭐⭐⭐⭐
   ↓
Sets
   ↓
JSON ⭐⭐⭐⭐⭐
   ↓
Exceptions
   ↓
Modules / Imports
   ↓
venv / pip
   ↓
OOP
   ↓
Type Hints
   ↓
async / await
   ↓
🚀 FastAPI
```

**Main goal:** learn enough Python to become productive with **FastAPI and REST APIs**, then deepen Python later as needed.
