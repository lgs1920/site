Dialogs are blocking or focus-stealing surfaces. They appear when the Studio needs attention, a decision, or a credential.

Each dialog has a dedicated page:

| Dialog | Icon | What it is for | Page |
| --- | --- | --- | --- |
| Initial error dialog | <span class="guide-icon-chip"><wa-icon name="triangle-exclamation" variant="regular"></wa-icon></span> | Shows the startup error and stack trace. | [Open page](/user-guide/reference/studio-interface/dialogs/initial-error/) |
| PWA update dialog | <span class="guide-icon-chip"><wa-icon name="arrow-rotate-right" variant="regular"></wa-icon></span> | Manages install prompts and update messages. | [Open page](/user-guide/reference/studio-interface/dialogs/pwa-update/) |
| Journey loader dialog | <span class="guide-icon-chip"><wa-icon name="file-import" variant="regular"></wa-icon></span> | Loads route files from local storage. | [Open page](/user-guide/reference/studio-interface/dialogs/journey-loader/) |
| Geocoding dialog | <span class="guide-icon-chip"><wa-icon name="map-location-dot" variant="regular"></wa-icon></span> | Searches places or coordinates. | [Open page](/user-guide/reference/studio-interface/dialogs/geocoding/) |
| Support dialog | <span class="guide-icon-chip"><wa-icon name="message-question" variant="regular"></wa-icon></span> | Shows help content. | [Open page](/user-guide/reference/studio-interface/dialogs/support/) |
| Cesium token prompt | <span class="guide-icon-chip"><wa-icon name="key" variant="regular"></wa-icon></span> | Requests a Cesium Ion token. | [Open page](/user-guide/reference/studio-interface/dialogs/cesium-token/) |
| Layer information modal | <span class="guide-icon-chip"><wa-icon name="circle-info" variant="regular"></wa-icon></span> | Shows the layer disclaimer. | [Open page](/user-guide/reference/studio-interface/dialogs/layer-information/) |
| Layer token modal | <span class="guide-icon-chip"><wa-icon name="key" variant="regular"></wa-icon></span> | Requests an access token for a layer or terrain source. | [Open page](/user-guide/reference/studio-interface/dialogs/layer-token/) |
| Profile sync dialog | <span class="guide-icon-chip"><wa-icon name="user-gear" variant="regular"></wa-icon></span> | Manages sync-related profile actions. | [Open page](/user-guide/reference/studio-interface/dialogs/profile-sync/) |
| Video download dialog | <span class="guide-icon-chip"><wa-icon name="clapperboard-play" variant="regular"></wa-icon></span> | Previews and downloads the recorded media. | [Open page](/user-guide/reference/studio-interface/dialogs/video-download/) |
| Widget mount error dialog | <span class="guide-icon-chip"><wa-icon name="box-exclamation" variant="regular"></wa-icon></span> | Warns that widgets are not ready for capture. | [Open page](/user-guide/reference/studio-interface/dialogs/widget-mount-error/) |
| Backend restart dialog | <span class="guide-icon-chip"><wa-icon name="server" variant="regular"></wa-icon></span> | Shows that the backend is restarting. | [Open page](/user-guide/reference/studio-interface/dialogs/backend-restart/) |
| Confirm dialog | <span class="guide-icon-chip"><wa-icon name="circle-check" variant="regular"></wa-icon></span> | Handles final confirmation. | [Open page](/user-guide/reference/studio-interface/dialogs/confirm/) |

Use a dialog when the user must decide, confirm, or provide a token before continuing. If the user will come back to the task repeatedly, the control should probably live in a drawer instead.
