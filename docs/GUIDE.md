# Site Structure and Editing Guide

This document explains how the LGS1920 site is organized and, most importantly, where to edit site or user-guide content.

## 1. General operation

The site is a static site built with [Eleventy](https://www.11ty.dev/). Source files live in `src/`. The build reads Markdown files, JavaScript data, and HTML templates, then generates the final site in `_site/`.

```text
src/
├── _data/              Shared data and page content
├── _includes/          Layouts, templates, and reusable fragments
├── assets/              Site CSS and JavaScript
├── user-guide/         English guide pages
├── fr/user-guide/      French guide pages
├── index.html           English home page
└── fr/index.html        French home page
```

Do not edit files generated in `_site/`: they are recreated on every build.

## 2. Where to edit text

### Main text of a guide page

The visible content below the hero is stored in the page's Markdown file.

| Language | Directory |
| --- | --- |
| English | `src/user-guide/` |
| French | `src/fr/user-guide/` |

Examples:

```text
src/user-guide/workflows/export.md
src/fr/user-guide/workflows/export.md
```

To edit a paragraph, list, section heading, link, or screenshot placeholder, open the corresponding `.md` file.

The guide home page is located here:

```text
src/user-guide/index.md
src/fr/user-guide/index.md
```

### Title, description, and hero

For guide pages, these elements live in the localized JSON content file:

```text
src/_content/guide/<page-path>/<locale>/page.json
```

For example, the English export page metadata is defined in:

```text
src/_content/guide/workflows/export/en/page.json
```

The shared guide catalogue loads the two locale JSON files and exposes them to the Eleventy data flow.

The guide body remains in the route Markdown files because those files are Eleventy page sources:

```text
src/user-guide/workflows/export.md
src/fr/user-guide/workflows/export.md
```

In this file:

- `title` changes the page title and browser title;
- `description` changes the page description and SEO metadata;
- `hero.badge`, `hero.kicker`, `hero.title`, and `hero.lead` change the visual header;
- `hero.highlights` changes the cards or highlights displayed in the hero;
- `sectionNav` changes the “On this page” navigation and its anchors.

The guide catalogue in `src/_data/guide-pages.js` only registers these modules by canonical URL and exposes the lookup helpers. Do not edit `_site/` instead.

### Legal and licensing pages

The legal page entry points are intentionally small Eleventy controllers:

```text
src/licensing.11ty.js
src/license.11ty.js
src/contributor-license-agreement.11ty.js
src/dependencies.11ty.js
```

Their French counterparts are under `src/fr/`. These files select the locale and connect the page data to the shared legal renderer; they are not where the full legal text or most page copy is stored.

For a legal page, use this map:

| Need | Source |
| --- | --- |
| Page title, description, hero, intro, CTA | `src/_data/pages/<page>.js` |
| Rendered legal Markdown | `src/_lib/legal-docs.js` |
| Licensing source | `../studio/LICENSES.md` |
| Full license source | `../studio/LICENSE.md` |
| Contributor agreement source | `../studio/CONTRIBUTOR_LICENSE_AGREEMENT.md` |
| Dependency inventory source | `../studio/tech-doc/specs/delivery/README_DEPENDENCIES.md` |

Legal documents are read from the Studio repository at build time. The dependency document uses the pinned `f14742dada6e760f598cade5b480c522454abed3` Studio revision. If a legal page fails during the build, check the source path and Git reference before changing the Eleventy controller.

## 3. Guide-page structure

A guide page is assembled from three layers:

```text
Markdown content
    ↓
Eleventy front matter / data
    ↓
src/_includes/layouts/page.html
    ↓
HTML page in _site/
```

### A. Markdown

The `.md` file contains editorial text: `##` headings, paragraphs, steps, tables, links, and specific HTML such as image placeholders.

Heading IDs are generated automatically from the heading text. If a heading changes, its anchor changes as well; update any links that use the old `#anchor`.

### B. Page data

`src/_data/guide-pages/<page-path>.js` provides the localized information for one page. `src/_data/guide-pages.js` registers the modules and exposes `getGuidePageDefinition()` and `getGuidePageContent()`.

`src/user-guide/user-guide.11tydata.js` adds guide context: breadcrumbs, table of contents, previous/next pagination, language links, and the CTA.

The guide pages also expose `guideTranslationReport`, which contains the translation status, source revision, and update date for each supported locale.

### C. Layout

Shared rendering lives in:

```text
src/_includes/layouts/page.html
src/_includes/layouts/base.html
src/_includes/templates/page-template.html
```

Edit these files only when changing the structure or appearance of many pages. To change text on a single page, stay in its `.md` file or page definition.

## 4. French and English

Each translated page normally exists as two files:

```text
src/user-guide/workflows/<page>.md
src/fr/user-guide/workflows/<page>.md
```

Edit both Markdown files and both locale objects when the content should remain synchronized. Page data is separated by locale in the page module:

```js
locales: {
  en: { /* English text */ },
  fr: { /* French text */ }
}
```

For an internal French link, use the `/fr/` prefix. For example:

```md
[Export](/fr/user-guide/workflows/export/)
```

In English, use the path without a locale prefix:

```md
[Export](/user-guide/workflows/export/)
```

## 5. Add a page or make it appear in the menu

To add a complete page:

1. Create the English Markdown file and, when needed, the French file.
2. Add the page module under `src/_data/guide-pages/` and register its canonical URL in `src/_data/guide-pages.js`.
3. Add the item to `guideItemDefinitions` in `src/_data/i18n.js` if it should appear in guide navigation.
4. Check the links on `src/user-guide/index.md` and `src/fr/user-guide/index.md` if the page should be promoted there.
5. Run `bun run content:check` to validate the localized catalogue and internal guide links.

The canonical English path has no `/fr` prefix; the French path uses the same path with the `/fr` prefix. Translated paths are derived automatically from the guide catalogue.

## 6. Edit style or behavior

- Global styles: `src/assets/site.css`
- Site JavaScript: `src/assets/app.js`
- Theme and tokens: `src/assets/theme.js`
- Shared HTML layout: `src/_includes/layouts/`
- Reusable content fragments: `src/_includes/`
- Guide icons and images: `src/assets/media/user-guide/` and `public/assets/`

A change to `page.html` or the CSS can affect every page. Test several pages and both languages after this type of change.

## 7. Verify a change

From the project root:

```bash
bun run build
```

The build first runs the editorial consistency check and then generates the site. Inspect the generated HTML in `_site/`, for example:

```text
_site/fr/user-guide/workflows/export/index.html
```

Check that:

- the changed text is visible;
- the title and description are correct;
- the navigation anchors work;
- internal links remain in the correct language;
- previous/next links work;
- no Eleventy error appears during the build.

The content-only validation can also be run independently:

```bash
bun run content:check
```

To work with live reload:

```bash
bun run dev
```

## 8. Quick reference

| Need | File to edit |
| --- | --- |
| Paragraph or steps on an English page | `src/user-guide/.../*.md` |
| Paragraph or steps on a French page | `src/fr/user-guide/.../*.md` |
| Title, description, hero, section navigation | `src/_data/guide-pages/<page-path>.js` |
| Guide menu labels and order | `src/_data/i18n.js` |
| Shared page-data helpers | `src/_lib/page-data.js` |
| Public page definitions | `src/_data/pages/<page>.js` |
| Legal page controller | `src/<page>.11ty.js` or `src/fr/<page>.11ty.js` |
| Legal source documents | `../studio/*.md` and `../studio/tech-doc/specs/delivery/README_DEPENDENCIES.md` |
| Shared page structure | `src/_includes/layouts/page.html` |
| Global appearance | `src/assets/site.css` |
| Translation status and revision data | `src/_data/translation-status.js` |

The most useful rule is: **article text = Markdown; title/hero/section navigation = the page module under `guide-pages/`; shared page helpers = `_lib/page-data.js`; global UI strings and menu configuration = `i18n.js`.**
