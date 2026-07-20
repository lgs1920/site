---
name: lgs-1920-site-documentation-authoring
description: Create and update structured LGS1920 user-guide and site documentation. Use for new guide pages, procedural content, section navigation, reusable includes, screenshots, examples, and documentation structure.
---

# LGS1920 documentation authoring

Use the repository at `/home/christian/devs/assets/lgs1920/site` and follow the conventions in `docs/GUIDE.md`.

## Authoring workflow

1. Choose a stable canonical URL.
2. Create the English Markdown page and the French counterpart when required.
3. Add title, description, hero, and section navigation metadata to the guide catalogue.
4. Add the page to guide navigation only when it belongs in the menu.
5. Use headings that describe user tasks and produce stable anchors.
6. Keep steps, labels, UI names, links, and screenshots synchronized across locales.
7. Reuse includes for repeated technical fragments.
8. Run `bun run content:check` and `bun run build`.

## Writing rules

- Explain actions in the order a user performs them.
- Prefer short paragraphs, numbered procedures, and concrete verification steps.
- Preserve exact command names, file paths, component names, and UI labels.
- Use localized internal links (`/user-guide/...` or `/fr/user-guide/...`).
- Do not edit generated `_site/` output.
- Add alt text and useful descriptions for every informative image.

## Page locations

- English guide: `src/user-guide/`
- French guide: `src/fr/user-guide/`
- Shared fragments: `src/_includes/`
- Guide metadata: `src/_data/guide-pages.generated.js`
