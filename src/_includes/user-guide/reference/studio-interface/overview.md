The Studio interface is built as a workspace, not as a single form. The screen is organized into distinct surfaces:

- the main scene and its toolbars for immediate actions
- floating widgets that stay attached to the map or the export board
- drawers that hold longer editing tasks without leaving the workspace
- dialogs and modals that interrupt the flow for decisions, credentials, or final validation

The important rule is simple: buttons trigger action, widgets show state, drawers hold work, and dialogs ask for a decision. A single control can still open more than one surface, but its job stays the same.

## Control Types

| Type | What it does | Studio example |
| --- | --- | --- |
| Button | Starts an action or opens a surface. | Journey, Settings, Video, Import |
| Popup button | Opens a small menu for a short choice. | Journey action popup, scene mode selector |
| Toggle button | Switches a state on or off. | Journey visibility, full screen, orbit |
| Badge | Shows state without asking for input. | Video and flythrough sync link |
| Widget | Shows live map or export context. | Compass, credits, elevation profile |
| Drawer | Keeps a panel open while editing. | Settings, Layers, Journey editor |
| Dialog | Blocks the flow until the user answers. | Cesium token prompt, video export dialog |
| Switch | Flips a setting in-place inside a drawer. | Application settings and sync options |

## Global Behavior

- Most main-scene buttons are square, icon-first controls with tooltips.
- The interface keeps the map visible while editing context moves into drawers and dialogs.
- Shared actions are grouped in the primary and secondary toolbars so the user does not have to hunt through menus.
- State-based controls stay visible only when they make sense, for example during recording, orbit, panorama, or full-screen transitions.
- The guide pages below follow the same mental model as the Studio itself.
