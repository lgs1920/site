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
                    },
                    {
                        "label": "Base maps / Overlays / Terrains",
                        "icon": "table-columns",
                        "type": "Tabs",
                        "description": "Filtre la liste entre fonds de carte, couches superposées et sources de terrain."
                    },
                    {
                        "label": "Sort providers / Sort alphabetically",
                        "icons": ["arrow-down-a-z", "arrow-down-1-9"],
                        "type": "Buttons",
                        "description": "Change l'ordre d'affichage des sources par fournisseur ou par ordre alphabétique."
                    },
                    {
                        "label": "Color adjustments",
                        "icon": "sliders",
                        "type": "Button",
                        "description": "Affiche ou masque les réglages de couleur lorsque la source permet de les modifier."
                    },
                    {
                        "label": "Filters",
                        "icon": "filter",
                        "type": "Button",
                        "description": "Affiche ou masque les filtres de la liste des sources. Le bouton signale lorsqu'un filtre est actif."
                    },
                    {
                        "label": "Update Token / Remove Token",
                        "icons": ["key", "trash"],
                        "type": "Actions",
                        "description": "Ouvre la saisie du token d'un fournisseur ou supprime un token enregistré. La suppression demande une confirmation."
                    },
                    {
                        "label": "Paste Token/API key",
                        "icon": "key",
                        "type": "Field",
                        "description": "Saisit une clé ou un token de fournisseur dans le modal d'authentification. Les liens vers la documentation et le fournisseur sont disponibles dans ce modal."
                    },
                    {
                        "label": "Cancel / Validate",
                        "icons": ["xmark", "check"],
                        "type": "Buttons",
                        "description": "Ferme le modal d'authentification sans enregistrer ou valide le token saisi."
                    }
                ],
                "steps": [
                    {
                        "title": "Choisir une famille de sources",
                        "description": "Ouvrez l'onglet <em>Base maps</em>, <em>Overlays</em> ou <em>Terrains</em>, puis sélectionnez une source dans la liste."
                    },
                    {
                        "title": "Filtrer et trier",
                        "description": "Utilisez <em>Filters</em> pour réduire la liste et les commandes de tri pour retrouver rapidement un fournisseur."
                    },
                    {
                        "title": "Authentifier une source",
                        "description": "Choisissez <em>Update Token</em>, consultez les liens du modal si nécessaire, saisissez la clé puis cliquez sur <em>Validate</em>."
                    },
                    {
                        "title": "Vérifier l'affichage",
                        "description": "Activez la visibilité et, si disponible, les réglages de couleur. Consultez <em>Disclaimer</em> avant d'utiliser une source protégée."
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
                    },
                    {
                        "label": "Base maps / Overlays / Terrains",
                        "icon": "table-columns",
                        "type": "Tabs",
                        "description": "Filters the list between base maps, overlay layers, and terrain sources."
                    },
                    {
                        "label": "Sort providers / Sort alphabetically",
                        "icons": ["arrow-down-a-z", "arrow-down-1-9"],
                        "type": "Buttons",
                        "description": "Changes the source order by provider or alphabetically."
                    },
                    {
                        "label": "Color adjustments",
                        "icon": "sliders",
                        "type": "Button",
                        "description": "Shows or hides color adjustments when the selected source supports them."
                    },
                    {
                        "label": "Filters",
                        "icon": "filter",
                        "type": "Button",
                        "description": "Shows or hides the source-list filters. The button indicates when a filter is active."
                    },
                    {
                        "label": "Update Token / Remove Token",
                        "icons": ["key", "trash"],
                        "type": "Actions",
                        "description": "Opens provider-token entry or removes a saved token. Removal requires confirmation."
                    },
                    {
                        "label": "Paste Token/API key",
                        "icon": "key",
                        "type": "Field",
                        "description": "Enters a provider key or token in the authentication modal. The modal also links to provider documentation and the provider website."
                    },
                    {
                        "label": "Cancel / Validate",
                        "icons": ["xmark", "check"],
                        "type": "Buttons",
                        "description": "Closes the authentication modal without saving or validates the entered token."
                    }
                ],
                "steps": [
                    {
                        "title": "Choose a source family",
                        "description": "Open <em>Base maps</em>, <em>Overlays</em>, or <em>Terrains</em>, then select a source from the list."
                    },
                    {
                        "title": "Filter and sort",
                        "description": "Use <em>Filters</em> to narrow the list and the sort controls to find a provider quickly."
                    },
                    {
                        "title": "Authenticate a source",
                        "description": "Select <em>Update Token</em>, follow the modal links if needed, enter the key, and select <em>Validate</em>."
                    },
                    {
                        "title": "Check the display",
                        "description": "Turn visibility on and use color adjustments when available. Read the <em>Disclaimer</em> before using a protected source."
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
