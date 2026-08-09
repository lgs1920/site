# Analyse et recommandations — maintenance du site et contenu multilingue

**Périmètre :** site Eleventy de LGS1920 Studio, avec un focus sur le guide utilisateur et le fichier `src/_data/guide-pages.generated.js`.

**Date :** 20 juillet 2026

> Mise à jour du 6 août 2026 : la découpe recommandée dans ce document a été appliquée. Les définitions publiques sont désormais dans `src/_data/pages/`, les métadonnées du guide dans `src/_data/guide-pages/`, et les helpers partagés dans `src/_lib/page-data.js`.

## 1. Synthèse

Le site repose sur une bonne base technique : génération statique avec Eleventy, layout partagé, routes françaises préfixées par `/fr`, métadonnées SEO calculées automatiquement et séparation globale entre contenu, présentation et navigation.

Le principal problème n’est donc pas le framework, mais la dispersion de la source éditoriale. Pour modifier ou traduire une page du guide, il faut aujourd’hui synchroniser plusieurs endroits :

- le Markdown anglais ;
- le Markdown français ;
- le fichier `src/_data/guide-pages.generated.js` pour le titre, la description, le hero et la navigation de sections ;
- `src/_data/i18n.js` pour le menu et les chemins traduits ;
- parfois un fichier `.11tydata.js` ou un include localisé ;
- puis vérifier manuellement les liens, les ancres et le HTML généré.

Cette organisation fonctionne, mais elle rend les oublis faciles et augmente le coût de chaque mise à jour. La recommandation centrale est de créer une **source éditoriale structurée par page et par locale**, puis de dériver automatiquement les routes, les alternates, la navigation et les validations à partir de cette source.

## 2. État actuel observé

| Élément | Situation actuelle | Conséquence |
| --- | --- | --- |
| Génération | Eleventy 3 + Vite | Simple et adaptée à un site documentaire statique |
| Langues | `en` par défaut, `fr` sous `/fr` | Convention claire, mais logique partiellement codée en dur |
| Corps du guide | Deux arbres Markdown parallèles : `src/user-guide` et `src/fr/user-guide` | Risque de divergence entre les versions |
| Métadonnées du guide | `src/_data/guide-pages.generated.js`, 3 205 lignes | Fichier difficile à relire et à maintenir manuellement |
| Navigation globale | `src/_data/i18n.js`, 514 lignes | Les labels, URLs et pages traduites sont dans la même source |
| Pages spéciales | `src/_data/page-types.js`, 1 137 lignes | Mélange de données éditoriales et de logique de génération |
| Présentation | Layouts et includes partagés | Bon levier de maintenance, à préserver |
| Documentation interne | `docs/GUIDE.md` et `docs/multilingual-content-guide.md` | Les règles sont documentées, mais le processus reste manuel |
| Validation | Build global disponible, pas de contrôle dédié des traductions | Les erreurs de synchronisation peuvent passer jusqu’au build ou à la revue |

### Rôle du fichier indiqué

`src/_data/guide-pages.generated.js` contient actuellement les données par URL canonique, avec un objet `locales.en` et `locales.fr`. Il expose notamment `getGuidePageDefinition()` et `getGuidePageContent()`.

Malgré son nom, le fichier est aujourd’hui une source de données importée directement par le site. Cela crée une ambiguïté importante : un contributeur peut croire qu’il s’agit d’un artefact à régénérer, alors qu’il doit le modifier à la main. Il faut soit le renommer, soit mettre en place une vraie génération reproductible.

## 3. Points forts à conserver

- Le chemin canonique est indépendant de la langue ; seule la locale est ajoutée à l’URL française.
- Les métadonnées SEO (`canonical`, `hreflang`, locale Open Graph) sont centralisées dans `src/src.11tydata.js`.
- Le layout `src/_includes/layouts/page.html` réutilise les données localisées sans dupliquer toute la structure HTML.
- Le guide dispose d’une navigation, de breadcrumbs et d’une pagination calculés à partir d’une structure commune.
- Les includes permettent déjà de partager des fragments techniques et d’éviter une duplication totale du HTML.
- Les pages légales et certaines données sont déjà dérivées de sources externes, ce qui montre qu’un modèle généré est compatible avec le projet.

## 4. Problèmes et risques

### 4.1 Plusieurs sources de vérité pour une même page — priorité haute

Une page du guide est répartie entre le contenu Markdown et des données de présentation. La règle actuelle est explicitée dans `docs/GUIDE.md` : le corps est dans Markdown, alors que titre, hero et ancres sont dans `guide-pages.generated.js`.

Le modèle est compréhensible, mais il impose une synchronisation humaine. Une modification d’un titre de section doit par exemple être répercutée dans le texte, dans `sectionNav`, dans les ancres et potentiellement dans les liens internes.

**Risque :** page lisible dans une langue mais navigation incomplète, ancres cassées ou métadonnées obsolètes dans l’autre langue.

### 4.2 Le fichier `guide-pages.generated.js` est trop volumineux — priorité haute

Un fichier de 3 205 lignes contenant toutes les pages et toutes les langues est difficile à parcourir, à relire et à fusionner lors de modifications concurrentes.

**Recommandation :** un fichier de données par page, ou un fichier JSON/YAML par section du guide, avec un schéma identique pour toutes les langues. Le fichier final peut rester généré si le runtime l’exige.

### 4.3 Les routes traduites sont enregistrées séparément — priorité haute

`translatedPaths`, `guideItemDefinitions` et les objets de contenu contiennent des informations liées à la même page : son chemin, son libellé, son résumé et sa présence dans le menu.

**Risque :** ajouter le Markdown français sans ajouter le chemin à `translatedPaths`, ou ajouter une page au menu sans créer sa version dans l’autre langue.

**Recommandation :** déduire `translatedPaths` et la navigation à partir du catalogue de pages. Une page ne devrait être déclarée qu’une seule fois avec un identifiant stable, son chemin et ses traductions.

### 4.4 Les URLs localisées sont partiellement codées en dur — priorité moyenne

La fonction `localizedPath()` traite explicitement le français. L’ajout d’une troisième langue nécessiterait de modifier plusieurs morceaux de logique, au lieu d’ajouter uniquement une configuration de locale.

**Recommandation :** stocker un `prefix` par locale dans `localeOptions`, puis construire toutes les URLs à partir de ce préfixe.

### 4.5 Les pages Markdown parallèles facilitent la dérive — priorité haute

Le guide contient deux arborescences qui doivent rester alignées. C’est adapté lorsque les langues nécessitent des formulations différentes, mais il manque un contrôle automatique de parité : fichiers présents dans les deux langues, sections comparables, liens et clés obligatoires.

**Recommandation :** conserver deux fichiers Markdown si la traduction doit être éditorialement libre, mais ajouter un script de contrôle qui compare les identifiants de page, les niveaux de titres, les sections attendues et les liens internes.

### 4.6 Absence de statut de traduction — priorité haute

Le modèle ne semble pas distinguer une traduction publiée, en cours, obsolète ou absente. Une traduction peut donc être affichée comme complète alors que le contenu anglais a changé depuis sa dernière mise à jour.

**Recommandation :** ajouter des métadonnées telles que `translationStatus`, `sourceRevision` ou `updatedAt` par locale. Le site peut afficher un avertissement en préproduction ou bloquer la publication selon la politique choisie.

### 4.7 Validation insuffisamment spécialisée — priorité haute

Le build global est le contrôle principal, mais il ne vérifie pas nécessairement la cohérence éditoriale entre langues. Lors de l’analyse, `bun run build` échoue avant la génération des pages car la source externe `../studio/tech-doc/README_DEPENDENCIES.md` est absente. Ce blocage est distinct du multilingue, mais il empêche de valider le rendu complet dans cet environnement.

**Recommandation :** séparer les contrôles :

1. validation du schéma et de la parité des traductions, sans dépendance au dépôt Studio ;
2. build Eleventy complet ;
3. tests ciblés du HTML généré et des liens alternatifs.

## 5. Architecture cible recommandée

### 5.1 Introduire un catalogue éditorial unique

Créer un catalogue par page, par exemple :

```text
content/
  user-guide/
    workflows/
      export/
        page.json
        en.md
        fr.md
```

Exemple de `page.json` :

```json
{
  "id": "export",
  "path": "/user-guide/workflows/export/",
  "section": "workflows",
  "order": 8,
  "icon": "video",
  "locales": {
    "en": {
      "label": "Export",
      "summary": "Snapshot, video, PDF, or HTML ZIP",
      "title": "Export Studio output",
      "description": "...",
      "status": "published"
    },
    "fr": {
      "label": "Exporter",
      "summary": "Capture, vidéo, PDF ou ZIP HTML",
      "title": "Exporter une sortie Studio",
      "description": "...",
      "status": "published"
    }
  }
}
```

Le contenu long reste dans les fichiers Markdown. Les données de page et les traductions courtes sont réunies autour d’un identifiant stable. Eleventy peut charger ce catalogue et produire les mêmes objets que ceux consommés actuellement par les layouts.

### 5.2 Séparer quatre responsabilités

- `content/` : contenu éditorial et métadonnées de page ;
- `src/_data/locales.js` : configuration technique des langues et préfixes d’URL ;
- `src/_data/navigation.js` : ordre et regroupement de navigation, dérivés du catalogue ;
- `src/_includes/` : structure visuelle partagée.

`i18n.js` devrait conserver les chaînes d’interface globales (`Home`, `Next`, `Language`, etc.), mais ne plus être la source de vérité des pages du guide.

### 5.3 Générer les artefacts si nécessaire

Si `guide-pages.generated.js` est utile pour les performances ou la compatibilité Eleventy, le conserver comme sortie générée :

```text
content/ + scripts/build-content.mjs
        -> src/_data/guide-pages.generated.js
        -> navigation, alternates, validation
```

Dans ce cas, il faut :

- ajouter une commande explicite, par exemple `bun run content:build` ;
- documenter l’origine du fichier en en-tête ;
- rendre la génération déterministe ;
- vérifier que CI refuse un artefact non à jour ;
- éviter de modifier directement le fichier généré.

### 5.4 Déduire les alternates et la navigation

À partir du catalogue, le système peut générer automatiquement :

- la liste des chemins traduits ;
- les URLs localisées ;
- les liens `hreflang` ;
- le sélecteur de langue ;
- la navigation du guide ;
- la pagination précédente/suivante ;
- les contrôles de pages absentes ou de traductions manquantes.

Cela supprime les duplications actuelles entre `translatedPaths`, `guideItemDefinitions` et les métadonnées de `guide-pages.generated.js`.

## 6. Plan d’action priorisé

### Phase 1 — sécuriser l’existant (faible risque)

1. Ajouter un script `content:check` qui vérifie la parité des fichiers anglais/français, les champs requis, les IDs dupliqués et les liens internes.
2. Ajouter un en-tête explicite à `guide-pages.generated.js` : source manuelle ou fichier généré.
3. Ajouter une checklist CI : `content:check`, build, contrôle des URLs et du HTML.
4. Corriger ou rendre optionnelle la dépendance au dépôt `../studio` pour que les contrôles multilingues puissent s’exécuter seuls.
5. Mesurer les pages et traductions manquantes dans un rapport lisible en CI.

### Phase 2 — réduire la duplication (risque modéré)

1. Extraire `guideItemDefinitions` dans le catalogue des pages.
2. Générer `translatedPaths` et `userGuideSections` depuis ce catalogue.
3. Remplacer la logique spéciale `locale === 'fr'` par une configuration de préfixe par locale.
4. Découper `page-types.js` par domaine : accueil, guide, FAQ, légal, changelog.

### Phase 3 — améliorer le workflow éditorial (risque modéré)

1. Ajouter `status`, `sourceRevision` et `updatedAt` par traduction.
2. Ajouter un rapport de traductions obsolètes.
3. Permettre une prévisualisation d’une page avec ses deux langues côte à côte.
4. Définir une règle de publication : traduction obligatoire, fallback anglais explicite, ou page non publiée tant que la traduction n’est pas prête.

### Phase 4 — envisager un CMS (optionnelle)

Un CMS headless peut être pertinent si plusieurs personnes non techniques doivent éditer régulièrement le site. Il ne faut toutefois pas commencer par cette migration : le catalogue structuré et les contrôles automatisés apporteraient déjà l’essentiel du gain, sans ajouter de service externe ni de workflow de synchronisation supplémentaire.

## 7. Workflow recommandé après amélioration

Pour modifier une page existante :

1. Modifier le contenu et la métadonnée dans le dossier de la page.
2. Mettre à jour la traduction correspondante ou son statut.
3. Lancer `bun run content:check`.
4. Lancer le build.
5. Vérifier la page anglaise, la page française, le sélecteur de langue, le canonical, les `hreflang` et les liens de pagination.

Pour ajouter une page :

1. Créer un identifiant, un chemin et un fichier de métadonnées.
2. Ajouter les fichiers Markdown des locales supportées.
3. Définir l’ordre et la section dans le catalogue.
4. Laisser la génération produire navigation, alternates et données Eleventy.
5. Refuser la publication si une clé obligatoire manque.

## 8. Critères de succès

La refonte sera réussie si :

- une page du guide est déclarée à un seul endroit ;
- l’ajout d’une page ne demande plus de modifier manuellement `translatedPaths` et `guideItemDefinitions` séparément ;
- le système détecte une traduction manquante ou obsolète avant le build ;
- les URLs, breadcrumbs, menus et alternates sont dérivés automatiquement ;
- `guide-pages.generated.js`, s’il est conservé, est clairement un artefact reproductible ;
- un contributeur peut suivre un workflow court sans connaître les détails internes d’Eleventy.

## 9. Conclusion

Il n’est pas nécessaire de réécrire le site. La priorité est de rationaliser la donnée éditoriale autour d’un catalogue par page et par locale, puis de générer les structures actuellement maintenues à plusieurs endroits.

Le meilleur premier investissement est un contrôle `content:check` indépendant du build, suivi du déplacement progressif des métadonnées du guide vers ce catalogue. Cette approche réduit immédiatement les régressions et permet une migration par étapes, sans changer le rendu public ni le layout.

## 10. Mise en œuvre réalisée

Les phases 1 à 3 ont été amorcées dans le dépôt :

- `bun run content:check` contrôle désormais les pages localisées, les fichiers Markdown, les champs obligatoires et les liens internes du guide ;
- `translatedPaths` récupère automatiquement les URLs du catalogue `guide-pages.generated.js` ;
- les préfixes de langue sont configurés dans `localeOptions`, ce qui prépare l’ajout d’une nouvelle langue ;
- `src/_data/translation-status.js` calcule le statut, la révision SHA courte de la source anglaise et la date de modification de chaque traduction ;
- `guideTranslationReport` est disponible dans les données Eleventy des pages du guide ;
- le build lance le contrôle éditorial avant Eleventy ;
- la source de dépendances légales pointe désormais vers `studio/tech-doc/specs/README_DEPENDENCIES.md` et la référence `1.0.0-beta.3`.

Le contrôle signale encore quelques différences de nombre de titres entre anglais et français. Elles sont actuellement des avertissements, car certaines pages utilisent des includes et ne possèdent pas une structure Markdown strictement identique. Après correction de la source technique externe, le build complet passe et génère 94 fichiers.
