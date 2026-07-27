"""
One-off data migration: copy all rows from the old (Render) Postgres database
to the new (Neon) Postgres database, using the app's own SQLAlchemy models.

Usage:
    export SOURCE_DATABASE_URL="postgresql://...render..."   # old DB
    export DEST_DATABASE_URL="postgresql://...neon..."       # new DB
    python3 migrate_to_neon.py

Safe to re-run: any table that already has rows in the destination is skipped.
Delete this file once the migration is confirmed.
"""
import os
import sys
from sqlalchemy import create_engine, inspect as sa_inspect, text
from sqlalchemy.orm import sessionmaker


def normalise(url):
    if not url:
        return url
    if url.startswith('postgres://'):
        url = url.replace('postgres://', 'postgresql://', 1)
    # Both Render and Neon require SSL; force it if the URL omits sslmode.
    if 'sslmode=' not in url:
        url += ('&' if '?' in url else '?') + 'sslmode=require'
    return url


SOURCE = normalise(os.getenv('SOURCE_DATABASE_URL'))
DEST = normalise(os.getenv('DEST_DATABASE_URL'))

if not SOURCE or not DEST:
    sys.exit('Set SOURCE_DATABASE_URL and DEST_DATABASE_URL first.')

# Point the app at the DESTINATION so importing it creates the schema there
# (app.py runs create_all + the images-column migration at import time).
os.environ['DATABASE_URL'] = DEST
from app import app, db, User, Place, Favourite  # noqa: E402

# Order matters for foreign keys: users -> places -> favourites.
MODELS = [User, Place, Favourite]

SourceSession = sessionmaker(bind=create_engine(SOURCE))
src = SourceSession()


def columns(model):
    return [c.key for c in sa_inspect(model).mapper.column_attrs]


with app.app_context():
    for model in MODELS:
        table = model.__tablename__

        if db.session.query(model).count() > 0:
            print(f'  {table}: destination already has rows — skipping.')
            continue

        rows = src.query(model).all()
        cols = columns(model)
        for row in rows:
            db.session.add(model(**{c: getattr(row, c) for c in cols}))
        db.session.commit()
        print(f'  {table}: copied {len(rows)} row(s).')

        # Advance the id sequence past the highest copied id so future
        # inserts don't collide with migrated primary keys.
        db.session.execute(text(
            f"SELECT setval(pg_get_serial_sequence('{table}', 'id'), "
            f"COALESCE((SELECT MAX(id) FROM {table}), 1))"
        ))
        db.session.commit()

src.close()
print('Done.')
