# ======================================
# Python Lesson 01: Variables & Data Types
# ======================================

# -------------------------------
# Variables & Data Types
# -------------------------------

# String
name = "Noor"

# Integer
age = 25

# Float
height = 5.8

# Boolean
is_student = True

print("===== Student Profile =====")

print(f"Name       : {name}")
print(f"Age        : {age}")
print(f"Height     : {height}")
print(f"Student    : {is_student}")

print()

# -------------------------------
# Variable Reassignment
# -------------------------------

print("===== Variable Reassignment =====")

name = "Ali"

print(f"Updated Name : {name}")

print()

# -------------------------------
# Variable Naming (snake_case)
# -------------------------------

user_name = "Noor"
student_age = 25
is_verified = True
course_fee = 25000

print("===== Variable Naming =====")

print(f"""
User Name   : {user_name}
Student Age : {student_age}
Verified    : {is_verified}
Course Fee  : {course_fee}
""")

# -------------------------------
# Constants (Convention)
# -------------------------------

PI = 3.14159
MAX_USERS = 100

print("===== Constants =====")

print(f"PI          : {PI}")
print(f"Max Users   : {MAX_USERS}")

print()

# -------------------------------
# type() Function
# -------------------------------

print("===== Data Types =====")

print(f"name         -> {type(name)}")
print(f"age          -> {type(age)}")
print(f"height       -> {type(height)}")
print(f"is_student   -> {type(is_student)}")