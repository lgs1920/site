---
name: lgs-1920-site-multilingual-content
description: Synchronize and validate English and French LGS1920 content. Use for translating or updating pages, localized links, anchors, metadata, navigation, hreflang behavior, and translation status.
---

# LGS1920 multilingual content

Use `/home/christian/devs/assets/lgs1920/site` and inspect both locale versions before editing.

## Content model

- English body: `src/user-guide/.../*.md`
- French body: `src/fr/user-guide/.../*.md`
- Guide metadata: `src/_data/guide-pages.generated.js`, under `locales.en` and `locales.fr`
- Global UI translations and locale configuration: `src/_data/i18n.js`
- Translation report: `src/_data/translation-status.js`

## Translation workflow

1. Identify the canonical English URL and its French `/fr/` counterpart.
2. Read both Markdown files and the matching catalogue entry.
3. Preserve structure and user intent, but write idiomatic French or English.
4. Keep headings and anchor targets aligned where possible.
5. Localize title, description, hero, section navigation, CTA, and visible links.
6. Keep internal links in the current locale; preserve external URLs.
7. Run `bun run content:check` and inspect warnings.
8. Run `bun run build` when the change affects generated output.

## Rules

- Never silently fall back to English for a requested French translation.
- Do not translate product names, API identifiers, file paths, command names, or UI labels inconsistently.
- Treat missing metadata or Markdown as an error.
- Treat differing heading counts as a review item; includes can make them intentional.
- Do not modify `_site/` or the generated HTML directly.
