---
permalink: /fr/user-guide/reference/studio-interface/drawers/layers/
title: Drawer Layers
description: Gestion des sources cartographiques et de terrain pour la scène Studio.
ui:
  backUrl: /fr/user-guide/reference/studio-interface/#drawers
  backLabel: Drawers
  overview: >
    Le drawer Layers gère les sources de données qui définissent la carte et le terrain visibles.
  controls:
    - label: Layer disclaimer
      icon: bell-exclamation
      type: Button
      description: Ouvre le modal d'information de couche pour lire les avertissements spécifiques à la source.
    - label: Layers and terrains list
      icon: layer-group
      type: List
      description: Affiche les fonds de carte et terrains disponibles avec leur état d'accès et de visibilité.
    - label: Source visibility
      icon: eye
      type: Switch
      description: Active ou désactive une couche ou une source de terrain dans la scène courante.
  notes:
    - Utilisez ce drawer quand l'utilisateur doit changer la base cartographique ou relire des notes d'accès aux données.
---
{% include "user-guide/reference/studio-interface/ui-detail.md" %}

## Flow

Il n'existe pas de bouton séparé "layer editor". Le flux démarre depuis le bouton `Layers` de la scène principale.

1. Ouvrez le bouton `Layers` dans la barre principale.
2. Le [drawer Layers](/fr/user-guide/reference/studio-interface/drawers/layers/) s'ouvre.
3. Relisez la liste des couches et terrains.
4. Utilisez le switch de visibilité pour afficher ou masquer une source.
5. Ouvrez le disclaimer si vous avez besoin des notes de source.
6. Ouvrez le prompt de jeton quand une source protégée demande un accès.
7. Utilisez le lien de retour du modal pour revenir au drawer Layers.
