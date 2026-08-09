const page = {
    "layout": "layouts/page.html",
    "locales": {
        "fr": {
            "title": "Prompt Cesium token",
            "description": "Prompt de jeton affiché quand l'accès Cesium manque ou est invalide.",
            "ui": {
                "backUrl": "/fr/user-guide/reference/studio-interface/#dialogs",
                "backLabel": "Dialogs",
                "overview": "Le prompt Cesium token apparaît quand Studio a besoin d'un jeton Cesium Ion valide.\n",
                "controls": [
                    {
                        "label": "Token field",
                        "icon": "key",
                        "type": "Text field",
                        "description": "Reçoit le jeton Cesium Ion à valider."
                    },
                    {
                        "label": "Validate",
                        "icon": "circle-check",
                        "type": "Button",
                        "description": "Vérifie le jeton et l'enregistre s'il est valide."
                    },
                    {
                        "label": "Cancel",
                        "icon": "xmark",
                        "type": "Button",
                        "description": "Ferme le prompt sans rien enregistrer."
                    }
                ]
            }
        },
        "en": {
            "title": "Cesium token prompt",
            "description": "Token prompt shown when Cesium access is missing or invalid.",
            "ui": {
                "backUrl": "/user-guide/reference/studio-interface/#dialogs",
                "backLabel": "Dialogs",
                "overview": "The Cesium token prompt appears when the Studio needs a valid Cesium Ion token. It blocks the flow until the user provides access or closes the prompt.\n",
                "controls": [
                    {
                        "label": "Token field",
                        "icon": "key",
                        "type": "Text field",
                        "description": "Accepts the Cesium Ion token to be validated."
                    },
                    {
                        "label": "Validate",
                        "icon": "circle-check",
                        "type": "Button",
                        "description": "Checks the token and stores it when it is valid."
                    },
                    {
                        "label": "Cancel",
                        "icon": "xmark",
                        "type": "Button",
                        "description": "Closes the prompt without saving anything."
                    }
                ],
                "notes": [
                    "The prompt appears only when the scene cannot continue without Cesium access."
                ]
            }
        }
    }
}

export default page
