---
name: lgs-1920-site-release
description: Prepare and verify LGS1920 site releases. Use for release preparation, Studio source synchronization, legal-document generation, builds, deployment checks, version handoff, and release notes.
---

# LGS1920 site release

Use `/home/christian/devs/assets/lgs1920/site` and inspect both the site and sibling Studio repositories before release work.

## Shared issue and changelog policy

- Treat `studio`, `site`, and `backend` as separate issue repositories. Use the repository that owns the change and link directly to that issue.
- Never create or use a mirror issue in `studio` for a `site` or `backend` issue. For legacy mirrors, confirm ownership, remove references to the mirror from the owning issue and related documents, then delete only confirmed mirrors. Report ambiguous cases.
- The public release changelog is maintained in the sibling Studio repository at `../studio/public/assets/changelog/` with the filename `YYYYMMDD-<version>.md`. If the target file is absent, create it automatically with today's date and the nearest existing file's header conventions.
- Group closed issues and remaining bugs/features by owning repository. Omit empty repository headings and omit a category heading when it has no entries. Never include mirror links.

### Changelog formatting

- Use the exact filename `YYYYMMDD-<version>.md`, where `YYYYMMDD` is the release date and `<version>` is the exact version, including prerelease identifiers.
- Before creating a missing file, inspect the nearest existing changelog in the same release line. Preserve its heading level, title style, section spelling, and blank-line conventions. Never overwrite an existing target file merely to normalize historical formatting.
- The first heading must identify the release and its user-facing theme. Do not add a generated date line unless the established pattern for that release line includes one.
- Render closed issues under `Closed Issues`, then render `Remaining Bugs` and `Remaining Features` only when entries exist. Within each category, group entries under `Studio`, `Site`, and `Backend` according to the owning repository.
- Omit a repository heading when it has no entries in the category. Omit the category heading when no repository has entries. Do not render empty headings, placeholder text, or empty lists.
- Preserve the issue title's meaning, correct only obvious formatting errors, and link every issue to its owning repository URL.

## Release workflow

1. Inspect `git status --short`, current branches, and intended release scope.
2. Verify the site and Studio source revisions are intentional.
3. Review and update the local `CHANGELOG.md` entry for the release or commit.
4. When preparing shared public release notes, update the Studio changelog according to the shared issue and changelog policy above.
5. Run `bun run content:check`.
6. Run `bun run build`.
7. Inspect generated English/French pages, legal pages, dependency page, assets, and redirects if applicable.
8. Review the diff and generated-file policy before committing.
9. Use the project's deployment script only when explicitly authorized.
10. Report the release ref, checks, warnings, and remaining risks.

## External Studio source

Legal, dependency, and public changelog content is read from the sibling repository. The dependency document is `../studio/tech-doc/specs/delivery/README_DEPENDENCIES.md` at the pinned ref in `src/_lib/legal-docs.js`, and the public `/changelog/` page is generated from Studio release notes. Confirm the dependency ref exists before release; do not silently switch to working-tree files for a reproducible release. The local `CHANGELOG.md` records site commits separately and must not replace the public Studio changelog.

## Safety

Do not commit, push, deploy, tag, or alter external repositories unless explicitly requested. Preserve unrelated changes and never use destructive reset or checkout commands.
