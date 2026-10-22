## Open Fix Path

Fix Path locally corrects a track's geometry without changing the source GPX file. Completed edits are saved with the journey. They are immediately reflected in the rendered path, statistics, and Replay when corrections are enabled.

The current journey must contain at least one track. Open Fix Path in any of these ways:

1. Click the **Fix Path** button in the main toolbar, next to the journey controls.
2. Open the context menu for a track point on the map and choose **Fix Path**.
3. In the journey editor, click **Fix Path** next to **Apply path corrections**.
4. Press `F` while Studio has focus.

When Fix Path opens, the map centers on the active section or, if there is none, on the first available section. The Fix Path widget contains the controls, the section's points, and a **Help** button. The **X** button closes the editor after applying the latest edit.

<div class="guide-screenshot-placeholder" role="img" aria-label="Screenshot placeholder: open Fix Path from the main toolbar and show its widget on the map">
    <wa-icon variant="regular" name="image"></wa-icon>
    <strong>Screenshot placeholder</strong>
    <span>Show the Fix Path button in the main toolbar, the open widget, its toolbar, and a section visible on the track.</span>
</div>

## Understand the Fix Path widget

The widget overlays its controls on the map. Its toolbar acts on the active section, and the list displays that section's control points. The icons below match the ones used in Studio.

<div class="guide-screenshot-placeholder" role="img" aria-label="Screenshot placeholder: full Fix Path widget with its main areas identified">
    <wa-icon variant="regular" name="image"></wa-icon>
    <strong>Screenshot placeholder — full widget</strong>
    <span>Capture the entire widget and identify the header, help, history, section navigation, actions, and point list. Keep the map visible around the widget.</span>
</div>

### Header

The <span class="guide-icon-chip"><wa-icon name="question" variant="regular"></wa-icon></span> button opens Fix Path's built-in help. The <span class="guide-icon-chip"><wa-icon name="xmark" variant="regular"></wa-icon></span> button closes the widget. Completed edits are saved as you work.

### Toolbar

| Icon | Command | What it does |
| --- | --- | --- |
| <span class="guide-icon-chip"><wa-icon name="arrow-rotate-left" variant="regular"></wa-icon></span> | Undo | Reverses the latest correction edit. |
| <span class="guide-icon-chip"><wa-icon name="arrow-rotate-right" variant="regular"></wa-icon></span> | Redo | Restores an undone edit. |
| <span class="guide-icon-chip"><wa-icon name="arrow-left-to-line" variant="regular"></wa-icon></span> <span class="guide-icon-chip"><wa-icon name="chevron-left" variant="regular"></wa-icon></span> <span class="guide-icon-chip"><wa-icon name="chevron-right" variant="regular"></wa-icon></span> <span class="guide-icon-chip"><wa-icon name="arrow-right-to-line" variant="regular"></wa-icon></span> | Sections | Goes to the first, previous, next, or last section. Available buttons depend on the number of sections. |
| <span class="guide-icon-chip"><wa-icon name="eye" variant="regular"></wa-icon></span> / <span class="guide-icon-chip"><wa-icon name="eye-slash" variant="regular"></wa-icon></span> | Show or hide | Hides or shows the active section preview. This does not disable corrections in statistics or Replay. |
| <span class="guide-icon-chip"><wa-icon name="eraser" variant="regular"></wa-icon></span> | Erase | Removes selected points from the section. If no points are selected, activates the mode for clicking points to remove. |
| <span class="guide-icon-chip"><wa-icon name="trash-can" variant="regular"></wa-icon></span> | Delete section | Deletes the active correction section and all its points. |

The counter between the navigation buttons shows the active section and total number of sections, for example **2 / 4**.

### Point list

Each row represents a section control point. **Lat** and **Lon** show its coordinates; **Height** lets you adjust its altitude using the unit selected in preferences. Latitude and longitude are read-only.

| Icon | Command | What it does |
| --- | --- | --- |
| <span class="guide-icon-chip"><wa-icon name="square" variant="regular"></wa-icon></span> | Select all | The checkbox at the top of the list selects or deselects every point in the section that has not been removed. |
| <span class="guide-icon-chip"><wa-icon name="arrow-rotate-left" variant="regular"></wa-icon></span> | Reset / restore | Resets a moved point to its original position, or restores a point marked as removed. |
| <span class="guide-icon-chip"><wa-icon name="trash-can" variant="regular"></wa-icon></span> | Remove | Marks the point as removed. Its row stays in the list so you can restore it. |

You can also move focus through the list with the keyboard. Selecting a point highlights it both on the map and in the list.

## Create and edit a correction section

A section covers a continuous part of a track segment that Fix Path can correct. A section cannot cross a gap between two track segments. First select the track points to correct, then adjust the control points in the section you create.

### Create or extend the corrected area

On the map, use the lasso or rectangle to select track vertices: <kbd>Shift</kbd> + drag draws a lasso; <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + drag draws a rectangle. When the selection is complete, Fix Path creates or extends a section from the selected vertices. The new section becomes active. See [Lasso or rectangle](#lasso-or-rectangle) for details about these gestures.

### Add a control point

Right-click the track where you want the point, then choose <wa-icon class="fix-path-inline-action-icon" name="circle-plus" variant="regular" role="img" aria-label="Add a control point"></wa-icon> from the context menu. Fix Path places the new point on the nearest part of the track. If it joins an existing section on the same segment, it extends that section; otherwise, it creates a short section around the point. To build a section manually, first click a track vertex to set its start, click along the part to correct to add control points, then click a later vertex on the same segment to finish the section.

### Select and move points

Click a marker or its row to select it. To select several points, check the box in the list, use <kbd>Shift</kbd> + click, or select an area around the markers. Points in the same selection move together: drag any selected marker to its new position. Clicking a point in another section activates that section.

### Adjust altitude

Edit **Height** in the point's row. The value uses the altitude unit configured in preferences. Latitude and longitude are shown for reference and cannot be edited in the list. The change is saved when you confirm the field.

### Reset, remove, or erase a point

These commands have different effects:

- **Reset** with <span class="guide-icon-chip"><wa-icon name="arrow-rotate-left" variant="regular"></wa-icon></span> returns a moved point to its original position. The same command restores a point marked as removed.
- **Remove** with <span class="guide-icon-chip"><wa-icon name="trash-can" variant="regular"></wa-icon></span> or the <kbd>Delete</kbd> key excludes a point from the correction but keeps its row in the list so you can restore it.
- **Erase** with <span class="guide-icon-chip"><wa-icon name="eraser" variant="regular"></wa-icon></span> removes selected points from the section. If none are selected, activate the tool and click the points to remove. Removing a point from a section can split it into several sections.

To delete the whole section, use the trash button in the widget toolbar. **Undo** and **Redo** let you reverse correction edits.

<div class="guide-screenshot-placeholder" role="img" aria-label="Screenshot placeholder: edit a section with markers and coordinate list">
    <wa-icon variant="regular" name="image"></wa-icon>
    <strong>Screenshot placeholder — edit a section</strong>
    <span>Show an active section, several points including one selected and one moved, an editable Height field, and the Reset and Remove commands in the list.</span>
</div>

## Read colors and shapes

The shape describes the point's state. Color indicates that state, whether it is selected, or whether it belongs to another section.

| Marker | Meaning |
| --- | --- |
| <svg class="fix-path-marker-sample is-unmodified" viewBox="0 0 16 16" width="16" height="16" role="img" aria-label="Orange diamond with black outline"><path d="M 8 1 L 15 8 L 8 15 L 1 8 Z"></path></svg> | Orange diamond with a black outline: an unchanged or reset source vertex in the active section. |
| <svg class="fix-path-marker-sample is-moved" viewBox="0 0 16 16" width="16" height="16" role="img" aria-label="Pink circle with white outline"><circle cx="8" cy="8" r="7"></circle></svg> | Pink circle with a white outline: a moved or manually added point. |
| <span class="fix-path-marker-examples"><svg class="fix-path-marker-sample is-selected" viewBox="0 0 16 16" width="16" height="16" role="img" aria-label="Selected chartreuse diamond"><path d="M 8 1 L 15 8 L 8 15 L 1 8 Z"></path></svg><svg class="fix-path-marker-sample is-selected" viewBox="0 0 16 16" width="16" height="16" role="img" aria-label="Selected chartreuse circle"><circle cx="8" cy="8" r="7"></circle></svg></span> | Chartreuse with a black outline: a selected point. Its shape stays a diamond if unchanged and becomes a circle if moved. |
| <span class="fix-path-marker-examples"><svg class="fix-path-marker-sample is-inactive" viewBox="0 0 16 16" width="16" height="16" role="img" aria-label="Gray diamond with white outline"><path d="M 8 1 L 15 8 L 8 15 L 1 8 Z"></path></svg><svg class="fix-path-marker-sample is-inactive" viewBox="0 0 16 16" width="16" height="16" role="img" aria-label="Gray circle with white outline"><circle cx="8" cy="8" r="7"></circle></svg></span> | Gray with a white outline: a point in another section. Click it to activate that section. |
| Trash icon and dimmed row in the list | A point marked as removed. It can still be restored and is not used in the correction. |

The corrected line in the active section appears in magenta. Other sections appear in gray. While selecting an area, an orange outline indicates that you are selecting track vertices; a chartreuse outline indicates that you are selecting correction points.

<div class="guide-screenshot-placeholder" role="img" aria-label="Screenshot placeholder: visual key for diamonds, circles, colors, and removed points">
    <wa-icon variant="regular" name="image"></wa-icon>
    <strong>Screenshot placeholder</strong>
    <span>Show the unchanged orange diamond, the moved pink circle, their selected chartreuse states, the same shapes grayed out in another section, and a removed row in the list. Keep the markers at their Studio size.</span>
</div>

## Lasso or rectangle

Both tools select visible points inside an area on the screen. The **lasso** follows the pointer freely, so you can follow bends in a track and avoid nearby points. The **rectangle** stays aligned with the screen. It is handy for a compact area, but may include points on either side of the route.

### Select track points and create a section

Start the gesture on the track, away from a correction marker. The orange outline means that you are targeting the track's source vertices. When the selection finishes, Fix Path creates a section from the selected vertices or extends an existing one, then makes it active.

| Tool | Studio cursor | Gesture |
| --- | --- | --- |
| Lasso | <span class="fix-path-cursor-examples"><wa-icon class="is-journey-selection" name="lasso" variant="solid" aria-hidden="true"></wa-icon></span> | <kbd>Shift</kbd> + drag to draw a freeform outline. |
| Rectangle | <span class="fix-path-cursor-examples"><wa-icon class="is-journey-selection" name="square-dashed" variant="solid" aria-hidden="true"></wa-icon></span> | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + drag to draw a screen-aligned rectangle. |

<div class="guide-screenshot-placeholder" role="img" aria-label="Screenshot placeholder: orange lasso and rectangle selecting track vertices to create a section">
    <wa-icon variant="regular" name="image"></wa-icon>
    <strong>Screenshot placeholder — select track vertices</strong>
    <span>Show an orange lasso and an orange rectangle around source vertices, then the result: the section that was created or extended. Match Studio's dashed outline, stroke width, and translucent fill.</span>
</div>

### Select points within a section

Activate the section before selecting its correction points. The chartreuse cursor and outline show that the gesture targets markers in that section. To add or remove a point individually, use <kbd>Shift</kbd> + click on its marker.

| Tool | Studio cursor | Gesture |
| --- | --- | --- |
| Lasso | <span class="fix-path-cursor-examples"><wa-icon class="is-section-selection" name="lasso" variant="solid" aria-hidden="true"></wa-icon></span> | <kbd>Shift</kbd> + drag, starting on a marker, to add the enclosed points to the selection; <kbd>Alt</kbd> + drag to replace the selection in the active section. |
| Rectangle | <span class="fix-path-cursor-examples"><wa-icon class="is-section-selection" name="square-dashed" variant="solid" aria-hidden="true"></wa-icon></span> | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + drag, starting on a marker, to add the enclosed points; <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + drag to replace the selection in the active section. |

Press <kbd>Escape</kbd> to cancel a lasso started with clicks or to close a context menu. An empty area does not clear the current selection.

<div class="guide-screenshot-placeholder" role="img" aria-label="Screenshot placeholder: chartreuse lasso and rectangle selecting correction points in a section">
    <wa-icon variant="regular" name="image"></wa-icon>
    <strong>Screenshot placeholder — select points in a section</strong>
    <span>Show a chartreuse lasso and chartreuse rectangle around correction points in the active section, with a nearby marker outside the selection. Match Studio's dashed outline, stroke width, and translucent fill.</span>
</div>

In both cases, the selection outline is dashed (7 px dashes with 5 px gaps), 2 px wide, and filled with a translucent dark overlay. Orange targets track vertices; chartreuse targets correction points in the active section.

## Keyboard shortcuts

<kbd>Mod</kbd> means <kbd>Ctrl</kbd> on Windows and Linux, and <kbd>Cmd</kbd> on macOS. Rectangle gestures use <kbd>Ctrl</kbd> + <kbd>Shift</kbd> and <kbd>Ctrl</kbd> + <kbd>Alt</kbd>, including on macOS.

| Shortcut | Result |
| --- | --- |
| <kbd>F</kbd> | Opens Fix Path for the current journey if it contains tracks. |
| <kbd>Mod</kbd> + <kbd>A</kbd> | Selects all points in the active section that have not been removed. <kbd>Mod</kbd> means <kbd>Ctrl</kbd> on Windows and Linux, or <kbd>Cmd</kbd> on macOS. |
| <kbd>↑</kbd> and <kbd>↓</kbd> | Moves focus through the list or through an open context menu. |
| <kbd>Page Up</kbd> and <kbd>Page Down</kbd> | Moves focus to the first or last point in the list. |
| <kbd>Enter</kbd> or <kbd>Space</kbd> | Selects the focused point or activates the focused action in a context menu. |
| <kbd>Backspace</kbd> or <kbd>Mod</kbd> + <kbd>R</kbd> | Resets a moved point or restores a point marked as removed. Use these keys when focus is on a marker or its row, not while typing in a field. |
| <kbd>Delete</kbd> | Marks the focused point as removed. Its row stays in the list so you can restore it. |
| <kbd>Escape</kbd> | Cancels a lasso started with clicks or closes a context menu. |

The **Undo** and **Redo** toolbar buttons do not have dedicated keyboard shortcuts. For all Studio gestures and shortcuts, see [Shortcuts](/user-guide/workflows/shortcuts/).
