---
permalink: /fr/user-guide/reference/studio-interface/dialogs/widget-mount-error/
title: Dialog Widget mount error
description: Dialog d'avertissement affiché quand les widgets ne sont pas prêts pour une capture.
ui:
  backUrl: /fr/user-guide/reference/studio-interface/#dialogs
  backLabel: Dialogs
  overview: >
    Le dialog Widget mount error avertit qu'un ou plusieurs widgets ne sont pas prêts pendant la préparation d'une capture ou d'une sortie similaire.
  controls:
    - label: Warning text
      icon: box-exclamation
      type: Read-only panel
      description: Explique que les widgets n'étaient pas prêts au moment de la capture.
    - label: Retry
      icon: arrow-rotate-right
      type: Button
      description: Réessaie l'étape de capture ou de montage.
    - label: Continue anyway
      icon: play
      type: Button
      description: Continue le workflow malgré l'état incomplet des widgets.
---
{% include "user-guide/reference/studio-interface/ui-detail.md" %}
