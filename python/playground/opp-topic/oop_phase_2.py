# ==========================================
# Python OOP Phase 2
# ==========================================

# 1. Encapsulation

class BankAccount:

    def __init__(self, balance):
        self._balance = balance

    def deposit(self, amount):
        if amount > 0:
            self._balance += amount

    def get_balance(self):
        return self._balance


account = BankAccount(1000)

account.deposit(500)

print(account.get_balance())


# 2. @property

class User:

    def __init__(self, age):
        self._age = age

    @property
    def age(self):
        return self._age

    @age.setter
    def age(self, value):
        if value < 0:
            raise ValueError("Age cannot be negative")

        self._age = value


user = User(25)

print(user.age)

user.age = 30

print(user.age)


# 3. Inheritance

class Animal:

    def eat(self):
        print("Animal is eating")


class Dog(Animal):

    def bark(self):
        print("Dog is barking")


dog = Dog()

dog.eat()
dog.bark()


# 4. super()

class AnimalWithName:

    def __init__(self, name):
        self.name = name

    def eat(self):
        print(f"{self.name} is eating")


class DogWithName(AnimalWithName):

    def __init__(self, name, breed):
        super().__init__(name)
        self.breed = breed

    def bark(self):
        print(f"{self.name} is barking")

    def show_eating(self):
        super().eat()


dog2 = DogWithName("Tommy", "German Shepherd")

dog2.show_eating()
dog2.bark()

print(dog2.breed)


# 5. Polymorphism

class Cat:

    def sound(self):
        print("Cat says Meow")


class DogAnimal:

    def sound(self):
        print("Dog says Woof")


animals = [Cat(), DogAnimal()]

for animal in animals:
    animal.sound()


# 6. Abstraction

from abc import ABC, abstractmethod


class Payment(ABC):

    @abstractmethod
    def pay(self):
        pass


class CardPayment(Payment):

    def pay(self):
        print("Paying with card")


class CashPayment(Payment):

    def pay(self):
        print("Paying with cash")


card = CardPayment()
cash = CashPayment()

card.pay()
cash.pay()