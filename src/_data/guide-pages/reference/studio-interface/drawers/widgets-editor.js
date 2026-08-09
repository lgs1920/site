const page = {
    "layout": "layouts/page.html",
    "locales": {
        "fr": {
            "title": "Drawer Widgets editor",
            "description": "Drawer de configuration détaillée du widget sélectionné.",
            "ui": {
                "backUrl": "/fr/user-guide/reference/studio-interface/#drawers",
                "backLabel": "Drawers",
                "overview": "Le drawer Widgets editor change la configuration du widget sélectionné. Il n'en change pas la position directe; il modifie son apparence et son comportement.\n",
                "controls": [
                    {
                        "label": "Position controls",
                        "icon": "arrows-up-down-left-right",
                        "type": "Fields",
                        "description": "Change la position du widget dans la scène ou sur le board."
                    },
                    {
                        "label": "Size controls",
                        "icon": "expand",
                        "type": "Fields",
                        "description": "Change l'échelle du widget et l'espace qu'il occupe."
                    },
                    {
                        "label": "Rotation controls",
                        "icon": "rotate-right",
                        "type": "Fields",
                        "description": "Change l'orientation des widgets qui supportent la rotation."
                    },
                    {
                        "label": "Style and visibility options",
                        "icon": "palette",
                        "type": "Switches",
                        "description": "Ajuste le traitement visuel et les options spécifiques."
                    }
                ]
            }
        },
        "en": {
            "title": "Widgets editor drawer",
            "description": "Detailed configuration drawer for the selected widget.",
            "ui": {
                "backUrl": "/user-guide/reference/studio-interface/#drawers",
                "backLabel": "Drawers",
                "overview": "The Widgets editor drawer changes the configuration of the selected widget. It does not move the widget itself; it edits how the widget looks and behaves in the scene or export board.\n",
                "controls": [
                    {
                        "label": "Position controls",
                        "icon": "arrows-up-down-left-right",
                        "type": "Fields",
                        "description": "Changes where the widget sits in the scene or on the board."
                    },
                    {
                        "label": "Size controls",
                        "icon": "expand",
                        "type": "Fields",
                        "description": "Changes the widget scale and the space it occupies."
                    },
                    {
                        "label": "Rotation controls",
                        "icon": "rotate-right",
                        "type": "Fields",
                        "description": "Changes the orientation of widgets that support rotation."
                    },
                    {
                        "label": "Style and visibility options",
                        "icon": "palette",
                        "type": "Switches",
                        "description": "Adjusts the visual treatment and shows or hides widget-specific options."
                    }
                ],
                "notes": [
                    "This drawer is the configuration surface for a selected widget.",
                    "Use it after selecting the widget you want to tune in the scene."
                ]
            }
        }
    }
}

export default page
