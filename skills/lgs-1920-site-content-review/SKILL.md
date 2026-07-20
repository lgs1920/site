---
name: lgs-1920-site-content-review
description: Review LGS1920 documentation for clarity, terminology, translation quality, consistency, and freshness. Use for editorial audits, English/French comparisons, outdated instructions, and improvement proposals.
---

# LGS1920 content review

Review content in `/home/christian/devs/assets/lgs1920/site` without editing unless the user explicitly requests fixes.

## Review workflow

1. Read the relevant page in both locales and its catalogue metadata.
2. Check task order, terminology, UI labels, links, headings, anchors, and screenshots.
3. Compare English and French for meaning and coverage, not literal word-for-word equivalence.
4. Check `guideTranslationReport` and source revisions when freshness matters.
5. Run `bun run content:check` when repository validation is relevant.
6. Report findings with severity, file path, evidence, and a precise recommendation.

## Review standards

- Flag missing or stale translations.
- Flag instructions that disagree with current UI or file paths.
- Flag English links inside French localized content unless intentional.
- Flag ambiguous steps, unexplained terms, and inconsistent product terminology.
- Distinguish blocking correctness issues from style suggestions.
- Preserve the author's intent and avoid rewriting without authorization.
