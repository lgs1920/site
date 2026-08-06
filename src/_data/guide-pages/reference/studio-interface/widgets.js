const page = {
    "layout": "layouts/page.html",
    "locales": {
        "fr": {
            "title": "Widgets",
            "description": "Référence des overlays visibles attachés à la scène Studio ou au board d'export.",
            "ui": {
                "backUrl": "/fr/user-guide/reference/studio-interface/#widgets",
                "backLabel": "Utiliser Studio",
                "overview": "Les widgets sont les overlays live posés au-dessus de la scène ou du board d'export. Ils montrent du contexte, un état ou des données de synthèse pendant que la carte reste visible dessous.\n",
                "controls": [
                    {
                        "label": "Compass",
                        "icon": "compass",
                        "type": "Widget",
                        "description": "Affiche le cap et l'orientation pour confirmer comment la scène est tournée."
                    },
                    {
                        "label": "Credits",
                        "icon": "user",
                        "type": "Widget",
                        "description": "Affiche les crédits cartographiques et sources. Gardez-le visible quand l'export doit conserver l'attribution."
                    },
                    {
                        "label": "Elevation Profile",
                        "icon": "chart-fft",
                        "type": "Widget",
                        "description": "Affiche le profil altimétrique du parcours et aide à vérifier sa lisibilité dans la zone de capture."
                    },
                    {
                        "label": "Text",
                        "icon": "text",
                        "type": "Widget",
                        "description": "Ajoute un label, une note ou un callout personnalisé à la scène ou au board."
                    },
                    {
                        "label": "Journey Stats",
                        "icon": "route",
                        "type": "Widget",
                        "description": "Affiche distance, dénivelé, durée et données de synthèse du parcours actif."
                    }
                ],
                "notes": [
                    "Les widgets peuvent être déplacés, redimensionnés, tournés ou masqués selon leurs capacités.",
                    "Utilisez le drawer Widgets editor quand vous devez changer la configuration du widget sélectionné.",
                    "Vérifiez toujours la taille finale de capture avant d'exporter."
                ]
            }
        },
        "en": {
            "title": "Widgets",
            "description": "Reference for the visible overlays that stay attached to the Studio scene or export board.",
            "ui": {
                "backUrl": "/user-guide/reference/studio-interface/#widgets",
                "backLabel": "Use the Studio",
                "overview": "Widgets are the live overlays that sit on top of the scene or the export board. They show context, status, or summary data while the map stays visible underneath.\n",
                "controls": [
                    {
                        "label": "Compass",
                        "icon": "compass",
                        "type": "Widget",
                        "description": "Shows heading and orientation so you can confirm how the scene is turned."
                    },
                    {
                        "label": "Credits",
                        "icon": "user",
                        "type": "Widget",
                        "description": "Shows map and source credits. Keep it visible when the output must keep attribution in frame."
                    },
                    {
                        "label": "Elevation Profile",
                        "icon": "chart-fft",
                        "type": "Widget",
                        "description": "Shows the route elevation shape and helps you check profile readability in the capture area."
                    },
                    {
                        "label": "Text",
                        "icon": "text",
                        "type": "Widget",
                        "description": "Adds a custom label, note, or callout to the scene or journey board."
                    },
                    {
                        "label": "Journey Stats",
                        "icon": "route",
                        "type": "Widget",
                        "description": "Shows distance, elevation, duration, and summary data for the active journey."
                    }
                ],
                "notes": [
                    "Widgets can be moved, resized, rotated, or hidden depending on their capabilities.",
                    "Use the widget editor drawer when you need to change the configuration of a selected widget.",
                    "Check the final capture size, not just the editing zoom, before exporting."
                ]
            }
        }
    }
}

export default page
