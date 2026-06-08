# Missed Call Agent

Marketing site for [missedcallagent.com](https://missedcallagent.com) — plain HTML/CSS/JS hosted on GitHub Pages.

## Structure

```
index.html                          Home page
hvac-missed-call-solution/          HVAC landing page
plumbing-missed-call-solution/      Plumbing landing page
electrical-missed-call-solution/    Electrical landing page
styles.css                          All styles
script.js                           Modal + Formspree form logic
```

## Deployment

Push to `main`. GitHub Pages serves the repo root directly — no build step.

In repo Settings → Pages → Source: **Deploy from a branch** → Branch: `main` / folder: `/ (root)`.

## Lead capture

Pilot request form submissions go to [Formspree](https://formspree.io) (form ID `mbdeoqlq`). Leads are viewable in the Formspree dashboard.

## Editing

Open any `.html` file directly. No build tools, no npm, no dependencies.
