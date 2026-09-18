"""align user constraints

Revision ID: ee534eddd98e
Revises:
Create Date: 2026-09-18 17:24:49.622943

"""

from typing import Sequence, Union

import sqlalchemy as sa

from alembic import op

# revision identifiers, used by Alembic.
revision: str = "ee534eddd98e"
down_revision: Union[str, Sequence[str], None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Apply the migration."""

    op.alter_column(
        "users",
        "username",
        existing_type=sa.VARCHAR(),
        nullable=False,
    )

    op.alter_column(
        "users",
        "password",
        existing_type=sa.VARCHAR(),
        nullable=False,
    )


def downgrade() -> None:
    """Reverse the migration."""

    op.alter_column(
        "users",
        "password",
        existing_type=sa.VARCHAR(),
        nullable=True,
    )

    op.alter_column(
        "users",
        "username",
        existing_type=sa.VARCHAR(),
        nullable=True,
    )