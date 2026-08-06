const page = {
    "layout": "layouts/page.html",
    "locales": {
        "fr": {
            "title": "Dialog Widget mount error",
            "description": "Dialog d'avertissement affiché quand les widgets ne sont pas prêts pour une capture.",
            "ui": {
                "backUrl": "/fr/user-guide/reference/studio-interface/#dialogs",
                "backLabel": "Dialogs",
                "overview": "Le dialog Widget mount error avertit qu'un ou plusieurs widgets ne sont pas prêts pendant la préparation d'une capture ou d'une sortie similaire.\n",
                "controls": [
                    {
                        "label": "Warning text",
                        "icon": "box-exclamation",
                        "type": "Read-only panel",
                        "description": "Explique que les widgets n'étaient pas prêts au moment de la capture."
                    },
                    {
                        "label": "Retry",
                        "icon": "arrow-rotate-right",
                        "type": "Button",
                        "description": "Réessaie l'étape de capture ou de montage."
                    },
                    {
                        "label": "Continue anyway",
                        "icon": "play",
                        "type": "Button",
                        "description": "Continue le workflow malgré l'état incomplet des widgets."
                    }
                ]
            }
        },
        "en": {
            "title": "Widget mount error dialog",
            "description": "Warning dialog shown when widgets are not ready for capture.",
            "ui": {
                "backUrl": "/user-guide/reference/studio-interface/#dialogs",
                "backLabel": "Dialogs",
                "overview": "The Widget mount error dialog warns that one or more widgets are not ready while the Studio prepares a capture or similar output. It keeps the user informed when the widget surface is not fully mounted yet.\n",
                "controls": [
                    {
                        "label": "Warning text",
                        "icon": "box-exclamation",
                        "type": "Read-only panel",
                        "description": "Explains that the widgets were not ready at capture time."
                    },
                    {
                        "label": "Retry",
                        "icon": "arrow-rotate-right",
                        "type": "Button",
                        "description": "Tries the capture or mount step again."
                    },
                    {
                        "label": "Continue anyway",
                        "icon": "play",
                        "type": "Button",
                        "description": "Continues the workflow even though the widget state is incomplete."
                    }
                ],
                "notes": [
                    "This dialog is a workflow warning, not a configuration panel."
                ]
            }
        }
    }
}

export default page
