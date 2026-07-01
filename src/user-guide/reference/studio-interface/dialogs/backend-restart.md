---
permalink: /user-guide/reference/studio-interface/dialogs/backend-restart/
title: Backend restart dialog
description: Status dialog shown while the backend is restarting.
ui:
  backUrl: /user-guide/reference/studio-interface/#dialogs
  backLabel: Dialogs
  overview: >
    The Backend restart dialog appears when the backend is restarting or reconnecting. It tells the user that the workspace is temporarily waiting for the service to come back.
  controls:
    - label: Status text
      icon: server
      type: Read-only panel
      description: Explains that the backend is currently restarting or unavailable.
    - label: Retry
      icon: arrow-rotate-right
      type: Button
      description: Checks again for the backend and resumes once it is available.
    - label: Close
      icon: xmark
      type: Button
      description: Dismisses the dialog if the workflow allows it.
  notes:
    - Use this dialog as a temporary status surface while the service recovers.
---

{% include "user-guide/reference/studio-interface/ui-detail.md" %}
