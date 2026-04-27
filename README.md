# LGS1920 Site

Static Eleventy site for `LGS1920 Studio`.

This repository is the lightweight public front door for the product: landing pages, reusable page layout, shared Web Awesome theme wiring, legal pages, and deployment packaging. The application itself lives in the main `studio` repository.

## Scope

- Marketing and positioning pages for `LGS1920 Studio`
- Reusable `wa-page` layout with drawer navigation and mobile hamburger
- Shared Web Awesome theme imported from the sibling `studio` repository
- Legal pages generated from the canonical Markdown files kept in `studio`
- Static build output for staging, test, and production deployment

## Repository Layout

This repo is expected to live next to the main `studio` repo:

```text
lgs1920/
├── site/
└── studio/
```

That sibling layout is required for two reasons:

- the Web Awesome theme is imported from `../studio/src/assets/css/themes/webawesome`
- licensing pages are built from `../studio/LICENSES.md`, `../studio/LICENSE.md`, and `../studio/CONTRIBUTOR_LICENSE_AGREEMENT.md`

If `studio` is missing or checked out elsewhere, the site build will fail.

## Stack

- `11ty` for static site generation
- `@11ty/eleventy-plugin-vite` for asset bundling
- `Web Awesome` for UI components such as `wa-page`, `wa-button`, `wa-card`, `wa-details`, and `wa-dropdown`
- `Bun` for package management, scripts, and deployment entrypoints
- Shared Web Awesome theme layers imported from the sibling `studio` repository

Pages and layouts use Liquid-compatible `html` files and `.11ty.js` templates. The site does not rely on Nunjucks.

## Project Structure

```text
src/
├── _data/
│   └── site.js
├── _includes/
│   ├── layouts/
│   │   ├── base.html
│   │   └── page.html
│   └── templates/
│       └── page-template.html
├── _lib/
│   └── legal-docs.js
├── assets/
│   ├── app.js
│   ├── site.css
│   └── theme.js
├── contributor-license-agreement.11ty.js
├── index.html
├── license.11ty.js
└── licensing.11ty.js
```

## Key Files

- `src/_includes/layouts/base.html`: global document shell, theme bootstrapping, Vite entrypoint
- `src/_includes/layouts/page.html`: shared `wa-page` structure, header, drawer, hero, content area, footer
- `src/_includes/templates/page-template.html`: reusable template for creating more static pages with the same structure
- `src/_data/site.js`: global site metadata, navigation, footer links, contact information
- `src/assets/app.js`: Web Awesome imports and site asset entrypoint
- `src/assets/site.css`: all site-specific styling
- `src/assets/theme.js`: theme switching, hero video behavior, drawer toggle behavior
- `src/_lib/legal-docs.js`: reads the legal Markdown files from `studio`, rewrites internal links, adds heading IDs, and renders the HTML used by the legal pages

## Prerequisites

- `Bun`
- a sibling checkout of the `studio` repository

Install dependencies:

```bash
bun install
```

## Development

Start the local Eleventy server:

```bash
bun run dev
```

Default local URL:

```text
http://localhost:8080
```

## Build

Create a fresh production build:

```bash
bun run build
```

The generated site is written to `_site/`.

Useful cleanup command:

```bash
bun run clean
```

## Authoring Pages

For a regular content page:

1. Copy `src/_includes/templates/page-template.html` to `src/<slug>.html`
2. Fill the front matter fields such as `title`, `description`, `hero`, `sectionNav`, and `pageCta`
3. Write the page body in plain `html` and Liquid-friendly front matter
4. Register the page in `src/_data/site.js` if it should appear in the drawer and footer navigation

Implementation notes:

- keep hero copy short so the top section stays compact
- use plain `html` for Web Awesome-heavy sections instead of Markdown when component markup must remain exact
- the shared layout already handles the header, navigation drawer, sticky behavior, hero shell, and footer

## Legal Pages

The legal pages in this repo are not hand-copied content. They are generated at build time from the Markdown files in `studio`.

Sources:

- `../studio/LICENSES.md`
- `../studio/LICENSE.md`
- `../studio/CONTRIBUTOR_LICENSE_AGREEMENT.md`

Generated pages:

- `/licensing/`
- `/license/`
- `/contributor-license-agreement/`

What the generator does:

- reads the canonical Markdown from `studio`
- removes the top-level heading when the page hero already provides the title
- rewrites internal Markdown links so they point to the site routes instead of repo-relative files
- injects stable heading IDs for drawer navigation
- renders the final HTML used by the Eleventy legal pages

This keeps the public site aligned with the legal wording maintained in the main product repository.

## Shared Theme From `studio`

The site imports the Web Awesome theme directly from the sibling `studio` repository through a Vite alias defined in `eleventy.config.js`.

Imported theme layers:

- `@studio-wa-theme/wa-color-vogue.css`
- `@studio-wa-theme/wa-theme-lgs1920-base.css`

The site deliberately reuses only the Web Awesome theme layers, not broader application CSS from `studio`, so the marketing site stays isolated from app-specific styling and variables.

## Deployment

Deployment is handled from this repo only.

Commands:

```bash
bun run deploy -s
bun run deploy -p
bun run deploy -t
```

Dry run without remote SSH copy:

```bash
bun run deploy -s --dry-run
```

Behavior:

- runs a fresh site build
- copies `_site/` to `dist/<release>/`
- writes deployment metadata files
- creates `dist/<release>.zip`
- optionally uploads and activates the release on the configured remote target

Environment variables expected by deployment:

```bash
export LGS1920_PASSWORD_STAGING="..."
export LGS1920_PASSWORD_PRODUCTION="..."
export LGS1920_PASSWORD_TEST="..."
```

More detail is available in `deployment/README.md` and `deployment/Deployment.js`.

## Licensing

The public version of `LGS1920 Studio` is distributed under the `PolyForm Noncommercial License 1.0.0`.

- full license text: `../studio/LICENSE.md`
- licensing model summary: `../studio/LICENSES.md`
- contributor agreement: `../studio/CONTRIBUTOR_LICENSE_AGREEMENT.md`

For commercial licensing or contribution questions:

```text
contact@lgs1920.fr
```
