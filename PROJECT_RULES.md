# Project rules

These are the project rules for the LGS1920 public site. They reuse the applicable
conventions from the Studio project while preserving the site's Eleventy architecture.

## 1. Core directives

- **Language:** Conversational responses must be in French.
- **Documentation and issues:** JSDoc blocks, inline code comments, technical code documentation, project documentation, and issue content must be in professional English.
- **User-facing content:** Public site content must be written in the appropriate locale and kept synchronized between English and French when both versions exist.
- **Autonomy:** Preserve unrelated user changes and ask before taking an action that would materially expand the requested scope. Never extrapolate beyond the user's request; final decisions belong to the user.
- **Nuance and analytical rigor:** Avoid unwarranted certainty. Simplistic or overly categorical analyses can omit relevant context and lead to incorrect conclusions.
- **Depth of analysis:** Explore relevant subtleties, cross-check perspectives, and identify potential blind spots and biases before reaching a conclusion.
- **Technical verification:** Be especially vigilant with calculations, logic, and overall consistency. If data or reasoning appears anomalous or uncertain, explicitly identify the issue and re-check it step by step.
- **Direct logging:** When direct logging is explicitly requested, use the appropriate built-in console method in the function body (`console.log`, `console.error`, or `console.table`) and do not route it through helper methods or wrappers.
- **Public output security:** Generated releases must not expose directory listings or deployment metadata. Keep deployment metadata outside the web-served release and preserve the public `.htaccess` protection when changing the build or deployment flow.

## 2. Code and content style

- Do not use semicolons.
- Use arrow functions for new or modified JavaScript functions, except for class constructors.
- Keep the existing Eleventy data and template conventions. Default exports are allowed where the site already uses them.
- Keep new files focused and below 1500 lines. For an existing file above 1500 lines, split it when necessary for the requested change; otherwise make the targeted correction and report the refactoring opportunity separately.
- Summarize changes, validation, and remaining work with file links. Provide full file contents only when explicitly requested.
- Do not apply Studio-only constraints such as Valtio, React, Elysia, or Studio component rules to site code.
- Keep internal links localized: English routes have no locale prefix; French routes use `/fr/`.
- **JSON/Markdown separation:** Keep short page copy (a few words, labels, or up to two sentences) directly in `src/_content/<page>/<locale>/page.json`. Use a Markdown file in that same locale directory only for genuinely multi-line editorial content such as headings, lists, tables, or longer composed text, and reference it from JSON with `@md:`. Do not create one-line Markdown files for short copy.
- Keep the English and French JSON structures aligned. Page JavaScript may assemble dynamic values and rendering data, but must not become the source of ordinary page copy.
- Every banner video must have a matching WebP fallback image. Register both assets in the banner media catalog, preload the WebP, render it below the video layer, and fade it out only after the video can play.
- Banner videos must keep their full duration while being optimized for web delivery: maximum 1920px width, maximum 30 fps, no audio when unused, H.264 encoding with `faststart`, and a matching WebP fallback.
- For changes to the video catalog, video effects, or hero animation, prepare the required Studio report alongside the site change. Reference the owning site issue when one exists and describe the Studio impact without creating a mirror issue. Publish the report only within existing authorization; otherwise present the completed report for the required approval after local implementation and validation. Report publication as pending until completed.

## 3. Site architecture

- Source files live in `src/`.
- English guide content lives in `src/user-guide/`.
- French guide content lives in `src/fr/user-guide/`.
- Shared page data lives in `src/_data/`.
- Reusable templates and includes live in `src/_includes/`.
- Generated output lives in `_site/` and must never be edited directly.
- **Minimal chrome pages:** Any page with `minimalChrome: true` must expose the language and brand/season theme selectors through a registration-style hero (`registration-hero` with `localeSwitcher: true`), because the global header is hidden.
- Pages that use the backend must declare `requiresBackend: true` in their shared page data. The connection check and retry dialog are opt-in for those pages and must not be attached globally from the base layout.
- **Site-owned launch-registration mail:** The Site owns and renders every localized launch-registration mail catalog, including the initial confirmation, resend confirmation, post-confirmation acknowledgement, and Studio notification. The backend has no launch-registration mail templates or fallback; every mail-triggering API request must carry fresh rendered Site content.
- Launch-registration rendered mail bodies are transient request data. Do not ask the backend to persist `renderedMessage` or `supportRenderedMessage`; render them again when the visitor resends or confirms.

## 4. Validation

### Documentation status

- Documentation must describe implemented behavior and must not cover behavior that is no longer taken into account, unless it is explicitly presented as historical.
- Every new or modified function or method requires a professional English JSDoc block.
- Add production-oriented English comments for critical logic.
- Add any introduced UI shortcut to the dedicated shortcuts documentation.
- Every feature or fix must be accompanied by relevant tests or, for content-only changes, the appropriate content validation.
- Run `bun run content:check` after content or translation changes.
- Run `bun run build` when a change affects generated pages, templates, styles, or site data.
- Treat content-check errors as blockers. Existing heading-count warnings between locales should be reported but do not by themselves block the work.
- Use `git diff --check` before handoff.

## 5. Issue and release workflow

### Issue management

- Before creating an issue, ask for any missing explanations or clarifications needed to understand and scope the request. Then present the complete proposed issue content for explicit user validation. Do not create the issue until the user has validated the proposal.
- For every issue, propose a solution and an implementation plan for explicit user validation. Do not create or implement the issue until the proposed solution and plan have been validated.
- Present the complete issue content, proposed solution, and implementation plan together for explicit validation. Reuse validation already given for the same proposal. Request renewed validation only for material changes to the approved scope, solution, or plan. A request to create an issue does not by itself validate an unseen proposal.
- Fill every known and applicable issue field, including title, description, assignee, labels, type, priority, repository, Project status, and `Target release`. Do not invent a release, label, priority, or other value when it is not known.
- Assign an issue to the user requesting its creation unless the user explicitly specifies another assignee.
- Use the Project-level `Target release` field as the source of truth for release planning. Use `Unplanned` when no approved release has been selected, and add a new target-release option only after the release has been approved.
- When migrating an existing milestone, copy its exact title to the matching `Target release` option when one exists. Keep the milestone until the result and dependent reporting have been reviewed; do not clear or delete it automatically.
- Use the Project `Status` value `Backlog` for accepted work that is not ready to start. Do not encode versions in labels or statuses when `Target release` already provides that information.
- Write every issue body with a short context, requested behavior, acceptance criteria, and optional notes or questions. Keep one request per issue and prefer bullet lists for requirements.

### Cross-repository issue ownership

- The managed repositories are `studio`, `site`, and `backend`. Create an issue in the repository that owns the site content, template, or operational change.
- Never mirror a `site` or `backend` issue into `studio`. Record cross-repository dependencies with direct links to the owning issue; do not create duplicate issues.
- During the mirror-removal migration, inventory confirmed `studio` mirrors of `site` issues, transfer missing information to the owning issue, remove links to the mirror from the original issue and related documentation, and delete only unambiguous mirror issues.
- Do not delete an issue with independent scope or unclear ownership. Report ambiguous cases for explicit user decision and verify that no active issue links to a deleted mirror.

### Project workflow statuses

Use the shared organization Project and keep its `Status` field limited to the delivery workflow:

- `Triage`: new work that needs clarification, ownership, or prioritization.
- `Backlog`: accepted work that is not ready to start.
- `Ready`: scoped work with acceptance criteria and a target release.
- `In Progress`: active implementation.
- `Review`: a linked pull request is open.
- `QA`: review is approved and validation is in progress.
- `Blocked`: an explicit dependency or decision prevents progress.
- `Done`: the linked pull request is merged and the work is complete.

New issues start in `Triage` unless their validated scope already justifies a different workflow state. Move an issue to `Review` when its pull request opens, to `QA` after review approval, and to `Done` only after merge. Add every implementation issue to the Project and link it to its pull request.

### Release and changelog workflow

- Never create a commit automatically. Commit only when the user explicitly requests it.
- Use a concise conventional commit message with a key such as `feat`, `fix`, `docs`, `style`, `test`, or `chore`.
- Keep unrelated dirty files out of targeted commits.
- Do not reset, checkout, or delete user changes without explicit approval.
- The site changelog is maintained locally in `CHANGELOG.md` and records the date, title, and summary.
- Every site change commit must include a corresponding `CHANGELOG.md` entry before committing.
- Do not require a commit to contain its own final identifier. Resolve commit identifiers from Git history when generating reports. Do not amend a commit solely to insert its own hash.
- The public `/changelog/` page remains sourced from the Studio changelog and must not be switched to the local site log.
- Do not update the Studio changelog for a site-only commit.
- The shared public release changelog uses `../studio/public/assets/changelog/YYYYMMDD-<version>.md`. If the target file does not exist, create it automatically in the Studio repository using today's date and the nearest existing changelog's filename and header conventions.
- For the shared public changelog, follow [Studio PROJECT_RULES.md §7](../studio/PROJECT_RULES.md#7-release-changelog-workflow) for sections, ordering, repository headings, and issue links. Historical formatting is not authoritative where it conflicts.
- Link every issue to its owning repository. Never include mirror issue links or duplicate issue numbers.
- Do not invent issue numbers, versions, dates, release membership, or user-facing outcomes.
