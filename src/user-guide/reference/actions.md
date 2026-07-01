---
permalink: /user-guide/reference/actions/index.html
title: Actions
description: User-facing reference for common LGS1920 Studio actions and their visible effect.
hero:
  video: false
  className: guide-hero
  badge: Reference
  kicker: Actions
  title: Match actions to outcomes.
  lead: Use this page when you know what you want to do but need the right command.
  highlights:
    - icon: list-check
      label: Common commands
      variant: regular
    - icon: bullseye
      label: Focus and movement
      variant: regular
    - icon: download
      label: Capture and export
      variant: regular
sectionNav:
  - id: action-table
    label: Action table
    summary: Command and result
  - id: action-safety
    label: Action checks
    summary: Before major changes
---

## Action Table

| Action | Icon Example | Result |
| --- | --- | --- |
| Launch Studio | <wa-icon variant="regular" name="clapperboard-play"></wa-icon> | Opens the hosted editor application. |
| Import | <wa-icon variant="regular" name="file-import"></wa-icon> | Loads GeoJSON, GPX, or KML source files. |
| Focus | <wa-icon variant="regular" name="bullseye"></wa-icon> | Moves the camera to the selected object or coordinate. |
| Rotate | <wa-icon variant="regular" name="arrows-rotate"></wa-icon> | Starts or adjusts orbit movement around the target. |
| Panorama | <wa-icon variant="regular" name="panorama"></wa-icon> | Starts or adjusts panorama movement. |
| Edit | <wa-icon variant="regular" name="pen-to-square"></wa-icon> | Opens object settings or inline editing controls. |
| Toggle visibility | <wa-icon variant="regular" name="eye"></wa-icon> | Shows or hides an object or overlay. |
| Geocode | <wa-icon variant="regular" name="location-crosshairs"></wa-icon> | Looks up a place or coordinate context for map positioning. |
| Export report | <wa-icon variant="regular" name="file-pdf"></wa-icon> | Generates a PDF report or ZIP-packaged HTML report for the active journey. |
| Capture | <wa-icon variant="regular" name="camera"></wa-icon> | Creates a still image from the current composition. |
| Record | <wa-icon variant="regular" name="video"></wa-icon> | Records a video with the active scene and overlays. |
| Export | <wa-icon variant="regular" name="download"></wa-icon> | Downloads generated media or supported data output. |

## Action Checks

Before a major edit or export:

1. Confirm the selected journey, track, POI, or widget.
2. Check whether the action changes visibility, position, or saved state.
3. Re-focus the camera after important object changes.
4. Review journey metadata, POIs, statistics, coordinates, and altitude data before generating a report.
5. Review the scene before taking a snapshot or starting a recording.
