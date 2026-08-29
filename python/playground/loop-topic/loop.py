# Python Level 1 — Loops Playground

# ==========================================
# 1. Basic for loop
# ==========================================

for i in range(1, 11):
    print(i)


# ==========================================
# 2. Basic while loop
# ==========================================

count = 1

while count <= 5:
    print(count)
    count += 1


# ==========================================
# 3. break
# ==========================================

for i in range(1, 11):
    if i == 6:
        break

    print(i)


# ==========================================
# 4. continue
# ==========================================

for i in range(1, 11):
    if i % 2 != 0:
        continue

    print(i)


# ==========================================
# 5. Nested loops
# ==========================================

for class_room in range(1, 4):
    for student in range(1, 4):
        print(f"Class {class_room} - Student {student}")


# ==========================================
# 6. Nested loop + condition
# ==========================================

for class_room in range(1, 4):
    for student in range(1, 6):

        if student % 2 != 0:
            continue

        print(f"Class {class_room} - Student {student}")