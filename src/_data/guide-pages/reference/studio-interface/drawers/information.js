const page = {
    "layout": "layouts/page.html",
    "locales": {
        "fr": {
            "title": "Drawer Information",
            "description": "Informations projet, mises à jour, raccourcis et crédits pour Studio.",
            "ui": {
                "backUrl": "/fr/user-guide/reference/studio-interface/#drawers",
                "backLabel": "Drawers",
                "overview": "Le drawer Information est l'endroit où lire le contexte de l'application elle-même. Il regroupe notes de mise à jour, rappels de raccourcis et crédits sans interrompre l'espace de travail.\n",
                "controls": [
                    {
                        "label": "What's New?",
                        "icon": "newspaper",
                        "type": "Tab",
                        "description": "Ouvre la vue de mise à jour ou changelog des derniers changements."
                    },
                    {
                        "label": "Shortcuts",
                        "icon": "keyboard",
                        "type": "Tab",
                        "description": "Ouvre la référence des raccourcis clavier."
                    },
                    {
                        "label": "Credits",
                        "icon": "users",
                        "type": "Tab",
                        "description": "Ouvre la vue de crédits et d'attribution du projet."
                    }
                ]
            }
        },
        "en": {
            "title": "Information drawer",
            "description": "Project information, recent updates, shortcuts, and credits for the Studio.",
            "ui": {
                "backUrl": "/user-guide/reference/studio-interface/#drawers",
                "backLabel": "Drawers",
                "overview": "The Information drawer is the place to read the app story around the editor itself. It holds update notes, shortcut reminders, and credits without interrupting the workspace.\n",
                "controls": [
                    {
                        "label": "What's New?",
                        "icon": "newspaper",
                        "type": "Tab",
                        "description": "Opens the update or changelog view for the latest Studio changes."
                    },
                    {
                        "label": "Shortcuts",
                        "icon": "keyboard",
                        "type": "Tab",
                        "description": "Opens the keyboard shortcut reference that helps you work faster."
                    },
                    {
                        "label": "Credits",
                        "icon": "users",
                        "type": "Tab",
                        "description": "Opens the credits and attribution view for the project."
                    }
                ],
                "notes": [
                    "This drawer explains the app rather than editing the current journey.",
                    "Keep it open when you need to check help content without leaving the scene."
                ]
            }
        }
    }
}

export default page
