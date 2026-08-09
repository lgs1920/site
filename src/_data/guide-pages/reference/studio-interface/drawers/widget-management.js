const page = {
    "layout": "layouts/page.html",
    "locales": {
        "fr": {
            "title": "Drawer Widget management",
            "description": "Contrôles de board et d'ordre pour les widgets.",
            "ui": {
                "backUrl": "/fr/user-guide/reference/studio-interface/#drawers",
                "backLabel": "Drawers",
                "overview": "Le drawer Widget management organise les widgets au niveau du board. Utilisez-le pour réordonner les overlays et les déplacer entre scène et export.\n",
                "controls": [
                    {
                        "label": "Board selector",
                        "icon": "table-columns",
                        "type": "Selector",
                        "description": "Bascule entre scene board et video board quand les deux existent."
                    },
                    {
                        "label": "Widget list",
                        "icon": "list",
                        "type": "Reorderable list",
                        "description": "Affiche les widgets du board courant et permet d'en changer l'ordre."
                    },
                    {
                        "label": "Move widget",
                        "icon": "arrows-left-right",
                        "type": "Button",
                        "description": "Déplace le widget sélectionné vers un autre board si supporté."
                    },
                    {
                        "label": "Remove widget",
                        "icon": "trash",
                        "type": "Button",
                        "description": "Supprime le widget sélectionné de la composition courante."
                    }
                ]
            }
        },
        "en": {
            "title": "Widget management drawer",
            "description": "Board and ordering controls for widgets.",
            "ui": {
                "backUrl": "/user-guide/reference/studio-interface/#drawers",
                "backLabel": "Drawers",
                "overview": "The Widget management drawer organizes widgets at the board level. Use it to reorder visible overlays and move them between scene and export boards.\n",
                "controls": [
                    {
                        "label": "Board selector",
                        "icon": "table-columns",
                        "type": "Selector",
                        "description": "Switches between the scene board and the video board when both exist."
                    },
                    {
                        "label": "Widget list",
                        "icon": "list",
                        "type": "Reorderable list",
                        "description": "Shows the widgets that belong to the current board and lets you change their order."
                    },
                    {
                        "label": "Move widget",
                        "icon": "arrows-left-right",
                        "type": "Button",
                        "description": "Moves the selected widget to another board when the widget supports relocation."
                    },
                    {
                        "label": "Remove widget",
                        "icon": "trash",
                        "type": "Button",
                        "description": "Deletes the selected widget from the current composition."
                    }
                ],
                "notes": [
                    "This drawer is available from the widget management action, including the `Alt+W` shortcut when supported.",
                    "Use it when you need to rearrange overlays quickly without opening each widget editor."
                ]
            }
        }
    }
}

export default page
