#!/usr/bin/env python3
import json
import os
import sqlite3
from datetime import datetime, timezone
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs


BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = Path(os.environ.get("LEAD_DATA_DIR", BASE_DIR / "data"))
DB_PATH = DATA_DIR / "leads.db"
HOST = os.environ.get("LEAD_SERVER_HOST", "127.0.0.1")
PORT = int(os.environ.get("LEAD_SERVER_PORT", "3000"))
MAX_BODY_BYTES = 64 * 1024

REQUIRED_FIELDS = ("name", "business_name", "phone", "trade")
TEXT_LIMITS = {
    "name": 120,
    "business_name": 160,
    "phone": 80,
    "email": 160,
    "trade": 80,
    "city": 120,
    "message": 2000,
}


def init_db() -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    with sqlite3.connect(DB_PATH) as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS leads (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                created_at TEXT NOT NULL,
                name TEXT NOT NULL,
                business_name TEXT NOT NULL,
                phone TEXT NOT NULL,
                email TEXT,
                trade TEXT NOT NULL,
                city TEXT,
                message TEXT,
                ip_address TEXT,
                user_agent TEXT
            )
            """
        )
        conn.execute(
            "CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at)"
        )


def clean_value(value: str, limit: int) -> str:
    return " ".join(value.replace("\x00", "").strip().split())[:limit]


def parse_body(handler: BaseHTTPRequestHandler) -> dict[str, str]:
    content_length = int(handler.headers.get("Content-Length", "0") or "0")
    if content_length <= 0:
        return {}
    if content_length > MAX_BODY_BYTES:
        raise ValueError("Submission is too large.")

    raw_body = handler.rfile.read(content_length)
    content_type = handler.headers.get("Content-Type", "")

    if "application/json" in content_type:
        parsed = json.loads(raw_body.decode("utf-8"))
        if not isinstance(parsed, dict):
            raise ValueError("Invalid JSON body.")
        return {str(key): str(value) for key, value in parsed.items()}

    parsed_form = parse_qs(raw_body.decode("utf-8"), keep_blank_values=True)
    return {key: values[0] if values else "" for key, values in parsed_form.items()}


def validate_lead(payload: dict[str, str]) -> dict[str, str]:
    if payload.get("website", "").strip():
        raise ValueError("Invalid submission.")

    lead = {
        field: clean_value(payload.get(field, ""), limit)
        for field, limit in TEXT_LIMITS.items()
    }

    missing = [field for field in REQUIRED_FIELDS if not lead[field]]
    if missing:
        raise ValueError("Please complete all required fields.")

    return lead


def save_lead(lead: dict[str, str], ip_address: str, user_agent: str) -> int:
    created_at = datetime.now(timezone.utc).isoformat()
    with sqlite3.connect(DB_PATH) as conn:
        cursor = conn.execute(
            """
            INSERT INTO leads (
                created_at, name, business_name, phone, email, trade, city,
                message, ip_address, user_agent
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (
                created_at,
                lead["name"],
                lead["business_name"],
                lead["phone"],
                lead["email"],
                lead["trade"],
                lead["city"],
                lead["message"],
                ip_address,
                user_agent[:500],
            ),
        )
        return int(cursor.lastrowid)


class LeadHandler(BaseHTTPRequestHandler):
    server_version = "MissedCallLeadServer/1.0"

    def do_GET(self) -> None:
        if self.path == "/health":
            self.send_json(200, {"ok": True})
            return
        self.send_json(404, {"error": "Not found"})

    def do_POST(self) -> None:
        if self.path != "/api/lead":
            self.send_json(404, {"error": "Not found"})
            return

        try:
            payload = parse_body(self)
            lead = validate_lead(payload)
            lead_id = save_lead(
                lead,
                self.headers.get("X-Forwarded-For", self.client_address[0]).split(",")[0],
                self.headers.get("User-Agent", ""),
            )
        except ValueError as exc:
            self.send_json(400, {"error": str(exc)})
            return
        except Exception:
            self.send_json(500, {"error": "Could not save the lead."})
            return

        self.send_json(201, {"ok": True, "id": lead_id})

    def send_json(self, status: int, body: dict) -> None:
        encoded = json.dumps(body).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(encoded)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(encoded)

    def log_message(self, format: str, *args) -> None:
        print("%s - %s" % (self.address_string(), format % args))


def main() -> None:
    init_db()
    server = ThreadingHTTPServer((HOST, PORT), LeadHandler)
    print(f"Lead server listening on http://{HOST}:{PORT}")
    print(f"SQLite database: {DB_PATH}")
    server.serve_forever()


if __name__ == "__main__":
    main()
