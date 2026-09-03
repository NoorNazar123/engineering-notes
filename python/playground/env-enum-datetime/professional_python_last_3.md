# Professional Python — Quick Revision

## 1. Enum

### What is Enum?

`Enum` is used when a value should come from a **fixed set of choices**.

```python
from enum import Enum

class UserRole(Enum):
    ADMIN = "admin"
    USER = "user"
    MODERATOR = "moderator"
```

### Using Enum

```python
role = UserRole.ADMIN

print(role)
print(role.value)
```

```text
UserRole.ADMIN
admin
```

### Member vs Value

```python
UserRole.ADMIN
```

→ Enum member

```python
UserRole.ADMIN.value
```

→ actual value

### Why use Enum?

Without Enum:

```python
status = "pending"
status = "pendding"  # Typo possible
```

With Enum:

```python
OrderStatus.PENDING
```

The available choices are clearly defined.

### Common backend use cases

- User roles
- Order status
- Payment status
- Priority
- Environment
- Account status

---

# 2. Datetime

Python provides `date` and `datetime` for working with dates and times.

```python
from datetime import date, datetime
```

## `date`

Represents only:

```text
Year + Month + Day
```

Example:

```python
today = date.today()
```

Useful for:

- Birthday
- Exam date
- Due date
- Holiday
- Expiry date

---

## `datetime`

Represents:

```text
Date + Time
```

Example:

```python
now = datetime.now()
```

Useful for:

- `created_at`
- `updated_at`
- Login time
- Order creation time
- Message timestamp
- Appointments

---

## Difference

| Feature | `date` | `datetime` |
| ------- | ------ | ---------- |
| Year    | ✅     | ✅         |
| Month   | ✅     | ✅         |
| Day     | ✅     | ✅         |
| Hour    | ❌     | ✅         |
| Minute  | ❌     | ✅         |
| Second  | ❌     | ✅         |

### Access datetime parts

```python
now.year
now.month
now.day

now.hour
now.minute
now.second
```

### Create a specific date

```python
birthday = date(2001, 5, 20)
```

### Create a specific datetime

```python
meeting = datetime(2026, 9, 10, 15, 30)
```

---

## `timedelta`

Used to add or subtract an amount of time.

```python
from datetime import timedelta

tomorrow = today + timedelta(days=1)

yesterday = today - timedelta(days=1)
```

Can represent:

```text
days
seconds
minutes
hours
weeks
```

---

# 3. Environment Variables

### What are Environment Variables?

Environment variables are configuration values stored **outside the application source code**.

Common examples:

```text
DATABASE_URL
JWT_SECRET
API_KEY
APP_NAME
ENVIRONMENT
```

Instead of:

```python
JWT_SECRET = "secret123"
```

we keep the value outside the code.

---

## Reading Environment Variables

Python's built-in `os` module can read environment variables.

```python
import os

secret = os.getenv("JWT_SECRET")
```

### Default value

If the variable doesn't exist:

```python
environment = os.getenv("ENVIRONMENT", "development")
```

Then `"development"` is used as the default.

---

# `.env` File

For local development, we commonly use a `.env` file.

Example:

```env
APP_NAME=My Python App
ENVIRONMENT=development
DATABASE_URL=postgresql://localhost/mydb
JWT_SECRET=my-secret-key
```

Install:

```bash
pip install python-dotenv
```

Load the `.env` file:

```python
from dotenv import load_dotenv
import os

load_dotenv()

app_name = os.getenv("APP_NAME")
jwt_secret = os.getenv("JWT_SECRET")
```

---

# Important: `.env` vs `.venv`

These are completely different.

```text
.venv/
    ↓
Python virtual environment

.env
    ↓
Environment configuration/secrets
```

Typical project:

```text
my_project/
│
├── .venv/
├── .env
├── main.py
└── requirements.txt
```

Add them to `.gitignore`:

```gitignore
.venv/
.env
```

Never commit secrets such as API keys or database passwords to GitHub.

---

# Quick Interview Revision

### What is Enum?

> Enum represents a fixed set of named choices.

### Why use Enum?

> It makes allowed values explicit and reduces invalid or inconsistent values.

### What is the difference between `EnumMember` and `.value`?

```python
UserRole.ADMIN
```

is the Enum member.

```python
UserRole.ADMIN.value
```

is the underlying value.

---

### What is `date`?

> `date` represents a calendar date without a time.

### What is `datetime`?

> `datetime` represents both a date and a time.

### What is `timedelta`?

> `timedelta` represents a duration or amount of time that can be added to or subtracted from dates/datetimes.

---

### What is an environment variable?

> A configuration value stored outside the application's source code and read at runtime.

### How do you read one in Python?

```python
import os

value = os.getenv("KEY")
```

### How do you load a `.env` file?

```python
from dotenv import load_dotenv

load_dotenv()
```

Then:

```python
os.getenv("KEY")
```

---

# Status

- [x] Dataclasses
- [x] UUID
- [x] Datetime
- [x] Enum
- [x] Environment Variables

## Remaining Professional Python

- [ ] Logging
- [ ] Clean Structure
- [ ] Testing Basics
- [ ] async/await
- [ ] OOP Phase 2
- [ ] FastAPI 🚀
