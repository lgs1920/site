const page = {
    "layout": "layouts/page.html",
    "locales": {
        "fr": {
            "title": "Modifier Les Parcours Et Traces",
            "description": "Modifier les informations de parcours, le style des traces et la visibilité.",
            "hero": {
                "video": false,
                "className": "guide-hero",
                "badge": "Étape principale",
                "kicker": "Parcours",
                "title": "Modifier l'histoire du parcours.",
                "lead": "Utilisez les parcours pour les réglages globaux et les traces pour la présentation des lignes."
            },
            "sectionNav": [
                {
                    "id": "parcours-vs-trace",
                    "label": "Parcours vs trace",
                    "summary": "Ce que chaque objet contrôle"
                },
                {
                    "id": "ouvrir-track-editor",
                    "label": "Ouvrir l'éditeur",
                    "summary": "Flux depuis le bouton"
                },
                {
                    "id": "modifier-le-parcours",
                    "label": "Modifier le parcours",
                    "summary": "Réglages globaux"
                },
                {
                    "id": "modifier-les-traces",
                    "label": "Modifier les traces",
                    "summary": "Style et données"
                }
            ]
        },
        "en": {
            "title": "Edit Journeys And Tracks",
            "description": "Edit journey-level information, track styling, visibility, reporting context, and route presentation in LGS1920 Studio.",
            "hero": {
                "video": false,
                "className": "guide-hero",
                "badge": "Main step",
                "kicker": "Journeys",
                "title": "Edit the route story.",
                "lead": "Use journeys for story-level settings and tracks for line-level presentation.",
                "highlights": [
                    {
                        "icon": "route",
                        "label": "Journey selection",
                        "variant": "regular"
                    },
                    {
                        "icon": "pen-to-square",
                        "label": "Metadata and style",
                        "variant": "regular"
                    },
                    {
                        "icon": "eye",
                        "label": "Visibility controls",
                        "variant": "regular"
                    }
                ]
            },
            "sectionNav": [
                {
                    "id": "journey-vs-track",
                    "label": "Journey vs track",
                    "summary": "What each object controls"
                },
                {
                    "id": "edit-the-journey",
                    "label": "Edit the journey",
                    "summary": "Story-level settings"
                },
                {
                    "id": "edit-tracks",
                    "label": "Edit tracks",
                    "summary": "Path styling and data"
                },
                {
                    "id": "report-readiness",
                    "label": "Report readiness",
                    "summary": "Metadata, statistics, and POIs"
                }
            ]
        }
    }
}

export default page
