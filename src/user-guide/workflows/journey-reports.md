---
permalink: /user-guide/workflows/journey-reports/index.html
title: Journey Reports
description: Export journey reports as PDF documents or ZIP-packaged HTML reports with metadata, statistics, POIs, and map captures.
hero:
  video: false
  className: guide-hero
  badge: Workflow
  kicker: Reports
  title: Package a journey as a report.
  lead: Generate document exports when a journey needs metadata, statistics, POIs, altitude data, and map captures.
  highlights:
    - icon: file-pdf
      label: PDF report
      variant: regular
    - icon: file-zipper
      label: HTML ZIP
      variant: regular
    - icon: map
      label: Map captures
      variant: regular
sectionNav:
  - id: report-outputs
    label: Report outputs
    summary: PDF and HTML ZIP
  - id: report-content
    label: Report content
    summary: Metadata and route data
  - id: map-captures
    label: Map captures
    summary: 2D overview and 3D views
  - id: export-checklist
    label: Export checklist
    summary: Before generating
---

## Report Outputs

Use journey reports when the output needs to be a document package instead of a single image or video. The Studio can export the active journey as a PDF report or as an HTML report packaged in a ZIP archive.

## Report Content

A report can include journey metadata, description, statistics, dates, elevation profile, POI tables, coordinates, and altitude data. Review these fields in the journey, track, and POI panels before generating the export.

<div class="guide-screenshot-placeholder" role="img" aria-label="Screenshot placeholder for journey report export controls">
    <wa-icon variant="regular" name="image"></wa-icon>
    <strong>Screenshot placeholder</strong>
    <span>Journey report export controls with metadata, statistics, POI table options, and map capture generation.</span>
</div>

## Map Captures

Reports can include a 2D overview map and 3D Cesium captures from the four cardinal orientations: north, east, south, and west.

Before generating map captures, check that the route line, start and end markers, walking direction markers, and POI badges remain readable. If a POI or marker hides important route geometry, adjust the journey or POI presentation before exporting.

## Export Checklist

Before exporting a journey report:

1. Select the active journey.
2. Review title, description, activity, location, dates, and visibility.
3. Check distance, elevation, duration, speed, slope, and elevation profile data.
4. Review POI names, categories, coordinates, heights, and parent links.
5. Focus the route and confirm 2D and 3D map framing.
6. Generate the PDF or HTML ZIP report.
7. Open the exported report and check generated maps, POI tables, coordinates, and altitude data.
