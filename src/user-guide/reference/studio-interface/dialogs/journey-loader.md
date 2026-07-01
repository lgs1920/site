---
permalink: /user-guide/reference/studio-interface/dialogs/journey-loader/
title: Journey loader dialog
description: File picker dialog used to import journey data into the Studio.
ui:
  backUrl: /user-guide/reference/studio-interface/#dialogs
  backLabel: Dialogs
  overview: >
    The Journey loader dialog is the import surface for route files. It lets the user choose local journey data and bring it into the current session.
  controls:
    - label: File picker
      icon: file-import
      type: File input
      description: Lets the user pick a journey file from local storage.
    - label: Import
      icon: check
      type: Button
      description: Confirms the selected file and starts the import.
    - label: Cancel
      icon: xmark
      type: Button
      description: Closes the dialog without importing anything.
  notes:
    - Use this dialog when the session starts from local route data.
---

{% include "user-guide/reference/studio-interface/ui-detail.md" %}
