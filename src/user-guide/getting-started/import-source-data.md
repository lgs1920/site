---
permalink: /user-guide/getting-started/import-source-data/index.html
title: Import Source Data
description: Load GeoJSON, GPX, or KML route data into LGS1920 Studio and verify the imported journey.
hero:
  video: false
  className: guide-hero
  badge: Getting started
  kicker: Import
  title: Bring route data into the Studio.
  lead: Load GeoJSON, GPX, or KML files and confirm that the journey is ready to edit.
  highlights:
    - icon: file-import
      label: GeoJSON, GPX, KML
      variant: regular
    - icon: route
      label: Journey creation
      variant: regular
    - icon: bullseye
      label: First focus check
      variant: regular
sectionNav:
  - id: supported-files
    label: Supported files
    summary: Source data formats
  - id: import-checklist
    label: Import checklist
    summary: What to verify
  - id: after-import
    label: After import
    summary: Next user actions
---

## Supported Files

Use the file loader to import route content. The Studio supports GeoJSON, GPX, and KML sources. Imported content becomes editable in the current browser session and can be combined with camera state, POIs, widgets, and capture settings.

## Import Checklist

After import, check that:

1. The journey appears in the journey list.
2. The tracks are visible on the map.
3. The detected title, description, activity, location, and country information are usable.
4. The journey can be focused without moving the camera to an unexpected location.
5. The imported route has the expected start and end positions.

<div class="guide-screenshot-placeholder" role="img" aria-label="Screenshot placeholder for importing source data">
    <wa-icon variant="regular" name="image"></wa-icon>
    <strong>Screenshot placeholder</strong>
    <span>File loader with a selected GPX, KML, or GeoJSON file and the resulting journey visible in the scene.</span>
</div>

## After Import

Continue with [Journeys and tracks](/user-guide/workflows/journeys-and-tracks/) to refine the route presentation, or go directly to [Points of interest](/user-guide/workflows/points-of-interest/) if the imported content already has the track style you need.
