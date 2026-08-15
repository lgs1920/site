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
                    },
                    {
                        "label": "Reorder handle",
                        "icon": "grip-vertical",
                        "type": "Drag control",
                        "description": "Fait glisser un widget pour changer son ordre dans le board courant."
                    },
                    {
                        "label": "Recenter",
                        "icon": "bullseye",
                        "type": "Button",
                        "description": "Recentre la vue sur le widget choisi pour le retrouver dans la composition."
                    },
                    {
                        "label": "Edit",
                        "icon": "pen-to-square",
                        "type": "Button",
                        "description": "Ouvre le drawer Widgets editor pour modifier les propriétés du widget."
                    }
                ],
                "steps": [
                    {
                        "title": "Choisir le board",
                        "description": "Sélectionnez <em>Scene widgets</em> ou <em>Video widgets</em> selon la composition à organiser."
                    },
                    {
                        "title": "Réordonner",
                        "description": "Faites glisser la poignée du widget pour modifier l'ordre d'empilement ou de présentation."
                    },
                    {
                        "title": "Modifier ou supprimer",
                        "description": "Utilisez <em>Edit</em> pour ouvrir l'éditeur, <em>Recenter</em> pour retrouver le widget et <em>Remove</em> pour le retirer."
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
                    },
                    {
                        "label": "Reorder handle",
                        "icon": "grip-vertical",
                        "type": "Drag control",
                        "description": "Drags a widget to change its order on the current board."
                    },
                    {
                        "label": "Recenter",
                        "icon": "bullseye",
                        "type": "Button",
                        "description": "Recenters the view on the chosen widget so you can find it in the composition."
                    },
                    {
                        "label": "Edit",
                        "icon": "pen-to-square",
                        "type": "Button",
                        "description": "Opens the Widgets editor drawer for the widget's properties."
                    }
                ],
                "steps": [
                    {
                        "title": "Choose the board",
                        "description": "Select <em>Scene widgets</em> or <em>Video widgets</em> according to the composition you want to organize."
                    },
                    {
                        "title": "Reorder widgets",
                        "description": "Drag a widget handle to change its stacking or presentation order."
                    },
                    {
                        "title": "Edit or remove",
                        "description": "Use <em>Edit</em> to open the editor, <em>Recenter</em> to find the widget, and <em>Remove</em> to take it out of the composition."
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
