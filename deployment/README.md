# Site Deployment

## Commandes

Depuis le repo `site` :

```bash
bun run deploy -s
bun run deploy -p
```

Option utile pour valider le packaging local sans SSH :

```bash
bun run deploy -s --dry-run
```

## Comportement

- `bun run deploy -s` build uniquement le repo `site`
- le build Eleventy est copié dans `dist/<release>`
- les métadonnées de déploiement restent dans `dist/<release>.json`, hors de la release publique
- une archive `dist/<release>.zip` est envoyée sur le serveur
- la release distante est déployée dans `staging/site` ou `production/site`
- le lien `current` est mis à jour vers la nouvelle release
- le build de production redirige toutes les pages vers `/registration/` ou `/fr/registration/`, sauf les pages d’inscription elles-mêmes
- le packaging de production vérifie la présence de ces redirections et refuse une release incomplète
- les pages générées restent accessibles sans slash final, par exemple `/registration` et `/fr/registration`
- les builds locaux, test et staging conservent la page d’accueil

## Variables d'environnement

Le mot de passe SSH doit être présent selon la cible :

```bash
export LGS1920_PASSWORD_STAGING="..."
export LGS1920_PASSWORD_PRODUCTION="..."
export LGS1920_PASSWORD_TEST="..."
```
