"""make username unique

Revision ID: f2b4902a72fb
Revises: ee534eddd98e
Create Date: 2026-09-18 17:48:27.397816
"""

from typing import Sequence, Union

from alembic import op

revision: str = "f2b4902a72fb"
down_revision: Union[str, Sequence[str], None] = "ee534eddd98e"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    op.create_unique_constraint(
        "uq_users_username",
        "users",
        ["username"],
    )


def downgrade() -> None:
    """Downgrade schema."""
    op.drop_constraint(
        "uq_users_username",
        "users",
        type_="unique",
    )