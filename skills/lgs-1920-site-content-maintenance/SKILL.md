---
name: lgs-1920-site-content-maintenance
description: Maintain LGS1920 site content safely across Markdown, Eleventy data, templates, and localized pages. Use for recurring site edits, source-file discovery, content updates, validation, and handoff in the LGS1920 site repository.
---

# LGS1920 site content maintenance

Use the site repository at `/home/christian/devs/assets/lgs1920/site` unless the user provides another path.

## Workflow

1. Inspect `git status --short` and preserve unrelated user changes.
2. Read `docs/GUIDE.md` and the relevant source files before editing.
3. Put page body text in the appropriate Markdown file.
4. Put guide metadata in `src/_data/guide-pages.generated.js`.
5. Keep English and French pages aligned when both locales exist.
6. Use `apply_patch` for edits; never edit `_site/`.
7. Run `bun run content:check`, then `bun run build`.
8. Report changed files, validation results, warnings, and blockers.

## Site rules

- English routes have no locale prefix; French routes use `/fr/`.
- Localized guide paths are derived from the guide catalogue.
- `src/_data/i18n.js` owns global UI strings and menu configuration.
- `src/_data/translation-status.js` exposes translation status and source revisions.
- Do not overwrite dirty files or reset the worktree.

## Validation

Treat `content:check` errors as blockers. Heading-count differences may be warnings because some pages compose includes. Inspect generated HTML for changes affecting navigation, SEO, links, or both locales.
