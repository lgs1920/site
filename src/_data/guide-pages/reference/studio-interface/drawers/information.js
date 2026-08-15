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
                    },
                    {
                        "label": "License",
                        "icon": "scale-balanced",
                        "type": "Tab",
                        "description": "Affiche la licence AGPL du projet et l'accord de licence des contributeurs."
                    },
                    {
                        "label": "Export shortcuts PDF",
                        "icon": "file-pdf",
                        "type": "Button",
                        "description": "Génère un PDF de la référence des raccourcis clavier. Le bouton est désactivé pendant la génération."
                    },
                    {
                        "label": "Other dependencies",
                        "icon": "code-branch",
                        "type": "Button",
                        "description": "Ouvre un drawer empilé qui détaille les dépendances open source utilisées par Studio."
                    }
                ],
                "steps": [
                    {
                        "title": "Lire les nouveautés",
                        "description": "Ouvrez <em>What's New?</em>, puis utilisez les boutons précédent et suivant pour parcourir les entrées disponibles."
                    },
                    {
                        "title": "Exporter les raccourcis",
                        "description": "Passez dans <em>Shortcuts</em> et cliquez sur <em>Export PDF</em> pour enregistrer une référence imprimable."
                    },
                    {
                        "title": "Vérifier les licences",
                        "description": "Consultez <em>License</em> avant de redistribuer Studio ou une contribution au projet."
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
                    },
                    {
                        "label": "License",
                        "icon": "scale-balanced",
                        "type": "Tab",
                        "description": "Displays the project's AGPL license and contributor license agreement."
                    },
                    {
                        "label": "Export shortcuts PDF",
                        "icon": "file-pdf",
                        "type": "Button",
                        "description": "Generates a PDF of the keyboard shortcut reference. The button is disabled while the file is being generated."
                    },
                    {
                        "label": "Other dependencies",
                        "icon": "code-branch",
                        "type": "Button",
                        "description": "Opens a stacked drawer with details about the open-source dependencies used by Studio."
                    }
                ],
                "steps": [
                    {
                        "title": "Read the updates",
                        "description": "Open <em>What's New?</em>, then use the previous and next buttons to browse the available entries."
                    },
                    {
                        "title": "Export shortcuts",
                        "description": "Open <em>Shortcuts</em> and select <em>Export PDF</em> to create a printable reference."
                    },
                    {
                        "title": "Check licensing",
                        "description": "Review <em>License</em> before redistributing Studio or a contribution to the project."
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
