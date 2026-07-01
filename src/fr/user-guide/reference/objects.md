---
permalink: /fr/user-guide/reference/objects/index.html
title: Objets
description: Référence utilisateur pour les parcours, traces, POI, widgets, cibles caméra, rapports et zones de capture.
hero:
  video: false
  className: guide-hero
  badge: Référence
  kicker: Objets
  title: Comprendre les objets principaux.
  lead: Savoir ce que représente chaque objet visible côté utilisateur et où il s'insère dans le workflow.
sectionNav:
  - id: tableau-des-objets
    label: Tableau des objets
    summary: Rôle et contrôles
  - id: ordre-des-objets
    label: Ordre des objets
    summary: Comment les aborder
---

## Tableau Des Objets

| Objet | Rôle | Champs courants | Contrôles principaux |
| --- | --- | --- | --- |
| Journey | Conteneur global du contenu de parcours. | Titre, description, pays, activité, dates, visibilité, caméra, rotation, panorama. | Sélectionner, focaliser, éditer les métadonnées, basculer les POI, exporter. |
| Track | Géométrie du chemin à l'intérieur d'un parcours. | Titre, description, couleur, épaisseur, visibilité, coordonnées. | Sélectionner, styliser, inspecter les points, focaliser. |
| POI | Repère ponctuel attaché à un parcours, une trace ou un lieu. | Titre, catégorie, parent, coordonnées, hauteur, distance caméra. | Ajouter, éditer, focaliser, faire pivoter, masquer, supprimer. |
| Widget | Overlay visuel rendu sur la scène ou le board d'export. | Type, position, échelle, rotation, opacité, board, z-index. | Ajouter, déplacer, redimensionner, faire pivoter, configurer, retirer. |
| Cible caméra | Objet ou coordonnée utilisé pour le focus et le mouvement. | Longitude, latitude, hauteur, heading, pitch, distance. | Focaliser, orbit, panorama, reset. |
| Rapport de parcours | Sortie documentaire générée à partir d'un parcours. | Métadonnées, description, statistiques, dates, profil altimétrique, POI, coordonnées, altitudes, captures. | Exporter en PDF, exporter en HTML ZIP, relire les cartes générées. |
| Zone de capture | Cadre de sortie visible pour image ou vidéo. | Ratio, largeur, hauteur, limites de crop, qualité. | Définir le ratio, déplacer la zone, prévisualiser, capturer, enregistrer. |

## Ordre Des Objets

Utilisez les objets dans cet ordre pour une session prévisible:

1. Journey
2. Track
3. POI
4. Cible caméra
5. Widget
6. Rapport de parcours
7. Zone de capture
