# Layers Drawer Annotation Plan

This note describes the implementation path for a Layers drawer guide page that uses an English source page, a real screenshot, and step-aligned UI explanations.

## Goal

Publish the English Layers drawer page as the source of truth, then render:

1. one screenshot of the Layers drawer,
2. a set of UI callouts or a control table,
3. explanatory text that stays aligned with the highlighted element in the image.

The French page can mirror the same structure later, but the English page should be completed first.

## Current Structure

The current guide setup already has the right split:

- `src/_data/guide-pages.generated.js` holds the actual guide content data.
- `src/user-guide/reference/studio-interface/drawers/layers.md` only includes the shared UI detail template and the flow text.
- `src/_includes/user-guide/reference/studio-interface/ui-detail.md` renders the generic screenshot block, controls table, steps, and notes.
- `src/assets/site.css` contains the screenshot placeholder and the icon chip styles.

That means the main work is not in the page wrapper. The work belongs in the data and the shared template.

## Recommended Implementation

### 1. Treat English as canonical

Update the English entry for:

`/user-guide/reference/studio-interface/drawers/layers/`

in `src/_data/guide-pages.generated.js`.

Use that entry as the source for:

- the page title,
- the page description,
- the overview text,
- the screenshot metadata,
- the list of controls,
- the workflow notes.

### 2. Add a real screenshot asset

Replace the placeholder-only behavior with a real image reference.

The screenshot should show:

- the Layers drawer,
- the key controls in a stable layout,
- enough surrounding context to understand where the drawer lives in Studio.

Keep the capture wide enough that callouts can be placed without covering the important controls.

### 3. Add callout metadata

If the goal is “button drawn here, explanation here”, the generic controls table is not enough on its own.

Add a lightweight structure to the page data, for example:

- `screenshot.src`
- `screenshot.alt`
- `annotations`

Each annotation should include:

- a stable identifier,
- the label to show beside the screenshot,
- the target element name,
- the explanation text,
- optional coordinates or a position key.

This lets the screenshot and the text stay in the same order.

### 4. Extend the shared template

Update `src/_includes/user-guide/reference/studio-interface/ui-detail.md` so it can render:

- a real image when `ui.screenshot.src` exists,
- a fallback placeholder when it does not,
- an annotation list or callout list when `ui.annotations` exists.

Keep the existing controls table as a fallback for pages that do not need image-level annotation.

### 5. Keep the drawer flow page simple

`src/user-guide/reference/studio-interface/drawers/layers.md` should stay focused on the flow:

1. open Layers from the main scene,
2. inspect the drawer,
3. use the modal pages when needed,
4. return to the drawer.

Do not move the screenshot logic into this file.

## Practical Rule

Use this rule when deciding where to place content:

- if it is page-specific data, put it in `guide-pages.generated.js`,
- if it is generic rendering, put it in `ui-detail.md`,
- if it is a visual style concern, put it in `site.css`,
- if it is navigation or flow text, keep it in the drawer page markdown.

## Minimal Version

If you want the smallest safe change, do this first:

1. add `ui.screenshot.src` and `ui.screenshot.alt` for the English Layers page,
2. keep the existing controls table,
3. render the actual image instead of the placeholder,
4. add the explanatory flow text in the Layers markdown page.

That version is already useful, even before annotation callouts are added.

## Full Version

If you want the final form, do this after the minimal version:

1. add annotation metadata for each important control,
2. render numbered callouts on or next to the screenshot,
3. keep the controls table in the same order as the screenshot callouts,
4. verify the English and French pages use the same structure.

## Verification

After the change, check:

- the English page loads the real screenshot,
- the image alt text is specific,
- the annotation order matches the explanation order,
- the controls table still reads correctly on mobile,
- the French version still compiles cleanly if it reuses the same schema.
