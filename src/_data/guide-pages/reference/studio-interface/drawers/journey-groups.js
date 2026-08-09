const page = {
    "layout": "layouts/page.html",
    "locales": {
        "fr": {
            "title": "Drawer Journey groups",
            "description": "Organisation en groupes et affectation des parcours.",
            "ui": {
                "backUrl": "/fr/user-guide/reference/studio-interface/#drawers",
                "backLabel": "Drawers",
                "overview": "Le drawer Journey groups sert à organiser les parcours en collections. Il aide lorsqu'un projet contient plusieurs récits de route.\n",
                "controls": [
                    {
                        "label": "Group selector",
                        "icon": "folder-tree",
                        "type": "Selector",
                        "description": "Choisit le groupe actif pour le parcours courant."
                    },
                    {
                        "label": "Assignment controls",
                        "icon": "arrows-left-right",
                        "type": "Button group",
                        "description": "Déplace ou assigne les parcours entre groupes."
                    },
                    {
                        "label": "Sort order",
                        "icon": "arrow-down-a-z",
                        "type": "Control",
                        "description": "Change l'ordre des parcours dans la liste."
                    }
                ]
            }
        },
        "en": {
            "title": "Journey groups drawer",
            "description": "Group organization and assignment for journeys.",
            "ui": {
                "backUrl": "/user-guide/reference/studio-interface/#drawers",
                "backLabel": "Drawers",
                "overview": "The Journey groups drawer is used to organize journeys into collections. It helps when a project contains more than one route story and you need a predictable way to keep them sorted.\n",
                "controls": [
                    {
                        "label": "Group selector",
                        "icon": "folder-tree",
                        "type": "Selector",
                        "description": "Chooses the active group for the current journey."
                    },
                    {
                        "label": "Assignment controls",
                        "icon": "arrows-left-right",
                        "type": "Button group",
                        "description": "Moves or assigns journeys between groups."
                    },
                    {
                        "label": "Sort order",
                        "icon": "arrow-down-a-z",
                        "type": "Control",
                        "description": "Changes how journeys are ordered inside the list."
                    }
                ],
                "notes": [
                    "Use groups when a project contains multiple journeys that need a stable editorial order.",
                    "This drawer is for organization, not for route geometry editing."
                ]
            }
        }
    }
}

export default page
