---
name: lgs-1920-site-contact-mail
description: Maintain the LGS1920 English and French public contact form safely, including Eleventy rendering, browser submission, API configuration, privacy copy, localization, anti-spam behavior, and generated-site validation. Use when changing contact pages, contact JavaScript, target keys, public API URLs, or contact documentation.
---

# Site contact mail

Use this skill for the public contact experience in the Eleventy site. The site
collects and submits a message; it does not own SMTP configuration and must never
contain credentials or recipient email addresses intended to remain server-side.
The Site is also the sole owner of launch-registration mail catalogs. The backend
does not provide launch-registration templates or fallback messages: the Site
must render fresh confirmation, resend, post-confirmation, and Studio-notification
bodies for each corresponding request.

## Workflow

1. Read `PROJECT_RULES.md`, inspect `src/_lib/contact-page.js`,
   `src/assets/contact.js`, `src/_data/site.js`, `src/contact.11ty.js`,
   `src/fr/contact.11ty.js`, and both localized contact entries in
   `src/_data/page-types.js`.
2. Preserve the public boundary: use `LGS1920_CONTACT_API_URL` or the documented
   API fallback, request `GET /contact/token` first, then submit to `POST /contact`
   with the short-lived token and an opaque target key. Do not add SMTP variables,
   passwords, CSRF secrets, or real recipient addresses to site source or browser
   data.
3. Keep English and French form labels, explanations, privacy notices, routes,
   and error messages synchronized. Preserve localized links: `/contact/` for
   English and `/fr/contact/` for French.
4. Keep field limits, explicit consent, honeypot input, disabled-submit behavior,
   generic failure messaging, and the backend's 429 response behavior intact.
   Do not expose backend error details or recipient mappings in the UI.
   Launch-registration rendered bodies are transient and must be sent again for
   resend and confirmation actions; never rely on backend persistence or a
   backend template fallback.
5. Update `README.md` or the owning documentation when the public contract or
   environment variable changes. Document opaque examples such as
   `LGS1920_CONTACT_TARGET_C4P7Z2`, never the mapped email address.
6. Validate with `bun run content:check`, `bun run build`, and `git diff --check`.
   Inspect generated output for both contact routes, but never edit `_site/`
   directly.

## Security boundary

`LGS1920_CONTACT_API_URL` is public configuration. The support target key is also
not a secret; the email address mapped to it is. SMTP credentials and recipient
mappings belong in the backend's local `.env`, which the backend deployment
uploads to the remote shared environment. Site builds and Studio releases must
not package that file.
