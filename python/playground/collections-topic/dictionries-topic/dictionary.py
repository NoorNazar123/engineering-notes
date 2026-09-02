# Python Dictionaries
# Backend-focused practice


# 1. Create Dictionary

user = {
    "name": "Hammad",
    "age": 20,
    "role": "Developer"
}


# 2. Access Values

print(user["name"])
print(user["role"])


# 3. Update Value

user["role"] = "Senior Developer"

print(user)


# 4. Add New Key

user["city"] = "Karachi"

print(user)


# 5. Delete Key

del user["city"]

print(user)


# 6. Check if Key Exists

if "email" in user:
    print("Email exists")
else:
    print("Email not found")


# 7. Safe Access with get()

print(user.get("email"))
print(user.get("email", "Email not found"))


# 8. Get Keys

print(user.keys())


# 9. Get Values

print(user.values())


# 10. Get Key-Value Pairs

print(user.items())


# 11. Loop Through Keys

for key in user:
    print(key)


# 12. Loop Through Values

for value in user.values():
    print(value)


# 13. Loop Through Key + Value

for key, value in user.items():
    print(key, "→", value)


# 14. Update Multiple Keys

user.update({
    "city": "Karachi",
    "country": "Pakistan"
})

print(user)


# 15. Pop Specific Key

city = user.pop("city")

print(city)
print(user)


# 16. Pop Last Item

user.popitem()

print(user)


# 17. Setdefault

user.setdefault("email", "unknown@example.com")

print(user)


# 18. Nested Dictionary

user = {
    "name": "Hammad",
    "address": {
        "city": "Karachi",
        "country": "Pakistan"
    }
}

print(user["address"]["city"])


# 19. Dictionary + List

user = {
    "name": "Hammad",
    "skills": ["Python", "FastAPI", "Docker"]
}

print(user["skills"][1])


# 20. List of Dictionaries

users = [
    {"name": "Hammad", "role": "Developer"},
    {"name": "Ali", "role": "Designer"},
    {"name": "Ahmed", "role": "Developer"}
]

for user in users:
    print(user["name"])


# 21. Filter Dictionary Data

for user in users:
    if user["role"] == "Developer":
        print(user["name"])
