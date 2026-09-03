# ==========================================
# Professional Python — Last 3 Topics
# Enum + Datetime + Environment Variables
# ==========================================


# ==========================================
# 1. ENUM
# ==========================================

from enum import Enum


class UserRole(Enum):
    ADMIN = "admin"
    USER = "user"
    MODERATOR = "moderator"


role = UserRole.ADMIN

print("Enum member:", role)
print("Enum value:", role.value)


# ==========================================
# 2. ENUM + DATACLASS
# ==========================================

from dataclasses import dataclass


class OrderStatus(Enum):
    PENDING = "pending"
    SHIPPED = "shipped"
    DELIVERED = "delivered"


@dataclass
class Order:
    order_id: int
    product: str
    status: OrderStatus


order1 = Order(1, "Laptop", OrderStatus.PENDING)
order2 = Order(2, "Mouse", OrderStatus.SHIPPED)

print(order1)
print(order1.status)
print(order1.status.value)

print(order2)


# ==========================================
# 3. DATETIME
# ==========================================

from datetime import date, datetime, timedelta


# Current date
today = date.today()

print("Today's date:", today)


# Current date + time
now = datetime.now()

print("Current datetime:", now)


# Access individual parts
print("Year:", now.year)
print("Month:", now.month)
print("Day:", now.day)

print("Hour:", now.hour)
print("Minute:", now.minute)
print("Second:", now.second)


# Specific date
birthday = date(2001, 5, 20)

print("Birthday:", birthday)


# Specific datetime
meeting = datetime(2026, 9, 10, 15, 30)

print("Meeting:", meeting)


# Only time
print("Current time:", now.time())


# Add time using timedelta
tomorrow = today + timedelta(days=1)

print("Tomorrow:", tomorrow)


# Subtract time
yesterday = today - timedelta(days=1)

print("Yesterday:", yesterday)


# ==========================================
# 4. ENVIRONMENT VARIABLES
# ==========================================

import os

# Reads an environment variable
app_name = os.getenv("APP_NAME")

print("App name:", app_name)


# Provide a default value if variable doesn't exist
environment = os.getenv("ENVIRONMENT", "development")

print("Environment:", environment)