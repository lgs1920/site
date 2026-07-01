---
permalink: /user-guide/workflows/use-map-layers/index.html
title: Use Map Layers
description: Change the map background, terrain, layer visibility, disclaimers, and protected source tokens.
hero:
  video: false
  className: guide-hero
  badge: Main step
  kicker: Layers
  title: Choose what the map shows.
  lead: Use layers to change the map background, terrain, overlays, and protected source access.
  highlights:
    - icon: layer-group
      label: Map sources
      variant: regular
    - icon: eye
      label: Visibility
      variant: regular
    - icon: key
      label: Tokens
      variant: regular
sectionNav:
  - id: open-layers
    label: Open layers
    summary: Start from the Layers button
  - id: change-layer
    label: Change a layer
    summary: Visibility and source choice
  - id: source-access
    label: Source access
    summary: Disclaimers and tokens
  - id: checks
    label: Checks
    summary: Before export
---

## Open Layers

Start from the Studio scene:

1. Click the `Layers` button.
2. The [Layers drawer](/user-guide/reference/studio-interface/drawers/layers/) opens.
3. Review the available base layers, overlays, and terrain sources.

## Change A Layer

Use the layer list when the map background or terrain does not support the route clearly enough.

1. Find the source you want to use.
2. Turn visibility on or off.
3. Check the scene immediately after the change.
4. Keep only the sources that help the route stay readable.

## Source Access

Some sources need an extra step.

| Situation | What happens | What to do |
| --- | --- | --- |
| Source has a disclaimer | The [layer information dialog](/user-guide/reference/studio-interface/dialogs/layer-information/) opens. | Read the note, close it, then continue in Layers. |
| Source is protected | The [layer token dialog](/user-guide/reference/studio-interface/dialogs/layer-token/) opens. | Paste the token, validate it, then continue in Layers. |
| Cesium access is missing | The [Cesium token prompt](/user-guide/reference/studio-interface/dialogs/cesium-token/) opens. | Paste a valid Cesium token before using Cesium-backed data. |

## Checks

Before exporting, check that:

1. The route line stays readable over the selected background.
2. POI labels and badges still contrast with the map.
3. Terrain does not hide important parts of the route.
4. Attribution or credits required by the source remain visible when needed.
