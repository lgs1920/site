---
permalink: /fr/user-guide/workflows/use-map-layers/index.html
title: Utiliser Les Couches Cartographiques
description: Changer le fond de carte, le terrain, la visibilité des couches et les accès protégés.
hero:
  video: false
  className: guide-hero
  badge: Étape principale
  kicker: Couches
  title: Choisir ce que la carte affiche.
  lead: Utilisez les couches pour changer le fond cartographique, le terrain, les overlays et l'accès aux sources protégées.
sectionNav:
  - id: ouvrir-les-couches
    label: Ouvrir les couches
    summary: Depuis le bouton Layers
  - id: changer-une-couche
    label: Changer une couche
    summary: Visibilité et choix de source
  - id: acces-source
    label: Accès aux sources
    summary: Avertissements et jetons
---

## Ouvrir Les Couches

Depuis la scène Studio:

1. Cliquez sur le bouton `Layers`.
2. Le [drawer Layers](/fr/user-guide/reference/studio-interface/drawers/layers/) s'ouvre.
3. Parcourez les fonds de carte, overlays et sources de terrain disponibles.

## Changer Une Couche

Utilisez la liste des couches quand le fond ou le terrain ne met pas suffisamment le parcours en valeur.

1. Trouvez la source à utiliser.
2. Activez ou désactivez sa visibilité.
3. Vérifiez la scène immédiatement après le changement.
4. Gardez uniquement les sources qui améliorent la lisibilité du parcours.

## Accès Aux Sources

Certaines sources demandent une étape supplémentaire.

| Situation | Ce qui se passe | Ce qu'il faut faire |
| --- | --- | --- |
| La source a un avertissement | Le [dialog d'information de couche](/fr/user-guide/reference/studio-interface/dialogs/layer-information/) s'ouvre. | Lisez la note, fermez-la, puis revenez dans Layers. |
| La source est protégée | Le [dialog de jeton de couche](/fr/user-guide/reference/studio-interface/dialogs/layer-token/) s'ouvre. | Collez le jeton, validez-le, puis continuez dans Layers. |
| L'accès Cesium manque | Le [prompt de jeton Cesium](/fr/user-guide/reference/studio-interface/dialogs/cesium-token/) s'ouvre. | Collez un jeton Cesium valide avant d'utiliser des données Cesium. |
