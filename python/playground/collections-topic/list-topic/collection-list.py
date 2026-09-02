# ==========================================
# Python Collections — Lists
# Backend / FastAPI Job-Ready Practice
# ==========================================


# ------------------------------------------
# 1. Creating a List
# ------------------------------------------

tasks = [
    "Login API",
    "Database Setup",
    "User Authentication",
    "Deploy API"
]

print(tasks)


# ------------------------------------------
# 2. Accessing Items
# ------------------------------------------

print(tasks[0])      # First item
print(tasks[-1])     # Last item


# ------------------------------------------
# 3. Changing an Item
# ------------------------------------------

tasks[1] = "PostgreSQL Setup"

print(tasks)


# ------------------------------------------
# 4. Adding Items
# ------------------------------------------

# append() → add one item at the end
tasks.append("Write Tests")

# insert(index, value) → add at a specific position
tasks.insert(2, "API Testing")

# extend() → add multiple items
tasks.extend(["API Documentation", "Monitoring"])

print(tasks)


# ------------------------------------------
# 5. Removing Items
# ------------------------------------------

# remove(value) → remove by value
tasks.remove("Monitoring")

# pop(index) → remove by index
tasks.pop(1)

# pop() → remove the last item
tasks.pop()

print(tasks)


# ------------------------------------------
# 6. Check if Item Exists
# ------------------------------------------

print("Login API" in tasks)


# ------------------------------------------
# 7. Find Item Position
# ------------------------------------------

if "Login API" in tasks:
    position = tasks.index("Login API")
    print(position)


# ------------------------------------------
# 8. Count Items
# ------------------------------------------

statuses = [
    "active",
    "inactive",
    "active",
    "active",
    "inactive"
]

print(statuses.count("active"))


# ------------------------------------------
# 9. List Length
# ------------------------------------------

print(len(tasks))


# ------------------------------------------
# 10. Sorting
# ------------------------------------------

prices = [500, 100, 800, 300, 200]

prices.sort()

print(prices)

# Highest → Lowest
prices.sort(reverse=True)

print(prices)


# ------------------------------------------
# 11. Reverse
# ------------------------------------------

tasks = ["Login", "Database", "Testing", "Deploy"]

tasks.reverse()

print(tasks)


# ------------------------------------------
# 12. Copy
# ------------------------------------------

tasks = ["Login", "Database", "Testing", "Deploy"]

backup_tasks = tasks.copy()

backup_tasks.append("Coding")

print(tasks)
print(backup_tasks)


# ------------------------------------------
# 13. Clear
# ------------------------------------------

tasks.clear()

print(tasks)


# ==========================================
# LIST SLICING
# ==========================================

tasks = [
    "Login API",
    "Register API",
    "Product API",
    "Order API",
    "Payment API"
]


# ------------------------------------------
# 14. Basic Slicing
# ------------------------------------------

print(tasks[0:3])

# Start omitted
print(tasks[:3])

# End omitted
print(tasks[2:])

# Whole list
print(tasks[:])


# ------------------------------------------
# 15. Negative Slicing
# ------------------------------------------

# Last 2 items
print(tasks[-2:])


# ------------------------------------------
# 16. Slicing with Step
# ------------------------------------------

numbers = [1, 2, 3, 4, 5, 6]

# Every second item
print(numbers[0:6:2])

# Shortcut
print(numbers[::2])


# ------------------------------------------
# 17. Reverse Using Slicing
# ------------------------------------------

print(numbers[::-1])


# ------------------------------------------
# 18. Full Slicing Pattern
# ------------------------------------------

# list[start:end:step]

numbers = [10, 20, 30, 40, 50, 60, 70, 80]

print(numbers[1:6:2])


# ==========================================
# LOOPING THROUGH LISTS
# ==========================================

tasks = [
    "Login API",
    "Database Setup",
    "Testing",
    "Deploy API"
]


# ------------------------------------------
# 19. Loop Through Every Item
# ------------------------------------------

for task in tasks:
    print(task)


# ------------------------------------------
# 20. Loop + f-string
# ------------------------------------------

for task in tasks:
    print(f"Task: {task}")


# ------------------------------------------
# 21. Loop + Condition
# ------------------------------------------

prices = [500, 1200, 800, 2500, 1500, 300]

for price in prices:
    if price > 1000:
        print(price)


# ------------------------------------------
# 22. Counting Items with a Loop
# ------------------------------------------

statuses = [
    "active",
    "inactive",
    "active",
    "active",
    "inactive"
]

total = 0

for status in statuses:
    if status == "active":
        total = total + 1

print(total)


# ==========================================
# NESTED LISTS
# ==========================================

products = [
    ["Laptop", 120000],
    ["Phone", 80000],
    ["Tablet", 50000]
]


# ------------------------------------------
# 23. Access Nested List
# ------------------------------------------

print(products[1])
print(products[1][1])


# ------------------------------------------
# 24. Loop Through Nested Lists
# ------------------------------------------

for product in products:
    print(f"{product[0]} - {product[1]}")


# ==========================================
# LIST COMPREHENSION
# ==========================================

numbers = [1, 2, 3, 4, 5]


# ------------------------------------------
# 25. Transform Items
# ------------------------------------------

squares = [
    number * number
    for number in numbers
]

print(squares)


# ------------------------------------------
# 26. Transform Every Item
# ------------------------------------------

double_numbers = [
    number * 2
    for number in numbers
]

print(double_numbers)


# ------------------------------------------
# 27. Filter Items
# ------------------------------------------

numbers = [1, 2, 3, 4, 5, 6]

even_numbers = [
    number
    for number in numbers
    if number % 2 == 0
]

print(even_numbers)


# ------------------------------------------
# 28. Backend-Style Filtering
# ------------------------------------------

ages = [15, 22, 17, 30, 14, 25]

adults = [
    age
    for age in ages
    if age >= 18
]

print(adults)


# ==========================================
# IMPORTANT DIFFERENCES
# ==========================================

# remove() → value
# pop()    → index
# pop()    → last item
# sort()   → sort items
# reverse() → reverse current order
# copy()   → create separate list
# clear()  → remove everything
