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

## 4. Validation

- Run `bun run content:check` after content or translation changes.
- Run `bun run build` when a change affects generated pages, templates, styles, or site data.
- Treat content-check errors as blockers. Existing heading-count warnings between locales should be reported but do not by themselves block the work.
- Use `git diff --check` before handoff.

## 5. Git and release workflow

- Never create a commit automatically. Commit only when the user explicitly requests it.
- Use a concise conventional commit message with a key such as `feat`, `fix`, `docs`, `style`, `test`, or `chore`.
- Keep unrelated dirty files out of targeted commits.
- Do not reset, checkout, or delete user changes without explicit approval.
- The site changelog is maintained locally in `CHANGELOG.md` and records the date, commit identifier, title, and summary.
- Every site commit must have a corresponding `CHANGELOG.md` entry.
- A changelog entry must be added before committing and must use the final commit identifier. If the identifier is not known yet, create the commit, then update the entry and amend the commit.
- The public `/changelog/` page remains sourced from the Studio changelog and must not be switched to the local site log.
- Do not update the Studio changelog for a site-only commit.

## 6. Issue workflow

- Every open issue in this repository must have a corresponding issue in `lgs1920/studio`.
- Create the Studio mirror as part of the same workflow when creating a new Site issue.
- The Studio mirror must use the same GitHub issue type as the source issue. If the source issue has no type, determine and set its correct type before creating the mirror.
- Prefix the Studio mirror title with `[Site]` and apply the lowercase `site` label.
- Add reciprocal cross-references between the Site issue and its Studio mirror.
- Before creating a mirror, search open and closed Studio issues for an existing reference to the Site issue and reuse the existing mirror when one exists.
