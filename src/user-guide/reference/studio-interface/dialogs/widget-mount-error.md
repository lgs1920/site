---
permalink: /user-guide/reference/studio-interface/dialogs/widget-mount-error/
title: Widget mount error dialog
description: Warning dialog shown when widgets are not ready for capture.
ui:
  backUrl: /user-guide/reference/studio-interface/#dialogs
  backLabel: Dialogs
  overview: >
    The Widget mount error dialog warns that one or more widgets are not ready while the Studio prepares a capture or similar output. It keeps the user informed when the widget surface is not fully mounted yet.
  controls:
    - label: Warning text
      icon: box-exclamation
      type: Read-only panel
      description: Explains that the widgets were not ready at capture time.
    - label: Retry
      icon: arrow-rotate-right
      type: Button
      description: Tries the capture or mount step again.
    - label: Continue anyway
      icon: play
      type: Button
      description: Continues the workflow even though the widget state is incomplete.
  notes:
    - This dialog is a workflow warning, not a configuration panel.
---

{% include "user-guide/reference/studio-interface/ui-detail.md" %}
