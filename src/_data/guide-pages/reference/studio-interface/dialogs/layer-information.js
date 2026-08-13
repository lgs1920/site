const page = {
    "layout": "layouts/page.html",
    "locales": {
        "fr": {
            "title": "Modal Layer information",
            "description": "Modal d'avertissement et d'information pour une couche ou une source de terrain.",
            "ui": {
                "backUrl": "/fr/user-guide/reference/studio-interface/drawers/layers",
                "backLabel": "Drawer Layers",
                "overview": "Le modal Layer information affiche le disclaimer ou les notes supplémentaires liées à une couche ou une source de terrain.\n",
                "controls": [
                    {
                        "label": "Information text",
                        "icon": "circle-info",
                        "type": "Read-only panel",
                        "description": "Affiche le disclaimer, l'attribution ou la note d'accès de la source sélectionnée."
                    },
                    {
                        "label": "Close",
                        "icon": "xmark",
                        "type": "Button",
                        "description": "Ferme le modal et revient au workflow Layers."
                    }
                ]
            }
        },
        "en": {
            "title": "Layer information modal",
            "description": "Disclaimer and information modal for a layer or terrain source.",
            "ui": {
                "backUrl": "/user-guide/reference/studio-interface/drawers/layers",
                "backLabel": "Layers drawer",
                "overview": "The Layer information modal shows the disclaimer or additional notes attached to a layer or terrain source. It is a short reading step before the user continues with the selected source.\n",
                "controls": [
                    {
                        "label": "Information text",
                        "icon": "circle-info",
                        "type": "Read-only panel",
                        "description": "Shows the disclaimer, attribution, or access note for the selected source."
                    },
                    {
                        "label": "Close",
                        "icon": "xmark",
                        "type": "Button",
                        "description": "Closes the modal and returns to the layers workflow."
                    }
                ],
                "notes": [
                    "Use this modal when a source needs a short acknowledgement before use."
                ]
            }
        }
    }
}

export default page
