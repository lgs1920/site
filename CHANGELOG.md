# Changelog

## 2026-09-06 — Add homepage promise section

- Added a bilingual homepage promise section describing the supported import formats, POIs, live stats, local privacy, and browser-only workflow.
- Linked the homepage Discover action and section navigation to the new promise section, with a compact quote presentation and emphasized privacy messaging.

## 2026-09-06 — Restore production registration redirects

- Redirected all non-registration production pages to the matching English or French registration route.
- Localized French guide and legal links in generated page content.
- Updated production redirect regression coverage.

## 2026-09-05 — Add component UI deployment skill

- Added a project-level skill for coordinating LGS1920 component source, documentation, demos, validation, GitHub Pages, and npm delivery.
- Linked the countdown and timeline component projects from the skill catalog.
- Documented release-note preview and explicit validation before component publication.
- Clarified that commit and publication are separate authorized actions.
- Documented generated component changelogs and version-tag history requirements.

## 2026-09-04 — [`ee9c2ba`](https://github.com/lgs1920/site/commit/ee9c2ba) — Localize countdown legends

- Applied the published countdown package's legend property to the localized site countdown.
- Added regression coverage for French and English countdown labels.

## 2026-09-03 — [`ec901a5`](https://github.com/lgs1920/site/commit/ec901a5) — Use the published countdown package

- Replaced the site-local countdown implementation with the published `@lgs1920/countdown` package.
- Kept the site countdown tests against the package entry point and locked the npm dependency.

## 2026-09-03 — [`a629116`](https://github.com/lgs1920/site/commit/a629116) — Keep countdown units on one line

- Kept Days, Hours, Minutes, and Seconds on a single row at every viewport size.
- Scaled the digit cards from the available inline space while preserving the configured spacing tokens.

## 2026-09-03 — [`abc7db7`](https://github.com/lgs1920/site/commit/abc7db7) — Remove Firefox countdown rotor seam

- Removed the fractional seam and depth-rasterization flash visible between countdown rotor halves in Firefox.
- Kept the FlipDown rotation axis and themed rotor surface unchanged.

## 2026-08-31 — [`6704612`](https://github.com/lgs1920/site/commit/6704612) — Align site project rules with Studio

- Synchronized the applicable Studio guidance for documentation status, analysis, validation, issue management, and Project workflow.
- Clarified that technical documentation describes implemented behavior, with historical behavior identified explicitly.

## 2026-08-28 — [`4cfcad3`](https://github.com/lgs1920/site/commit/4cfcad3) — Synchronize Studio 1.0.0 sources

- Pinned the changelog, legal documents, dependencies, and credits to the Studio 1.0.0 release.
- Added media and sample-journey credits and aligned the localized source descriptions.
- Made the FAQ, guide, changelog, contact, credits, and legal help routes public while keeping Studio and statistics restricted.

## 2026-08-28 — [`a79adc4`](https://github.com/lgs1920/site/commit/a79adc4) — Expand and categorize FAQ

- Added bilingual FAQ answers covering supported imports from devices and URLs, mobile and tablet use, accounts, local data, free access, optional external providers, and Cesium ion.
- Grouped the FAQ into four ordered categories in the rendered English and French pages.

## 2026-08-28 — [`59f7f93`](https://github.com/lgs1920/site/commit/59f7f93) — Clarify Studio purpose and boundaries

- Added localized FAQ guidance explaining what Studio does not do, including live tracking, user-to-user exchange, and catalogue features.
- Clarified that Studio starts from an existing route file and streamlined the localized Studio introduction around the 3D workspace.
- Added safe rendering for intentional line breaks in FAQ answers.

## 2026-08-28 — [`ae55a01`](https://github.com/lgs1920/site/commit/ae55a01) — Pluralize the registration route message

- Updated the English and French registration panel copy for multiple routes.

## 2026-08-28 — [`dda526d`](https://github.com/lgs1920/site/commit/dda526d) — Validate production redirects before packaging

- Refused production packages when the localized registration redirects are missing.
- Added regression tests and documented the deployment validation.

## 2026-08-28 — [`6b1afdd`](https://github.com/lgs1920/site/commit/6b1afdd) — Refine workflow route marker animation

- Refined workflow route markers with a centered, branded marker, circular halo, slower motion, and theme-aware numbered-point glow.

## 2026-08-28 — [`56a0afd`](https://github.com/lgs1920/site/commit/56a0afd) — Add icons to privacy quote rules

- Added `party-horn` and `scale-unbalanced` icons before the two privacy quote rules across the localized Home, Studio, and registration pages.

## 2026-08-27 — [`1bd6ace`](https://github.com/lgs1920/site/commit/1bd6ace) — Refresh privacy quote presentation

- Updated the localized privacy quote on Home, Registration, and Studio with the personal-storage, cookie-free message and separated the two imposed rules from the normal closing text.

## 2026-08-27 — [`582c06a`](https://github.com/lgs1920/site/commit/582c06a) — Update Studio dependency reference

- Updated the pinned Studio dependency revision and the related maintenance documentation.

## 2026-08-25 — [`26eeac5`](https://github.com/lgs1920/site/commit/26eeac5) — Keep minimal registration pages self-contained

- Applied the simple minimal-chrome theme consistently to registration, confirmation, revocation, and Studio registration pages.
- Kept language and brand/season theme selectors available on localized confirmation and revocation heroes, and documented the requirement in the project rules.

## 2026-08-25 — [`a6dea4a`](https://github.com/lgs1920/site/commit/a6dea4a) — Simplify registration confirmation pages

- Removed the duplicate no-video hero from the confirmation and revocation pages, moved their status titles into normal content sections, and kept the status cards full width in English and French.
- Removed repeated registration-status labels and body leads while clarifying the localized hero titles.

## 2026-08-25 — [`84c4ddd`](https://github.com/lgs1920/site/commit/84c4ddd) — Align homepage and Studio presentation content

- Synchronized the English and French homepage, launch-registration, and Studio messaging around local privacy, free access, optional providers, and sharing workflows.
- Added the privacy quote to the Studio and registration presentations, refreshed their responsive card layouts, and restored branding and language controls on the standalone registration presentation.
- Removed obsolete Cesium registration wording and kept the generated search import compatible with the production build.
- Reused the homepage's free-access and optional-assets cards in the Studio presentation, including localized line breaks.

## 2026-08-24 — [`0021320`](https://github.com/lgs1920/site/commit/0021320) — Order releases by publication date

- Displayed the public Studio releases from newest to oldest by publication date.

## 2026-08-24 — [`ea6cf79`](https://github.com/lgs1920/site/commit/ea6cf79) — Flatten Studio privacy card

- Removed the hover lift, border, background, and shadow from the Studio privacy card.

## 2026-08-24 — [`3da80e4`](https://github.com/lgs1920/site/commit/3da80e4) — Synchronize Studio documentation source

- Updated the dependency-document path and pinned Studio revision used by the site.
- Synchronized maintenance and release documentation with the reorganized Studio technical docs.

## 2026-08-24 — [`0280d7d`](https://github.com/lgs1920/site/commit/0280d7d) — Stretch main footer cards

- Made main-footer cards fill the complete width available between the responsive site margins.

## 2026-08-24 — [`9f7690d`](https://github.com/lgs1920/site/commit/9f7690d) — Stabilize Eleventy HMR

- Fixed the development server on port 8080 with a dedicated HMR port and disabled automatic port reassignment.
- Added a supervised Eleventy development process that restarts after source changes.

## 2026-08-24 — [`433b9de`](https://github.com/lgs1920/site/commit/433b9de) — Refine heroes and workflow routes

- Added responsive non-home hero proportions, centered copy, full-width headings, and consistent brand-colored leads.
- Reworked Studio card layouts and introduced animated route markers for homepage and guide workflows.

## 2026-08-24 — [`31b5399`](https://github.com/lgs1920/site/commit/31b5399) — Add Studio presentation pages

- Added complete English and French Studio presentation pages plus standalone registration variants.
- Replaced the old registration introduction with the shared Studio overview and kept the standalone routes available in production.

## 2026-08-24 — [`cbaa011`](https://github.com/lgs1920/site/commit/cbaa011) — Move localized copy to JSON

- Moved shared page, guide, navigation, and interface copy from JavaScript modules into localized JSON files.
- Added a shared content loader and documented the JSON/Markdown separation rule.

## 2026-08-18 — [`6a374cf`](https://github.com/lgs1920/site/commit/6a374cf) — Enable and style search clear buttons

- Enabled Web Awesome's native clear button on the global, guide, and error-page search fields.
- Matched the clear button color to the search icon's brand accent.

## 2026-08-18 — [`b8efafe`](https://github.com/lgs1920/site/commit/b8efafe) — Explain mobile download limits in FAQ

- Added bilingual FAQ guidance about mobile and tablet file access.
- Documented the privacy-first reason LGS1920 does not send file contents to its backend.

## 2026-08-15 — [`b0940d2`](https://github.com/lgs1920/site/commit/b0940d2) — Expand Grande Sure FAQ story

- Added the French Alps reference and the LGS1920 Studio journey sample mention.
- Clarified that the hike is still repeated once a year, 54 years after the first ascent.

## 2026-08-15 — [`ccad4ad`](https://github.com/lgs1920/site/commit/ccad4ad) — Add Grande Sure FAQ story and photo

- Added the bilingual LGS1920 origin story to the FAQ and homepage FAQ.
- Added the responsive Wikimedia Commons photo with a small CC BY-SA 4.0 credit.

## 2026-08-15 — [`6b86f89`](https://github.com/lgs1920/site/commit/6b86f89) — Hand off 404 search to the global dialog

- Added a localized search field between the 404 lead and its actions.
- Opened the shared search dialog from the 404 search form with the query prefilled.

## 2026-08-15 — [`48ec3ba`](https://github.com/lgs1920/site/commit/48ec3ba) — Add guide-scoped site search

- Added a localized User guide search field with guide-only Pagefind results.
- Preserved the guide search query and restored it when navigating to a result.
- Reused the global search dialog markup across the main layout and error pages.

## 2026-08-15 — [`9b463dd`](https://github.com/lgs1920/site/commit/9b463dd) — Diffuse homepage hero halo

- Replaced the directional homepage hero scrim with a wider radial halo around the copy.
- Allowed the intro hero halo to extend beyond the viewport bounds.

## 2026-08-15 — [`b76e9dd`](https://github.com/lgs1920/site/commit/b76e9dd) — Highlight search matches

- Highlighted matching terms in search-result titles and excerpts.
- Added a small top margin to the first result so its hover border remains visible.

## 2026-08-15 — [`45e6392`](https://github.com/lgs1920/site/commit/45e6392) — Refine guide navigation placement

- Added a localized guide-navigation heading with the current section.
- Restored the desktop control for moving the guide navigation left or right, with matching directional icons.
- Kept the placement control hidden on mobile while preserving the navigation in the page flow.

## 2026-08-15 — [`87a945b`](https://github.com/lgs1920/site/commit/87a945b) — Refine registration detail spacing

- Removed the unnecessary divider from the registration details card.
- Added mobile spacing below the Privacy and access separator.

## 2026-08-15 — [`cc35613`](https://github.com/lgs1920/site/commit/cc35613) — Unify breadcrumb spacing

- Applied the same vertical and horizontal spacing to breadcrumbs across regular, guide, registration, and error pages.

## 2026-08-15 — [`5468aef`](https://github.com/lgs1920/site/commit/5468aef) — Avoid duplicate guide home breadcrumbs

- Removed the home item from guide-specific breadcrumb data because the shared breadcrumb component now owns the home entry.

## 2026-08-15 — [`1527b6a`](https://github.com/lgs1920/site/commit/1527b6a) — Brand search keyboard shortcuts

- Styled the `Ctrl`, `K`, and `/` shortcut keys with the site brand colors and hover inversion.
- Increased their padding and emphasis for clearer keyboard affordances.

## 2026-08-15 — [`d6c7d50`](https://github.com/lgs1920/site/commit/d6c7d50) — Expand guide reference documentation

- Added bilingual reference entries for Studio drawers and dialogs, including detailed controls and workflows.
- Renamed the first guide entry to Quick guide and aligned its guide icons.

## 2026-08-15 — [`4dba773`](https://github.com/lgs1920/site/commit/4dba773) — Unify page breadcrumbs

- Added one localized breadcrumb component to standard, minimal, and error pages while keeping both home pages excluded.
- Reused the existing guide breadcrumb entries and unified their styling across the site.

## 2026-08-15 — [`836f2de`](https://github.com/lgs1920/site/commit/836f2de) — Add homepage quick access

- Added localized quick-access cards for the Quick guide, User guide, and Studio.
- Added the section navigation entry and aligned card actions on the homepage.

## 2026-08-14 — [`d4c1802`](https://github.com/lgs1920/site/commit/d4c1802) — Refine launch registration hero

- Added localized launch-registration lead copy below the hero title and updated the call-to-action label.
- Reduced the lead text size in the registration hero for a lighter visual hierarchy.

## 2026-08-14 — [`42aed0c`](https://github.com/lgs1920/site/commit/42aed0c) — Fix hero notification bell animation

- Matched the bell icon color to the button text and made its Font Awesome swing animation clearly visible every 10 seconds.

## 2026-08-14 — [`9dbf906`](https://github.com/lgs1920/site/commit/9dbf906) — Animate hero notification bell

- Added a bell to the localized launch-registration hero action and triggered its native Font Awesome swing animation once every 30 seconds.

## 2026-08-14 — [`7d0106e`](https://github.com/lgs1920/site/commit/7d0106e) — Show initial hero video without fade

- Displayed the first hero video immediately while keeping the three-second crossfade between subsequent videos.

## 2026-08-14 — [`ebf1b58`](https://github.com/lgs1920/site/commit/ebf1b58) — Improve homepage hero readability

- Added a blurred gradient scrim behind the homepage hero copy.
- Added subtle title and lead text shadows for steadier contrast over video.

## 2026-08-14 — [`53b067e`](https://github.com/lgs1920/site/commit/53b067e) — Align site identity and page titles

- Renamed the public site identity from LGS1920 Studio to LGS1920 Site on the homepage and shared site data.
- Added the site name suffix to page titles while keeping the homepage title concise.

## 2026-08-14 — [`f841868`](https://github.com/lgs1920/site/commit/f841868) — Refine 404 reroute messages

- Refined the English and French 404-page reroute messages with aligned wording.

## 2026-08-14 — [`b8b0a75`](https://github.com/lgs1920/site/commit/b8b0a75) — Swap homepage hero button emphasis

- Promoted Discover and Découvrir to the filled brand action with a double-chevron-down icon.
- Moved the outlined blur treatment to the Studio launch action.

## 2026-08-14 — [`f214c06`](https://github.com/lgs1920/site/commit/f214c06) — Stabilize hero video crossfades

- Matched the Studio two-player event sequence for continuous hero video rotation.
- Prevented the first video's fallback from resurfacing and made the outgoing/incoming crossfade more visible.

## 2026-08-13 — [`e1c8994`](https://github.com/lgs1920/site/commit/e1c8994) — Improve mobile hero route visibility

- Increased the mobile hero route opacity so the animated path remains visible against the backdrop.

## 2026-08-13 — [`ba6eac7`](https://github.com/lgs1920/site/commit/ba6eac7) — Remove trailing slashes from public URLs

- Generated internal links and canonical URLs without a trailing slash.
- Added the Eleventy development-server fallback so directory pages work directly without the slash.

## 2026-08-13 — [`60b5b04`](https://github.com/lgs1920/site/commit/60b5b04) — Refine hero and site chrome

- Added localized hero build metadata and aligned footer navigation, contact, legal links, and privacy messaging.
- Refined hero, registration status page, and responsive site chrome styling.

## 2026-08-13 — [`b2ce299`](https://github.com/lgs1920/site/commit/b2ce299) — Refine homepage hero copy

- Updated the English and French homepage hero title and French lead copy.

## 2026-08-13 — [`808a374`](https://github.com/lgs1920/site/commit/808a374) — Remove hero highlights

- Removed the highlight badges from the shared hero layout while keeping content highlights below the hero unchanged.

## 2026-08-13 — [`ef0c6e3`](https://github.com/lgs1920/site/commit/ef0c6e3) — Fade hero route at both ends

- Applied the same opacity fade to the beginning and end of the animated hero route for smoother tour restarts.

## 2026-08-13 — [`051478e`](https://github.com/lgs1920/site/commit/051478e) — Reduce header and logo size

- Reduced shared header padding and responsive logo dimensions.

## 2026-08-13 — [`2c7065a`](https://github.com/lgs1920/site/commit/2c7065a) — Reset stale brown brand variables

- Cleared the inline brown palette variables when switching to another brand color.

## 2026-08-13 — [`2b51573`](https://github.com/lgs1920/site/commit/2b51573) — Improve mobile hero route visibility

- Lowered and brightened the mobile Three.js hero route while keeping the desktop composition unchanged.

## 2026-08-13 — [`e77f0cc`](https://github.com/lgs1920/site/commit/e77f0cc) — Refine registration hero controls and title

- Added the brand and season selector beside the registration hero language selector.
- Removed the registration privacy asterisk, added the French line break, and added subtle token-based title depth.

## 2026-08-13 — [`3c88d0d`](https://github.com/lgs1920/site/commit/3c88d0d) — Document Studio reporting for visual changes

- Documented that video catalog, video effects, and hero animation changes must be reported in the Studio repository.

## 2026-08-13 — [`469e220`](https://github.com/lgs1920/site/commit/469e220) — Add cloud access tooltip to registration

- Added localized cloud-access explanatory tooltips to the registration privacy rows.

## 2026-08-13 — [`de0e697`](https://github.com/lgs1920/site/commit/de0e697) — Update registration hero copy

- Updated the English and French registration hero headlines.
- Refreshed the optimized logo PNG assets.

## 2026-08-13 — [`ed8e8d1`](https://github.com/lgs1920/site/commit/ed8e8d1) — Refine launch registration page

- Reworked the bilingual registration hero, launch details, privacy layout, and responsive form arrangement.
- Added the hero scroll action and refined the registration page spacing, language selector, and alignment.

## 2026-08-13 — [`d7cecfd`](https://github.com/lgs1920/site/commit/d7cecfd) — Set hero video slow motion

- Set hero video playback to a restrained 0.75× slow-motion rate.

## 2026-08-12 — [`0ebcd98`](https://github.com/lgs1920/site/commit/0ebcd98) — Tune hero video color grading

- Applied a warm, restrained vintage randonnée/cartography filter to hero media.

## 2026-08-12 — [`be97597`](https://github.com/lgs1920/site/commit/be97597) — Fix hero route restart after theme changes

- Prevented a negative animation progress from stopping the hero route after changing the season or brand.

## 2026-08-12 — [`def1b1f`](https://github.com/lgs1920/site/commit/def1b1f) — Smooth and enrich hero route curves

- Replaced segmented spiral joins with one continuous route curve.
- Added visible S-turns before and after the spiral, plus stronger stretch and squeeze motion.

## 2026-08-12 — [`74f000b`](https://github.com/lgs1920/site/commit/74f000b) — Add English credits pages

- Added a build-time aggregation of the Studio attribution Markdown files at `/credits/`.
- Added a separate `/credits/open-source/` page and linked Credits from the site footer.

## 2026-08-12 — [`33fa32c`](https://github.com/lgs1920/site/commit/33fa32c) — Improve footer navigation

- Added localized Credits links to the site footer.
- Refined footer spacing, link styling, focus states, and responsive alignment.

## 2026-08-12 — [`0d51a5b`](https://github.com/lgs1920/site/commit/0d51a5b) — Extend animated route to all heroes

- Added the animated neon route to every generated site hero, including guide and registration status pages.
- Added localized fallback POI labels and shared route markup for custom-rendered heroes.

## 2026-08-11 — [`e3275a3`](https://github.com/lgs1920/site/commit/e3275a3) — Add animated neon hero route

- Added a bilingual homepage route animation with a moving marker, POI overlays, and a non-WebGL fallback.
- Tuned the beginning opacity reveal, seasonal colors, responsive styling, and narrower neon trail.

## 2026-08-11 — [`651c7ce`](https://github.com/lgs1920/site/commit/651c7ce) — Add launch-registration confirmation flow

- Added bilingual confirmation pages and the two-step confirmation API rendering flow.
- Added pending-registration resend handling, staged localized mail catalogs, and confirmation templates.

## 2026-08-11 — [`517c6de`](https://github.com/lgs1920/site/commit/517c6de) — Document launch-registration confirmation flow

- Documented the Site-owned localized mail catalog and the transient rendered-message contract for launch-registration requests.
- Updated the project README and maintenance guidance for pending, confirmed, resend, and support messages.

## 2026-08-10 — [`5954a62`](https://github.com/lgs1920/site/commit/5954a62) — Clarify registration cancellation email

- Clarified the localized cancellation instructions in the English and French launch-registration email templates.

## 2026-08-09 — [`bcd6937`](https://github.com/lgs1920/site/commit/bcd6937) — Remove registration license notice

- Removed the GNU AGPL reminder and license link from the English and French registration pages.

## 2026-08-09 — [`f6ca100`](https://github.com/lgs1920/site/commit/f6ca100) — Tune registration hero card opacity

- Increased the registration hero card background opacity while preserving the seasonal green surface.

## 2026-08-09 — [`5d6adad`](https://github.com/lgs1920/site/commit/5d6adad) — Keep registration cancellation routes accessible

- Exempted the English and French registration cancellation pages from the production registration redirect.

## 2026-08-09 — [`fcd1040`](https://github.com/lgs1920/site/commit/fcd1040) — Add launch registration cancellation page

- Added localized cancellation pages and single-use link handling for launch registrations.
- Added minimal page chrome and the associated localized route, API integration, and responsive styles.

## 2026-08-09 — [`b882bc9`](https://github.com/lgs1920/site/commit/b882bc9) — Improve mobile navigation

- Moved the mobile navigation drawer to the right and kept Contact, User guide, and GitHub links in the hamburger menu.

## 2026-08-09 — [`f6b14c5`](https://github.com/lgs1920/site/commit/f6b14c5) — Fix mobile registration hero height

- Let the two-column registration hero grow with its stacked content on mobile.

## 2026-08-09 — [`fdc0c9a`](https://github.com/lgs1920/site/commit/fdc0c9a) — Harmonize form mail signatures

- Standardized English and French courtesy formulas and signatures in visitor acknowledgement templates.

## 2026-08-09 — [`9883f5d`](https://github.com/lgs1920/site/commit/9883f5d) — Split form acknowledgement and support templates

- Added localized support templates for contact and launch-registration mail.
- Sent separate rendered messages to visitors and the Studio mailbox.
- Kept browser-restored form values aligned with the normal field surface.

## 2026-08-09 — [`01af7ba`](https://github.com/lgs1920/site/commit/01af7ba) — Restore native logo rendering

- Restored the native logo rendering without recolor filters.
- Kept the localized error-page logo markup and aligned brand swatches with the brand palette.

## 2026-08-08 — [`de9bf27`](https://github.com/lgs1920/site/commit/de9bf27) — Add localized cancellation links

- Added clear localized contact and registration email notices.
- Added single-use registration cancellation links with deferred `{{revoke-url}}` replacement.

## 2026-08-08 — [`5ca793a`](https://github.com/lgs1920/site/commit/5ca793a) — Add localized form mail catalog

- Added English and French Markdown catalogs for contact and launch-registration messages.
- Aligned browser submissions with the rendered-message backend contract and added duplicate-registration feedback.
- Kept the generic logo footer owned by the backend.

## 2026-08-08 — [`25f8283`](https://github.com/lgs1920/site/commit/25f8283) — Protect public release directories

- Disabled directory listings in generated releases with a public `.htaccess` rule.
- Moved deployment metadata outside the web-served release.

## 2026-08-08 — [`b9c9f02`](https://github.com/lgs1920/site/commit/b9c9f02) — Migrate site logo assets to PNG

- Replaced the generated SVG logo assets with the PNG logo variants.
- Simplified Eleventy logo copying and registration markup to use the PNG assets.

## 2026-08-08 — [`b8ea4a5`](https://github.com/lgs1920/site/commit/b8ea4a5) — Refine hero branding

- Added the simple PNG logo as the site favicon.
- Increased the visibility of the logo used in the launch-registration hero card.

## 2026-08-08 — [`e6242c0`](https://github.com/lgs1920/site/commit/e6242c0) — Polish French registration copy

- Shortened the French privacy and free-access copy and updated the free-access icon to a gift.

## 2026-08-08 — [`d4c1802`](https://github.com/lgs1920/site/commit/d4c1802) — Refine launch registration hero

- Refined the bilingual launch-registration hero layout, language selector, responsive card, and supporting privacy/free-access content.
- Added generated flag passthrough and tightened hero spacing, typography, and icon presentation.

## 2026-08-06 — [`ed8e8d1`](https://github.com/lgs1920/site/commit/ed8e8d1) — Refine launch registration page

- Added the registration hero layout, localized language links, and translucent Studio explanation panel.
- Added the registration status fade-out behavior and production-only homepage redirect.

## 2026-08-06 — [`7e758f6`](https://github.com/lgs1920/site/commit/7e758f6) — Split localized page data

- Split public page definitions and user-guide metadata into page-specific modules.
- Moved shared page-data helpers into `src/_lib/page-data.js` and removed the monolithic data files.

## 2026-08-06 — [`315ddbb`](https://github.com/lgs1920/site/commit/315ddbb) — Add contact delivery diagnostics

- Added visible browser logs for contact payload metadata, token responses, HTTP responses, and delivery errors.
- Redacted CSRF tokens and personal message fields while preserving response bodies for API troubleshooting.

## 2026-08-06 — [`a7b4a57`](https://github.com/lgs1920/site/commit/a7b4a57) — Add public contact form and registration links

- Added bilingual Contact pages with consent, privacy information, anti-spam handling, and protected backend submission.
- Added the Contact page to localized navigation and replaced public mail links with localized page links.
- Updated Launch Registration submission configuration and endpoint naming.

## 2026-08-05 — [`fa7d9ba`](https://github.com/lgs1920/site/commit/fa7d9ba) — Add Studio launch registration

- Added bilingual launch-registration pages with explicit consent, privacy information, and official AGPL licensing link.
- Connected the form to the public backend registration endpoint and preserved direct access without a homepage link.

## 2026-08-05 — [`ae8bb3c`](https://github.com/lgs1920/site/commit/ae8bb3c) — Update site release tooling

- Synchronized site project rules and release skill guidance with the shared repository workflow.
- Updated the site Vite dependency lockfile.

## 2026-07-30 — [`222e023`](https://github.com/lgs1920/site/commit/222e023) — Define Studio issue mirroring

- Required every open Site issue to have a corresponding Studio issue.
- Preserved issue types and standardized the `[Site]` title prefix and `site` label.
- Required reciprocal links and duplicate checks for issue mirrors.

## 2026-07-30 — [`54c8ee9`](https://github.com/lgs1920/site/commit/54c8ee9) — Refine statistics status display

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

## 2026-07-25 — [`fea7cd7`](https://github.com/lgs1920/site/commit/fea7cd7) — Refine site branding and guide presentation

- Updated the logo palette and guide icon/card styling.
- Synchronized the French main-scene button reference with the current 2D/3D workflow.
- Added the homepage grid visual asset.

## 2026-07-22 — [`09f70ae`](https://github.com/lgs1920/site/commit/09f70ae) — Accept legacy Studio changelog date prefixes

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
