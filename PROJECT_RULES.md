# Project rules

These are the project rules for the LGS1920 public site. They reuse the applicable
conventions from the Studio project while preserving the site's Eleventy architecture.

## 1. Core directives

- **Language:** Conversational responses must be in French.
- **Documentation:** JSDoc blocks, inline code comments, and technical code documentation must be in English.
- **User-facing content:** Public site content must be written in the appropriate locale and kept synchronized between English and French when both versions exist.
- **Autonomy:** Preserve unrelated user changes and ask before taking an action that would materially expand the requested scope.

## 2. Code and content style

- Do not use semicolons.
- Prefer arrow functions for new JavaScript functions.
- Keep the existing Eleventy data and template conventions. Default exports are allowed where the site already uses them.
- Do not apply Studio-only constraints such as Valtio, React, Elysia, or Studio component rules to site code.
- Keep internal links localized: English routes have no locale prefix; French routes use `/fr/`.

## 3. Site architecture

- Source files live in `src/`.
- English guide content lives in `src/user-guide/`.
- French guide content lives in `src/fr/user-guide/`.
- Shared page data lives in `src/_data/`.
- Reusable templates and includes live in `src/_includes/`.
- Generated output lives in `_site/` and must never be edited directly.
- Pages that use the backend must declare `requiresBackend: true` in their shared page data. The connection check and retry dialog are opt-in for those pages and must not be attached globally from the base layout.

## 4. Validation

- Run `bun run content:check` after content or translation changes.
- Run `bun run build` when a change affects generated pages, templates, styles, or site data.
- Treat content-check errors as blockers. Existing heading-count warnings between locales should be reported but do not by themselves block the work.
- Use `git diff --check` before handoff.

## 5. Issue and release workflow

### Cross-repository issue ownership

- The managed repositories are `studio`, `site`, and `backend`. Create an issue in the repository that owns the site content, template, or operational change.
- Never mirror a `site` or `backend` issue into `studio`. Record cross-repository dependencies with direct links to the owning issue; do not create duplicate issues.
- During the mirror-removal migration, inventory confirmed `studio` mirrors of `site` issues, transfer missing information to the owning issue, remove links to the mirror from the original issue and related documentation, and delete only unambiguous mirror issues.
- Do not delete an issue with independent scope or unclear ownership. Report ambiguous cases for explicit user decision and verify that no active issue links to a deleted mirror.

### Release and changelog workflow

- Never create a commit automatically. Commit only when the user explicitly requests it.
- Use a concise conventional commit message with a key such as `feat`, `fix`, `docs`, `style`, `test`, or `chore`.
- Keep unrelated dirty files out of targeted commits.
- Do not reset, checkout, or delete user changes without explicit approval.
- The site changelog is maintained locally in `CHANGELOG.md` and records the date, commit identifier, title, and summary.
- Every site commit must have a corresponding `CHANGELOG.md` entry.
- A changelog entry must be added before committing and must use the final commit identifier. If the identifier is not known yet, create the commit, then update the entry and amend the commit.
- The public `/changelog/` page remains sourced from the Studio changelog and must not be switched to the local site log.
- Do not update the Studio changelog for a site-only commit.
- The shared public release changelog uses `../studio/public/assets/changelog/YYYYMMDD-<version>.md`. If the target file does not exist, create it automatically in the Studio repository using today's date and the nearest existing changelog's filename and header conventions.
- Group closed issues and remaining open bugs/features by owning repository (`studio`, `site`, or `backend`). Omit repository headings when they have no entries, and omit a category heading when it has no entries at all.
- Link every issue to its owning repository. Never include mirror issue links or duplicate issue numbers.
- Do not invent issue numbers, versions, dates, release membership, or user-facing outcomes.
