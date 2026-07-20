---
name: lgs-1920-site-qa
description: Check LGS1920 pages, links, SEO, accessibility, builds, and locales. Use for English/French route QA, generated HTML inspection, hreflang and metadata checks, broken links, and accessibility reviews.
---

# LGS1920 site QA

Work from `/home/christian/devs/assets/lgs1920/site`. Treat the generated site as the verification surface, not as an editing target.

## Required checks

1. Run `bun run content:check`.
2. Run `bun run build`.
3. Inspect representative English and French pages in `_site/`.
4. Check status codes or link targets when a local server is available.
5. Check `title`, description, canonical URL, `hreflang`, language switcher, and Open Graph locale.
6. Check guide breadcrumbs, section navigation, anchors, and previous/next links.
7. Check images for alt text, controls for accessible labels, keyboard focus, and obvious layout regressions.

## Reporting

Report failures with URL, generated file, selector or line evidence, severity, and reproduction command. Separate environment blockers from regressions. Do not dismiss warnings without explaining whether includes or intentional locale differences cause them.

## Safety

Do not modify `_site/` to make QA pass. If a fix is requested, edit source files and rerun the checks.
