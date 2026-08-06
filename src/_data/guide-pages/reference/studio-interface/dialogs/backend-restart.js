const page = {
    "layout": "layouts/page.html",
    "locales": {
        "fr": {
            "title": "Dialog Backend restart",
            "description": "Dialog d'état affiché pendant le redémarrage du backend.",
            "ui": {
                "backUrl": "/fr/user-guide/reference/studio-interface/#dialogs",
                "backLabel": "Dialogs",
                "overview": "Le dialog Backend restart apparaît quand le backend redémarre ou se reconnecte.\n",
                "controls": [
                    {
                        "label": "Status text",
                        "icon": "server",
                        "type": "Read-only panel",
                        "description": "Explique que le backend redémarre ou est temporairement indisponible."
                    },
                    {
                        "label": "Retry",
                        "icon": "arrow-rotate-right",
                        "type": "Button",
                        "description": "Vérifie à nouveau la disponibilité du backend."
                    },
                    {
                        "label": "Close",
                        "icon": "xmark",
                        "type": "Button",
                        "description": "Ferme le dialog si le workflow le permet."
                    }
                ]
            }
        },
        "en": {
            "title": "Backend restart dialog",
            "description": "Status dialog shown while the backend is restarting.",
            "ui": {
                "backUrl": "/user-guide/reference/studio-interface/#dialogs",
                "backLabel": "Dialogs",
                "overview": "The Backend restart dialog appears when the backend is restarting or reconnecting. It tells the user that the workspace is temporarily waiting for the service to come back.\n",
                "controls": [
                    {
                        "label": "Status text",
                        "icon": "server",
                        "type": "Read-only panel",
                        "description": "Explains that the backend is currently restarting or unavailable."
                    },
                    {
                        "label": "Retry",
                        "icon": "arrow-rotate-right",
                        "type": "Button",
                        "description": "Checks again for the backend and resumes once it is available."
                    },
                    {
                        "label": "Close",
                        "icon": "xmark",
                        "type": "Button",
                        "description": "Dismisses the dialog if the workflow allows it."
                    }
                ],
                "notes": [
                    "Use this dialog as a temporary status surface while the service recovers."
                ]
            }
        }
    }
}

export default page
