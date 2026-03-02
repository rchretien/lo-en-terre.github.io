# Lo en terre — Pottery Workshop Website (Liège)

Static showcase site for the “Lo en terre” workshop: activities overview, workshop pages, booking form, and practical information. The site focuses on simplicity, performance, and clean SEO.

## Production Links
- Primary domain: https://www.loenterre.com/ (CNAME: `www.loenterre.com`)
- Pre‑production domain: `dev.loenterre.com` (enables a visual warning banner)

## Key Features
- Pure HTML/CSS/JS, with a custom front-end built on Bootstrap 5 utilities/components.
- SEO ready: meta tags, Open Graph, Twitter Card, JSON‑LD `LocalBusiness`.
- UI: AOS animations, Swiper carousels, Bootstrap/Boxicons icons.
- Bookings: forms via Formspree (no custom backend).
- Dedicated pages: booking, confirmation/ICS, thank‑you.

## Project Structure
- `index.html` — home page and sections (workshops, FAQ, gallery, etc.).
- `reserver/` — user booking form.
- `reservation-received/` — confirmation page with ICS generation and Google Calendar link.
- `thanks/` — thank‑you page (generic contact form).
- `src/assets/css/style.css` — main styles.
- `src/assets/js/main.js` — custom interaction scripts.
- `src/assets/vendor/*` — vendored front-end dependencies.
- `.github/workflows/` — CI/CD (Cloudflare Pages deployment, PR guard).

## Quick Start (local)
Requirements: Node.js ≥ 16 and npm.

```bash
npm install
npm start
```

- The site is served by `sirv` at http://localhost:8000.
- Files are static: edit `index.html` and content under `src/`, then reload.

## Deployment (Cloudflare Pages via GitHub Actions)
- Current flow: pushing to the `dev` branch triggers `.github/workflows/pages-deployment.yaml` which runs:
  - `cloudflare/wrangler-action@v3` with `pages deploy . --project-name=dev-loenterre`.
- Required repo secrets:
  - `CLOUDFLARE_API_TOKEN` — token with Pages rights (and Account read).
  - `CLOUDFLARE_ACCOUNT_ID` — Cloudflare account identifier.
  - `GITHUB_TOKEN` — provided automatically by GitHub Actions.
- Domain: the `CNAME` file points to `www.loenterre.com`. Handle domain attachment and DNS in Cloudflare.

## Branches & Contributions
- PR Guard: any PR targeting `main` must originate from `dev` (see `.github/workflows/pr-branch-guard.yaml`).
- Create feature branches from `dev`, then open a PR back to `dev`.

## Quick Customization
- SEO & social: metadata in `index.html` head (title, description, Open Graph/Twitter, JSON‑LD).
- Images: place media under `src/assets/img/` and update references.
- Styles: edit `src/assets/css/style.css`.
- Scripts: adjust `src/assets/js/main.js` and inline page scripts.
- “Test version” banner: only appears on host `dev.loenterre.com` (see the inline script at page bottom).

## Forms
- Booking forms post to Formspree (`https://formspree.io/f/mpzvnzag`).
- The `reservation-received/` page offers:
  - download of a client‑generated `.ics` file;
  - a link to create an event in Google Calendar.

## Dev Container (optional)
The `.devcontainer/` folder lets you open the project in a VS Code/Codespaces container with Node and tools preinstalled (example configuration from an Azure Static Web Apps starter).

## Credits & License
- Third-party dependencies remain under their respective licenses.
- Content, visuals, and texts belong to Lo en terre.

---
Suggestions, fixes, or requests? Open an issue or PR on this repository.
