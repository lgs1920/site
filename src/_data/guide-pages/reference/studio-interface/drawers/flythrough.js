const page = {
    "layout": "layouts/page.html",
    "locales": {
        "fr": {
            "title": "Drawer Flythrough",
            "description": "Contrôles de flythrough caméra pour prévisualiser et capturer le mouvement.",
            "ui": {
                "backUrl": "/fr/user-guide/reference/studio-interface/#drawers",
                "backLabel": "Drawers",
                "overview": "Le drawer Flythrough contrôle une séquence de mouvement caméra utilisable pour l'enregistrement ou la prévisualisation d'un déplacement de parcours.\n",
                "controls": [
                    {
                        "label": "Play / stop",
                        "icon": "play",
                        "type": "Button",
                        "description": "Démarre ou arrête le mouvement flythrough."
                    },
                    {
                        "label": "Direction settings",
                        "icon": "arrows-rotate",
                        "type": "Control",
                        "description": "Choisit la façon dont le mouvement tourne autour de la cible courante."
                    },
                    {
                        "label": "Timing settings",
                        "icon": "clock",
                        "type": "Fields",
                        "description": "Ajuste la durée et le rythme du flythrough."
                    },
                    {
                        "label": "Sync options",
                        "icon": "link-simple",
                        "type": "Switches",
                        "description": "Lie le flythrough à d'autres états de capture ou vidéo quand c'est supporté."
                    }
                ],
                "notes": [
                    "Utilisez ce drawer quand le mouvement caméra fait partie de la sortie finale."
                ]
            }
        },
        "en": {
            "title": "Flythrough drawer",
            "description": "Camera flythrough controls for previewing and capturing motion.",
            "ui": {
                "backUrl": "/user-guide/reference/studio-interface/#drawers",
                "backLabel": "Drawers",
                "overview": "The Flythrough drawer controls a camera motion sequence that can be used for recording or previewing route movement. It keeps the scene visible while you tune how the movement behaves.\n",
                "controls": [
                    {
                        "label": "Play / stop",
                        "icon": "play",
                        "type": "Button",
                        "description": "Starts or stops the flythrough movement."
                    },
                    {
                        "label": "Direction settings",
                        "icon": "arrows-rotate",
                        "type": "Control",
                        "description": "Chooses how the movement runs around the current target."
                    },
                    {
                        "label": "Timing settings",
                        "icon": "clock",
                        "type": "Fields",
                        "description": "Adjusts the duration and pacing of the flythrough."
                    },
                    {
                        "label": "Sync options",
                        "icon": "link-simple",
                        "type": "Switches",
                        "description": "Links the flythrough with other capture or video state when supported."
                    }
                ],
                "notes": [
                    "Use this drawer when the camera movement is part of the final output.",
                    "Check the scene, widgets, and capture area before starting the movement."
                ]
            }
        }
    }
}

export default page
