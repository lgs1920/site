const page = {
    "layout": "layouts/page.html",
    "locales": {
        "fr": {
            "title": "Drawer Widgets editor",
            "description": "Drawer de configuration détaillée du widget sélectionné.",
            "ui": {
                "backUrl": "/fr/user-guide/reference/studio-interface/#drawers",
                "backLabel": "Drawers",
                "overview": "Le drawer Widgets editor change la configuration du widget sélectionné. Il n'en change pas la position directe; il modifie son apparence et son comportement.\n",
                "controls": [
                    {
                        "label": "Position controls",
                        "icon": "arrows-up-down-left-right",
                        "type": "Fields",
                        "description": "Change la position du widget dans la scène ou sur le board."
                    },
                    {
                        "label": "Size controls",
                        "icon": "expand",
                        "type": "Fields",
                        "description": "Change l'échelle du widget et l'espace qu'il occupe."
                    },
                    {
                        "label": "Rotation controls",
                        "icon": "rotate-right",
                        "type": "Fields",
                        "description": "Change l'orientation des widgets qui supportent la rotation."
                    },
                    {
                        "label": "Style and visibility options",
                        "icon": "palette",
                        "type": "Switches",
                        "description": "Ajuste le traitement visuel et les options spécifiques."
                    },
                    {
                        "label": "Preview",
                        "icon": "eye",
                        "type": "Tab",
                        "description": "Affiche un aperçu du widget et de ses changements dans la composition."
                    },
                    {
                        "label": "Widgets",
                        "icon": "table-columns",
                        "type": "Tab",
                        "description": "Affiche la liste des widgets pour changer de widget ou accéder à leur ordre."
                    },
                    {
                        "label": "Typography and text",
                        "icons": ["font", "text"],
                        "type": "Fields",
                        "description": "Selon le widget, règle la police, la taille, la hauteur de ligne, la couleur, le contour et le contenu texte."
                    },
                    {
                        "label": "Background, border, shadow, radius",
                        "icon": "square",
                        "type": "Fields",
                        "description": "Selon le widget, règle le fond, la bordure, l'ombre et l'arrondi."
                    },
                    {
                        "label": "Padding and alignment",
                        "icon": "align-center",
                        "type": "Fields",
                        "description": "Règle les espacements internes et l'alignement du contenu."
                    },
                    {
                        "label": "Visibility switch",
                        "icon": "eye",
                        "type": "Switch",
                        "description": "Affiche ou masque le widget sans supprimer sa configuration."
                    }
                ],
                "steps": [
                    {
                        "title": "Ouvrir l'aperçu",
                        "description": "Restez dans l'onglet <em>Preview</em> pour voir l'effet des changements sur le widget sélectionné."
                    },
                    {
                        "title": "Régler les propriétés",
                        "description": "Modifiez les champs affichés par le widget, notamment position, taille, rotation, typographie, couleurs et effets."
                    },
                    {
                        "title": "Changer de widget",
                        "description": "Ouvrez l'onglet <em>Widgets</em> pour choisir un autre widget ou revenir à son ordre de composition."
                    },
                    {
                        "title": "Vérifier la visibilité",
                        "description": "Utilisez le switch de visibilité pour tester une composition sans perdre les réglages du widget."
                    }
                ]
            }
        },
        "en": {
            "title": "Widgets editor drawer",
            "description": "Detailed configuration drawer for the selected widget.",
            "ui": {
                "backUrl": "/user-guide/reference/studio-interface/#drawers",
                "backLabel": "Drawers",
                "overview": "The Widgets editor drawer changes the configuration of the selected widget. It does not move the widget itself; it edits how the widget looks and behaves in the scene or export board.\n",
                "controls": [
                    {
                        "label": "Position controls",
                        "icon": "arrows-up-down-left-right",
                        "type": "Fields",
                        "description": "Changes where the widget sits in the scene or on the board."
                    },
                    {
                        "label": "Size controls",
                        "icon": "expand",
                        "type": "Fields",
                        "description": "Changes the widget scale and the space it occupies."
                    },
                    {
                        "label": "Rotation controls",
                        "icon": "rotate-right",
                        "type": "Fields",
                        "description": "Changes the orientation of widgets that support rotation."
                    },
                    {
                        "label": "Style and visibility options",
                        "icon": "palette",
                        "type": "Switches",
                        "description": "Adjusts the visual treatment and shows or hides widget-specific options."
                    },
                    {
                        "label": "Preview",
                        "icon": "eye",
                        "type": "Tab",
                        "description": "Shows a preview of the widget and its changes in the composition."
                    },
                    {
                        "label": "Widgets",
                        "icon": "table-columns",
                        "type": "Tab",
                        "description": "Shows the widget list so you can switch widgets or access their order."
                    },
                    {
                        "label": "Typography and text",
                        "icons": ["font", "text"],
                        "type": "Fields",
                        "description": "Depending on the widget, controls typeface, size, line height, color, stroke, and text content."
                    },
                    {
                        "label": "Background, border, shadow, radius",
                        "icon": "square",
                        "type": "Fields",
                        "description": "Depending on the widget, controls its background, border, shadow, and corner radius."
                    },
                    {
                        "label": "Padding and alignment",
                        "icon": "align-center",
                        "type": "Fields",
                        "description": "Controls internal spacing and content alignment."
                    },
                    {
                        "label": "Visibility switch",
                        "icon": "eye",
                        "type": "Switch",
                        "description": "Shows or hides the widget without deleting its configuration."
                    }
                ],
                "steps": [
                    {
                        "title": "Open the preview",
                        "description": "Stay on the <em>Preview</em> tab to see how changes affect the selected widget."
                    },
                    {
                        "title": "Tune the properties",
                        "description": "Edit the fields exposed by the widget, including position, size, rotation, typography, colors, and effects."
                    },
                    {
                        "title": "Switch widgets",
                        "description": "Open the <em>Widgets</em> tab to choose another widget or return to its composition order."
                    },
                    {
                        "title": "Check visibility",
                        "description": "Use the visibility switch to test a composition without losing the widget settings."
                    }
                ],
                "notes": [
                    "This drawer is the configuration surface for a selected widget.",
                    "Use it after selecting the widget you want to tune in the scene."
                ]
            }
        }
    }
}

export default page
