# Lo en terre — Site web de l’atelier de poterie (Liège)

Site vitrine statique pour l’atelier « Lo en terre » : présentation des activités, pages d’ateliers, formulaire de réservation et informations pratiques. Le site met l’accent sur la simplicité, la performance et un SEO propre.

## Lien de production
- Domaine principal: https://www.loenterre.com/ (CNAME: `www.loenterre.com`)
- Domaine de préproduction: `dev.loenterre.com` (active une bannière d’avertissement visuelle)

## Fonctionnalités clés
- HTML/CSS/JS pur, basé sur Bootstrap 5 (template iPortfolio adapté).
- SEO prêt à l’emploi: balises meta, Open Graph, Twitter Card, JSON‑LD `LocalBusiness`.
- UI: animations AOS, carrousels Swiper, icônes Bootstrap/Boxicons.
- Réservations: formulaires via Formspree (sans backend maison).
- Pages dédiées: réservation, confirmation/ICS, remerciement.

## Structure du projet
- `index.html` — page d’accueil et sections (ateliers, FAQ, galerie, etc.).
- `reserver/` — formulaire de réservation utilisateur.
- `reservation-received/` — page de confirmation avec génération d’ICS et lien Google Calendar.
- `thanks/` — page de remerciement (formulaire de contact générique).
- `src/assets/css/style.css` — styles principaux.
- `src/assets/js/main.js` — comportements généraux du template.
- `src/assets/vendor/*` — dépendances front vendoriées (Bootstrap, AOS, Swiper, etc.).
- `.github/workflows/` — CI/CD (déploiement Cloudflare Pages, garde‑fou des PR).

## Démarrage rapide (local)
Prérequis: Node.js ≥ 16 et npm.

```bash
npm install
npm start
```

- Le site est servi par `sirv` sur http://localhost:8000.
- Les fichiers sont statiques: éditez `index.html` et le contenu sous `src/` puis rechargez.

## Déploiement (Cloudflare Pages via GitHub Actions)
- Flux actuel: un push sur la branche `dev` déclenche `.github/workflows/pages-deployment.yaml` qui exécute:
  - `cloudflare/wrangler-action@v3` avec la commande `pages deploy . --project-name=dev-loenterre`.
- Secrets requis côté dépôt GitHub:
  - `CLOUDFLARE_API_TOKEN` — token avec droits Pages (et Account read).
  - `CLOUDFLARE_ACCOUNT_ID` — identifiant de compte Cloudflare.
  - `GITHUB_TOKEN` — fourni automatiquement par GitHub Actions.
- Domaine: le fichier `CNAME` pointe sur `www.loenterre.com`. Gérez l’attache de domaine et le DNS dans Cloudflare.

## Branches et contributions
- PR Guard: toute PR vers `main` doit provenir de `dev` (voir `.github/workflows/pr-branch-guard.yaml`).
- Proposez vos changements sur une branche issue de `dev`, puis ouvrez une PR vers `dev`.

## Personnalisation rapide
- SEO & réseaux sociaux: metadonnées dans l’en‑tête de `index.html` (titre, description, Open Graph/Twitter, JSON‑LD).
- Images: placez les médias sous `src/assets/img/` et mettez à jour les références.
- Styles: modifiez `src/assets/css/style.css`.
- Scripts: adaptez `src/assets/js/main.js` et les scripts inline des pages.
- Bannière « version de test »: s’affiche uniquement sur l’hôte `dev.loenterre.com` (voir le script en bas des pages).

## Formulaires
- Les formulaires de réservation postent vers Formspree (`https://formspree.io/f/mpzvnzag`).
- La page `reservation-received/` propose:
  - téléchargement d’un fichier `.ics` généré côté client;
  - un lien de création d’évènement pour Google Calendar.

## Développement dans un conteneur (optionnel)
Le dossier `.devcontainer/` permet d’ouvrir le projet dans un conteneur VS Code/Codespaces avec Node et outils préinstallés (configuration d’exemple issue d’un starter Azure Static Web Apps).

## Crédits & licence
- Template de base: iPortfolio par BootstrapMade (voir mentions dans `index.html`).
- Dépendances tierces sous leurs licences respectives.
- Contenu, visuels et textes © Lo en terre. Tous droits réservés.

---
Suggestions, corrections ou demandes? Ouvrez une issue ou une PR sur ce dépôt.
