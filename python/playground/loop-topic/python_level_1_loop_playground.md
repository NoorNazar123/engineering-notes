# Python Level 1 — Loops

> **Goal:** Understand how to repeat code, control loops, work with nested loops, and recognize common loop patterns used in real programs and interviews.

---

# 1. What is a Loop?

A **loop** is used to execute the same block of code repeatedly.

### Without a loop

```python
print("Hello")
print("Hello")
print("Hello")
print("Hello")
print("Hello")
```

This is repetitive.

### With a loop

```python
for i in range(5):
    print("Hello")
```

The loop repeats the code 5 times.

### Why do we use loops?

Loops are useful when we need to:

- Process multiple users
- Process products
- Read files
- Process database records
- Search through data
- Calculate totals
- Repeat an operation
- Validate multiple inputs

---

# 2. Types of Loops in Python

Python mainly provides:

```text
for loop
while loop
```

Python does **not** have a traditional:

```text
do...while
```

loop.

Instead, we can create similar behavior using:

```python
while True:
    # code

    if condition:
        break
```

---

# 3. `for` Loop

A `for` loop is commonly used when we want to iterate over a sequence or a known range of values.

### Syntax

```python
for variable in sequence:
    # code
```

### Example

```python
for i in range(1, 6):
    print(i)
```

### Output

```text
1
2
3
4
5
```

---

# 4. Understanding `range()`

`range()` generates a sequence of numbers.

## `range(stop)`

```python
range(5)
```

Produces:

```text
0 1 2 3 4
```

The stop value `5` is NOT included.

---

## `range(start, stop)`

```python
range(1, 6)
```

Produces:

```text
1 2 3 4 5
```

Again, `6` is excluded.

### Rule

```text
range(start, stop)
             ↑
       excluded
```

---

## `range(start, stop, step)`

```python
range(1, 10, 2)
```

Produces:

```text
1 3 5 7 9
```

The `2` is the step.

---

# 5. Counting Backwards

We can use a negative step.

```python
for i in range(5, 0, -1):
    print(i)
```

Output:

```text
5
4
3
2
1
```

---

# 6. Even Numbers Using `range()`

Instead of checking every number:

```python
for i in range(2, 11, 2):
    print(i)
```

Output:

```text
2
4
6
8
10
```

---

# 7. Odd Numbers Using `range()`

```python
for i in range(1, 11, 2):
    print(i)
```

Output:

```text
1
3
5
7
9
```

---

# 8. `while` Loop

A `while` loop repeats code **while a condition is True**.

### Syntax

```python
while condition:
    # code
```

### Example

```python
count = 1

while count <= 5:
    print(count)
    count += 1
```

Output:

```text
1
2
3
4
5
```

---

# 9. Why Do We Need `count += 1`?

Look at this:

```python
count = 1

while count <= 5:
    print(count)
    count += 1
```

Each iteration changes `count`:

```text
count = 1 → print
count = 2 → print
count = 3 → print
count = 4 → print
count = 5 → print
count = 6 → condition becomes False
```

Without:

```python
count += 1
```

the condition may remain True forever.

That creates an **infinite loop**.

---

# 10. Infinite Loop

Example:

```python
count = 1

while count <= 5:
    print(count)
```

`count` never changes.

Therefore:

```text
1
1
1
1
1
1
...
```

The loop never ends.

### Interview Point

> Always make sure a `while` loop has a path that eventually makes its condition False, unless an intentional infinite loop is being controlled with `break`.

---

# 11. `break`

`break` immediately stops the loop.

### Example

```python
for i in range(1, 11):

    if i == 6:
        break

    print(i)
```

Output:

```text
1
2
3
4
5
```

When `i` becomes `6`:

```python
break
```

executes.

The entire loop stops.

### Mental Model

```text
break = STOP THE LOOP
```

### When should I use `break`?

Think:

> "I've found what I need. There is no reason to continue."

Example:

```python
numbers = [10, 20, 30, 40, 50]

for number in numbers:

    if number == 30:
        print("Found!")
        break
```

Once `30` is found, searching further is unnecessary.

---

# 12. `continue`

`continue` skips the **current iteration** and moves to the next iteration.

### Example

```python
for i in range(1, 11):

    if i % 2 != 0:
        continue

    print(i)
```

Output:

```text
2
4
6
8
10
```

When the number is odd:

```python
continue
```

skips it.

### Mental Model

```text
continue = SKIP THIS ONE
```

### When should I use `continue`?

Think:

> "I don't want to process this item, but I still want to process the remaining items."

Example:

```python
orders = [100, 200, 0, 300]

for order in orders:

    if order == 0:
        continue

    print("Processing:", order)
```

The cancelled/invalid order is skipped, but the loop continues.

---

# 13. `break` vs `continue`

| Keyword    | Meaning                |
| ---------- | ---------------------- |
| `break`    | Stop the entire loop   |
| `continue` | Skip current iteration |
| `pass`     | Do nothing             |

### Easy memory trick

```text
break
↓
STOP 🛑


continue
↓
SKIP ⏭️
```

---

# 14. Important: Order Matters

Consider:

```python
for i in range(1, 21):

    if i % 2 != 0:
        continue

    if i == 14:
        break

    print(i)
```

Output:

```text
2
4
6
8
10
12
```

Why?

```text
1  → odd  → continue
2  → even → print
3  → odd  → continue
...
12 → even → print
13 → odd  → continue
14 → even → break
```

The `break` happens before `print(14)`.

### Important Lesson

Code after `continue` in the same iteration will NOT execute.

---

# 15. Nested Loops

A **nested loop** is a loop inside another loop.

### Example

```python
for i in range(1, 3):

    for j in range(1, 4):
        print(i, j)
```

Output:

```text
1 1
1 2
1 3
2 1
2 2
2 3
```

### How does it work?

First:

```text
i = 1
```

The inner loop completely runs:

```text
j = 1
j = 2
j = 3
```

Then:

```text
i = 2
```

The inner loop runs again:

```text
j = 1
j = 2
j = 3
```

### Core Rule

> For every iteration of the outer loop, the inner loop runs completely.

---

# 16. Real-World Nested Loop

Imagine:

- 3 classrooms
- 5 students per classroom

```python
for class_room in range(1, 4):

    for student in range(1, 6):
        print(f"Class {class_room} - Student {student}")
```

Output starts:

```text
Class 1 - Student 1
Class 1 - Student 2
Class 1 - Student 3
Class 1 - Student 4
Class 1 - Student 5

Class 2 - Student 1
...
```

This pattern can represent:

```text
Classes
    ↓
Students
```

Other examples:

```text
Departments → Employees
Orders → Products
Categories → Products
Rows → Columns
```

---

# 17. Nested Loop + `continue`

We can combine nested loops with conditions.

Example:

```python
for class_room in range(1, 4):

    for student in range(1, 6):

        if student % 2 != 0:
            continue

        print(f"Class {class_room} - Student {student}")
```

Output:

```text
Class 1 - Student 2
Class 1 - Student 4
Class 2 - Student 2
Class 2 - Student 4
Class 3 - Student 2
Class 3 - Student 4
```

The odd students are skipped.

---

# 18. `break` Inside Nested Loops

Important:

```python
for class_room in range(1, 4):

    for student in range(1, 6):

        if class_room == 2 and student == 3:
            break

        print(class_room, student)
```

The `break` breaks the **inner loop**.

It does NOT automatically break the outer loop.

### Interview Point

> A `break` statement affects the nearest enclosing loop.

---

# 19. Loop Through a String

Strings are iterable.

```python
name = "Noor"

for character in name:
    print(character)
```

Output:

```text
N
o
o
r
```

---

# 20. Loop Through a List

```python
numbers = [10, 20, 30, 40]

for number in numbers:
    print(number)
```

Output:

```text
10
20
30
40
```

This becomes extremely important when we learn **Collections**.

---

# 21. Counting With a Loop

Example: count even numbers.

```python
numbers = [1, 2, 3, 4, 5, 6]

count = 0

for number in numbers:

    if number % 2 == 0:
        count += 1

print(count)
```

Output:

```text
3
```

### Pattern

```text
Create counter
      ↓
Loop
      ↓
Check condition
      ↓
Increase counter
```

This is a common interview pattern.

---

# 22. Sum Using a Loop

```python
numbers = [10, 20, 30, 40]

total = 0

for number in numbers:
    total += number

print(total)
```

Output:

```text
100
```

### Pattern

```text
total = 0

for item:
    total += item
```

---

# 23. Find Maximum Without `max()`

```python
numbers = [10, 50, 20, 80, 30]

maximum = numbers[0]

for number in numbers:

    if number > maximum:
        maximum = number

print(maximum)
```

Output:

```text
80
```

### Interview Concept

This tests whether you understand:

- loops
- conditions
- variables
- comparison
- updating state

---

# 24. Find Minimum Without `min()`

```python
numbers = [10, 50, 20, 80, 30]

minimum = numbers[0]

for number in numbers:

    if number < minimum:
        minimum = number

print(minimum)
```

Output:

```text
10
```

---

# 25. `enumerate()`

When we need both the **index and value**:

```python
names = ["Ali", "Ahmed", "Noor"]

for index, name in enumerate(names):
    print(index, name)
```

Output:

```text
0 Ali
1 Ahmed
2 Noor
```

We can start the index from `1`:

```python
for index, name in enumerate(names, start=1):
    print(index, name)
```

Output:

```text
1 Ali
2 Ahmed
3 Noor
```

### Why is this useful?

Instead of manually maintaining an index:

```python
index = 0

for name in names:
    print(index, name)
    index += 1
```

we can use:

```python
for index, name in enumerate(names):
    print(index, name)
```

---

# 26. `zip()`

`zip()` lets us iterate over multiple sequences together.

```python
names = ["Ali", "Ahmed", "Noor"]
ages = [20, 22, 25]

for name, age in zip(names, ages):
    print(name, age)
```

Output:

```text
Ali 20
Ahmed 22
Noor 25
```

### Mental Model

```text
names ──┐
        ├── zip() → together
ages  ──┘
```

We will use this more when learning Collections.

---

# 27. Loop `else`

Python has a special `else` feature with loops.

```python
numbers = [1, 2, 3, 4, 5]

for number in numbers:

    if number == 10:
        print("Found")
        break

else:
    print("Not found")
```

Output:

```text
Not found
```

The loop completed without `break`, so the `else` runs.

### Important

```text
Loop finishes normally → else runs

break occurs → else does NOT run
```

This is useful for search operations.

---

# 28. `pass`

`pass` means:

> Do nothing.

Example:

```python
for i in range(5):

    if i == 3:
        pass

    print(i)
```

`pass` does NOT skip the iteration.

Compare:

```text
break     → stop loop
continue  → skip iteration
pass      → do nothing
```

---

# 29. `while True`

A common Python pattern:

```python
while True:

    user_input = input("Enter command: ")

    if user_input == "quit":
        break

    print("You entered:", user_input)
```

The loop continues until the user enters:

```text
quit
```

This is also one way to implement the behavior of a JavaScript `do...while` loop.

---

# 30. Python vs JavaScript Loop Concepts

| JavaScript   | Python               |
| ------------ | -------------------- |
| `for`        | `for`                |
| `while`      | `while`              |
| `do...while` | No direct equivalent |
| `switch`     | `match...case`       |
| `break`      | `break`              |
| `continue`   | `continue`           |

Python uses:

```python
match value:
    case 1:
        print("One")
    case 2:
        print("Two")
```

for pattern matching.

We will cover `match...case` separately when studying Python conditions/control flow more deeply.

---

# 31. Common Interview Patterns

These are the patterns you should be able to recognize.

### Pattern 1 — Counting

```python
count = 0

for item in items:

    if condition:
        count += 1
```

### Pattern 2 — Sum

```python
total = 0

for item in items:
    total += item
```

### Pattern 3 — Search

```python
for item in items:

    if item == target:
        break
```

### Pattern 4 — Skip invalid items

```python
for item in items:

    if invalid:
        continue

    process(item)
```

### Pattern 5 — Find maximum

```python
maximum = numbers[0]

for number in numbers:

    if number > maximum:
        maximum = number
```

### Pattern 6 — Find minimum

```python
minimum = numbers[0]

for number in numbers:

    if number < minimum:
        minimum = number
```

---

# 32. Common Interview Questions

### Q1. What is a loop?

A loop repeatedly executes a block of code.

### Q2. Difference between `for` and `while`?

`for` is commonly used for iterating over a sequence or known range.

`while` is commonly used when repetition depends on a condition.

### Q3. What does `range(1, 10)` produce?

```text
1 2 3 4 5 6 7 8 9
```

`10` is excluded.

### Q4. Difference between `break` and `continue`?

```text
break     → exits the loop
continue  → skips the current iteration
```

### Q5. What happens if you forget to update a `while` loop variable?

The loop can become infinite if its condition never becomes False.

### Q6. What is a nested loop?

A loop inside another loop.

### Q7. Does `break` in an inner loop stop the outer loop?

No. It stops the nearest enclosing loop.

### Q8. What is `enumerate()`?

It provides both the index and value while iterating.

### Q9. What is `zip()`?

It allows multiple iterables to be iterated together.

### Q10. When should you use `continue`?

When you want to skip the current item but continue processing the remaining items.

---

# 33. Practice — Beginner

## Task 1

Print numbers from 1 to 10.

## Task 2

Print numbers from 10 to 1.

## Task 3

Print even numbers from 1 to 20.

## Task 4

Print odd numbers from 1 to 20.

## Task 5

Print "Python" 5 times.

---

# 34. Practice — Intermediate

## Task 6

Print numbers from 1 to 20 but skip 10.

## Task 7

Print numbers from 1 to 20 but stop at 15.

## Task 8

Find the sum of numbers from 1 to 100.

## Task 9

Count even numbers in a list.

## Task 10

Find the largest number without using `max()`.

---

# 35. Practice — Interview

## Task 11

Reverse a string without using slicing.

## Task 12

Count how many times `"a"` appears in a string.

## Task 13

Create a multiplication table.

## Task 14

Calculate factorial using a loop.

## Task 15

Implement FizzBuzz.

---

# 36. Quick Revision

Before an interview, remember:

```text
FOR
→ iterate over a sequence/range

WHILE
→ repeat while condition is True

RANGE
→ stop value is excluded

BREAK
→ stop the loop

CONTINUE
→ skip current iteration

PASS
→ do nothing

NESTED LOOP
→ loop inside a loop

ENUMERATE
→ index + value

ZIP
→ multiple iterables together

LOOP ELSE
→ runs when loop finishes without break
```

---

# 37. Interview Mental Checklist

When you see a loop problem, ask:

```text
1. What am I iterating over?
        ↓
2. Do I need for or while?
        ↓
3. Do I need a condition?
        ↓
4. Do I need to skip something?
        ↓
       continue
        ↓
5. Do I need to stop completely?
        ↓
       break
        ↓
6. Do I need a counter?
        ↓
7. Do I need an accumulator/total?
        ↓
8. Do I need to compare values?
        ↓
9. Do I need nested loops?
```

---

# Loop Status

```text
Basic for loop              ✅
range()                     ✅
step / reverse              ✅
while loop                  ✅
infinite loop concept       ✅
break                       ✅
continue                    ✅
pass                        ✅
nested loops                ✅
loop + conditions           ✅
string iteration            ✅
list iteration              ✅
counting                    ✅
sum                         ✅
max/min logic               ✅
enumerate                   🔜
zip                         🔜
loop else                   🔜
list comprehensions         🔜
interview problems          🔜
```

> **Don't memorize every example. Understand the patterns.**
>
> In backend development, loops will become much easier once we start working with **lists, dictionaries, API responses, database records, and JSON**.
