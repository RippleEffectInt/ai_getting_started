# AI getting started

Multilingual training for Ripple Effect staff who are getting started with Microsoft Copilot.

The published training page uses a deliberately unguessable URL and includes `noindex` instructions for reputable search engines. The root GitHub Pages address does not link to the training page.

Important: this is obscurity, not access control. The repository and GitHub Pages site are public, so the page must not contain sensitive information.

## Publishing

The workflow in `.github/workflows/pages.yml` deploys the contents of `site/` to GitHub Pages whenever `main` changes.

The existing long training URL now opens a language-selection page. English,
French, Kiswahili, Amharic and Luganda are available beneath that address.
The four translated editions are machine-assisted drafts and must remain marked
as requiring review by a colleague from the relevant country until approved.

Translation terminology, review records and per-language decisions are held in
`localisation/`.

In the repository, open **Settings → Pages** and make sure **Source** is set to **GitHub Actions**.
