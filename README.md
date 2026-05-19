# Missed Call Agent

## Local development

Two terminals:

```bash
# Terminal 1 — backend
cd backend
.venv\Scripts\uvicorn main:app --reload   # Windows
# source .venv/bin/activate && uvicorn main:app --reload  # Mac/Linux

# Terminal 2 — frontend
cd frontend
npm run dev
```

Frontend: http://localhost:5173 (proxies /api → backend)  
Backend: http://localhost:8000

---

## Production deployment (Ubuntu)

### 1. Server prerequisites

```bash
sudo apt update && sudo apt install -y nginx python3 python3-venv nodejs npm certbot python3-certbot-nginx
```

### 2. Clone the repo

```bash
cd /home/ubuntu
git clone <your-repo-url> missedcallagent-site
cd missedcallagent-site
```

### 3. Backend — create venv and install deps

```bash
cd backend
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
cd ..
```

### 4. Frontend — install deps (build happens in deploy.sh)

```bash
cd frontend
npm ci
cd ..
```

### 5. Edit the systemd service

Open `deploy/missedcallagent.service` and set:
- `ALLOWED_ORIGINS` — your domain, e.g. `https://yourdomain.com`
- `LEADS_PASSWORD` — a strong password for the `/api/leads` endpoint
- `User` and all paths — update if your username isn't `ubuntu`

```bash
sudo cp deploy/missedcallagent.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable missedcallagent
sudo systemctl start missedcallagent
```

### 6. Nginx

```bash
# Replace yourdomain.com with your actual domain
sudo cp deploy/nginx.conf /etc/nginx/sites-available/missedcallagent
sudo sed -i 's/yourdomain.com/YOUR_ACTUAL_DOMAIN/g' /etc/nginx/sites-available/missedcallagent
sudo ln -s /etc/nginx/sites-available/missedcallagent /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

### 7. HTTPS (Let's Encrypt)

```bash
sudo certbot --nginx -d yourdomain.com
```

Certbot edits the Nginx config automatically and sets up auto-renewal.

### 8. Build and deploy

```bash
bash deploy/deploy.sh
```

Run this same command for every future update after pulling new code.

---

## API endpoints

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| POST | `/api/lead` | none | Submit a pilot request |
| GET | `/api/leads` | HTTP Basic (`admin` / `LEADS_PASSWORD`) | View all leads |

View leads in a browser — it will prompt for credentials — or via curl:

```bash
curl https://yourdomain.com/api/leads -u admin:yourpassword
```
