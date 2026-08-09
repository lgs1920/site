const page = {
    "layout": "layouts/page.html",
    "locales": {
        "fr": {
            "title": "Résoudre Les Problèmes Courants",
            "description": "Résoudre les problèmes fréquents d'import, de jetons, de widgets et de démarrage.",
            "hero": {
                "video": false,
                "className": "guide-hero",
                "badge": "Aide",
                "kicker": "Problèmes",
                "title": "Débloquer rapidement la situation.",
                "lead": "Utilisez cette page quand Studio demande un jeton, n'importe pas de données ou bloque un export."
            },
            "sectionNav": [
                {
                    "id": "problemes-import",
                    "label": "Problèmes d'import",
                    "summary": "Fichiers de parcours"
                },
                {
                    "id": "problemes-jetons",
                    "label": "Problèmes de jetons",
                    "summary": "Cesium et couches"
                },
                {
                    "id": "problemes-export",
                    "label": "Problèmes d'export",
                    "summary": "Widgets et médias"
                }
            ]
        },
        "en": {
            "title": "Fix Common Problems",
            "description": "Resolve common import, token, layer, widget, startup, and backend issues.",
            "hero": {
                "video": false,
                "className": "guide-hero",
                "badge": "Help",
                "kicker": "Problems",
                "title": "Get unstuck quickly.",
                "lead": "Use this page when the Studio asks for a token, cannot import data, or blocks an export.",
                "highlights": [
                    {
                        "icon": "triangle-exclamation",
                        "label": "Errors",
                        "variant": "regular"
                    },
                    {
                        "icon": "key",
                        "label": "Tokens",
                        "variant": "regular"
                    },
                    {
                        "icon": "box-exclamation",
                        "label": "Widgets",
                        "variant": "regular"
                    }
                ]
            },
            "sectionNav": [
                {
                    "id": "import-problems",
                    "label": "Import problems",
                    "summary": "Route file issues"
                },
                {
                    "id": "token-problems",
                    "label": "Token problems",
                    "summary": "Cesium and layers"
                },
                {
                    "id": "export-problems",
                    "label": "Export problems",
                    "summary": "Widgets and media"
                },
                {
                    "id": "app-problems",
                    "label": "App problems",
                    "summary": "Startup and backend"
                }
            ]
        }
    }
}

export default page
