---
name: lgs-1920-site-eleventy-maintenance
description: Maintain LGS1920 Eleventy data, templates, layouts, and builds. Use for page-generation changes, data-model refactors, template maintenance, build debugging, generated-output checks, and Eleventy/Vite integration work.
---

# LGS1920 Eleventy maintenance

Work from `/home/christian/devs/assets/lgs1920/site` and inspect the existing data flow before changing templates or generators.

## Architecture

- `eleventy.config.js`: Eleventy, Markdown, passthrough, and Vite configuration.
- `src/_data/`: shared page data, locale data, guide catalogue, and translation status.
- `src/_includes/layouts/`: shared page and base layouts.
- `src/_includes/`: reusable content fragments.
- `src/**/*.11tydata.js`: page and directory-level computed data.
- `_site/`: generated output; never edit manually.

## Change workflow

1. Trace the data from source file to layout before editing.
2. Prefer a shared data/helper change over duplicated template logic.
3. Preserve locale fallback and canonical URL behavior.
4. Keep launch-registration mail templates in the Site catalog. The backend must
   not contain or load launch-registration template fallbacks; render fresh
   confirmation, resend, post-confirmation, and support messages at the point of
   each API request.
5. Use `apply_patch` and keep changes scoped.
6. Run `bun run content:check`.
7. Run `bun run build` and inspect representative English and French HTML.

## Build dependency

Legal and dependency pages read source files from the sibling Studio repository. The dependency source is `../studio/tech-doc/README_DEPENDENCIES.md` at Git ref `1.0.0-beta.3`. If the build fails there, verify path and ref before changing application code.

## Safety

Preserve dirty worktree changes. Do not use destructive Git commands. Do not hide build failures by weakening validation without documenting the tradeoff.
