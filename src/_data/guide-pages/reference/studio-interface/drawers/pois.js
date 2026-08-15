const page = {
    "layout": "layouts/page.html",
    "locales": {
        "fr": {
            "title": "Drawer POIs",
            "description": "Édition des points d'intérêt pour marqueurs, annotations et moments du parcours.",
            "ui": {
                "backUrl": "/fr/user-guide/reference/studio-interface/#drawers",
                "backLabel": "Drawers",
                "overview": "Le drawer POIs est l'endroit où éditer les points d'intérêt qui soutiennent le récit du parcours.\n",
                "controls": [
                    {
                        "label": "Title and category fields",
                        "icon": "pen-to-square",
                        "type": "Inputs",
                        "description": "Permet de nommer le POI et de choisir la catégorie la plus adaptée."
                    },
                    {
                        "label": "Coordinates fields",
                        "icon": "map-location-dot",
                        "type": "Inputs",
                        "description": "Permet de relire ou éditer la position et les valeurs associées."
                    },
                    {
                        "label": "Visibility switch",
                        "icon": "eye",
                        "type": "Switch",
                        "description": "Affiche ou masque le POI sans le supprimer du parcours."
                    },
                    {
                        "label": "Focus POI",
                        "icon": "bullseye",
                        "type": "Button",
                        "description": "Centre la caméra sur le POI sélectionné."
                    },
                    {
                        "label": "Description and journey fields",
                        "icon": "align-left",
                        "type": "Fields",
                        "description": "Renseigne le texte du POI et, lorsque le contexte le permet, le parcours auquel il est associé."
                    },
                    {
                        "label": "Coordinates and altitude",
                        "icon": "map-location-dot",
                        "type": "Fields",
                        "description": "Modifie la longitude, la latitude et la hauteur du marqueur. Les boutons de copie permettent de réutiliser les coordonnées."
                    },
                    {
                        "label": "Copy coordinates",
                        "icon": "copy",
                        "type": "Button",
                        "description": "Copie les coordonnées du POI pour les coller dans un autre outil ou champ."
                    },
                    {
                        "label": "Show / Hide Filters",
                        "icon": "filter",
                        "type": "Button",
                        "description": "Affiche ou masque les filtres de liste pour les POIs globaux ou liés à un parcours."
                    },
                    {
                        "label": "Search POIs",
                        "icon": "magnifying-glass",
                        "type": "Field",
                        "description": "Recherche un POI par son contenu dans le panneau de filtres."
                    },
                    {
                        "label": "POI actions",
                        "icons": ["eye", "bullseye", "trash"],
                        "type": "Menu",
                        "description": "Selon l'état du POI, affiche les actions Show/Hide, Focus, Orbit, Copy Coords, Reduce/Expand et Remove."
                    },
                    {
                        "label": "Bulk actions",
                        "icon": "list-check",
                        "type": "Menu",
                        "description": "Applique une action à plusieurs POIs sélectionnés lorsque la sélection multiple est disponible."
                    }
                ],
                "steps": [
                    {
                        "title": "Sélectionner un POI",
                        "description": "Choisissez un marqueur dans la liste, puis utilisez <em>Focus</em> pour le retrouver dans la scène."
                    },
                    {
                        "title": "Modifier ses champs",
                        "description": "Mettez à jour le titre, la description, la catégorie, les coordonnées, l'altitude et le parcours associé."
                    },
                    {
                        "title": "Filtrer la liste",
                        "description": "Ouvrez <em>Show Filters</em>, recherchez un POI et choisissez si les résultats doivent inclure les POIs globaux ou ceux d'un parcours."
                    },
                    {
                        "title": "Utiliser les actions",
                        "description": "Utilisez le menu du POI pour le masquer, le déplacer dans la vue, copier ses coordonnées ou le supprimer."
                    }
                ]
            }
        },
        "en": {
            "title": "POIs drawer",
            "description": "Point of interest editing for markers, annotations, and route story moments.",
            "ui": {
                "backUrl": "/user-guide/reference/studio-interface/#drawers",
                "backLabel": "Drawers",
                "overview": "The POIs drawer is where you edit the points of interest that support the route story. It covers the marker data, the visual state, and the details that keep a POI useful in the scene and in exports.\n",
                "controls": [
                    {
                        "label": "Title and category fields",
                        "icon": "pen-to-square",
                        "type": "Inputs",
                        "description": "Lets you name the POI and choose the category that best describes it."
                    },
                    {
                        "label": "Coordinates fields",
                        "icon": "map-location-dot",
                        "type": "Inputs",
                        "description": "Lets you review or edit the POI position and related location values."
                    },
                    {
                        "label": "Visibility switch",
                        "icon": "eye",
                        "type": "Switch",
                        "description": "Shows or hides the POI without deleting it from the journey."
                    },
                    {
                        "label": "Focus POI",
                        "icon": "bullseye",
                        "type": "Button",
                        "description": "Centers the camera on the selected POI for review or adjustment."
                    },
                    {
                        "label": "Description and journey fields",
                        "icon": "align-left",
                        "type": "Fields",
                        "description": "Stores the POI text and, where relevant, the journey it belongs to."
                    },
                    {
                        "label": "Coordinates and altitude",
                        "icon": "map-location-dot",
                        "type": "Fields",
                        "description": "Edits the marker longitude, latitude, and height. Copy buttons help reuse the coordinates."
                    },
                    {
                        "label": "Copy coordinates",
                        "icon": "copy",
                        "type": "Button",
                        "description": "Copies the POI coordinates so you can reuse them in another tool or field."
                    },
                    {
                        "label": "Show / Hide Filters",
                        "icon": "filter",
                        "type": "Button",
                        "description": "Shows or hides list filters for global POIs or journey-related POIs."
                    },
                    {
                        "label": "Search POIs",
                        "icon": "magnifying-glass",
                        "type": "Field",
                        "description": "Searches the POI list by its content from the filter panel."
                    },
                    {
                        "label": "POI actions",
                        "icons": ["eye", "bullseye", "trash"],
                        "type": "Menu",
                        "description": "Depending on the POI state, provides Show/Hide, Focus, Orbit, Copy Coords, Reduce/Expand, and Remove."
                    },
                    {
                        "label": "Bulk actions",
                        "icon": "list-check",
                        "type": "Menu",
                        "description": "Applies an action to multiple selected POIs when multi-selection is available."
                    }
                ],
                "steps": [
                    {
                        "title": "Select a POI",
                        "description": "Choose a marker in the list, then use <em>Focus</em> to find it in the scene."
                    },
                    {
                        "title": "Edit its fields",
                        "description": "Update the title, description, category, coordinates, altitude, and associated journey."
                    },
                    {
                        "title": "Filter the list",
                        "description": "Open <em>Show Filters</em>, search for a POI, and choose whether global or journey POIs should be included."
                    },
                    {
                        "title": "Use POI actions",
                        "description": "Use the POI menu to hide it, move the view to it, copy its coordinates, or remove it."
                    }
                ],
                "notes": [
                    "Use POIs to support story moments, points of interest, or map annotations.",
                    "Check the POI presentation before export so important markers remain readable."
                ]
            }
        }
    }
}

export default page
