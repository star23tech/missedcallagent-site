#!/bin/bash
# Run from the repo root on the server:  bash deploy/deploy.sh
set -euo pipefail

REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"

echo "==> Building frontend..."
cd "$REPO_DIR/frontend"
npm ci
npm run build

echo "==> Restarting backend..."
sudo systemctl restart missedcallagent

echo "==> Done. Site is live."
