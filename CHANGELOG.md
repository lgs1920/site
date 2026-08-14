# Changelog

## 2026-08-14 — [`3edd627`](https://github.com/lgs1920/site/commit/3edd627) — Stabilize hero video crossfades

- Matched the Studio two-player event sequence for continuous hero video rotation.
- Prevented the first video's fallback from resurfacing and made the outgoing/incoming crossfade more visible.

## 2026-08-13 — [`de939f5`](https://github.com/lgs1920/site/commit/de939f5) — Improve mobile hero route visibility

- Increased the mobile hero route opacity so the animated path remains visible against the backdrop.

## 2026-08-13 — [`8d0831d`](https://github.com/lgs1920/site/commit/8d0831d) — Remove trailing slashes from public URLs

- Generated internal links and canonical URLs without a trailing slash.
- Added the Eleventy development-server fallback so directory pages work directly without the slash.

## 2026-08-13 — [`070c469`](https://github.com/lgs1920/site/commit/070c469) — Refine hero and site chrome

- Added localized hero build metadata and aligned footer navigation, contact, legal links, and privacy messaging.
- Refined hero, registration status page, and responsive site chrome styling.

## 2026-08-13 — [`a37d719`](https://github.com/lgs1920/site/commit/a37d719) — Refine homepage hero copy

- Updated the English and French homepage hero title and French lead copy.

## 2026-08-13 — [`2d27806`](https://github.com/lgs1920/site/commit/2d27806) — Remove hero highlights

- Removed the highlight badges from the shared hero layout while keeping content highlights below the hero unchanged.

## 2026-08-13 — [`9e3e8d2`](https://github.com/lgs1920/site/commit/9e3e8d2) — Fade hero route at both ends

- Applied the same opacity fade to the beginning and end of the animated hero route for smoother tour restarts.

## 2026-08-13 — [`533aefa`](https://github.com/lgs1920/site/commit/533aefa) — Reduce header and logo size

- Reduced shared header padding and responsive logo dimensions.

## 2026-08-13 — [`9445b10`](https://github.com/lgs1920/site/commit/9445b10) — Reset stale brown brand variables

- Cleared the inline brown palette variables when switching to another brand color.

## 2026-08-13 — [`d747005`](https://github.com/lgs1920/site/commit/d747005) — Improve mobile hero route visibility

- Lowered and brightened the mobile Three.js hero route while keeping the desktop composition unchanged.

## 2026-08-13 — [`32c2182`](https://github.com/lgs1920/site/commit/32c2182) — Refine registration hero controls and title

- Added the brand and season selector beside the registration hero language selector.
- Removed the registration privacy asterisk, added the French line break, and added subtle token-based title depth.

## 2026-08-13 — [`0149d04`](https://github.com/lgs1920/site/commit/0149d04) — Document Studio reporting for visual changes

- Documented that video catalog, video effects, and hero animation changes must be reported in the Studio repository.

## 2026-08-13 — [`bc2882f`](https://github.com/lgs1920/site/commit/bc2882f) — Add cloud access tooltip to registration

- Added localized cloud-access explanatory tooltips to the registration privacy rows.

## 2026-08-13 — [`119eebd`](https://github.com/lgs1920/site/commit/119eebd) — Update registration hero copy

- Updated the English and French registration hero headlines.
- Refreshed the optimized logo PNG assets.

## 2026-08-13 — [`2edb5fb`](https://github.com/lgs1920/site/commit/2edb5fb) — Refine launch registration page

- Reworked the bilingual registration hero, launch details, privacy layout, and responsive form arrangement.
- Added the hero scroll action and refined the registration page spacing, language selector, and alignment.

## 2026-08-13 — [`362d759`](https://github.com/lgs1920/site/commit/362d759) — Set hero video slow motion

- Set hero video playback to a restrained 0.75× slow-motion rate.

## 2026-08-12 — [`68f665b`](https://github.com/lgs1920/site/commit/68f665b) — Tune hero video color grading

- Applied a warm, restrained vintage randonnée/cartography filter to hero media.

## 2026-08-12 — [`3229f8a`](https://github.com/lgs1920/site/commit/3229f8a) — Fix hero route restart after theme changes

- Prevented a negative animation progress from stopping the hero route after changing the season or brand.

## 2026-08-12 — [`2779f16`](https://github.com/lgs1920/site/commit/2779f16) — Smooth and enrich hero route curves

- Replaced segmented spiral joins with one continuous route curve.
- Added visible S-turns before and after the spiral, plus stronger stretch and squeeze motion.

## 2026-08-12 — [`9529caa`](https://github.com/lgs1920/site/commit/9529caa) — Add English credits pages

- Added a build-time aggregation of the Studio attribution Markdown files at `/credits/`.
- Added a separate `/credits/open-source/` page and linked Credits from the site footer.

## 2026-08-12 — [`2a7c756`](https://github.com/lgs1920/site/commit/2a7c756) — Improve footer navigation

- Added localized Credits links to the site footer.
- Refined footer spacing, link styling, focus states, and responsive alignment.

## 2026-08-12 — [`8c40bc0`](https://github.com/lgs1920/site/commit/8c40bc0) — Extend animated route to all heroes

- Added the animated neon route to every generated site hero, including guide and registration status pages.
- Added localized fallback POI labels and shared route markup for custom-rendered heroes.

## 2026-08-11 — [`a9aa253`](https://github.com/lgs1920/site/commit/a9aa253) — Add animated neon hero route

- Added a bilingual homepage route animation with a moving marker, POI overlays, and a non-WebGL fallback.
- Tuned the beginning opacity reveal, seasonal colors, responsive styling, and narrower neon trail.

## 2026-08-11 — [`d5a942f`](https://github.com/lgs1920/site/commit/d5a942f) — Add launch-registration confirmation flow

- Added bilingual confirmation pages and the two-step confirmation API rendering flow.
- Added pending-registration resend handling, staged localized mail catalogs, and confirmation templates.

## 2026-08-11 — [`4287492`](https://github.com/lgs1920/site/commit/4287492) — Document launch-registration confirmation flow

- Documented the Site-owned localized mail catalog and the transient rendered-message contract for launch-registration requests.
- Updated the project README and maintenance guidance for pending, confirmed, resend, and support messages.

## 2026-08-10 — [`8eb61f3`](https://github.com/lgs1920/site/commit/8eb61f3) — Clarify registration cancellation email

- Clarified the localized cancellation instructions in the English and French launch-registration email templates.

## 2026-08-09 — [`16f304a`](https://github.com/lgs1920/site/commit/16f304a) — Remove registration license notice

- Removed the GNU AGPL reminder and license link from the English and French registration pages.

## 2026-08-09 — [`e5cf014`](https://github.com/lgs1920/site/commit/e5cf014) — Tune registration hero card opacity

- Increased the registration hero card background opacity while preserving the seasonal green surface.

## 2026-08-09 — [`599da50`](https://github.com/lgs1920/site/commit/599da50) — Keep registration cancellation routes accessible

- Exempted the English and French registration cancellation pages from the production registration redirect.

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
