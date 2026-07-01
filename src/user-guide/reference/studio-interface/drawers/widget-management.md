---
permalink: /user-guide/reference/studio-interface/drawers/widget-management/
title: Widget management drawer
description: Board and ordering controls for widgets.
ui:
  backUrl: /user-guide/reference/studio-interface/#drawers
  backLabel: Drawers
  overview: >
    The Widget management drawer organizes widgets at the board level. Use it to reorder visible overlays and move them between scene and export boards.
  controls:
    - label: Board selector
      icon: table-columns
      type: Selector
      description: Switches between the scene board and the video board when both exist.
    - label: Widget list
      icon: list
      type: Reorderable list
      description: Shows the widgets that belong to the current board and lets you change their order.
    - label: Move widget
      icon: arrows-left-right
      type: Button
      description: Moves the selected widget to another board when the widget supports relocation.
    - label: Remove widget
      icon: trash
      type: Button
      description: Deletes the selected widget from the current composition.
  notes:
    - This drawer is available from the widget management action, including the `Alt+W` shortcut when supported.
    - Use it when you need to rearrange overlays quickly without opening each widget editor.
---

{% include "user-guide/reference/studio-interface/ui-detail.md" %}
