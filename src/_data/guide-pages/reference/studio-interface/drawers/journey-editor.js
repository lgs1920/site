const page = {
    "layout": "layouts/page.html",
    "locales": {
        "fr": {
            "title": "Drawer Journey editor",
            "description": "Métadonnées de parcours, réglages de traces, visibilité et caméra.",
            "ui": {
                "backUrl": "/fr/user-guide/reference/studio-interface/#drawers",
                "backLabel": "Drawers",
                "overview": "Le drawer Journey editor porte les réglages de niveau parcours pour le parcours actif. C'est aussi là que vivent les contrôles de trace.\n",
                "controls": [
                    {
                        "label": "Title and description fields",
                        "icon": "pen-to-square",
                        "type": "Inputs",
                        "description": "Permet de renommer le parcours et d'affiner la description."
                    },
                    {
                        "label": "Track selector",
                        "icon": "route",
                        "type": "Selector",
                        "description": "Choisit la trace du parcours actif à éditer."
                    },
                    {
                        "label": "Track visibility switch",
                        "icon": "eye",
                        "type": "Switch",
                        "description": "Affiche ou masque la trace sélectionnée sans la supprimer."
                    },
                    {
                        "label": "Track style fields",
                        "icon": "paintbrush",
                        "type": "Fields",
                        "description": "Ajuste couleur, épaisseur et réglages d'affichage liés."
                    },
                    {
                        "label": "Visibility switch",
                        "icon": "eye",
                        "type": "Switch",
                        "description": "Affiche ou masque le contenu au niveau parcours."
                    },
                    {
                        "label": "Focus journey",
                        "icon": "bullseye",
                        "type": "Button",
                        "description": "Centre la scène sur le parcours courant pour vérifier le cadrage."
                    },
                    {
                        "label": "Camera and movement settings",
                        "icon": "camera",
                        "type": "Fields",
                        "description": "Ajuste les valeurs caméra utiles à la présentation finale."
                    }
                ]
            }
        },
        "en": {
            "title": "Journey editor drawer",
            "description": "Journey-level metadata, track settings, visibility, and camera-related settings.",
            "ui": {
                "backUrl": "/user-guide/reference/studio-interface/#drawers",
                "backLabel": "Drawers",
                "overview": "The Journey editor drawer holds the story-level settings for the active journey. It is also where the track controls live, so the path styling and visibility flow through the same surface after you open the Journey button.\n",
                "controls": [
                    {
                        "label": "Title and description fields",
                        "icon": "pen-to-square",
                        "type": "Inputs",
                        "description": "Lets you rename the journey and refine the story description."
                    },
                    {
                        "label": "Track selector",
                        "icon": "route",
                        "type": "Selector",
                        "description": "Chooses which track inside the active journey you want to edit."
                    },
                    {
                        "label": "Track visibility switch",
                        "icon": "eye",
                        "type": "Switch",
                        "description": "Shows or hides the selected track without removing it."
                    },
                    {
                        "label": "Track style fields",
                        "icon": "paintbrush",
                        "type": "Fields",
                        "description": "Adjusts line color, thickness, and related display settings for the selected track."
                    },
                    {
                        "label": "Visibility switch",
                        "icon": "eye",
                        "type": "Switch",
                        "description": "Shows or hides the journey-level content without removing the data."
                    },
                    {
                        "label": "Focus journey",
                        "icon": "bullseye",
                        "type": "Button",
                        "description": "Centers the scene on the current journey so you can verify the framing."
                    },
                    {
                        "label": "Camera and movement settings",
                        "icon": "camera",
                        "type": "Fields",
                        "description": "Adjusts the camera-related values that support the final presentation."
                    }
                ],
                "notes": [
                    "Journey edits are story-level changes, not single-object tweaks.",
                    "Track editing is reached from the same drawer after you select the active track.",
                    "Review metadata and statistics here before generating a report or capture."
                ]
            }
        }
    }
}

export default page
