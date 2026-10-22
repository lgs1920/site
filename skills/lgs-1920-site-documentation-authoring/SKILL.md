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
- Represent keyboard shortcuts with semantic `<kbd>` elements instead of inline code; the guide styles keycaps with configured brand tokens, a `1.55rem` minimum square size, and the shared small radius. Longer labels can expand horizontally.
- When an icon appears inline in prose without a background or border, use its actual Studio icon as a bare `<wa-icon>` at `1.5em` relative to the surrounding text, without a button frame or extra trailing margin.
- Illustrate a button with `.guide-icon-chip` and its exact Font Awesome icon. Chips have no trailing margin and match keycaps' minimum size and radius. Scale the glyph proportionally; use about `0.7rem` inside a `1.55rem` chip. If compact sizing would change existing guide inventories, scope it with a page class rather than changing shared sizing globally.
- When illustrating Studio marker states or selection cursors, inspect their implementation and reproduce the actual icon, fill and stroke colors, outline width, and rendered dimensions rather than using approximate text symbols.

## Page locations

- English guide: `src/user-guide/`
- French guide: `src/fr/user-guide/`
- Shared fragments: `src/_includes/`
- Guide metadata: `src/_data/guide-pages.generated.js`
