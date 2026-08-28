# `03-conditional-statements.py`

# Python Level 1 — Conditional Statements Playground

# 1. Basic if

age = 20

if age >= 18:
    print("Adult")

# 2. if / else

age = 15

if age >= 18:
    print("Adult")
else:
    print("Minor")

# 3. if / elif / else

marks = 85

if marks >= 90:
    print("A")
elif marks >= 80:
    print("B")
elif marks >= 70:
    print("C")
else:
    print("F")

# 4. Condition order

# Python checks conditions from top to bottom.

# The first True condition wins.

marks = 85

if marks >= 60:
    print("D")
elif marks >= 80:
    print("B")

# Output:

# D

# 5. Age classification exercise

age = 24

if age >= 18:
    print("Adult")
elif age >= 13:
    print("Teenager")
else:
    print("Child")

# 6. Age classification with invalid age

age = 24

if age < 0:
    print("Invalid age")
elif age >= 18:
    print("Adult")
elif age >= 13:
    print("Teenager")
else:
    print("Child")

# 7. Logical operator: and

age = 20
has_id = True

if age >= 18 and has_id:
    print("Allowed")
else:
    print("Denied")

# 8. Logical operator: or

is_admin = False
is_manager = True

if is_admin or is_manager:
    print("Access granted")
else:
    print("Access denied")

# 9. Logical operator: not

is_logged_in = False

if not is_logged_in:
    print("Please login")
else:
    print("Welcome")

# 10. Nested if

age = 25
has_id = True

if age >= 18:
    if has_id:
        print("Entry allowed")

# 11. Nested if vs and

age = 20
has_id = True

# Nested if

if age >= 18:
    if has_id:
        print("Allowed")

# Using and

if age >= 18 and has_id:
    print("Allowed")

# 12. Truthy and falsy — empty string

name = ""

if name:
    print("Has name")
else:
    print("No name")

# 13. Truthy and falsy — non-empty string

name = "Noor"

if name:
    print("Has name")
else:
    print("No name")

# 14. Truthy and falsy — empty list

items = []

if items:
    print("Items exist")
else:
    print("No items")

# 15. Truthy and falsy — non-empty list

items = ["Book", "Pen"]

if items:
    print("Items exist")
else:
    print("No items")

# 16. None

user = None

if user is None:
    print("User not found")
else:
    print("User found")

# 17. None vs truthy/falsy

user = None

if user:
    print("User exists")
else:
    print("User is empty/None")

# 18. == vs is

a = [1, 2, 3]
b = [1, 2, 3]

print(a == b)  # True — same values
print(a is b)  # False — different objects

# 19. Same object

a = [1, 2, 3]
b = a

print(a == b)  # True — same values
print(a is b)  # True — same object

# 20. Backend-style example

username = "Noor"
password_correct = True
account_active = True

if username and password_correct and account_active:
    print("Login successful")
else:
    print("Login failed")

# 21. Temperature exercise

temperature = 35

if temperature >= 40:
    print("Very Hot")
elif temperature >= 30:
    print("Hot")
elif temperature >= 20:
    print("Normal")
else:
    print("Cold")

# 22. Debugging exercise — corrected version

age = 20

if age >= 18:
    print("Adult")
else:
    print("Minor")

# Key concepts practiced:

#

# if

# elif

# else

# nested if

# and

# or

# not

# truthy / falsy

# None

# ==

# is

# is not

# conditional logic

# backend-style decision making
