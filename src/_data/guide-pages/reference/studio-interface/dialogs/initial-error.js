const page = {
    "layout": "layouts/page.html",
    "locales": {
        "fr": {
            "title": "Dialog Initial error",
            "description": "Dialog d'erreur de démarrage affiché quand Studio ne s'initialise pas.",
            "ui": {
                "backUrl": "/fr/user-guide/reference/studio-interface/#dialogs",
                "backLabel": "Dialogs",
                "overview": "Le dialog Initial error apparaît quand Studio ne parvient pas à finir son démarrage.\n",
                "controls": [
                    {
                        "label": "Error details",
                        "icon": "triangle-exclamation",
                        "type": "Read-only panel",
                        "description": "Affiche l'erreur de démarrage et les informations de diagnostic."
                    },
                    {
                        "label": "Copy details",
                        "icon": "copy",
                        "type": "Button",
                        "description": "Copie les informations d'erreur pour signalement ou debug."
                    },
                    {
                        "label": "Retry",
                        "icon": "arrow-rotate-right",
                        "type": "Button",
                        "description": "Tente de redémarrer Studio."
                    }
                ]
            }
        },
        "en": {
            "title": "Initial error dialog",
            "description": "Startup error dialog shown when the Studio fails to initialize.",
            "ui": {
                "backUrl": "/user-guide/reference/studio-interface/#dialogs",
                "backLabel": "Dialogs",
                "overview": "The Initial error dialog appears when the Studio cannot finish starting. It shows the failure details so you can understand what blocked the session and decide whether to retry.\n",
                "controls": [
                    {
                        "label": "Error details",
                        "icon": "triangle-exclamation",
                        "type": "Read-only panel",
                        "description": "Shows the startup failure and any stack trace or diagnostic text."
                    },
                    {
                        "label": "Copy details",
                        "icon": "copy",
                        "type": "Button",
                        "description": "Copies the error information for reporting or debugging."
                    },
                    {
                        "label": "Retry",
                        "icon": "arrow-rotate-right",
                        "type": "Button",
                        "description": "Tries to start the Studio again."
                    }
                ],
                "notes": [
                    "Use this dialog when the application never reaches the workspace."
                ]
            }
        }
    }
}

export default page
