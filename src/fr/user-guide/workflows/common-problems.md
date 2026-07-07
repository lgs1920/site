
## Problèmes D'import

Si un parcours ne s'importe pas:

1. Vérifiez que le fichier est en GeoJSON, GPX ou KML.
2. Réessayez depuis [Importer un parcours](/fr/user-guide/getting-started/import-source-data/).
3. Si un message d'erreur s'affiche, gardez-le visible jusqu'à avoir identifié la cause.

## Problèmes De Jetons

| Prompt | Signification | Action |
| --- | --- | --- |
| [Prompt de jeton Cesium](/fr/user-guide/reference/studio-interface/dialogs/cesium-token/) | Les données Cesium ne peuvent pas charger. | Collez un jeton Cesium Ion valide et validez-le. |
| [Dialog de jeton de couche](/fr/user-guide/reference/studio-interface/dialogs/layer-token/) | Une source cartographique ou terrain protégée demande un accès. | Collez le jeton de la source et validez-le. |
| [Dialog d'information de couche](/fr/user-guide/reference/studio-interface/dialogs/layer-information/) | Une source contient une note ou un avertissement. | Lisez l'information puis continuez. |

## Problèmes D'export

1. Vérifiez que la scène est stable.
2. Vérifiez que les widgets sont bien montés et visibles.
3. Si le [dialog d'erreur de montage widget](/fr/user-guide/reference/studio-interface/dialogs/widget-mount-error/) apparaît, réessayez une fois la surface chargée.
4. Relisez toujours la sortie avant de modifier la scène.
