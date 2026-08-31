# Python Functions — Today's Playground


# 1. Basic Function
def greet_them(name):
    print("Hello", name, "!")


greet_them("Hmmad")


# 2. Multiple Parameters
def student_info(name, age, course):
    print(f"Name: {name}")
    print(f"Age: {age}")
    print(f"Course: {course}")


student_info("Haris", 19, "Python")


# 3. return
def add_numbers(a, b):
    return a + b


result = add_numbers(10, 20)
print(result)


# 4. Function + Condition + return
def check_num(num):
    if num % 2 == 0:
        return "Even"
    else:
        return "Odd"


result = check_num(14)
print(result)


# 5. Default Parameter
def welcome(name="Guest"):
    return f"Welcome, {name}!"


print(welcome())
print(welcome("Noor"))


# 6. Keyword Arguments
def introduce(city, name, age):
    print(city, name, age)


introduce(city="Karachi", name="Noor", age=25)


# 7. Positional + Keyword Arguments
def employee(name, role, salary):
    return f"{name} {role} {salary}"


result = employee(
    "Noor",
    role="Backend Developer",
    salary=100000
)

print(result)


# 8. *args
# Multiple positional arguments are collected into a tuple.
def add_all(*numbers):
    total = 0

    for number in numbers:
        total = total + number

    return total


result = add_all(10, 20, 30, 40)
print(result)


# 9. **kwargs
# Multiple keyword arguments are collected into a dictionary.
def user_info(**details):
    return details


result = user_info(
    name="Noor",
    age=25,
    city="Karachi"
)

print(result)


# 10. Combining normal parameter + *args + **kwargs
def profile(name, *skills, **details):
    return name, skills, details


result = profile(
    "Noor",
    "Python",
    "FastAPI",
    "PostgreSQL",
    age=25,
    city="Karachi"
)

print(result)


# 11. Local Scope
name = "Noor"


def change_name():
    name = "Haris"
    return name


result = change_name()

print(result)  # Haris
print(name)    # Noor


# 12. global Keyword
x = 10


def change_global():
    global x
    x = 20


change_global()

print(x)  # 20