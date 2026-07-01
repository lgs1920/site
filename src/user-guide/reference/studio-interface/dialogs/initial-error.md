---
permalink: /user-guide/reference/studio-interface/dialogs/initial-error/
title: Initial error dialog
description: Startup error dialog shown when the Studio fails to initialize.
ui:
  backUrl: /user-guide/reference/studio-interface/#dialogs
  backLabel: Dialogs
  overview: >
    The Initial error dialog appears when the Studio cannot finish starting. It shows the failure details so you can understand what blocked the session and decide whether to retry.
  controls:
    - label: Error details
      icon: triangle-exclamation
      type: Read-only panel
      description: Shows the startup failure and any stack trace or diagnostic text.
    - label: Copy details
      icon: copy
      type: Button
      description: Copies the error information for reporting or debugging.
    - label: Retry
      icon: arrow-rotate-right
      type: Button
      description: Tries to start the Studio again.
  notes:
    - Use this dialog when the application never reaches the workspace.
---

{% include "user-guide/reference/studio-interface/ui-detail.md" %}
