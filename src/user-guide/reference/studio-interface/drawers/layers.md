---
permalink: /user-guide/reference/studio-interface/drawers/layers/
title: Layers drawer
description: Map and terrain source management for the Studio scene.
ui:
  backUrl: /user-guide/reference/studio-interface/#drawers
  backLabel: Drawers
  overview: >
    The Layers drawer manages the data sources that define the visible map and terrain. It is where you review what the scene is drawing and how the background data is sourced.
  controls:
    - label: Layer disclaimer
      icon: bell-exclamation
      type: Button
      description: Opens the layer information modal so the user can read source-specific warnings.
    - label: Layers and terrains list
      icon: layer-group
      type: List
      description: Shows the available base layers and terrain sources with their access and visibility state.
    - label: Source visibility
      icon: eye
      type: Switch
      description: Turns a layer or terrain source on or off in the current scene.
  notes:
    - Use this drawer when the user needs to change the map foundation or review data access notes.
    - The layer information modal and layer token modal belong to this drawer-driven workflow.
---

{% include "user-guide/reference/studio-interface/ui-detail.md" %}

## Flow

There is no separate top-level “layer editor” button. The flow starts from the `Layers` button in the main scene.

1. Open the `Layers` button in the main bar.
2. The [Layers drawer](/user-guide/reference/studio-interface/drawers/layers/) opens.
3. Review the layer and terrain list.
4. Use the visibility switch to show or hide a source.
5. Open the layer disclaimer when you need the source notes.
6. Open the token prompt when a protected source asks for access.
7. Use the back link on the modal to return to the Layers drawer.

The drawer is the place where you inspect and control the source list. The modal pages are temporary steps inside that flow, not separate destinations.
