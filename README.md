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
- [Contact mail](skills/lgs-1920-site-contact-mail/SKILL.md)

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

## Public registration form

The site includes English and French launch-registration forms for first name,
last name, and email address. Submissions are sent to `POST /launch-registration`
on the backend. The form uses `LGS1920_LAUNCH_REGISTRATION_API_URL` when it is
set, then falls back to the legacy `LGS1920_REGISTRATION_API_URL`, and finally
uses the same API URL as the statistics feature.

## Public contact form

The English and French contact pages collect a name, email address, subject,
message, and explicit consent before sending the request to `POST /contact` on
the backend. The form uses `LGS1920_CONTACT_API_URL` when it is set; otherwise
it uses the same API URL as the statistics feature. Before submitting, the
form requests a short-lived backend token and sends only an opaque contact
target key, for example `C4P7Z2`. The backend may answer with HTTP `429` when
the token or submission limit is reached; the site keeps that response generic
and does not reveal delivery details. SMTP credentials and recipient addresses
remain server-side in the backend and are never exposed to the site.

The target key is configured in the site build with
`LGS1920_CONTACT_TARGET` and mapped to the real recipient only by the backend.
The mapping must never be copied into this repository or the generated browser
bundle.
