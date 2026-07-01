Les dialogs sont des surfaces bloquantes ou qui captent le focus. Ils apparaissent quand Studio a besoin d'attention, d'une décision ou d'un identifiant.

Chaque dialog a une page dédiée:

| Dialog | Icône | À quoi il sert | Page |
| --- | --- | --- | --- |
| Dialog d'erreur initiale | <span class="guide-icon-chip"><wa-icon name="triangle-exclamation" variant="regular"></wa-icon></span> | Affiche l'erreur de démarrage et la stack trace. | [Ouvrir la page](/fr/user-guide/reference/studio-interface/dialogs/initial-error/) |
| Dialog de mise à jour PWA | <span class="guide-icon-chip"><wa-icon name="arrow-rotate-right" variant="regular"></wa-icon></span> | Gère les prompts d'installation et de mise à jour. | [Ouvrir la page](/fr/user-guide/reference/studio-interface/dialogs/pwa-update/) |
| Dialog Journey loader | <span class="guide-icon-chip"><wa-icon name="file-import" variant="regular"></wa-icon></span> | Charge des fichiers de parcours depuis le stockage local. | [Ouvrir la page](/fr/user-guide/reference/studio-interface/dialogs/journey-loader/) |
| Dialog Geocoding | <span class="guide-icon-chip"><wa-icon name="map-location-dot" variant="regular"></wa-icon></span> | Recherche des lieux ou coordonnées. | [Ouvrir la page](/fr/user-guide/reference/studio-interface/dialogs/geocoding/) |
| Dialog Support | <span class="guide-icon-chip"><wa-icon name="message-question" variant="regular"></wa-icon></span> | Affiche le contenu d'aide. | [Ouvrir la page](/fr/user-guide/reference/studio-interface/dialogs/support/) |
| Prompt Cesium token | <span class="guide-icon-chip"><wa-icon name="key" variant="regular"></wa-icon></span> | Demande un jeton Cesium Ion. | [Ouvrir la page](/fr/user-guide/reference/studio-interface/dialogs/cesium-token/) |
| Modal Layer information | <span class="guide-icon-chip"><wa-icon name="circle-info" variant="regular"></wa-icon></span> | Affiche le disclaimer de couche. | [Ouvrir la page](/fr/user-guide/reference/studio-interface/dialogs/layer-information/) |
| Modal Layer token | <span class="guide-icon-chip"><wa-icon name="key" variant="regular"></wa-icon></span> | Demande un jeton d'accès pour une couche ou un terrain. | [Ouvrir la page](/fr/user-guide/reference/studio-interface/dialogs/layer-token/) |
| Dialog Profile sync | <span class="guide-icon-chip"><wa-icon name="user-gear" variant="regular"></wa-icon></span> | Gère les actions de profil liées à la synchronisation. | [Ouvrir la page](/fr/user-guide/reference/studio-interface/dialogs/profile-sync/) |
| Dialog Video download | <span class="guide-icon-chip"><wa-icon name="clapperboard-play" variant="regular"></wa-icon></span> | Prévisualise et télécharge le média enregistré. | [Ouvrir la page](/fr/user-guide/reference/studio-interface/dialogs/video-download/) |
| Dialog Widget mount error | <span class="guide-icon-chip"><wa-icon name="box-exclamation" variant="regular"></wa-icon></span> | Avertit que les widgets ne sont pas prêts pour la capture. | [Ouvrir la page](/fr/user-guide/reference/studio-interface/dialogs/widget-mount-error/) |
| Dialog Backend restart | <span class="guide-icon-chip"><wa-icon name="server" variant="regular"></wa-icon></span> | Montre que le backend redémarre. | [Ouvrir la page](/fr/user-guide/reference/studio-interface/dialogs/backend-restart/) |
| Dialog Confirm | <span class="guide-icon-chip"><wa-icon name="circle-check" variant="regular"></wa-icon></span> | Gère la confirmation finale. | [Ouvrir la page](/fr/user-guide/reference/studio-interface/dialogs/confirm/) |

Utilisez un dialog quand l'utilisateur doit décider, confirmer ou fournir un jeton avant de continuer. Si l'utilisateur doit revenir souvent à la tâche, le contrôle doit probablement vivre dans un drawer.
