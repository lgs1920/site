---
permalink: /user-guide/reference/studio-interface/dialogs/layer-information/
title: Layer information modal
description: Disclaimer and information modal for a layer or terrain source.
ui:
  backUrl: /user-guide/reference/studio-interface/drawers/layers/
  backLabel: Layers drawer
  overview: >
    The Layer information modal shows the disclaimer or additional notes attached to a layer or terrain source. It is a short reading step before the user continues with the selected source.
  controls:
    - label: Information text
      icon: circle-info
      type: Read-only panel
      description: Shows the disclaimer, attribution, or access note for the selected source.
    - label: Close
      icon: xmark
      type: Button
      description: Closes the modal and returns to the layers workflow.
  notes:
    - Use this modal when a source needs a short acknowledgement before use.
---

{% include "user-guide/reference/studio-interface/ui-detail.md" %}
