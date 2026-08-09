const page = {
    "layout": "layouts/page.html",
    "locales": {
        "fr": {
            "title": "Drawer Layers",
            "description": "Gestion des sources cartographiques et de terrain pour la scène Studio.",
            "ui": {
                "backUrl": "/fr/user-guide/reference/studio-interface/#drawers",
                "backLabel": "Drawers",
                "overview": "Le drawer Layers gère les sources de données qui définissent la carte et le terrain visibles.\n",
                "screenshot": {
                    "src": "/src/assets/media/user-guide/layers-drawer-en.svg",
                    "alt": "Illustration de type capture d'écran du drawer Layers dans Studio.",
                    "description": "La capture montre le drawer Layers ouvert avec la liste des couches, le terrain et le bouton de disclaimer.",
                    "annotations": [
                        {
                            "label": "Bouton disclaimer",
                            "description": "Ouvre l'information de couche avant d'utiliser une source protégée."
                        },
                        {
                            "label": "Liste des sources",
                            "description": "Présente les couches de base et les terrains disponibles."
                        },
                        {
                            "label": "Switch de visibilité",
                            "description": "Active ou désactive la source sélectionnée dans la scène."
                        }
                    ]
                },
                "controls": [
                    {
                        "label": "Layer disclaimer",
                        "icon": "bell-exclamation",
                        "type": "Button",
                        "description": "Ouvre le modal d'information de couche pour lire les avertissements spécifiques à la source."
                    },
                    {
                        "label": "Layers and terrains list",
                        "icon": "layer-group",
                        "type": "List",
                        "description": "Affiche les fonds de carte et terrains disponibles avec leur état d'accès et de visibilité."
                    },
                    {
                        "label": "Source visibility",
                        "icon": "eye",
                        "type": "Switch",
                        "description": "Active ou désactive une couche ou une source de terrain dans la scène courante."
                    }
                ],
                "notes": [
                    "Utilisez ce drawer quand l'utilisateur doit changer la base cartographique ou relire des notes d'accès aux données."
                ]
            }
        },
        "en": {
            "title": "Layers drawer",
            "description": "Map and terrain source management for the Studio scene.",
            "ui": {
                "backUrl": "/user-guide/reference/studio-interface/#drawers",
                "backLabel": "Drawers",
                "overview": "The Layers drawer manages the data sources that define the visible map and terrain. It is where you review what the scene is drawing and how the background data is sourced.\n",
                "screenshot": {
                    "src": "/src/assets/media/user-guide/layers-drawer-en.svg",
                    "alt": "Screenshot-style illustration of the Layers drawer in Studio.",
                    "description": "The screenshot shows the Layers drawer open with the layer list, terrain source, and disclaimer button in view.",
                    "annotations": [
                        {
                            "label": "Disclaimer button",
                            "description": "Opens source notes before you use a protected layer."
                        },
                        {
                            "label": "Source list",
                            "description": "Shows the available base layers and terrain sources."
                        },
                        {
                            "label": "Visibility switch",
                            "description": "Turns the selected source on or off in the scene."
                        }
                    ]
                },
                "controls": [
                    {
                        "label": "Layer disclaimer",
                        "icon": "bell-exclamation",
                        "type": "Button",
                        "description": "Opens the layer information modal so the user can read source-specific warnings."
                    },
                    {
                        "label": "Layers and terrains list",
                        "icon": "layer-group",
                        "type": "List",
                        "description": "Shows the available base layers and terrain sources with their access and visibility state."
                    },
                    {
                        "label": "Source visibility",
                        "icon": "eye",
                        "type": "Switch",
                        "description": "Turns a layer or terrain source on or off in the current scene."
                    }
                ],
                "notes": [
                    "Use this drawer when the user needs to change the map foundation or review data access notes.",
                    "The layer information modal and layer token modal belong to this drawer-driven workflow."
                ]
            }
        }
    }
}

export default page
