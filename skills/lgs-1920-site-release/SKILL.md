---
name: lgs-1920-site-release
description: Prepare and verify LGS1920 site releases. Use for release preparation, Studio source synchronization, legal-document generation, builds, deployment checks, version handoff, and release notes.
---

# LGS1920 site release

Use `/home/christian/devs/assets/lgs1920/site` and inspect both the site and sibling Studio repositories before release work.

## Release workflow

1. Inspect `git status --short`, current branches, and intended release scope.
2. Verify the site and Studio source revisions are intentional.
3. Run `bun run content:check`.
4. Run `bun run build`.
5. Inspect generated English/French pages, legal pages, dependency page, assets, and redirects if applicable.
6. Review the diff and generated-file policy before committing.
7. Use the project's deployment script only when explicitly authorized.
8. Report the release ref, checks, warnings, and remaining risks.

## External Studio source

Legal and dependency content is read from the sibling repository. The dependency document is `../studio/tech-doc/README_DEPENDENCIES.md` at ref `1.0.0-beta.3`. Confirm that ref exists before release; do not silently switch to a working-tree file for a reproducible release.

## Safety

Do not commit, push, deploy, tag, or alter external repositories unless explicitly requested. Preserve unrelated changes and never use destructive reset or checkout commands.
