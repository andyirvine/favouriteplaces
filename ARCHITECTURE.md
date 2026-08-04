# Architecture & Deployment Overview

## Tech stack
- **Backend:** Flask 3, SQLAlchemy ORM, Authlib (Google OAuth), Flask-WTF (CSRF protection), Gunicorn (prod WSGI server)
- **Frontend:** Server-rendered Jinja2 templates, Leaflet.js for maps (CartoDB Positron tiles), vanilla JS — no frontend framework or build step
- **DB driver:** psycopg2-binary (Postgres) in production; falls back to SQLite for local dev
- **Images:** Cloudinary SDK for upload/hosting
- **Containerization:** `Dockerfile` (`python:3.12-slim` + gunicorn on port 8080)

## Git repository
- Hosted on GitHub: [andyirvine/favouriteplaces](https://github.com/andyirvine/favouriteplaces)
- Single `main` branch, no CI/CD pipeline configured — deploys are manual via `fly deploy`

## Hosting — three separate services
1. **Application:** Fly.io, app name `favplace`, region `lhr` (London). Single always-on `shared-cpu-1x` / 512MB machine (~$3–4/mo). Kept always-on deliberately to avoid cold starts.
2. **Database:** Neon — free-tier serverless Postgres, separate from the app. Auto-suspends when idle, auto-wakes on connection (no manual resume needed).
3. **Images:** Cloudinary — free tier, entirely separate from both of the above.

The app was migrated off Render.com on 2026-07-27 (paid managed Postgres was too costly for a no-revenue project).

## Keys / secrets
All set via `fly secrets set` on the Fly app:
- `SECRET_KEY` — Flask session signing
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` — Google OAuth login
- `DATABASE_URL` — Neon Postgres connection string
- `CLOUDINARY_CLOUD_NAME` / `CLOUDINARY_API_KEY` / `CLOUDINARY_API_SECRET` — image hosting

A `.env.example` template exists locally for these — copy to `.env` for local dev, never commit the real `.env`.

## Other relevant details
- OAuth redirect URI for prod is registered as `https://favplace.fly.dev/oauth/callback` in Google Cloud Console
- `fly.toml` runs `python seed_data.py` as a `release_command` on every deploy — it's idempotent (skips if the DB already has data)
- `ProxyFix` middleware is applied when `FLASK_ENV=production` so `url_for(_external=True)` correctly builds `https://` URLs behind Fly's proxy
