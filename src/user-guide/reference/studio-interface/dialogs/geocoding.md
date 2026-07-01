---
permalink: /user-guide/reference/studio-interface/dialogs/geocoding/
title: Geocoding dialog
description: Search dialog for places, addresses, and coordinates.
ui:
  backUrl: /user-guide/reference/studio-interface/#dialogs
  backLabel: Dialogs
  overview: >
    The Geocoding dialog is the place lookup surface. It helps the user turn a place name or coordinate entry into a map result that can be used for focusing or temporary POI creation.
  controls:
    - label: Search field
      icon: magnifying-glass
      type: Text field
      description: Accepts an address, place name, or coordinate query.
    - label: Search
      icon: search
      type: Button
      description: Runs the lookup for the current query.
    - label: Results list
      icon: list
      type: Selectable list
      description: Shows the matching locations or coordinates returned by the lookup.
    - label: Create temporary POI
      icon: location-dot
      type: Button
      description: Adds the selected result as a temporary point of interest when supported.
  notes:
    - Use this dialog when you want to jump to a place without leaving the scene.
---

{% include "user-guide/reference/studio-interface/ui-detail.md" %}
