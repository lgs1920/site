---
permalink: /user-guide/reference/objects/index.html
title: Objects
description: User-facing reference for journeys, tracks, POIs, widgets, camera targets, journey reports, and capture areas.
hero:
  video: false
  className: guide-hero
  badge: Reference
  kicker: Objects
  title: Understand the main objects.
  lead: Know what each user-facing object represents and where it fits in the workflow.
  highlights:
    - icon: diagram-project
      label: Object model
      variant: regular
    - icon: route
      label: Route objects
      variant: regular
    - icon: box
      label: Output overlays
      variant: regular
    - icon: file-pdf
      label: Report output
      variant: regular
sectionNav:
  - id: object-table
    label: Object table
    summary: Purpose and controls
  - id: object-order
    label: Object order
    summary: How to think about them
---

## Object Table

| Object | Purpose | Common Fields | Main Controls |
| --- | --- | --- | --- |
| Journey | Story-level container for route content. | Title, description, country, activity, dates, visibility, camera, rotation, panorama. | Select, focus, edit metadata, toggle POIs, export. |
| Track | Path geometry inside a journey. | Title, description, color, thickness, visibility, coordinates. | Select, style, inspect points, focus. |
| POI | Point marker attached to a journey, track, or location. | Title, category, parent, coordinates, height, camera distance. | Add, edit, focus, rotate, hide, delete. |
| Widget | Visual overlay rendered on the scene or export board. | Type, position, scale, rotation, opacity, board, z-index. | Add, move, resize, rotate, configure, remove. |
| Camera target | Object or coordinate used for focus and movement. | Longitude, latitude, height, heading, pitch, distance. | Focus, orbit, panorama, reset. |
| Journey report | Document output generated from one journey. | Metadata, description, statistics, dates, elevation profile, POIs, coordinates, altitude data, map captures. | Export PDF, export HTML ZIP, review generated maps. |
| Capture area | Visible output frame for image or video. | Ratio, width, height, crop bounds, quality. | Set ratio, move crop zone, preview, capture, record. |

## Object Order

Use the objects in this order when you want a predictable session:

1. Journey.
2. Track.
3. POI.
4. Camera target.
5. Widget.
6. Journey report.
7. Capture area.
