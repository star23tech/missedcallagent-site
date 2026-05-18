# Missed Call Agent Lead Form Deployment

This site now posts pilot requests to `/api/lead`. The backend in `lead_server.py`
stores each submission in SQLite at `data/leads.db`.

## Files to upload

Upload these files to the server site directory:

- `index.html`
- `lead_server.py`

## Run the backend manually

From the site directory on Ubuntu:

```bash
python3 lead_server.py
```

The server listens on `127.0.0.1:3000` by default and creates `data/leads.db`
automatically.

Useful environment variables:

```bash
LEAD_SERVER_HOST=127.0.0.1
LEAD_SERVER_PORT=3000
LEAD_DATA_DIR=/var/lib/missedcallagent
```

## Nginx proxy

Keep your normal static site config, then add this location inside the same
`server { ... }` block:

```nginx
location /api/lead {
    proxy_pass http://127.0.0.1:3000/api/lead;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

Then reload Nginx:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

## systemd service

Create `/etc/systemd/system/missedcallagent-leads.service`:

```ini
[Unit]
Description=Missed Call Agent lead capture service
After=network.target

[Service]
Type=simple
WorkingDirectory=/var/www/missedcallagent-site
Environment=LEAD_SERVER_HOST=127.0.0.1
Environment=LEAD_SERVER_PORT=3000
Environment=LEAD_DATA_DIR=/var/lib/missedcallagent
ExecStart=/usr/bin/python3 /var/www/missedcallagent-site/lead_server.py
Restart=always
RestartSec=3
User=www-data
Group=www-data

[Install]
WantedBy=multi-user.target
```

Create the data directory and start the service:

```bash
sudo mkdir -p /var/lib/missedcallagent
sudo chown www-data:www-data /var/lib/missedcallagent
sudo systemctl daemon-reload
sudo systemctl enable --now missedcallagent-leads
sudo systemctl status missedcallagent-leads
```

## View leads

```bash
sudo sqlite3 /var/lib/missedcallagent/leads.db \
  "SELECT id, created_at, name, business_name, phone, email, trade, city FROM leads ORDER BY id DESC LIMIT 20;"
```

Export to CSV:

```bash
sudo sqlite3 -header -csv /var/lib/missedcallagent/leads.db \
  "SELECT * FROM leads ORDER BY id DESC;" > leads.csv
```
