# Python Sets
# Backend-focused basic practice


# 1. Create a Set

roles = {"admin", "user", "editor"}

print(roles)


# 2. Duplicates Are Removed

roles = {"admin", "user", "admin", "editor", "user"}

print(roles)


# 3. List to Set

roles = ["admin", "user", "admin", "editor", "user"]

unique_roles = set(roles)

print(unique_roles)


# 4. Add One Item

skills = {"Python", "FastAPI", "Docker"}

skills.add("PostgreSQL")

print(skills)


# 5. Add Multiple Items

skills.update(["Git", "Linux"])

print(skills)


# 6. Remove an Item

skills.remove("Linux")

print(skills)


# 7. Safe Remove

skills.discard("JavaScript")

print(skills)


# 8. Check if Item Exists

if "Python" in skills:
    print("Python found")


# 9. Loop Through a Set

for skill in skills:
    print(skill)


# 10. Number of Items

print(len(skills))


# 11. Clear Set

skills.clear()

print(skills)


# 12. Union

frontend = {"HTML", "CSS", "JavaScript"}
backend = {"Python", "FastAPI", "JavaScript"}

all_skills = frontend | backend

print(all_skills)


# 13. Intersection

common_skills = frontend & backend

print(common_skills)


# 14. Difference

only_frontend = frontend - backend

print(only_frontend)


# 15. Difference - Other Direction

only_backend = backend - frontend

print(only_backend)


# 16. Set to List

skills = {"Python", "FastAPI", "Docker"}

skills_list = list(skills)

print(skills_list)
