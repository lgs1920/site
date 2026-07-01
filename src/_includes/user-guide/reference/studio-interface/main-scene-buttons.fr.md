La scène principale utilise deux barres: une barre d'actions primaire et une barre d'outils secondaire. Elles entourent l'espace de travail et utilisent des boutons icône avec tooltip court.

## Barre Primaire

| Élément | Icône | Type | Ce qu'il fait | Notes |
| --- | --- | --- | --- | --- |
| Journey | <span class="guide-icon-chip"><wa-icon name="route" variant="regular"></wa-icon></span> | Bouton avec popup | Ouvre le popup d'actions Journey avec édition, import et groupes. Choisir edit ouvre le [drawer Journey editor](/fr/user-guide/reference/studio-interface/drawers/journey-editor/). | Le même bouton peut servir d'import quand aucun parcours n'est disponible. |
| Settings | <span class="guide-icon-chip"><wa-icon name="gear" variant="regular"></wa-icon></span> | Bouton | Ouvre le [drawer Settings](/fr/user-guide/reference/studio-interface/drawers/settings/). | Garde les réglages globaux au même endroit. |
| Layers | <span class="guide-icon-chip"><wa-icon name="layer-group" variant="regular"></wa-icon></span> | Bouton | Ouvre le [drawer Layers](/fr/user-guide/reference/studio-interface/drawers/layers/). | Utilisé pour les fonds, overlays et terrains. |
| POI editor | <span class="guide-icon-chip"><wa-icon name="location-dot" variant="regular"></wa-icon></span> | Bouton | Ouvre le [drawer POIs](/fr/user-guide/reference/studio-interface/drawers/pois/). | Oriente l'édition des points plutôt que la navigation carte. |
| Text | <span class="guide-icon-chip"><wa-icon name="text" variant="regular"></wa-icon></span> | Bouton | Ajoute un widget texte au board de scène courant. | Crée directement un overlay visible sur la scène. |
| Information | <span class="guide-icon-chip"><wa-icon name="circle-info" variant="regular"></wa-icon></span> | Bouton | Ouvre le [drawer Information](/fr/user-guide/reference/studio-interface/drawers/information/). | Contient infos projet et changelog. |
| Support | <span class="guide-icon-chip"><wa-icon name="message-question" variant="regular"></wa-icon></span> | Bouton | Ouvre le [dialog Support](/fr/user-guide/reference/studio-interface/dialogs/support/). | Surface d'aide, pas drawer d'édition. |

## Barre Secondaire

| Élément | Icône | Type | Ce qu'il fait | Notes |
| --- | --- | --- | --- | --- |
| Mode de scène | <span class="guide-icon-chip"><wa-icon name="map" variant="regular"></wa-icon></span> <span class="guide-icon-chip"><wa-icon name="road" variant="regular"></wa-icon></span> <span class="guide-icon-chip"><wa-icon name="earth-europe" variant="regular"></wa-icon></span> | Bouton popup | Bascule entre les modes 2D, 2.5D et 3D. | L'icône change selon le mode actif. |
| Géocodage | <span class="guide-icon-chip"><wa-icon name="map-location-dot" variant="regular"></wa-icon></span> | Bouton | Ouvre le [dialog Geocoding](/fr/user-guide/reference/studio-interface/dialogs/geocoding/). | Peut créer un POI temporaire depuis un résultat. |
| Orbit | <span class="guide-icon-chip"><wa-icon name="arrows-rotate" variant="regular"></wa-icon></span> | Bouton | Démarre ou arrête l'orbite autour de la cible courante. | Ne tourne que si une cible valide existe. |
| Full screen | <span class="guide-icon-chip"><wa-icon name="expand" variant="regular"></wa-icon></span> <span class="guide-icon-chip"><wa-icon name="compress" variant="regular"></wa-icon></span> | Bouton | Bascule le mode plein écran du navigateur. | L'icône reflète l'état courant. |
| Video | <span class="guide-icon-chip"><wa-icon name="clapperboard-play" variant="regular"></wa-icon></span> | Bouton | Ouvre la configuration d'enregistrement vidéo. | Masqué pendant l'enregistrement ou la finalisation. |
| Flythrough | <span class="guide-icon-chip"><wa-icon name="video-arrow-up-right" variant="regular"></wa-icon></span> | Bouton | Ouvre le [drawer Flythrough](/fr/user-guide/reference/studio-interface/drawers/flythrough/). | Visible seulement quand un parcours est disponible. |
| Badge de sync | <span class="guide-icon-chip"><wa-icon name="link-simple" variant="regular"></wa-icon></span> | Badge | Montre que vidéo et flythrough sont liés. | Informatif uniquement. |

## Boutons De Session

| Élément | Icône | Type | Ce qu'il fait | Notes |
| --- | --- | --- | --- | --- |
| Import journey | <span class="guide-icon-chip"><wa-icon name="file-import" variant="regular"></wa-icon></span> | Bouton | Ouvre le [dialog Journey loader](/fr/user-guide/reference/studio-interface/dialogs/journey-loader/) depuis le banner de première session. | Point d'entrée de démarrage pour charger des données. |
| Visibilité du parcours | <span class="guide-icon-chip"><wa-icon name="eye" variant="regular"></wa-icon></span> <span class="guide-icon-chip"><wa-icon name="eye-slash" variant="regular"></wa-icon></span> | Bouton toggle | Affiche ou masque le parcours courant. | Vit dans l'édition Journey, pas dans la top bar. |

## Comment Lire La Toolbar

La toolbar est faite pour l'action directe, pas pour la navigation. Si l'utilisateur veut modifier du contenu, le bouton ouvre généralement un drawer. S'il veut changer la caméra ou l'état de lecture, le bouton bascule un mode. S'il a besoin d'un choix ponctuel, le bouton ouvre plutôt un popup ou un dialog.
