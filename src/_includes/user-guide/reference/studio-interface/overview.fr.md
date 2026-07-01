L'interface Studio est construite comme un espace de travail, pas comme un simple formulaire. L'écran est organisé en surfaces distinctes:

- la scène principale et ses barres d'outils pour les actions immédiates
- les widgets flottants attachés à la carte ou au board d'export
- les drawers qui portent les tâches d'édition plus longues sans quitter l'espace de travail
- les dialogs et modals qui interrompent le flux pour une décision, un identifiant ou une validation finale

La règle importante est simple: les boutons déclenchent une action, les widgets montrent un état, les drawers contiennent le travail et les dialogs demandent une décision.

## Types De Contrôles

| Type | Ce qu'il fait | Exemple Studio |
| --- | --- | --- |
| Bouton | Lance une action ou ouvre une surface. | Journey, Settings, Video, Import |
| Bouton popup | Ouvre un petit menu pour un choix court. | Popup d'action Journey, sélecteur de mode de scène |
| Bouton toggle | Bascule un état on/off. | Visibilité du parcours, plein écran, orbit |
| Badge | Affiche un état sans demander d'action. | Lien de synchronisation vidéo et flythrough |
| Widget | Affiche un contexte live sur la carte ou l'export. | Boussole, crédits, profil altimétrique |
| Drawer | Garde un panneau ouvert pendant l'édition. | Settings, Layers, Journey editor |
| Dialog | Bloque le flux jusqu'à la réponse utilisateur. | Prompt Cesium token, dialog d'export vidéo |
| Switch | Bascule un réglage en place dans un drawer. | Réglages applicatifs et options de sync |

## Comportement Global

- La plupart des boutons de scène sont des contrôles carrés, icon-first, avec tooltip.
- L'interface garde la carte visible pendant que le contexte d'édition se déplace dans les drawers et dialogs.
- Les actions partagées sont regroupées dans les barres primaire et secondaire pour éviter de fouiller dans les menus.
- Les contrôles liés à un état ne restent visibles que lorsqu'ils ont du sens.
- Les pages du guide suivent le même modèle mental que Studio.
