
## Import Problems

If a route does not import:

1. Check that the file is GeoJSON, GPX, or KML.
2. Try importing the file again from [Import a route](/user-guide/getting-started/import-source-data/).
3. If the import dialog shows an error, keep the message visible until you know what failed.

## Token Problems

When the Studio asks for a token:

| Prompt | What it means | What to do |
| --- | --- | --- |
| [Cesium token prompt](/user-guide/reference/studio-interface/dialogs/cesium-token/) | Cesium-backed data cannot load. | Paste a valid Cesium Ion token and validate it. |
| [Layer token dialog](/user-guide/reference/studio-interface/dialogs/layer-token/) | A protected map or terrain source needs access. | Paste the source token and validate it. |
| [Layer information dialog](/user-guide/reference/studio-interface/dialogs/layer-information/) | A source has a note or disclaimer. | Read the information, close it, then continue. |

## Export Problems

If export is blocked:

1. Check that the scene is stable.
2. Check that widgets are mounted and visible.
3. If the [widget mount error dialog](/user-guide/reference/studio-interface/dialogs/widget-mount-error/) appears, retry after the widget surface finishes loading.
4. Review the output before changing the scene.

## App Problems

If the Studio itself blocks work:

| Dialog | What to do |
| --- | --- |
| [Initial error dialog](/user-guide/reference/studio-interface/dialogs/initial-error/) | Read or copy the error details, then retry startup. |
| [Backend restart dialog](/user-guide/reference/studio-interface/dialogs/backend-restart/) | Wait for recovery, then retry the action. |
| [PWA update dialog](/user-guide/reference/studio-interface/dialogs/pwa-update/) | Apply the update when you want the newest app version. |
