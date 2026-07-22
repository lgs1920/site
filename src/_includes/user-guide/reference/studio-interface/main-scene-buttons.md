The main scene uses two bars: a primary action bar and a secondary tool bar. Both sit around the workspace and use icon buttons with short tooltips.

## Primary Bar

| Element | Icon | Type | What it does | Notes |
| --- | --- | --- | --- | --- |
| Journey | <span class="guide-icon-chip"><wa-icon name="route" variant="regular"></wa-icon></span> | Button with popup | Opens the journey action popup with edit, import, and group actions. Choosing edit opens the [journey editor drawer](/user-guide/reference/studio-interface/drawers/journey-editor/), where track settings are edited too. | The same button can act as import when no journey is available. |
| Settings | <span class="guide-icon-chip"><wa-icon name="gear" variant="regular"></wa-icon></span> | Button | Opens the [settings drawer](/user-guide/reference/studio-interface/drawers/settings/). | Keeps global settings in one place. |
| Layers | <span class="guide-icon-chip"><wa-icon name="layer-group" variant="regular"></wa-icon></span> | Button | Opens the [layers drawer](/user-guide/reference/studio-interface/drawers/layers/). | Used for base layers, overlays, and terrain. |
| POI editor | <span class="guide-icon-chip"><wa-icon name="location-dot" variant="regular"></wa-icon></span> | Button | Opens the [points of interest drawer](/user-guide/reference/studio-interface/drawers/pois/). | Focuses point editing instead of map browsing. |
| Text | <span class="guide-icon-chip"><wa-icon name="text" variant="regular"></wa-icon></span> | Button | Adds a text widget to the current scene board. | Creates a visible overlay directly on the scene. |
| Information | <span class="guide-icon-chip"><wa-icon name="circle-info" variant="regular"></wa-icon></span> | Button | Opens the [information drawer](/user-guide/reference/studio-interface/drawers/information/). | Holds project info and changelog content. |
| Support | <span class="guide-icon-chip"><wa-icon name="message-question" variant="regular"></wa-icon></span> | Button | Opens the [support dialog](/user-guide/reference/studio-interface/dialogs/support/). | A help surface, not a workspace drawer. |

## Secondary Bar

| Element | Icon | Type | What it does | Notes |
| --- | --- | --- | --- | --- |
| Scene mode | <span class="guide-icon-chip"><wa-icon name="map" variant="regular"></wa-icon></span> <span class="guide-icon-chip"><wa-icon name="earth-europe" variant="regular"></wa-icon></span> | Popup button | Switches between 2D and 3D scene modes. | The icon changes with the active mode. |
| Geocoding | <span class="guide-icon-chip"><wa-icon name="map-location-dot" variant="regular"></wa-icon></span> | Button | Opens the [geocoding dialog](/user-guide/reference/studio-interface/dialogs/geocoding/). | Can create a temporary POI from a place result. |
| Orbit | <span class="guide-icon-chip"><wa-icon name="arrows-rotate" variant="regular"></wa-icon></span> | Button | Starts or stops orbit around the current target. | Spins only when a valid target exists. |
| Full screen | <span class="guide-icon-chip"><wa-icon name="expand" variant="regular"></wa-icon></span> <span class="guide-icon-chip"><wa-icon name="compress" variant="regular"></wa-icon></span> | Button | Toggles browser full-screen mode. | The icon reflects the current state. |
| Video | <span class="guide-icon-chip"><wa-icon name="clapperboard-play" variant="regular"></wa-icon></span> | Button | Opens the video recording setup. | Hidden while recording or finalizing. |
| Flythrough | <span class="guide-icon-chip"><wa-icon name="video-arrow-up-right" variant="regular"></wa-icon></span> | Button | Opens the [flythrough drawer](/user-guide/reference/studio-interface/drawers/flythrough/). | Only shown when the journey is available. |
| Sync badge | <span class="guide-icon-chip"><wa-icon name="link-simple" variant="regular"></wa-icon></span> | Badge | Shows that video and flythrough are linked. | Informational only, not clickable. |

## Session Buttons

| Element | Icon | Type | What it does | Notes |
| --- | --- | --- | --- | --- |
| Import journey | <span class="guide-icon-chip"><wa-icon name="file-import" variant="regular"></wa-icon></span> | Button | Opens the [journey loader dialog](/user-guide/reference/studio-interface/dialogs/journey-loader/) from the first-session banner. | This is the startup entry point for loading data. |
| Journey visibility | <span class="guide-icon-chip"><wa-icon name="eye" variant="regular"></wa-icon></span> <span class="guide-icon-chip"><wa-icon name="eye-slash" variant="regular"></wa-icon></span> | Toggle button | Shows or hides the current journey. | Lives in journey editing, not in the top bar. |

## How To Read The Toolbar

The toolbar is meant for direct actions, not for navigation. If the user wants to change content, the button usually opens a drawer. If the user wants to change the camera or playback state, the button usually toggles a mode. If the user needs a one-off choice, the button opens a popup or dialog instead of navigating away.
