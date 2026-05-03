---
permalink: /user-guide/workflows/journeys-and-tracks/index.html
title: Journeys And Tracks
description: Edit journey-level information, track styling, visibility, and route presentation in LGS1920 Studio.
hero:
  video: false
  className: guide-hero
  badge: Workflow
  kicker: Journeys
  title: Shape the route story.
  lead: Use journeys for story-level settings and tracks for line-level presentation.
  highlights:
    - icon: route
      label: Journey selection
      variant: regular
    - icon: pen-to-square
      label: Metadata and style
      variant: regular
    - icon: eye
      label: Visibility controls
      variant: regular
sectionNav:
  - id: journey-vs-track
    label: Journey vs track
    summary: What each object controls
  - id: edit-the-journey
    label: Edit the journey
    summary: Story-level settings
  - id: edit-tracks
    label: Edit tracks
    summary: Path styling and data
---

## Journey Vs Track

A journey is the story-level container. It groups route metadata, tracks, POIs, camera state, rotation settings, panorama settings, and export behavior.

A track is the visible path geometry inside a journey. Track controls are used for line color, thickness, visibility, data review, and path-level presentation.

## Edit The Journey

Use journey controls to:

1. Select the active journey.
2. Rename it with a clear title.
3. Review description, activity, location, country, and visibility.
4. Toggle the visibility of journey-level POIs.
5. Focus the journey to check the camera framing.
6. Keep the camera and movement settings only when they support the final story.

<div class="guide-screenshot-placeholder" role="img" aria-label="Screenshot placeholder for journey editing">
    <wa-icon variant="regular" name="image"></wa-icon>
    <strong>Screenshot placeholder</strong>
    <span>Journey editor panel with metadata, visibility controls, and the route centered in the scene.</span>
</div>

## Edit Tracks

Use track controls to:

1. Select the track inside the active journey.
2. Adjust color and thickness.
3. Toggle track visibility.
4. Review track points if the path does not look right.
5. Focus the track to validate the route extent.
6. Repeat for every track that should be visible in the output.
