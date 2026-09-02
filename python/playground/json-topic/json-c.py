# Python JSON — Backend Practice

import json


# ============================================================
# 1. Python Dictionary → JSON String
# ============================================================

user = {
    "name": "Hammad",
    "age": 20,
    "role": "Developer"
}

data = json.dumps(user)

print(data)
print(type(data))  # str


# ============================================================
# 2. JSON String → Python Dictionary
# ============================================================

data = '{"name": "Hammad", "age": 20, "role": "Developer"}'

user = json.loads(data)

print(user)
print(type(user))  # dict
print(user["name"])


# ============================================================
# 3. JSON String with Nested List
# ============================================================

data = '{"name": "Hammad", "skills": ["Python", "FastAPI", "Docker"]}'

user = json.loads(data)

print(user["name"])
print(user["skills"][1])


# ============================================================
# 4. Python List of Dictionaries → JSON String
# ============================================================

users = [
    {"name": "Hammad", "role": "Developer"},
    {"name": "Ali", "role": "Designer"},
    {"name": "Ahmed", "role": "Developer"}
]

data = json.dumps(users)

print(type(data))  # str
print(data)


# ============================================================
# 5. JSON String → Python List of Dictionaries
# ============================================================

data = '''
[
    {"name": "Hammad", "role": "Developer"},
    {"name": "Ali", "role": "Designer"},
    {"name": "Ahmed", "role": "Developer"}
]
'''

users = json.loads(data)

print(type(users))  # list

for user in users:
    print(user["name"])


# ============================================================
# 6. Python Data → JSON File
# ============================================================

users = [
    {"name": "Hammad", "role": "Developer"},
    {"name": "Ali", "role": "Designer"}
]

with open("users.json", "w") as file:
    json.dump(users, file, indent=4)

print("JSON file created successfully!")


# ============================================================
# 7. JSON File → Python Data
# ============================================================

with open("users.json", "r") as file:
    users = json.load(file)

print(type(users))  # list
print(users)

for user in users:
    print(user["name"])


# ============================================================
# JSON QUICK REMINDER
# ============================================================

# dumps() → Python → JSON string
# loads() → JSON string → Python
# dump()  → Python → JSON file
# load()  → JSON file → Python