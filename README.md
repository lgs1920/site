# LGS1920 Site

This repository contains the public website and documentation for LGS1920 Studio.

It is built with Eleventy and Vite. The code here generates the public site, the multilingual pages, and the user guide for the Studio.

Site changes are recorded in the local [CHANGELOG.md](CHANGELOG.md) with their date, commit identifier, title, and summary.

## Main dependencies

- Font Awesome
- Web Awesome
- Eleventy
- Vite

## Skills

This repository includes project skills for maintaining the public site and its documentation:

- [Content maintenance](skills/lgs-1920-site-content-maintenance/SKILL.md)
- [Content review](skills/lgs-1920-site-content-review/SKILL.md)
- [Documentation authoring](skills/lgs-1920-site-documentation-authoring/SKILL.md)
- [Eleventy maintenance](skills/lgs-1920-site-eleventy-maintenance/SKILL.md)
- [Multilingual content](skills/lgs-1920-site-multilingual-content/SKILL.md)
- [Site QA](skills/lgs-1920-site-qa/SKILL.md)
- [Release preparation](skills/lgs-1920-site-release/SKILL.md)

## Live links

- [LGS1920 Site](https://lgs1920.fr)
- [LGS1920 Studio](https://studio.lgs1920.fr)

## Statistics API in development

The local development server uses the local backend count API at
`http://localhost:3333` by default:

```bash
bun run dev
```

The site is served at Eleventy’s default address, `http://localhost:8080`.

Override the API address for another backend environment when building or
serving the site:

```bash
LGS1920_COUNT_API_URL="http://api.lgs1920.fr:3334" bun run dev
```

Production keeps using `https://api.lgs1920.fr` unless
`LGS1920_COUNT_API_URL` is explicitly set.
