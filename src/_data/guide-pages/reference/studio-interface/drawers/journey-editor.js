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
                    },
                    {
                        "label": "Data / Edit / POIs tabs",
                        "icon": "table-columns",
                        "type": "Tabs",
                        "description": "Change de famille de réglages entre les données du parcours, son édition et ses points d'intérêt."
                    },
                    {
                        "label": "Elevation source",
                        "icon": "mountain-sun",
                        "type": "Selector",
                        "description": "Choisit la source d'altitude utilisée pour les données et les statistiques du parcours."
                    },
                    {
                        "label": "Activity",
                        "icon": "person-hiking",
                        "type": "Selector",
                        "description": "Associe une activité au parcours pour guider les statistiques et la présentation."
                    },
                    {
                        "label": "Export Journey",
                        "icon": "file-export",
                        "type": "Button",
                        "description": "Ouvre les options d'export en fichier ou en rapport. Le nom de fichier et le format sont ensuite configurables."
                    },
                    {
                        "label": "Remove Journey",
                        "icon": "trash",
                        "type": "Button",
                        "description": "Supprime le parcours actif après confirmation. Cette action ne sert pas à masquer temporairement le parcours."
                    }
                ],
                "steps": [
                    {
                        "title": "Choisir le parcours",
                        "description": "Sélectionnez le parcours à éditer dans le sélecteur, puis utilisez le bouton d'import si vous devez charger un nouveau parcours."
                    },
                    {
                        "title": "Modifier les données",
                        "description": "Utilisez <em>Data</em> pour choisir la source d'altitude et vérifier les informations calculées."
                    },
                    {
                        "title": "Régler la présentation",
                        "description": "Dans <em>Edit</em>, ajustez le titre, la description, le style de trace, la visibilité et le cadrage caméra."
                    },
                    {
                        "title": "Exporter ou supprimer",
                        "description": "Utilisez <em>Export Journey</em> pour produire un fichier ou un rapport. Réservez <em>Remove Journey</em> à une suppression confirmée."
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
                    },
                    {
                        "label": "Data / Edit / POIs tabs",
                        "icon": "table-columns",
                        "type": "Tabs",
                        "description": "Switches between journey data, editing controls, and points of interest."
                    },
                    {
                        "label": "Elevation source",
                        "icon": "mountain-sun",
                        "type": "Selector",
                        "description": "Selects the elevation source used by journey data and statistics."
                    },
                    {
                        "label": "Activity",
                        "icon": "person-hiking",
                        "type": "Selector",
                        "description": "Assigns an activity to guide the journey statistics and presentation."
                    },
                    {
                        "label": "Export Journey",
                        "icon": "file-export",
                        "type": "Button",
                        "description": "Opens export choices for a file or a report. You can then set the file name and format."
                    },
                    {
                        "label": "Remove Journey",
                        "icon": "trash",
                        "type": "Button",
                        "description": "Deletes the active journey after confirmation. Use visibility controls when you only need to hide it."
                    }
                ],
                "steps": [
                    {
                        "title": "Choose the journey",
                        "description": "Select the journey to edit, then use the import button if you need to load another journey."
                    },
                    {
                        "title": "Edit the data",
                        "description": "Use <em>Data</em> to choose the elevation source and review calculated information."
                    },
                    {
                        "title": "Tune the presentation",
                        "description": "In <em>Edit</em>, adjust the title, description, track style, visibility, and camera framing."
                    },
                    {
                        "title": "Export or remove",
                        "description": "Use <em>Export Journey</em> to create a file or report. Reserve <em>Remove Journey</em> for a confirmed deletion."
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
