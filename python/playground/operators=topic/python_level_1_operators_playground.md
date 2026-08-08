# Python Level 1 — Operators Playground

## Goal

Practice arithmetic and comparison operators without introducing conditions yet.

---

# Core Operators

| Operator | Meaning          | Example    |     Result |
| -------- | ---------------- | ---------- | ---------: |
| `+`      | Addition         | `10 + 3`   |       `13` |
| `-`      | Subtraction      | `10 - 3`   |        `7` |
| `*`      | Multiplication   | `10 * 3`   |       `30` |
| `/`      | Division         | `10 / 3`   | `3.333...` |
| `//`     | Floor division   | `10 // 3`  |        `3` |
| `%`      | Remainder        | `10 % 3`   |        `1` |
| `**`     | Power            | `10 ** 3`  |     `1000` |
| `==`     | Equal comparison | `10 == 3`  |    `False` |
| `!=`     | Not equal        | `10 != 3`  |     `True` |
| `>`      | Greater than     | `10 > 3`   |     `True` |
| `<`      | Less than        | `10 < 3`   |    `False` |
| `>=`     | Greater/equal    | `10 >= 10` |     `True` |
| `<=`     | Less/equal       | `10 <= 3`  |    `False` |

---

# ⭐ Important Concepts — Do Not Mix These Up

## `=` vs `==`

`=` assigns a value:

```python
age = 25
```

`==` compares values:

```python
age == 25
```

---

## `/` vs `//`

`/` performs normal division and returns a float:

```python
15 / 4  # 3.75
```

`//` performs floor division:

```python
15 // 4  # 3
```

---

## `%` Is Remainder

```python
15 % 4  # 3
```

Because:

```text
4 × 3 = 12
15 - 12 = 3
```

The remainder is `3`.

---

## `**` Is Power

```python
10 ** 3  # 1000
```

This means:

```text
10 × 10 × 10 = 1000
```

---

## String vs Number

```python
quantity = "2"  # string
quantity = 2    # integer
```

If a value represents a number that you need to calculate with, use a numeric type.

> **Important:** Python has special behavior for multiplying a string by an integer:
>
> ```python
> "2" * 3
> ```
>
> produces:
>
> ```text
> "222"
> ```
>
> So don't assume every operation between strings and numbers simply fails. Use the data type that correctly represents the meaning of your data.

---

# 🧪 Playground

Run the Python file and **predict the output before checking it**.

## Exercise 1 — Arithmetic

```python
a = 15
b = 4

print("Addition:", a + b)
print("Subtraction:", a - b)
print("Multiplication:", a * b)
print("Division:", a / b)
print("Floor division:", a // b)
print("Remainder:", a % b)
print("Power:", a ** b)
```

---

## Exercise 2 — Real-World Calculation

```python
price = 500
quantity = 2

total = price * quantity

print(f"Price: {price}")
print(f"Quantity: {quantity}")
print(f"Total: {total}")
```

---

## Exercise 3 — Comparisons

```python
age = 25

print("Age > 18:", age > 18)
print("Age < 18:", age < 18)
print("Age == 25:", age == 25)
print("Age != 30:", age != 30)
```

---

## Exercise 4 — Debugging

Find the mistakes:

```python
price = 500
quantity = "2"

total = price * quantity

print(f"Total: {total}")

if total = 1000:
    print("Correct")
```

Do not solve this by memorizing the answer.

Explain:

1. What type should `quantity` be?
2. Why is `=` wrong in the comparison?
3. What operator should be used for comparison?

---

# 🎯 Mastery Checklist

Before moving to Conditions:

- [ ] I can explain `=`
- [ ] I can explain `==`
- [ ] I know `/` vs `//`
- [ ] I know what `%` returns
- [ ] I know what `**` means
- [ ] I can identify string vs integer
- [ ] I can predict operator outputs
- [ ] I can debug the exercise above

---

# 📌 Remaining Python Operators — Learn Later

**This does NOT mean we have covered every Python operator yet.**

We are intentionally postponing the following until the appropriate stage of the learning path.

## 1. Assignment Operators

```python
+=
-=
*=
/=
//=
%=
**=
```

Example:

```python
score += 10
```

These will be introduced when we have enough foundation to understand why they are useful.

---

## 2. Logical Operators

```python
and
or
not
```

Example:

```python
age > 18 and age < 60
```

These will become especially important when we learn **conditions**.

---

## 3. Membership Operators

```python
in
not in
```

Example:

```python
"Python" in languages
```

These become more useful when we learn **collections** such as lists, dictionaries, and sets.

---

## 4. Identity Operators

```python
is
is not
```

These are different from `==` and will be taught later because understanding the difference requires a stronger mental model of Python objects and references.

---

## 5. Bitwise Operators

```python
&
|
^
~
<<
>>
```

These are lower priority for our current backend-learning path and will be introduced later when appropriate.

---

# 🧭 Operator Learning Roadmap

```text
CURRENT
│
├── Arithmetic Operators       ✅
├── Comparison Operators      ✅
│
├── Conditions                ← NEXT
├── Logical Operators         ← Soon
├── Assignment Operators      ← Soon
│
├── Collections
│   └── Membership Operators
│
├── Python Object Model
│   └── Identity Operators
│
└── Advanced / Specialized
    └── Bitwise Operators
```

### Important Rule

**Don't memorize every operator right now.**

Learn each operator when you have a real problem where it makes sense.

The goal is not:

> "I memorized Python syntax."

The goal is:

> **"I understand why this operator exists and when to use it."**
