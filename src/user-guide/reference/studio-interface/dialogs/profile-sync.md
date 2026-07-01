---
permalink: /user-guide/reference/studio-interface/dialogs/profile-sync/
title: Profile sync dialog
description: Sync-related profile actions and saved profile state.
ui:
  backUrl: /user-guide/reference/studio-interface/#dialogs
  backLabel: Dialogs
  overview: >
    The Profile sync dialog manages the browser profile state that the Studio uses for sync-related behavior. It is where you review or reset profile data tied to the current session.
  controls:
    - label: Sync switch
      icon: link
      type: Switch
      description: Turns the profile sync behavior on or off when the feature is available.
    - label: Save
      icon: floppy-disk
      type: Button
      description: Stores the current profile state.
    - label: Clear
      icon: trash
      type: Button
      description: Removes the current profile data from the browser profile.
    - label: Close
      icon: xmark
      type: Button
      description: Closes the dialog and returns to the workspace.
  notes:
    - This dialog is part of profile management, not route editing.
---

{% include "user-guide/reference/studio-interface/ui-detail.md" %}
