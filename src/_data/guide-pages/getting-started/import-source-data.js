const page = {
    "layout": "layouts/page.html",
    "locales": {
        "fr": {
            "title": "Importer Un Parcours",
            "description": "Charger des données GeoJSON, GPX ou KML dans LGS1920 Studio et vérifier le résultat.",
            "hero": {
                "video": false,
                "className": "guide-hero",
                "badge": "Étape principale",
                "kicker": "Import",
                "title": "Importer un parcours dans Studio.",
                "lead": "Chargez des fichiers GeoJSON, GPX ou KML et confirmez que le parcours est prêt à être modifié."
            },
            "sectionNav": [
                {
                    "id": "fichiers-pris-en-charge",
                    "label": "Fichiers pris en charge",
                    "summary": "Formats source"
                },
                {
                    "id": "checklist-import",
                    "label": "Checklist d'import",
                    "summary": "Ce qu'il faut vérifier"
                },
                {
                    "id": "apres-import",
                    "label": "Après l'import",
                    "summary": "Actions suivantes"
                }
            ]
        },
        "en": {
            "title": "Import A Route",
            "description": "Load GeoJSON, GPX, or KML route data into LGS1920 Studio and verify the imported journey.",
            "hero": {
                "video": false,
                "className": "guide-hero",
                "badge": "Main step",
                "kicker": "Import",
                "title": "Import a route into the Studio.",
                "lead": "Load GeoJSON, GPX, or KML files and confirm that the journey is ready to edit.",
                "highlights": [
                    {
                        "icon": "file-import",
                        "label": "GeoJSON, GPX, KML",
                        "variant": "regular"
                    },
                    {
                        "icon": "route",
                        "label": "Journey creation",
                        "variant": "regular"
                    },
                    {
                        "icon": "bullseye",
                        "label": "First focus check",
                        "variant": "regular"
                    }
                ]
            },
            "sectionNav": [
                {
                    "id": "supported-files",
                    "label": "Supported files",
                    "summary": "Source data formats"
                },
                {
                    "id": "import-checklist",
                    "label": "Import checklist",
                    "summary": "What to verify"
                },
                {
                    "id": "after-import",
                    "label": "After import",
                    "summary": "Next user actions"
                }
            ]
        }
    }
}

export default page
