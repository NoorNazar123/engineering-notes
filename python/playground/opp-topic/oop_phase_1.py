# ==========================================
# Python OOP Fundamentals — Phase 1
# ==========================================

# 1. Class
class User:
    pass


# 2. Object
user1 = User()
user2 = User()


# 3. Constructor + Instance Attributes
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    # 4. Instance Method
    def introduce(self):
        print(f"Hi, I am {self.name} and I am {self.age} years old.")


# 5. Creating Multiple Objects
student1 = Student("Noor", 25)
student2 = Student("Ali", 22)

student1.introduce()
student2.introduce()


# 6. Class Attribute
class Employee:
    company = "JTechsight"

    def __init__(self, name, role):
        self.name = name
        self.role = role

    def introduce(self):
        print(f"I am {self.name}, working as a {self.role}.")


employee1 = Employee("Noor", "Frontend Developer")
employee2 = Employee("Ali", "Backend Developer")

employee1.introduce()
employee2.introduce()

print(employee1.company)
print(employee2.company)


# 7. Instance vs Class Attributes
class Car:
    wheels = 4  # Class attribute

    def __init__(self, brand, model):
        self.brand = brand  # Instance attribute
        self.model = model  # Instance attribute


car1 = Car("Toyota", "Corolla")
car2 = Car("Honda", "Civic")

print(car1.brand)
print(car2.brand)

print(car1.wheels)
print(car2.wheels)