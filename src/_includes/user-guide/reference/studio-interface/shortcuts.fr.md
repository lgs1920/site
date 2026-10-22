Le Studio utilise des raccourcis clavier pour les actions globales, l'édition des widgets, l'interaction avec la carte et les mouvements de caméra. Les actions du pointeur sont aussi listées ici car elles servent de raccourcis dans l'espace de travail.

## Raccourcis De L'application

| Icône | Action | Raccourci | Portée | Résultat |
| --- | --- | --- | --- | --- |
| <span class="guide-icon-chip"><wa-icon name="file-import" variant="regular"></wa-icon></span> | Importer un parcours | `Alt+Shift+I` | Application | Ouvre la boîte d'import de parcours. |
| <span class="guide-icon-chip"><wa-icon name="route" variant="regular"></wa-icon></span> | Afficher la barre parcours | `Alt+Shift+J` | Application | Rend la barre de parcours disponible sur la carte. |
| <span class="guide-icon-chip"><wa-icon name="eye-slash" variant="regular"></wa-icon></span> | Masquer les autres parcours | `Mod+Shift+J` | Application | Garde uniquement le parcours courant visible dans les scènes. |
| <span class="guide-icon-chip"><wa-icon name="circle-user" variant="regular"></wa-icon></span> | Ouvrir le profil utilisateur | `Alt+Shift+U` | Application | Ouvre la section des réglages du profil utilisateur. |
| <span class="guide-icon-chip"><wa-icon name="folder-tree" variant="regular"></wa-icon></span> | Afficher les groupes de parcours | `Alt+Shift+G` | Application | Ouvre le drawer de gestion des groupes de parcours. |
| <span class="guide-icon-chip"><wa-icon name="video" variant="regular"></wa-icon></span> | Enregistrement vidéo | `Alt+Shift+V` | Application | Ouvre la configuration vidéo, puis démarre l'enregistrement si elle est déjà ouverte. |
| <span class="guide-icon-chip"><wa-icon name="video-arrow-up-right" variant="regular"></wa-icon></span> | Afficher les contrôles Flythrough | `Alt+Shift+W` | Mode Flythrough | Ouvre le [drawer Flythrough](/fr/user-guide/reference/studio-interface/drawers/flythrough/). |
| <span class="guide-icon-chip"><wa-icon name="boxes-stacked" variant="regular"></wa-icon></span> | Gérer les widgets | `Alt+W` | Application | Ouvre le [drawer de gestion des widgets](/fr/user-guide/reference/studio-interface/drawers/widget-management/) pour le board courant. |
| <span class="guide-icon-chip"><wa-icon name="arrows-rotate" variant="regular"></wa-icon></span> | Basculer la rotation | `Alt+Shift+O` | Application | Démarre ou arrête la rotation autour de la cible courante. |
| <span class="guide-icon-chip"><wa-icon name="arrows-rotate" variant="regular"></wa-icon></span> | Basculer le widget Orbit | `Alt+O` | Mode Orbit | Affiche ou masque le widget Orbit pendant la rotation. |
| <span class="guide-icon-chip"><wa-icon name="panorama" variant="regular"></wa-icon></span> | Basculer le panorama | `Alt+Shift+P` | Application | Démarre ou arrête le mode panorama autour de la cible courante. |
| <span class="guide-icon-chip"><wa-icon name="panorama" variant="regular"></wa-icon></span> | Basculer le widget Panorama | `Alt+P` | Mode Panorama | Affiche ou masque le widget Panorama pendant le panorama. |
| <span class="guide-icon-chip"><wa-icon name="xmark" variant="regular"></wa-icon></span> | Fermer le panneau actif | `Escape` | Application | Ferme le drawer, le popup ou le [dialog](/fr/user-guide/reference/studio-interface#dialogs) actif quand la vue le permet. |

## Fix Path

<kbd>Mod</kbd> désigne <kbd>Ctrl</kbd> sous Windows et Linux, et <kbd>Cmd</kbd> sous macOS. Les gestes de sélection s'appliquent sur la carte quand Fix Path est ouvert.

Consultez [Corriger une trace avec Fix Path](/fr/user-guide/workflows/fix-path/) pour le détail des couleurs, des formes et des outils de sélection.

| Action | Raccourci | Résultat |
| --- | --- | --- |
| Ouvrir Fix Path | <kbd>F</kbd> | Ouvre l'éditeur pour le parcours courant s'il contient des traces. |
| Sélectionner ou désélectionner un point | <kbd>Maj</kbd> + <kbd>clic</kbd> | Ajoute ou retire le point de la sélection. |
| Sélectionner un seul point | <kbd>Clic</kbd> ou <kbd>Cmd</kbd> + <kbd>clic</kbd> | Sélectionne uniquement le point visé. |
| Tracer un lasso | <kbd>Maj</kbd> + <kbd>glisser</kbd> ou <kbd>Alt</kbd> + <kbd>glisser</kbd> | Sélectionne les points de trace ou les points de correction selon le point de départ. |
| Tracer un rectangle | <kbd>Ctrl</kbd> + <kbd>Maj</kbd> + <kbd>glisser</kbd> ou <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>glisser</kbd> | Sélectionne dans une zone rectangulaire alignée sur l'écran. |
| Sélectionner tous les points de la section | <kbd>Mod</kbd> + <kbd>A</kbd> | Sélectionne tous les points non supprimés de la section active. |
| Parcourir les points ou un menu | <kbd>↑</kbd>, <kbd>↓</kbd> | Déplace le focus dans la liste des points ou parcourt un menu contextuel ouvert. |
| Atteindre le début ou la fin de la liste | <kbd>Page Up</kbd>, <kbd>Page Down</kbd> | Place le focus sur le premier ou le dernier point. |
| Activer le point ou l'action focalisée | <kbd>Entrée</kbd>, <kbd>Espace</kbd> | Sélectionne un point focalisé ou active l'action focalisée dans un menu contextuel. |
| Réinitialiser ou restaurer un point | <kbd>Backspace</kbd> ou <kbd>Mod</kbd> + <kbd>R</kbd> | Rétablit l'état initial du point ou restaure un point marqué comme supprimé. |
| Marquer un point comme supprimé | <kbd>Delete</kbd> | Exclut le point de la correction tout en gardant sa ligne dans la liste. |
| Annuler un lasso commencé par clics | <kbd>Escape</kbd> | Annule le tracé sans appliquer la sélection. |

Les commandes **Annuler** et **Rétablir** sont dans la barre d'outils Fix Path. Elles n'ont pas de raccourci clavier dédié.

## Raccourcis Du Widget Sélectionné

| Icône | Action | Raccourci | Portée | Résultat |
| --- | --- | --- | --- | --- |
| <span class="guide-icon-chip"><wa-icon name="pen-to-square" variant="regular"></wa-icon></span> | Éditer le widget sélectionné | `Enter` | Widget sélectionné | Ouvre l'éditeur du widget sélectionné. |
| <span class="guide-icon-chip"><wa-icon name="trash" variant="regular"></wa-icon></span> | Supprimer le widget sélectionné | `Delete`, `Backspace` | Widget sélectionné | Supprime le widget sélectionné s'il est supprimable. |
| <span class="guide-icon-chip"><wa-icon name="minus" variant="regular"></wa-icon></span> | Redimensionner le widget sélectionné | `Plus`, `Minus` | Widget sélectionné | Augmente ou réduit la taille du widget sélectionné de 1%. |
| <span class="guide-icon-chip"><wa-icon name="arrows-left-right" variant="regular"></wa-icon></span> | Redimensionner plus vite | `Ctrl+Plus`, `Ctrl+Minus` | Widget sélectionné | Augmente ou réduit la taille du widget sélectionné de 10%. |
| <span class="guide-icon-chip"><wa-icon name="arrows-up-down-left-right" variant="regular"></wa-icon></span> | Déplacer le widget sélectionné | `ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight` | Widget sélectionné | Déplace le widget sélectionné de 2 px. |
| <span class="guide-icon-chip"><wa-icon name="arrows-up-down-left-right" variant="regular"></wa-icon></span> | Déplacer plus vite | `Ctrl+ArrowUp`, `Ctrl+ArrowDown`, `Ctrl+ArrowLeft`, `Ctrl+ArrowRight` | Widget sélectionné | Déplace le widget sélectionné de 20 px. |

## Actions Du Pointeur

| Icône | Action | Raccourci | Portée | Résultat |
| --- | --- | --- | --- | --- |
| <span class="guide-icon-chip"><wa-icon name="cursor" variant="regular"></wa-icon></span> | Sélectionner un widget | `Left click`, `Tap` | Interaction widget | Sélectionne un widget interactif sur la carte. |
| <span class="guide-icon-chip"><wa-icon name="hand-pointer" variant="regular"></wa-icon></span> | Déplacer un widget | `Left drag` | Interaction widget | Fait glisser un widget déplaçable sur la carte. |
| <span class="guide-icon-chip"><wa-icon name="expand" variant="regular"></wa-icon></span> | Double-clic sur un widget | `Double click`, `Double tap` | Interaction widget | Réduit ou agrandit un widget réductible; ouvre l'éditeur pour les widgets visuels. |
| <span class="guide-icon-chip"><wa-icon name="camera" variant="regular"></wa-icon></span> | Capturer un widget | `Alt+Shift+S` | Interaction widget | Exporte certains contenus de widget en PNG quand le widget le permet. |
| <span class="guide-icon-chip"><wa-icon name="lock" variant="regular"></wa-icon></span> | Verrouiller ou déverrouiller | `Ctrl+Left click` | Interaction widget | Verrouille ou déverrouille un widget verrouillable sur place. |
| <span class="guide-icon-chip"><wa-icon name="ellipsis-vertical" variant="regular"></wa-icon></span> | Ouvrir le menu du widget | `Right click`, `Long tap` | Interaction widget | Ouvre le menu contextuel d'un widget sur la carte, y compris les widgets réduits. |
| <span class="guide-icon-chip"><wa-icon name="location-dot" variant="regular"></wa-icon></span> | Basculer l'ouverture d'un POI | `Left click`, `Tap` | Objets carte | Déplie ou replie un point d'intérêt sur la carte. |
| <span class="guide-icon-chip"><wa-icon name="pen-to-square" variant="regular"></wa-icon></span> | Éditer un POI | `Double click`, `Double tap` | Objets carte | Ouvre l'éditeur d'un point d'intérêt sur la carte. |
| <span class="guide-icon-chip"><wa-icon name="ellipsis-vertical" variant="regular"></wa-icon></span> | Ouvrir le menu du POI | `Right click`, `Long tap` | Objets carte | Ouvre le menu contextuel d'un point d'intérêt sur la carte. |
| <span class="guide-icon-chip"><wa-icon name="ellipsis-vertical" variant="regular"></wa-icon></span> | Ouvrir le menu du point carte | `Right click`, `Long tap` | Objets carte | Ouvre le menu contextuel à la position cliquée sur la carte. |
| <span class="guide-icon-chip"><wa-icon name="bullseye" variant="regular"></wa-icon></span> | Focaliser le marqueur de trace | `Left click`, `Tap` | Objets carte | Focalise la trace liée à un marqueur de repérage visible. |
| <span class="guide-icon-chip"><wa-icon name="pen-to-square" variant="regular"></wa-icon></span> | Éditer le marqueur de trace | `Double click`, `Double tap` | Objets carte | Ouvre l'éditeur de la trace liée à un marqueur de repérage visible. |

## Rotation Et Panorama

| Icône | Action | Raccourci | Portée | Résultat |
| --- | --- | --- | --- | --- |
| <span class="guide-icon-chip"><wa-icon name="arrows-up-down-left-right" variant="regular"></wa-icon></span> | Ajuster l'angle | `Left drag` | Mode rotation | Faites glisser sur le globe quand le mode rotation est actif. |
| <span class="guide-icon-chip"><wa-icon name="hand" variant="regular"></wa-icon></span> | Ajuster la distance | `Trackpad scroll` | Mode rotation | Change la distance de rotation sur macOS. |
| <span class="guide-icon-chip"><wa-icon name="mouse" variant="regular"></wa-icon></span> | Ajuster la distance | `Wheel` | Mode rotation | Change la distance de rotation sur Windows et Linux. |
| <span class="guide-icon-chip"><wa-icon name="plus-minus" variant="regular"></wa-icon></span> | Ajuster les RPM | `Plus`, `Minus` | Mode rotation | Change la vitesse de rotation. |
| <span class="guide-icon-chip"><wa-icon name="arrows-left-right" variant="regular"></wa-icon></span> | Ajuster la direction | `ArrowLeft`, `ArrowRight` | Mode rotation | Change le sens de rotation. |
| <span class="guide-icon-chip"><wa-icon name="arrows-up-down-left-right" variant="regular"></wa-icon></span> | Ajuster l'angle | `Left drag` | Mode panorama | Faites glisser pour changer l'angle du panorama. |
| <span class="guide-icon-chip"><wa-icon name="arrows-up-down-left-right" variant="regular"></wa-icon></span> | Ajuster la hauteur | `Trackpad scroll`, `Option+Left drag`, `Shift+Left drag`, `Right drag` | Mode panorama | Change la hauteur du panorama sur macOS. |
| <span class="guide-icon-chip"><wa-icon name="arrows-up-down-left-right" variant="regular"></wa-icon></span> | Ajuster la hauteur | `Wheel`, `Alt+Left drag`, `Shift+Left drag`, `Right drag` | Mode panorama | Change la hauteur du panorama sur Windows et Linux. |
| <span class="guide-icon-chip"><wa-icon name="arrows-up-down" variant="regular"></wa-icon></span> | Ajuster la hauteur | `ArrowUp`, `ArrowDown` | Mode panorama | Change la hauteur au clavier. |
| <span class="guide-icon-chip"><wa-icon name="arrows-up-down" variant="regular"></wa-icon></span> | Ajuster la hauteur plus vite | `Ctrl+ArrowUp`, `Ctrl+ArrowDown` | Mode panorama | Change la hauteur plus rapidement. |
| <span class="guide-icon-chip"><wa-icon name="plus-minus" variant="regular"></wa-icon></span> | Ajuster les RPM | `Plus`, `Minus` | Mode panorama | Change la vitesse du panorama. |
| <span class="guide-icon-chip"><wa-icon name="arrows-left-right" variant="regular"></wa-icon></span> | Ajuster la direction | `ArrowLeft`, `ArrowRight` | Mode panorama | Change le sens du panorama. |

## Navigation Cesium

| Icône | Action | Raccourci | Portée | Résultat |
| --- | --- | --- | --- | --- |
| <span class="guide-icon-chip"><wa-icon name="arrows-left-right" variant="regular"></wa-icon></span> | Tourner ou déplacer | `Left drag` | Navigation Cesium | Déplace la vue du globe. |
| <span class="guide-icon-chip"><wa-icon name="magnifying-glass-plus" variant="regular"></wa-icon></span> | Zoomer | `Right drag`, `Wheel`, `Pinch` | Navigation Cesium | Change la distance de caméra. |
| <span class="guide-icon-chip"><wa-icon name="up-right-and-down-left-from-center" variant="regular"></wa-icon></span> | Incliner ou pivoter | `Middle drag`, `Pinch`, `Ctrl+Left drag`, `Ctrl+Right drag` | Navigation Cesium | Incline ou fait pivoter la vue. |
| <span class="guide-icon-chip"><wa-icon name="face-viewfinder" variant="regular"></wa-icon></span> | Regarder autour | `Shift+Left drag` | Navigation Cesium | Regarde autour depuis la position courante. |

## Comment Utiliser Le Tableau

Le tableau est organisé par comportement et non par composant. Si vous éditez un widget, utilisez la section des widgets sélectionnés. Si vous vous déplacez dans la carte, utilisez les sections rotation, panorama ou Cesium. Si vous avez besoin d'un contrôle global de l'application, utilisez les raccourcis de l'application.
