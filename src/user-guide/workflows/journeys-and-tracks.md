
## Journey Vs Track

A journey is the story-level container. It groups route metadata, tracks, POIs, camera state, rotation settings, panorama settings, and export behavior.

A track is the visible path geometry inside a journey. Track controls are used for line color, thickness, visibility, data review, and path-level presentation.

## Open The Track Editor

There is no separate top-level track editor button. The flow starts from the `Journey` button in the main scene.

1. Open the `Journey` button in the main bar.
2. Choose the edit action.
3. The [journey editor drawer](/user-guide/reference/studio-interface/drawers/journey-editor/) opens.
4. Select the track you want to change inside that drawer.
5. Adjust track visibility, style, and related fields.
6. Close the drawer when the scene matches the desired presentation.

This is the same path you use when you need to go from the button to the drawer and then to the track-specific controls.

## Edit The Journey

Use journey controls to:

1. Select the active journey.
2. Rename it with a clear title.
3. Review description, activity, location, country, and visibility.
4. Toggle the visibility of journey-level POIs.
5. Focus the journey to check the camera framing.
6. Check dates, statistics, coordinates, and altitude data when the journey will be used in a report.
7. Keep the camera and movement settings only when they support the final story.

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

## Report Readiness

Journey reports reuse the route information already prepared in the editor. Before generating a report, review the journey title, description, activity, location, dates, statistics, POIs, coordinates, and altitude data.

For reports that include map captures, make sure start and end markers, POI badges, walking direction markers, and the route line are readable in both the 2D overview and the 3D scene captures.
