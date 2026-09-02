# ============================================================
# Python Exceptions — Complete Practice
# ============================================================

# ============================================================
# 1. Basic try / except
# ============================================================

try:
    result = 10 / 0

except:
    print("Something went wrong")


# ============================================================
# 2. Specific Exception
# ============================================================

try:
    result = 10 / 0

except ZeroDivisionError:
    print("Cannot divide by zero")


# ============================================================
# 3. Exception object — as error
# ============================================================

try:
    result = 10 / 0

except ZeroDivisionError as error:
    print("Error:", error)


# ============================================================
# 4. ValueError
# ============================================================

try:
    age = int("hello")

except ValueError as error:
    print("Invalid age:", error)


# ============================================================
# 5. TypeError
# ============================================================

try:
    result = "10" + 5

except TypeError as error:
    print("Type error:", error)


# ============================================================
# 6. KeyError
# ============================================================

user = {
    "name": "Hammad"
}

try:
    print(user["email"])

except KeyError as error:
    print("Key not found:", error)


# ============================================================
# 7. IndexError
# ============================================================

users = ["Hammad", "Ali"]

try:
    print(users[5])

except IndexError as error:
    print("Index not found:", error)


# ============================================================
# 8. FileNotFoundError
# ============================================================

try:
    with open("missing.txt", "r") as file:
        data = file.read()

except FileNotFoundError as error:
    print("File not found:", error)


# ============================================================
# 9. AttributeError
# ============================================================

name = "Hammad"

try:
    name.append("Ali")

except AttributeError as error:
    print("Attribute error:", error)


# ============================================================
# 10. Multiple except blocks
# ============================================================

try:
    number = int("hello")
    result = 10 / number

except ValueError:
    print("Invalid number")

except ZeroDivisionError:
    print("Cannot divide by zero")


# ============================================================
# 11. Multiple exceptions in one except
# ============================================================

try:
    number = int("hello")

except (ValueError, TypeError) as error:
    print("Invalid input:", error)


# ============================================================
# 12. else
# ============================================================

try:
    number = 10 / 2

except ZeroDivisionError:
    print("Cannot divide by zero")

else:
    print("Success:", number)


# ============================================================
# 13. finally
# ============================================================

try:
    number = 10 / 2

except ZeroDivisionError:
    print("Cannot divide by zero")

finally:
    print("Operation finished")


# ============================================================
# 14. try + except + else + finally
# ============================================================

try:
    number = int("20")
    result = 100 / number

except ValueError:
    print("Invalid number")

except ZeroDivisionError:
    print("Cannot divide by zero")

else:
    print("Result:", result)

finally:
    print("Operation finished")


# ============================================================
# 15. General Exception
# ============================================================

try:
    result = 10 / 0

except Exception as error:
    print("Something went wrong:", error)


# ============================================================
# 16. raise — manually raise an exception
# ============================================================

age = 15

try:
    if age < 18:
        raise ValueError("User must be 18 or older")

except ValueError as error:
    print("Validation error:", error)


# ============================================================
# 17. Backend-style validation
# ============================================================

def register_user(age):

    if age < 18:
        raise ValueError("User must be at least 18")

    return "User registered successfully"


try:
    message = register_user(20)
    print(message)

except ValueError as error:
    print("Registration failed:", error)


# ============================================================
# 18. Re-raise an exception
# ============================================================

def divide(a, b):

    try:
        return a / b

    except ZeroDivisionError:
        print("Logging: division failed")
        raise


try:
    divide(10, 0)

except ZeroDivisionError as error:
    print("Handled outside:", error)


# ============================================================
# 19. Custom Exception
# ============================================================

class AgeError(Exception):
    pass


def create_user(age):

    if age < 18:
        raise AgeError("User must be 18 or older")

    return "User created"


try:
    print(create_user(15))

except AgeError as error:
    print("Registration failed:", error)


# ============================================================
# 20. Exception Chaining
# ============================================================

try:
    age = int("hello")

except ValueError as error:
    try:
        raise RuntimeError("Could not process user age") from error

    except RuntimeError as new_error:
        print("New error:", new_error)


# ============================================================
# 21. finally runs even with return
# ============================================================

def test():

    try:
        return "Success"

    finally:
        print("Finally always runs")


print(test())


# ============================================================
# 22. Practical Program — Safe Division
# ============================================================

def safe_divide(a, b):

    try:
        return a / b

    except ZeroDivisionError:
        return "Cannot divide by zero"


print(safe_divide(10, 2))
print(safe_divide(10, 0))


# ============================================================
# 23. Practical Program — Safe Age Conversion
# ============================================================

def convert_age(age):

    try:
        return int(age)

    except ValueError:
        return "Age must be a number"


print(convert_age("20"))
print(convert_age("hello"))
