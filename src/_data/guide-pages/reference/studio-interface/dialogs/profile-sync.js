const page = {
    "layout": "layouts/page.html",
    "locales": {
        "fr": {
            "title": "Dialog Profile sync",
            "description": "Actions de profil liées à la synchronisation et état enregistré du profil.",
            "ui": {
                "backUrl": "/fr/user-guide/reference/studio-interface/#dialogs",
                "backLabel": "Dialogs",
                "overview": "Le dialog Profile sync gère l'état de profil navigateur que Studio utilise pour le comportement de synchronisation.\n",
                "controls": [
                    {
                        "label": "Sync switch",
                        "icon": "link",
                        "type": "Switch",
                        "description": "Active ou désactive la synchronisation du profil quand la fonctionnalité est disponible."
                    },
                    {
                        "label": "Save",
                        "icon": "floppy-disk",
                        "type": "Button",
                        "description": "Enregistre l'état courant du profil."
                    },
                    {
                        "label": "Clear",
                        "icon": "trash",
                        "type": "Button",
                        "description": "Supprime les données de profil courantes du navigateur."
                    },
                    {
                        "label": "Close",
                        "icon": "xmark",
                        "type": "Button",
                        "description": "Ferme le dialog et revient à l'espace de travail."
                    }
                ]
            }
        },
        "en": {
            "title": "Profile sync dialog",
            "description": "Sync-related profile actions and saved profile state.",
            "ui": {
                "backUrl": "/user-guide/reference/studio-interface/#dialogs",
                "backLabel": "Dialogs",
                "overview": "The Profile sync dialog manages the browser profile state that the Studio uses for sync-related behavior. It is where you review or reset profile data tied to the current session.\n",
                "controls": [
                    {
                        "label": "Sync switch",
                        "icon": "link",
                        "type": "Switch",
                        "description": "Turns the profile sync behavior on or off when the feature is available."
                    },
                    {
                        "label": "Save",
                        "icon": "floppy-disk",
                        "type": "Button",
                        "description": "Stores the current profile state."
                    },
                    {
                        "label": "Clear",
                        "icon": "trash",
                        "type": "Button",
                        "description": "Removes the current profile data from the browser profile."
                    },
                    {
                        "label": "Close",
                        "icon": "xmark",
                        "type": "Button",
                        "description": "Closes the dialog and returns to the workspace."
                    }
                ],
                "notes": [
                    "This dialog is part of profile management, not route editing."
                ]
            }
        }
    }
}

export default page
