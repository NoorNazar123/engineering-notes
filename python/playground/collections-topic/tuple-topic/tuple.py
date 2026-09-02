# Python Tuples
# Backend-focused practice


# 1. Create a Tuple

backend = (
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Docker"
)

print(backend)


# 2. Access Values

print(backend[0])
print(backend[1])


# 3. Negative Indexing

print(backend[-1])
print(backend[-2])


# 4. Length

print(len(backend))


# 5. Slicing

print(backend[1:3])


# 6. Count

skills = (
    "Python",
    "FastAPI",
    "Python",
    "Docker"
)

print(skills.count("Python"))


# 7. Index

print(skills.index("FastAPI"))


# 8. Loop Through Tuple

for skill in skills:
    print(skill)


# 9. Tuple Unpacking

user = ("Hammad", 20, "Developer")

name, age, role = user

print(name)
print(age)
print(role)


# 10. Tuple Cannot Be Changed

# user[0] = "Ali"
# ❌ TypeError: tuple does not support item assignment


# 11. Tuple Can Contain Different Data Types

data = (
    "Hammad",
    20,
    True
)

print(data)


# 12. Tuple Can Contain a List

user = (
    "Hammad",
    ["Python", "FastAPI"]
)

print(user[1])
print(user[1][0])