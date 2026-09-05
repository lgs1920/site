---
name: lgs-1920-component-ui-deployment
description: Build, document, validate, and publish LGS1920 UI component projects across source code, demo pages, package artifacts, GitHub Pages, and npm releases.
---

# LGS1920 Component UI Deployment

Use this skill when a change spans a reusable LGS1920 UI component, its public documentation or demo, and its delivery workflow. Work in the repository that owns the component and keep the component source, demo, package metadata, tests, and deployment configuration aligned.

## Component projects

Use the project row that matches the requested component before choosing commands or assuming a deployment target.

| Component | Local project | Repository | Demo or public documentation | Delivery configuration |
| --- | --- | --- | --- | --- |
| `countdown` | [workspace README](../../../countdown/README.md) | [GitHub](https://github.com/lgs1920/countdown) | [GitHub Pages demo](https://lgs1920.github.io/countdown/) · [npm](https://www.npmjs.com/package/@lgs1920/countdown) | [`ci.yml`](../../../countdown/.github/workflows/ci.yml) · [`pages.yml`](../../../countdown/.github/workflows/pages.yml) · [`publish.yml`](../../../countdown/.github/workflows/publish.yml) |
| `timeline` | [workspace README](../../../timeline/README.md) | [GitHub](https://github.com/lgs1920/timeline) | [Repository README](https://github.com/lgs1920/timeline#readme) · no standalone demo is defined in the current repository | [`package.json`](../../../timeline/package.json) · no GitHub Pages workflow is defined in the current repository |

The local links are useful when working in the shared LGS1920 workspace. The public links are the source of truth for repository, demo, and package handoff. Add a new component row when a new reusable component project becomes part of this delivery scope.

## Workflow

1. Identify the owning component from the table and inspect its `git status --short --branch`, README, `package.json`, source entry points, tests, demo or documentation files, and `.github/workflows/` files.
2. Preserve unrelated changes in that repository. Keep public API behavior in the component source, behavior coverage in the component tests, and user-facing explanations in the component README or demo source.
3. Update the demo when the component behavior or public API changes. Keep the demo usable at its documented URL or local server, and keep its theme, typography, colors, navigation, and examples consistent with the component's host UI library.
4. Build from source files and inspect the generated output. Never edit ignored or generated `dist/` output as the source of a fix.
5. Run the owning project's verification commands before preparing delivery. Check package contents and generated assets when the project provides a package check.
6. Review the final diff, validate links and deployment configuration, then commit or publish only when the user explicitly requests that external action.
7. After an authorized push, inspect the relevant GitHub Actions runs and report the release reference, demo deployment, package publication, and any remaining queued or failed work.

## Source and code changes

Keep a component's public entry point, runtime dependencies, package exports, and README examples synchronized. When a change affects browser behavior, add a focused regression test that exercises the behavior at its public boundary. For Web Awesome components, import the stylesheet in the host application and register only the component modules required by the project.

If a component is copied or synchronized from Studio, inspect the import script and the source revision before changing generated copies. For `timeline`, `bun run import:studio` replaces `src/lgs1920-timeline` from the sibling Studio source. Run it only when source synchronization is part of the request, then review the complete diff before continuing.

## Demo and documentation

The demo is part of the component's public contract. It should explain what the component does, expose meaningful configuration examples, and link to the component reference, repository, and package when those resources exist.

Every standalone demo and generated component reference uses the shared banner pattern:

- left: the LGS1920 logo linked to `https://lgs1920.fr/`, followed by `DEMO` and `README` links;
- right: `GitHub` and `npm` links for the owning component;
- the active page is marked with `aria-current="page"`;
- the home page has no separate duplicate logo or `Made by` block, and the old footer reference link is removed when the banner provides the README link.

For a static demo, use the project build command to generate the deployable page. If a project renders a reference page from its README, the generated README page must be rebuilt on every demo build and deployment. Update the README source and verify that the generated HTML includes:

- the active theme, palette, color mode, typography, and code block styling;
- syntax coloring for the languages used by its examples, including readable HTML tag, attribute, string, and punctuation colors;
- the shared banner with the correct logo, project links, GitHub link, and npm link;
- accessible navigation, including a breadcrumb that returns to the demo home where applicable;
- links that resolve from the deployed base path;
- examples that match the currently implemented API.

Do not claim a standalone demo or a Pages URL for a component whose repository does not define one. Use the repository README and package checks as the public fallback until a demo workflow exists.

## Project commands

### `countdown`

Run the focused verification and demo build from `/home/christian/devs/assets/lgs1920/countdown`:

```bash
bun test
bun run build
```

Use `bun run dev` for the local development server or `bun run demo:serve` to serve the generated `dist/` directory. The `countdown` build generates both `dist/index.html` and `dist/readme.html` from the source files. The Pages workflow deploys both pages on pushes to `main`. The publish workflow also runs the build for every `v*` tag before publishing `@lgs1920/countdown` to npm and creating the GitHub release.

The repository's `bun run publish [--patch|--minor|--major]` script changes the version, commits the release, creates the tag, and pushes it. Run it only after the user has explicitly requested publication and the working tree is ready for that operation.

### `timeline`

Run the package's complete local verification from `/home/christian/devs/assets/lgs1920/timeline`:

```bash
bun run verify
bun run pack:check
```

The package contains the Web Component and optional React adapter, but the current repository has no standalone demo page or GitHub Pages workflow. Use its README examples and package payload as the delivery checks. The package README documents `bun run publish:npm`; follow its versioning and registry requirements instead of applying the `countdown` release script.

## Deployment and release checks

Before a release, check the following in the owning repository:

- the working tree contains only the intended files;
- tests pass and the project build completes;
- package metadata points to the correct repository, homepage, bugs URL, and package entry points;
- demo links use the correct deployed base path and the generated page includes the current version when applicable;
- workflow triggers, permissions, package names, registry configuration, and tag or branch filters match the intended delivery;
- no secrets, local environment files, deployment metadata, or directory listings enter the public artifact.

After publication, use the repository's GitHub Actions runs as evidence for CI, Pages, npm, and release status. Report a successful tag push separately from a completed workflow because npm publication and Pages deployment may still be running.

## Safety and handoff

Do not reset, checkout, delete, overwrite unrelated files, commit, push, tag, deploy, publish packages, or close issues unless the user has authorized that action. A request to edit or validate a component authorizes local implementation and read-only checks, but it does not by itself authorize a release.

Use a concise conventional commit message. Keep commits scoped to one component or one shared delivery change. Before handoff, run `git diff --check`, report the changed files and validation commands, and identify uncommitted changes, queued workflows, missing demos, or other release limits.
