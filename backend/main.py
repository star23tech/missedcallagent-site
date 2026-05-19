import os
import secrets
import sqlite3
from datetime import datetime, timezone
from typing import Optional

from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from pydantic import BaseModel

# ---------------------------------------------------------------------------
# Config from environment
# ---------------------------------------------------------------------------
# Comma-separated list of allowed origins.
# Dev default covers both Vite ports; override with your domain in production.
_raw_origins = os.environ.get("ALLOWED_ORIGINS", "http://localhost:5173,http://localhost:4173")
ALLOWED_ORIGINS: list[str] = [o.strip() for o in _raw_origins.split(",") if o.strip()]

# Password for GET /api/leads. Set LEADS_PASSWORD in the environment.
# If unset the endpoint is disabled entirely.
LEADS_PASSWORD = os.environ.get("LEADS_PASSWORD", "")

# ---------------------------------------------------------------------------
# App
# ---------------------------------------------------------------------------
app = FastAPI(title="Missed Call Agent API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_methods=["POST", "GET"],
    allow_headers=["*"],
)

# ---------------------------------------------------------------------------
# Database
# ---------------------------------------------------------------------------
DB_PATH = os.path.join(os.path.dirname(__file__), "leads.db")


def get_db() -> sqlite3.Connection:
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db() -> None:
    conn = get_db()
    conn.execute(
        """
        CREATE TABLE IF NOT EXISTS leads (
            id            INTEGER PRIMARY KEY AUTOINCREMENT,
            name          TEXT    NOT NULL,
            business_name TEXT    NOT NULL,
            phone         TEXT    NOT NULL,
            email         TEXT,
            trade         TEXT    NOT NULL,
            city          TEXT,
            message       TEXT,
            created_at    TEXT    NOT NULL
        )
        """
    )
    conn.commit()
    conn.close()


init_db()

# ---------------------------------------------------------------------------
# Auth (used only by /api/leads)
# ---------------------------------------------------------------------------
_http_basic = HTTPBasic()


def require_leads_auth(credentials: HTTPBasicCredentials = Depends(_http_basic)) -> None:
    if not LEADS_PASSWORD:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Leads endpoint is disabled.")
    ok = (
        secrets.compare_digest(credentials.username.encode(), b"admin")
        and secrets.compare_digest(credentials.password.encode(), LEADS_PASSWORD.encode())
    )
    if not ok:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials.",
            headers={"WWW-Authenticate": "Basic"},
        )


# ---------------------------------------------------------------------------
# Models
# ---------------------------------------------------------------------------
class LeadIn(BaseModel):
    name: str
    business_name: str
    phone: str
    email: Optional[str] = None
    trade: str
    city: Optional[str] = None
    message: Optional[str] = None


# ---------------------------------------------------------------------------
# Routes
# ---------------------------------------------------------------------------
@app.post("/api/lead", status_code=201)
def create_lead(lead: LeadIn) -> dict:
    if not lead.name.strip() or not lead.business_name.strip() or not lead.phone.strip() or not lead.trade.strip():
        raise HTTPException(status_code=422, detail="name, business_name, phone, and trade are required.")
    conn = get_db()
    conn.execute(
        "INSERT INTO leads (name, business_name, phone, email, trade, city, message, created_at) VALUES (?,?,?,?,?,?,?,?)",
        (
            lead.name.strip(),
            lead.business_name.strip(),
            lead.phone.strip(),
            lead.email.strip() if lead.email else None,
            lead.trade.strip(),
            lead.city.strip() if lead.city else None,
            lead.message.strip() if lead.message else None,
            datetime.now(timezone.utc).isoformat(),
        ),
    )
    conn.commit()
    conn.close()
    return {"ok": True}


@app.get("/api/leads", dependencies=[Depends(require_leads_auth)])
def list_leads() -> list[dict]:
    conn = get_db()
    rows = conn.execute("SELECT * FROM leads ORDER BY created_at DESC").fetchall()
    conn.close()
    return [dict(r) for r in rows]
