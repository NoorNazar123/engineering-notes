# # ==========================================
# # Python Dataclasses
# # ==========================================

# from dataclasses import dataclass, field


# # 1. Basic Dataclass
# @dataclass
# class Student:
#     name: str
#     age: int
#     university: str


# student = Student("Noor", 25, "FUUAST")

# print(student)


# # 2. Default Value
# @dataclass
# class Product:
#     name: str
#     price: float
#     quantity: int = 1

#     def total_cost(self) -> float:
#         return self.price * self.quantity


# product1 = Product("Laptop", 1000.0, 2)
# product2 = Product("Mouse", 50.0)

# print(product1)
# print(product1.total_cost())

# print(product2)
# print(product2.total_cost())


# # 3. Mutable Defaults with default_factory
# @dataclass
# class User:
#     name: str
#     age: int
#     skills: list[str] = field(default_factory=list)
#     settings: dict = field(default_factory=dict)
#     tags: set[str] = field(default_factory=set)


# user1 = User("Noor", 25)
# user2 = User("Ali", 22)

# # Normal list methods work
# user1.skills.append("Python")
# user1.skills.extend(["FastAPI", "Django"])

# # Normal dictionary methods work
# user1.settings["theme"] = "dark"

# # Normal set methods work
# user1.tags.add("backend")
# user1.tags.update({"python", "api"})

# print(user1)
# print(user2)


# # 4. Frozen Dataclass
# @dataclass(frozen=True)
# class Coordinates:
#     latitude: float
#     longitude: float


# location = Coordinates(24.8607, 67.0011)

# print(location)

# # This would raise an error:
# # location.latitude = 25.0

from dataclasses import dataclass
from enum import Enum


class UserRole(Enum):
    ADMIN = "admin"
    USER = "user"
    MODERATOR = "moderator"


@dataclass
class User:
    name: str
    role: UserRole


u1 = User("Noor", UserRole.ADMIN)
u2 = User("Ali", UserRole.USER)

print(u1)
print(u1.role)
print(u1.role.value)