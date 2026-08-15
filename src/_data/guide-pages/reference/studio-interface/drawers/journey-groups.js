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
                    },
                    {
                        "label": "Add group",
                        "icon": "folder-plus",
                        "type": "Button",
                        "description": "Ouvre le formulaire de création d'un groupe avec un nom, une couleur, un parent et une description."
                    },
                    {
                        "label": "Add journey",
                        "icon": "route",
                        "type": "Button",
                        "description": "Ouvre la sélection des parcours à ajouter au groupe courant."
                    },
                    {
                        "label": "Group name, color, parent, description",
                        "icon": "pen-to-square",
                        "type": "Fields",
                        "description": "Définit l'identité et la hiérarchie d'un groupe. Le parent peut être <em>No parent</em>."
                    },
                    {
                        "label": "Edit / remove group",
                        "icons": ["pen-to-square", "trash"],
                        "type": "Actions",
                        "description": "Modifie les détails du groupe ou le supprime de l'arbre après confirmation."
                    },
                    {
                        "label": "Expand / collapse tree",
                        "icon": "chevron-down",
                        "type": "Control",
                        "description": "Déplie ou replie les groupes pour parcourir leur contenu."
                    }
                ],
                "steps": [
                    {
                        "title": "Créer un groupe",
                        "description": "Cliquez sur <em>Add group</em>, renseignez les champs, puis validez avec <em>Create group</em>."
                    },
                    {
                        "title": "Ajouter des parcours",
                        "description": "Sélectionnez un groupe, cliquez sur <em>Add journey</em>, cochez les parcours souhaités et confirmez la sélection."
                    },
                    {
                        "title": "Organiser l'arbre",
                        "description": "Modifiez le parent, réordonnez les éléments et utilisez les actions d'édition ou de suppression sur le groupe approprié."
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
                    },
                    {
                        "label": "Add group",
                        "icon": "folder-plus",
                        "type": "Button",
                        "description": "Opens the group creation form with fields for a name, color, parent, and description."
                    },
                    {
                        "label": "Add journey",
                        "icon": "route",
                        "type": "Button",
                        "description": "Opens the journey picker so you can add journeys to the current group."
                    },
                    {
                        "label": "Group name, color, parent, description",
                        "icon": "pen-to-square",
                        "type": "Fields",
                        "description": "Defines a group's identity and hierarchy. The parent can be set to <em>No parent</em>."
                    },
                    {
                        "label": "Edit / remove group",
                        "icons": ["pen-to-square", "trash"],
                        "type": "Actions",
                        "description": "Edits the group details or removes the group from the tree after confirmation."
                    },
                    {
                        "label": "Expand / collapse tree",
                        "icon": "chevron-down",
                        "type": "Control",
                        "description": "Expands or collapses groups while you browse their contents."
                    }
                ],
                "steps": [
                    {
                        "title": "Create a group",
                        "description": "Select <em>Add group</em>, complete the fields, then confirm with <em>Create group</em>."
                    },
                    {
                        "title": "Add journeys",
                        "description": "Select a group, choose <em>Add journey</em>, select the journeys, and confirm the selection."
                    },
                    {
                        "title": "Organize the tree",
                        "description": "Change the parent, reorder items, and use the edit or remove action on the appropriate group."
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
