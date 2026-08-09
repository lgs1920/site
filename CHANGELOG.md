# Changelog

## 2026-08-09 — [`da4ba04`](https://github.com/lgs1920/site/commit/da4ba04) — Add launch registration cancellation page

- Added localized cancellation pages and single-use link handling for launch registrations.
- Added minimal page chrome and the associated localized route, API integration, and responsive styles.

## 2026-08-09 — [`24fc5c7`](https://github.com/lgs1920/site/commit/24fc5c7) — Improve mobile navigation

- Moved the mobile navigation drawer to the right and kept Contact, User guide, and GitHub links in the hamburger menu.

## 2026-08-09 — [`b57713a`](https://github.com/lgs1920/site/commit/b57713a) — Fix mobile registration hero height

- Let the two-column registration hero grow with its stacked content on mobile.

## 2026-08-09 — [`fddc4e8`](https://github.com/lgs1920/site/commit/fddc4e8) — Harmonize form mail signatures

- Standardized English and French courtesy formulas and signatures in visitor acknowledgement templates.

## 2026-08-09 — [`aa95a71`](https://github.com/lgs1920/site/commit/aa95a71) — Split form acknowledgement and support templates

- Added localized support templates for contact and launch-registration mail.
- Sent separate rendered messages to visitors and the Studio mailbox.
- Kept browser-restored form values aligned with the normal field surface.

## 2026-08-09 — [`c940d42`](https://github.com/lgs1920/site/commit/c940d42) — Restore native logo rendering

- Restored the native logo rendering without recolor filters.
- Kept the localized error-page logo markup and aligned brand swatches with the brand palette.

## 2026-08-08 — [`79db092`](https://github.com/lgs1920/site/commit/79db092) — Add localized cancellation links

- Added clear localized contact and registration email notices.
- Added single-use registration cancellation links with deferred `{{revoke-url}}` replacement.

## 2026-08-08 — [`4db50ee`](https://github.com/lgs1920/site/commit/4db50ee) — Add localized form mail catalog

- Added English and French Markdown catalogs for contact and launch-registration messages.
- Aligned browser submissions with the rendered-message backend contract and added duplicate-registration feedback.
- Kept the generic logo footer owned by the backend.

## 2026-08-08 — [`8e0003d`](https://github.com/lgs1920/site/commit/8e0003d) — Protect public release directories

- Disabled directory listings in generated releases with a public `.htaccess` rule.
- Moved deployment metadata outside the web-served release.

## 2026-08-08 — [`c08bf27`](https://github.com/lgs1920/site/commit/c08bf27) — Migrate site logo assets to PNG

- Replaced the generated SVG logo assets with the PNG logo variants.
- Simplified Eleventy logo copying and registration markup to use the PNG assets.

## 2026-08-08 — [`0e988e4`](https://github.com/lgs1920/site/commit/0e988e4) — Refine hero branding

- Added the simple PNG logo as the site favicon.
- Increased the visibility of the logo used in the launch-registration hero card.

## 2026-08-08 — [`46ec3ba`](https://github.com/lgs1920/site/commit/46ec3ba) — Polish French registration copy

- Shortened the French privacy and free-access copy and updated the free-access icon to a gift.

## 2026-08-08 — [`10a21ec`](https://github.com/lgs1920/site/commit/10a21ec) — Refine launch registration hero

- Refined the bilingual launch-registration hero layout, language selector, responsive card, and supporting privacy/free-access content.
- Added generated flag passthrough and tightened hero spacing, typography, and icon presentation.

## 2026-08-06 — [`7d8e373`](https://github.com/lgs1920/site/commit/7d8e373) — Refine launch registration page

- Added the registration hero layout, localized language links, and translucent Studio explanation panel.
- Added the registration status fade-out behavior and production-only homepage redirect.

## 2026-08-06 — [`f59d0cb`](https://github.com/lgs1920/site/commit/f59d0cb) — Split localized page data

- Split public page definitions and user-guide metadata into page-specific modules.
- Moved shared page-data helpers into `src/_lib/page-data.js` and removed the monolithic data files.

## 2026-08-06 — [`98254f1`](https://github.com/lgs1920/site/commit/98254f1) — Add contact delivery diagnostics

- Added visible browser logs for contact payload metadata, token responses, HTTP responses, and delivery errors.
- Redacted CSRF tokens and personal message fields while preserving response bodies for API troubleshooting.

## 2026-08-06 — [`4572de9`](https://github.com/lgs1920/site/commit/4572de9) — Add public contact form and registration links

- Added bilingual Contact pages with consent, privacy information, anti-spam handling, and protected backend submission.
- Added the Contact page to localized navigation and replaced public mail links with localized page links.
- Updated Launch Registration submission configuration and endpoint naming.

## 2026-08-05 — [`4d76c9b`](https://github.com/lgs1920/site/commit/4d76c9b) — Add Studio launch registration

- Added bilingual launch-registration pages with explicit consent, privacy information, and official AGPL licensing link.
- Connected the form to the public backend registration endpoint and preserved direct access without a homepage link.

## 2026-08-05 — [`19cb2b0`](https://github.com/lgs1920/site/commit/19cb2b0) — Update site release tooling

- Synchronized site project rules and release skill guidance with the shared repository workflow.
- Updated the site Vite dependency lockfile.

## 2026-07-30 — [`32a867c`](https://github.com/lgs1920/site/commit/32a867c) — Define Studio issue mirroring

- Required every open Site issue to have a corresponding Studio issue.
- Preserved issue types and standardized the `[Site]` title prefix and `site` label.
- Required reciprocal links and duplicate checks for issue mirrors.

## 2026-07-30 — [`2775f12`](https://github.com/lgs1920/site/commit/2775f12) — Refine statistics status display

- Replaced statistics status messages with full-width Web Awesome callouts and status icons.
- Displayed backend update timestamps with `wa-format-date` in the visitor’s local time.

## 2026-07-29 — [`7ded35b`](https://github.com/lgs1920/site/commit/7ded35b) — Paginate the public changelog

- Split the English and French public changelog into ten-entry pages.
- Added accessible page navigation and cross-page release links.
- Preserved localized URLs, canonical metadata, and Studio changelog sourcing.

## 2026-07-29 — [`e0af43e`](https://github.com/lgs1920/site/commit/e0af43e) — Add live statistics page

- Added bilingual `/stats/` pages with current and historical UTC usage counters.
- Added automatic one-minute refresh and a manual refresh control.
- Added local development API configuration and coverage for the statistics client.

## 2026-07-27 — [`03cafef`](https://github.com/lgs1920/site/commit/03cafef) — Keep workflow badges aligned on mobile

- Kept the Workflow and Roadmap step badges in a two-column grid on small screens.
- Prevented the step numbers from wrapping below their labels on mobile.

## 2026-07-25 — [`03d4f82`](https://github.com/lgs1920/site/commit/03d4f82) — Refine site branding and guide presentation

- Updated the logo palette and guide icon/card styling.
- Synchronized the French main-scene button reference with the current 2D/3D workflow.
- Added the homepage grid visual asset.

## 2026-07-22 — [`091e596`](https://github.com/lgs1920/site/commit/091e596) — Accept legacy Studio changelog date prefixes

- Kept the public Studio changelog source unchanged.

## 2026-07-22 — [`7f56c27`](https://github.com/lgs1920/site/commit/7f56c27) — Update user guide Markdown content

- Clarified scene modes, journey editing, replay/video capture, map layers, and widget workflows.
- Documented 3D Tiles, deferred HQ replay export, dynamic statistics, and mandatory attribution widgets.

## 2026-07-22 — [`6247a13`](https://github.com/lgs1920/site/commit/6247a13) — Add site rules and commit changelog

- Added site-specific AI project rules adapted from Studio.
- Added a dedicated local changelog for site commits.
- Kept the public `/changelog/` page connected to Studio release notes.

## 2026-07-22 — [`6247a13`](https://github.com/lgs1920/site/commit/6247a13) — Update homepage access copy and default dark theme

- Clarified free Studio access, shared Cesium trial access, and optional paid basemaps.
- Set dark mode as the default theme for new visitors.

## 2026-07-22 — [`d35db5b`](https://github.com/lgs1920/site/commit/d35db5b) — Update bilingual homepage roadmap and access copy

- Added the bilingual Studio roadmap to the homepage.
- Updated the access and Cesium explanation in English and French.
- Removed the homepage link to technical dependency documentation.
