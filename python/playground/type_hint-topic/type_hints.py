# Type Hints - Hands-on Practice

# 1. Variables
name: str = "Noor"
age: int = 25
height: float = 5.9
is_developer: bool = True

print(name)
print(age)
print(height)
print(is_developer)


# 2. Function parameters and return type
def add(a: int, b: int) -> int:
    return a + b


print(add(10, 5))


# 3. String parameter and return type
def greet(name: str) -> str:
    return f"Hello, {name}"


print(greet("Noor"))


# 4. Lists
numbers: list[int] = [10, 20, 30]
names: list[str] = ["Ali", "Ahmed", "Noor"]

print(numbers)
print(names)


# 5. Dictionary
scores: dict[str, int] = {
    "Ali": 90,
    "Ahmed": 85,
    "Noor": 95,
}

print(scores)


# 6. Tuple
user: tuple[str, int] = ("Noor", 25)

print(user)


# 7. Optional value: str or None
def find_user(user_id: int) -> str | None:
    if user_id == 1:
        return "Noor"

    return None


print(find_user(1))
print(find_user(99))


# 8. Union type: int or str
def show_id(user_id: int | str) -> None:
    print(user_id)


show_id(101)
show_id("USER-101")
