---
permalink: /fr/user-guide/reference/studio-interface/dialogs/confirm/
title: Dialog Confirm
description: Dialog de confirmation finale pour les actions difficiles à annuler.
ui:
  backUrl: /fr/user-guide/reference/studio-interface/#dialogs
  backLabel: Dialogs
  overview: >
    Le dialog Confirm est le dernier checkpoint avant une action destructive ou à fort impact.
  controls:
    - label: Confirmation text
      icon: circle-question
      type: Read-only panel
      description: Explique ce que l'action va faire avant exécution.
    - label: Confirm
      icon: circle-check
      type: Button
      description: Lance l'action.
    - label: Cancel
      icon: xmark
      type: Button
      description: Annule l'action et ferme le dialog.
---
{% include "user-guide/reference/studio-interface/ui-detail.md" %}
