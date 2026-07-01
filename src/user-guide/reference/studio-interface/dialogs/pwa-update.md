---
permalink: /user-guide/reference/studio-interface/dialogs/pwa-update/
title: PWA update dialog
description: Install and update prompt for the Progressive Web App flow.
ui:
  backUrl: /user-guide/reference/studio-interface/#dialogs
  backLabel: Dialogs
  overview: >
    The PWA update dialog appears when the browser offers a new app version or an install action. It keeps the update decision in one place so the user can continue with the newest Studio build.
  controls:
    - label: Install or update
      icon: download
      type: Button
      description: Starts the install or update action for the current browser session.
    - label: Later
      icon: clock
      type: Button
      description: Dismisses the prompt for the moment.
    - label: Release note text
      icon: newspaper
      type: Read-only panel
      description: Explains what changed in the update or why the prompt appeared.
  notes:
    - The exact button label can vary depending on whether the app is being installed or updated.
---

{% include "user-guide/reference/studio-interface/ui-detail.md" %}
