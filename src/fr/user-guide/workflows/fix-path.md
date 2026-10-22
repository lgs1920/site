## Lancer Fix Path

Fix Path corrige localement la géométrie d'une trace sans modifier le fichier GPX source. Les changements terminés sont enregistrés avec le parcours. Ils sont aussitôt pris en compte dans le tracé, les statistiques et Replay lorsque les corrections sont activées.

Le parcours courant doit contenir au moins une trace. Ouvrez Fix Path de l'une de ces façons :

1. Cliquez sur le bouton **Fix Path** dans la barre principale, à côté des commandes du parcours.
2. Ouvrez le menu contextuel d'un point de la trace sur la carte, puis choisissez **Fix Path**.
3. Dans l'éditeur du parcours, cliquez sur le bouton **Fix Path** près du réglage **Apply path corrections**.
4. Appuyez sur `F` lorsque Studio a le focus.

À l'ouverture, la carte se centre sur la section active ou, s'il n'en existe pas, sur la première section disponible. Le widget Fix Path contient les commandes, les points de la section et le bouton **Help**. Le bouton **X** ferme l'éditeur après l'application du dernier changement.

<div class="guide-screenshot-placeholder" role="img" aria-label="Emplacement de capture : ouvrir Fix Path depuis la barre principale et montrer son widget sur la carte">
    <wa-icon variant="regular" name="image"></wa-icon>
    <strong>Emplacement de capture d'écran</strong>
    <span>Montrer le bouton Fix Path dans la barre principale, le widget ouvert, sa barre d'outils et une section visible sur la trace.</span>
</div>

## Comprendre le widget Fix Path

Le widget superpose ses contrôles à la carte. Sa barre d'outils agit sur la section active et la liste affiche ses points de contrôle. Les pastilles ci-dessous reprennent les icônes utilisées dans Studio.

<div class="guide-screenshot-placeholder" role="img" aria-label="Emplacement de capture : copie complète du widget Fix Path avec ses principales zones repérées">
    <wa-icon variant="regular" name="image"></wa-icon>
    <strong>Capture d'écran à insérer — widget complet</strong>
    <span>Capturer le widget entier et repérer l'en-tête, l'aide, l'historique, la navigation entre sections, les actions et la liste des points. Garder la carte visible autour du widget.</span>
</div>

### En-tête

Le bouton <span class="guide-icon-chip"><wa-icon name="question" variant="regular"></wa-icon></span> ouvre l'aide intégrée de Fix Path. Le bouton <span class="guide-icon-chip"><wa-icon name="xmark" variant="regular"></wa-icon></span> ferme le widget. Les changements terminés sont enregistrés au fil de l'édition.

### Barre d'outils

| Icône | Commande | Fonction |
| --- | --- | --- |
| <span class="guide-icon-chip"><wa-icon name="arrow-rotate-left" variant="regular"></wa-icon></span> | Undo | Annule la dernière modification de correction. |
| <span class="guide-icon-chip"><wa-icon name="arrow-rotate-right" variant="regular"></wa-icon></span> | Redo | Rétablit une modification annulée. |
| <span class="guide-icon-chip"><wa-icon name="arrow-left-to-line" variant="regular"></wa-icon></span> <span class="guide-icon-chip"><wa-icon name="chevron-left" variant="regular"></wa-icon></span> <span class="guide-icon-chip"><wa-icon name="chevron-right" variant="regular"></wa-icon></span> <span class="guide-icon-chip"><wa-icon name="arrow-right-to-line" variant="regular"></wa-icon></span> | Sections | Va à la première, à la précédente, à la suivante ou à la dernière section. Les boutons disponibles dépendent du nombre de sections. |
| <span class="guide-icon-chip"><wa-icon name="eye" variant="regular"></wa-icon></span> / <span class="guide-icon-chip"><wa-icon name="eye-slash" variant="regular"></wa-icon></span> | Afficher ou masquer | Masque ou réaffiche l'aperçu de la section active. Cela ne désactive pas la correction dans les statistiques ou Replay. |
| <span class="guide-icon-chip"><wa-icon name="eraser" variant="regular"></wa-icon></span> | Erase | Retire de la section les points sélectionnés. Sans sélection préalable, active le mode qui permet de cliquer les points à retirer. |
| <span class="guide-icon-chip"><wa-icon name="trash-can" variant="regular"></wa-icon></span> | Supprimer la section | Supprime la section de correction active et tous ses points. |

Le compteur entre les commandes de navigation indique la section active et le nombre total de sections, par exemple **2 / 4**.

### Liste des points

Chaque ligne correspond à un point de contrôle de la section. Les champs **Lat** et **Lon** affichent ses coordonnées ; le champ **Height** permet d'ajuster son altitude dans l'unité choisie dans les préférences. Les coordonnées de latitude et longitude sont en lecture seule.

| Icône | Commande | Fonction |
| --- | --- | --- |
| <span class="guide-icon-chip"><wa-icon name="square" variant="regular"></wa-icon></span> | Sélectionner tout | La case en haut de la liste sélectionne tous les points non supprimés de la section, ou les désélectionne. |
| <span class="guide-icon-chip"><wa-icon name="arrow-rotate-left" variant="regular"></wa-icon></span> | Réinitialiser / restaurer | Rétablit la position d'origine d'un point déplacé ; restaure un point marqué comme supprimé. |
| <span class="guide-icon-chip"><wa-icon name="trash-can" variant="regular"></wa-icon></span> | Retirer | Marque le point comme supprimé. Sa ligne reste dans la liste afin de pouvoir le restaurer. |

La ligne focalisée peut aussi être parcourue au clavier. La sélection d'un point s'affiche à la fois sur la carte et dans la liste.

## Créer et modifier une section

Une section délimite une portion continue d'un segment de trace que Fix Path peut corriger. Une section ne traverse pas une coupure entre deux segments. Choisissez d'abord les points de la trace à corriger, puis ajustez les points de contrôle de la section créée.

### Créer ou étendre la zone corrigée

Sur la carte, utilisez le lasso ou le rectangle pour sélectionner les sommets de la trace : <kbd>Maj</kbd> + glisser dessine un lasso ; <kbd>Ctrl</kbd> + <kbd>Maj</kbd> + glisser dessine un rectangle. Lorsque la sélection est terminée, Fix Path crée ou étend une section à partir des sommets retenus. La nouvelle section devient active. Consultez [Lasso ou rectangle](#lasso-ou-rectangle) pour le détail des gestes.

### Ajouter un point de contrôle

Faites un clic droit sur la trace à l'endroit voulu, puis choisissez <wa-icon class="fix-path-inline-action-icon" name="circle-plus" variant="regular" role="img" aria-label="Ajouter un point de contrôle"></wa-icon> dans le menu contextuel. Fix Path place le nouveau point sur la portion de trace la plus proche. S'il rejoint une section existante sur le même segment, il l'étend ; sinon, il crée une courte section autour de ce point. Pour construire une section manuellement, cliquez d'abord sur un sommet de la trace pour définir son début, cliquez sur la portion à corriger pour ajouter ses points de contrôle, puis cliquez sur un sommet situé plus loin sur le même segment pour terminer la section.

### Sélectionner et déplacer des points

Cliquez sur un marqueur ou sur sa ligne pour le sélectionner. Pour sélectionner plusieurs points, cochez la case de la liste, utilisez <kbd>Maj</kbd> + clic ou sélectionnez une zone autour des marqueurs. Les points d'une même sélection se déplacent ensemble : faites glisser l'un des marqueurs sélectionnés vers sa nouvelle position. Un clic sur un point d'une autre section active celle-ci.

### Ajuster l'altitude

Modifiez **Height** dans la ligne du point. La valeur est exprimée dans l'unité d'altitude configurée dans les préférences ; la latitude et la longitude restent informatives et ne peuvent pas être saisies dans la liste. La modification est enregistrée quand vous validez le champ.

### Réinitialiser, retirer ou effacer un point

Ces commandes ont des effets différents :

- **Réinitialiser** avec <span class="guide-icon-chip"><wa-icon name="arrow-rotate-left" variant="regular"></wa-icon></span> remet un point déplacé à sa position d'origine. Sur un point supprimé, la même commande le restaure.
- **Retirer** avec <span class="guide-icon-chip"><wa-icon name="trash-can" variant="regular"></wa-icon></span> ou la touche <kbd>Delete</kbd> exclut le point de la correction, mais conserve sa ligne dans la liste pour permettre sa restauration.
- **Erase** avec <span class="guide-icon-chip"><wa-icon name="eraser" variant="regular"></wa-icon></span> enlève les points sélectionnés de la section. Sans sélection préalable, activez l'outil puis cliquez sur les points à retirer. Retirer un point de la section peut la scinder en plusieurs sections.

Pour supprimer toute la section, utilisez la corbeille dans la barre d'outils du widget. **Undo** et **Redo** permettent de revenir sur les modifications de correction.

<div class="guide-screenshot-placeholder" role="img" aria-label="Emplacement de capture : édition d'une section avec marqueurs et liste des coordonnées">
    <wa-icon variant="regular" name="image"></wa-icon>
    <strong>Capture d'écran à insérer — édition d'une section</strong>
    <span>Montrer une section active, plusieurs points dont un sélectionné et un déplacé, un champ Height modifiable, et les commandes Réinitialiser et Retirer dans la liste.</span>
</div>

## Lire les couleurs et les formes

La forme décrit l'état du point. La couleur indique cet état, la sélection ou le fait que le point appartient à une autre section.

| Repère | Signification |
| --- | --- |
| <svg class="fix-path-marker-sample is-unmodified" viewBox="0 0 16 16" width="16" height="16" role="img" aria-label="Losange orange à bordure noire"><path d="M 8 1 L 15 8 L 8 15 L 1 8 Z"></path></svg> | Losange orange à bordure noire : sommet source inchangé ou réinitialisé dans la section active. |
| <svg class="fix-path-marker-sample is-moved" viewBox="0 0 16 16" width="16" height="16" role="img" aria-label="Cercle rose à bordure blanche"><circle cx="8" cy="8" r="7"></circle></svg> | Cercle rose à bordure blanche : point déplacé ou ajouté manuellement. |
| <span class="fix-path-marker-examples"><svg class="fix-path-marker-sample is-selected" viewBox="0 0 16 16" width="16" height="16" role="img" aria-label="Losange chartreuse sélectionné"><path d="M 8 1 L 15 8 L 8 15 L 1 8 Z"></path></svg><svg class="fix-path-marker-sample is-selected" viewBox="0 0 16 16" width="16" height="16" role="img" aria-label="Cercle chartreuse sélectionné"><circle cx="8" cy="8" r="7"></circle></svg></span> | Chartreuse à bordure noire : point sélectionné. La forme reste losange si le point est inchangé, cercle s'il a été déplacé. |
| <span class="fix-path-marker-examples"><svg class="fix-path-marker-sample is-inactive" viewBox="0 0 16 16" width="16" height="16" role="img" aria-label="Losange gris à bordure blanche"><path d="M 8 1 L 15 8 L 8 15 L 1 8 Z"></path></svg><svg class="fix-path-marker-sample is-inactive" viewBox="0 0 16 16" width="16" height="16" role="img" aria-label="Cercle gris à bordure blanche"><circle cx="8" cy="8" r="7"></circle></svg></span> | Gris à bordure blanche : point d'une autre section. Cliquez dessus pour activer sa section. |
| Icône de corbeille et ligne atténuée dans la liste | Point marqué comme supprimé. Il reste restaurable et n'est pas utilisé dans la correction. |

La ligne corrigée de la section active apparaît en magenta. Les autres sections apparaissent en gris. Pendant la sélection d'une zone, un contour orange indique la sélection des sommets de la trace et un contour chartreuse indique la sélection de points de correction.

<div class="guide-screenshot-placeholder" role="img" aria-label="Emplacement de capture : légende visuelle des losanges, cercles, couleurs et points supprimés">
    <wa-icon variant="regular" name="image"></wa-icon>
    <strong>Emplacement de capture d'écran</strong>
    <span>Montrer le losange orange inchangé, le cercle rose déplacé, leurs états sélectionnés en chartreuse, les mêmes formes grisées lorsqu'elles appartiennent à une autre section, ainsi qu'une ligne supprimée. Garder les marqueurs à leur taille de 16 px dans Studio.</span>
</div>

## Lasso ou rectangle

Les deux outils sélectionnent les points visibles dans une zone de l'écran. Le **lasso** suit librement le pointeur : il permet d'épouser les virages d'une trace et d'éviter les points proches. Le **rectangle** reste aligné sur l'écran ; il est pratique pour une zone compacte, mais peut englober des points situés de part et d'autre du parcours.

### Sélectionner des points de la trace et créer une section

Commencez le geste sur la trace, à l'écart d'un marqueur de correction. Le contour orange indique que vous ciblez les sommets d'origine du parcours. À la fin de la sélection, Fix Path crée une section à partir des sommets retenus ou étend une section existante ; cette section devient active.

| Outil | Curseur Studio | Geste |
| --- | --- | --- |
| Lasso | <span class="fix-path-cursor-examples"><wa-icon class="is-journey-selection" name="lasso" variant="solid" aria-hidden="true"></wa-icon></span> | <kbd>Maj</kbd> + glisser pour dessiner un contour libre. |
| Rectangle | <span class="fix-path-cursor-examples"><wa-icon class="is-journey-selection" name="square-dashed" variant="solid" aria-hidden="true"></wa-icon></span> | <kbd>Ctrl</kbd> + <kbd>Maj</kbd> + glisser pour dessiner un rectangle aligné sur l'écran. |

<div class="guide-screenshot-placeholder" role="img" aria-label="Emplacement de capture : lasso et rectangle orange pour sélectionner les sommets de la trace et créer une section">
    <wa-icon variant="regular" name="image"></wa-icon>
    <strong>Capture d'écran à insérer — sélectionner la trace</strong>
    <span>Montrer côte à côte le lasso orange et le rectangle orange autour des sommets d'origine, puis le résultat : la section créée ou étendue. Reprendre le contour discontinu, son épaisseur et son remplissage translucide de Studio.</span>
</div>

### Sélectionner des points dans une section

Activez la section concernée avant de sélectionner ses points de correction. Le contour chartreuse et le curseur correspondant indiquent que le geste cible les marqueurs de cette section. Pour ajouter ou retirer un point individuellement, utilisez <kbd>Maj</kbd> + clic sur son marqueur.

| Outil | Curseur Studio | Geste |
| --- | --- | --- |
| Lasso | <span class="fix-path-cursor-examples"><wa-icon class="is-section-selection" name="lasso" variant="solid" aria-hidden="true"></wa-icon></span> | <kbd>Maj</kbd> + glisser en commençant sur un marqueur pour ajouter les points entourés à la sélection ; <kbd>Alt</kbd> + glisser pour remplacer la sélection de la section active. |
| Rectangle | <span class="fix-path-cursor-examples"><wa-icon class="is-section-selection" name="square-dashed" variant="solid" aria-hidden="true"></wa-icon></span> | <kbd>Ctrl</kbd> + <kbd>Maj</kbd> + glisser en commençant sur un marqueur pour ajouter les points entourés ; <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + glisser pour remplacer la sélection de la section active. |

Appuyez sur <kbd>Escape</kbd> pour annuler un lasso commencé par clics ou fermer un menu contextuel. Une zone vide ne supprime pas la sélection en cours.

<div class="guide-screenshot-placeholder" role="img" aria-label="Emplacement de capture : lasso et rectangle chartreuse pour sélectionner les points de correction d'une section">
    <wa-icon variant="regular" name="image"></wa-icon>
    <strong>Capture d'écran à insérer — sélectionner les points de la section</strong>
    <span>Montrer côte à côte le lasso chartreuse et le rectangle chartreuse autour des points de correction de la section active, avec un marqueur voisin hors de la zone. Reprendre le contour discontinu, son épaisseur et son remplissage translucide de Studio.</span>
</div>

Dans les deux cas, le contour dessiné est discontinu (traits de 7 px espacés de 5 px), épais de 2 px et rempli d'un voile sombre translucide. Orange cible les sommets du parcours ; chartreuse cible les points de correction de la section active.

## Raccourcis clavier

<kbd>Mod</kbd> signifie <kbd>Ctrl</kbd> sous Windows et Linux, et <kbd>Cmd</kbd> sous macOS. Les combinaisons <kbd>Ctrl</kbd> + <kbd>Maj</kbd> et <kbd>Ctrl</kbd> + <kbd>Alt</kbd> pour le rectangle utilisent bien la touche <kbd>Ctrl</kbd>, y compris sur macOS.

| Raccourci | Résultat |
| --- | --- |
| <kbd>F</kbd> | Ouvre Fix Path pour le parcours courant s'il contient des traces. |
| <kbd>Mod</kbd> + <kbd>A</kbd> | Sélectionne tous les points non supprimés de la section active. <kbd>Mod</kbd> désigne <kbd>Ctrl</kbd> sous Windows et Linux, ou <kbd>Cmd</kbd> sous macOS. |
| <kbd>↑</kbd> et <kbd>↓</kbd> | Déplace le focus dans la liste ou parcourt un menu contextuel ouvert. |
| <kbd>Page Up</kbd> et <kbd>Page Down</kbd> | Déplace le focus vers le premier ou le dernier point de la liste. |
| <kbd>Entrée</kbd> ou <kbd>Espace</kbd> | Sélectionne le point focalisé ou active l'action focalisée dans un menu contextuel. |
| <kbd>Backspace</kbd> ou <kbd>Mod</kbd> + <kbd>R</kbd> | Réinitialise un point déplacé ou restaure un point supprimé. Utilisez ces touches quand le focus est sur un marqueur ou sa ligne, pas pendant la saisie dans un champ. |
| <kbd>Delete</kbd> | Marque le point focalisé comme supprimé. Sa ligne reste dans la liste pour permettre sa restauration. |
| <kbd>Escape</kbd> | Annule le tracé d'un lasso commencé par clics, ou ferme un menu contextuel. |

Les boutons **Undo** et **Redo** de la barre d'outils n'ont pas de raccourci clavier dédié. Pour la liste complète des gestes et raccourcis de Studio, consultez la page [Raccourcis](/fr/user-guide/workflows/shortcuts/).
