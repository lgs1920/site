const page = {
    "layout": "layouts/page.html",
    "locales": {
        "fr": {
            "title": "Modal Layer token",
            "description": "Prompt de jeton d'accès pour les couches ou terrains protégés.",
            "ui": {
                "backUrl": "/fr/user-guide/reference/studio-interface/drawers/layers/",
                "backLabel": "Drawer Layers",
                "overview": "Le modal Layer token apparaît quand une couche ou une source de terrain protégée demande un jeton d'accès.\n",
                "controls": [
                    {
                        "label": "Token field",
                        "icon": "key",
                        "type": "Text field",
                        "description": "Reçoit le jeton d'accès pour la source sélectionnée."
                    },
                    {
                        "label": "Validate",
                        "icon": "circle-check",
                        "type": "Button",
                        "description": "Vérifie le jeton et déverrouille la source s'il est valide."
                    },
                    {
                        "label": "Cancel",
                        "icon": "xmark",
                        "type": "Button",
                        "description": "Ferme le modal sans enregistrer de jeton."
                    }
                ]
            }
        },
        "en": {
            "title": "Layer token modal",
            "description": "Access token prompt for protected layer or terrain sources.",
            "ui": {
                "backUrl": "/user-guide/reference/studio-interface/drawers/layers/",
                "backLabel": "Layers drawer",
                "overview": "The Layer token modal appears when a protected layer or terrain source needs an access token. It keeps the token request tied to the source that needs it.\n",
                "controls": [
                    {
                        "label": "Token field",
                        "icon": "key",
                        "type": "Text field",
                        "description": "Accepts the access token for the selected layer or terrain source."
                    },
                    {
                        "label": "Validate",
                        "icon": "circle-check",
                        "type": "Button",
                        "description": "Checks the token and unlocks the source when it is valid."
                    },
                    {
                        "label": "Cancel",
                        "icon": "xmark",
                        "type": "Button",
                        "description": "Closes the modal without saving a token."
                    }
                ],
                "notes": [
                    "Use the token modal only for protected source access."
                ]
            }
        }
    }
}

export default page
