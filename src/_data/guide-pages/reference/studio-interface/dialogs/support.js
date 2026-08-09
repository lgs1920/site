const page = {
    "layout": "layouts/page.html",
    "locales": {
        "fr": {
            "title": "Dialog Support",
            "description": "Dialog d'aide qui expose les informations de support de Studio.",
            "ui": {
                "backUrl": "/fr/user-guide/reference/studio-interface/#dialogs",
                "backLabel": "Dialogs",
                "overview": "Le dialog Support fournit de l'aide sans changer la scène.\n",
                "controls": [
                    {
                        "label": "Help content",
                        "icon": "message-question",
                        "type": "Read-only panel",
                        "description": "Affiche les informations de support, liens ou notes d'usage."
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
            "title": "Support dialog",
            "description": "Help dialog that exposes the Studio support information.",
            "ui": {
                "backUrl": "/user-guide/reference/studio-interface/#dialogs",
                "backLabel": "Dialogs",
                "overview": "The Support dialog provides help text without changing the scene. Use it when the user needs guidance or a support entry point while staying inside the Studio.\n",
                "controls": [
                    {
                        "label": "Help content",
                        "icon": "message-question",
                        "type": "Read-only panel",
                        "description": "Shows the support information, links, or usage notes."
                    },
                    {
                        "label": "Close",
                        "icon": "xmark",
                        "type": "Button",
                        "description": "Closes the dialog and returns to the workspace."
                    }
                ],
                "notes": [
                    "This is a help surface, not an editing surface."
                ]
            }
        }
    }
}

export default page
