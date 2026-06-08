# Missed Call Agent

Marketing site for [missedcallagent.com](https://missedcallagent.com) — a React + Vite SPA hosted on GitHub Pages.

## Local development

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at http://localhost:5173

## Deployment

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds the frontend and deploys it to the `gh-pages` branch automatically.

## Lead capture

Pilot request form submissions are handled by [Formspree](https://formspree.io). Leads are viewable in the Formspree dashboard.
