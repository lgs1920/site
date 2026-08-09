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
