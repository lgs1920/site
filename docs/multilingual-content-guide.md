# Multilingual Content Guide

This document explains how to add a new page, add a new language, and localize an existing translation in this site.

It is written for the current Eleventy setup used by LGS1920 Studio, where page metadata is centralized and locale-aware routing is handled by shared data files.

## What This Site Already Does

The current architecture is built around a few shared pieces:

- `src/_data/page-types.js` centralizes page metadata for the home page, legal pages, changelog, and guide content.
- `src/_data/i18n.js` defines supported locales, localized navigation labels, translated paths, and the user guide structure.
- `src/src.11tydata.js` computes locale-aware metadata such as `title`, `description`, `canonicalUrl`, `hreflang`, `og:locale`, and Twitter tags.
- `src/user-guide/user-guide.11tydata.js` builds guide navigation, breadcrumbs, and pagination.
- `src/_includes/layouts/base.html` renders the meta tags.
- `src/_includes/layouts/page.html` renders the shared page chrome, hero, guide navigation, and CTA blocks.

The result is simple in the browser, but there are still a few rules to follow so that new content stays consistent.

## The Rule Of Thumb

Use this model:

1. Put shared metadata and locale-specific page configuration in the data layer.
2. Put the visible content in the markdown page or shared include file.
3. Register the page in the locale routing data if it should be reachable in multiple languages.
4. Verify the build and the generated HTML before considering the change done.

If a page is only meant to exist in one language, keep it out of the translated path lists and out of the alternate-locale logic.

## How To Create A New Page

### 1. Choose the canonical URL first

Decide the page path before writing content. The path should be stable and readable.

Example:

```text
/user-guide/site-authoring/creating-a-page/
```

If the page has a French version, the localized URL should normally be:

```text
/fr/user-guide/site-authoring/creating-a-page/
```

Keep the same canonical structure for all languages. Only the locale prefix changes.

### 2. Decide whether the page is shared or language-specific

There are two valid models:

- Shared structure, localized content: the same page exists in `en` and `fr`, with separate content and metadata.
- Language-specific page: the page exists only in one locale and is not exposed as a translated route.

For documentation pages that explain site authoring or translation workflows, I recommend the shared structure unless you have a strong reason not to.

### 3. Add the page metadata to the data layer

For pages that should behave like the rest of the site, add their metadata to `src/_data/page-types.js`.

Use the same pattern as the existing guide pages:

- `title`
- `description`
- `hero`
- `sectionNav`
- `pageCta` when the page needs a custom CTA

Keep the content shape predictable. The page layout already knows how to render those fields.

### 4. Create the markdown file

Add the page content under `src/user-guide/...` for English and `src/fr/user-guide/...` for French.

Example:

```text
src/user-guide/site-authoring/creating-a-page.md
src/fr/user-guide/site-authoring/creating-a-page.md
```

If the page body is long, keep the markdown body readable and use shared includes for repeated fragments.

### 5. Register the route in the locale config

If the page should appear in guide navigation or locale alternates, register it in `src/_data/i18n.js`.

This usually means:

- adding the canonical path to `translatedPaths` if it should have alternates,
- adding the item to `guideItemDefinitions` if it should appear in the user guide navigation,
- making sure the localized label and summary exist for each language.

### 6. Run the build

Always build after adding or changing a page.

```bash
bun run build
```

Then check:

- the page title and description,
- canonical and alternate links,
- guide breadcrumbs,
- guide pagination,
- the rendered body content.

## How To Add A New Language

Adding a new language is a wider change than adding one page. The language itself becomes part of the site contract.

### 1. Add the locale to the core locale list

Update `src/_data/i18n.js` first.

You will normally need to extend:

- `supportedLocales`
- `localeOptions`
- `localeMeta`
- `site`
- `ui`
- `navigation`
- `headerLinks`
- `legalLinks`
- `userGuideSections`

The important part is consistency: if a locale is supported, every user-facing label set should exist for it.

### 2. Define the URL prefix

The current convention is:

- English: no prefix
- French: `/fr/...`

If you add a third language, decide the prefix scheme before changing content.

Keep the scheme consistent across:

- page URLs,
- navigation URLs,
- `hreflang` alternates,
- guide breadcrumbs,
- generated canonical paths.

### 3. Extend the translated path list

If a page should exist in more than one locale, add its canonical path to `translatedPaths` in `src/_data/i18n.js`.

That is what tells the site that the page should receive alternate locale links.

Example:

```text
/user-guide/site-authoring/creating-a-page/
```

### 4. Add locale-aware page data

For pages that use centralized metadata, add localized content for the new locale in `src/_data/page-types.js`.

The content should be complete enough that the layout can render:

- title,
- description,
- hero,
- section navigation,
- page CTA if needed.

### 5. Update the navigation labels

If the new language should be visible in the main site chrome, update:

- the locale switcher labels,
- the header and footer labels,
- the user guide section labels,
- any call-to-action text that is localized.

### 6. Add the localized markdown files

Create the matching files under the locale directory.

Example:

```text
src/user-guide/site-authoring/index.md
src/fr/user-guide/site-authoring/index.md
```

The body text should not be half-translated. Either the page is complete or it should not be published as translated content.

### 7. Verify language switching

Check all of the following in the browser:

- the locale switcher points to the right path,
- the same page exists in both languages,
- the page title and description are localized,
- the guide breadcrumb text is localized,
- internal links remain in the current locale,
- `hreflang` values match the actual routes.

## How To Localize An Existing Page

This is the most common maintenance task.

### 1. Keep the same canonical page

Do not invent a new URL unless the content structure has changed.

If the English page is:

```text
/user-guide/workflows/export/
```

then the French page should remain:

```text
/fr/user-guide/workflows/export/
```

### 2. Localize the metadata first

Before translating the body copy, localize the page metadata:

- `title`
- `description`
- `hero.title`
- `hero.lead`
- `sectionNav`
- `pageCta`

These fields affect the browser tab, search snippets, and guide navigation.

### 3. Translate the body content

Translate the actual page content next.

The goal is not word-for-word matching. The goal is:

- same meaning,
- same structure,
- same user intent,
- same action order.

For procedural pages, keep the steps aligned between languages so that screenshots, references, and cross-links still make sense.

### 4. Check locale-specific links

Do not leave English links in the French version unless the target is intentionally English-only.

Good examples:

```md
[Import a route](/user-guide/getting-started/import-source-data/)
[Importer un parcours](/fr/user-guide/getting-started/import-source-data/)
```

If the target is localized, link to the localized route.

### 5. Confirm the page is included in alternates

If the page should be translated, it must be included in the translated-path logic.

That is what produces:

- the alternate `link rel="alternate"` tags,
- the `og:locale:alternate` metadata,
- the language switch targets.

### 6. Rebuild and inspect the output

Use the generated HTML as the source of truth.

Check:

- the document title,
- the meta description,
- the canonical URL,
- the alternate URLs,
- the visible copy,
- the next/previous guide links.

## Recommended File Layout

For a translated guide page, the cleanest structure is:

```text
src/user-guide/site-authoring/
  index.md
  creating-a-page.md
  adding-a-new-language.md
  localizing-an-existing-page.md

src/fr/user-guide/site-authoring/
  index.md
  creating-a-page.md
  adding-a-new-language.md
  localizing-an-existing-page.md
```

If a page has a large repeated fragment, move the repeated markup into a shared include under `src/_includes/...`.

## Practical Authoring Pattern

When you add a page, keep this order:

1. Add the data definition.
2. Add the markdown file.
3. Add the locale route.
4. Update the guide navigation.
5. Build.
6. Inspect the generated HTML.

When you localize an existing page, keep this order:

1. Update metadata.
2. Translate body content.
3. Fix links.
4. Verify alternates.
5. Build.
6. Inspect the generated HTML.

## Common Mistakes

- Putting page metadata only in markdown frontmatter when the project already centralizes it in data files.
- Adding a translated page without adding the alternate path logic.
- Copying English links into the French version.
- Changing the URL structure in one language only.
- Translating the navigation label but not the hero title or description.
- Adding a page body but forgetting the `pageMeta` source, which leaves the browser title inconsistent.

## Verification Checklist

Before you merge a documentation change, confirm:

- the page appears in the right section,
- the title and description are correct,
- the canonical URL is correct,
- the locale alternates are correct,
- the guide navigation shows the expected item,
- the body content is complete,
- the build passes.

## Suggested Next Step

If you want this documentation to become part of the public site instead of living as a repository document, the same content can be converted into a proper guide section with one overview page and three supporting pages.
