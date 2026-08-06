const page = {
    "layout": "layouts/page.html",
    "locales": {
        "fr": {
            "title": "Dialog Journey loader",
            "description": "Dialog de sélection de fichier utilisé pour importer des données de parcours.",
            "ui": {
                "backUrl": "/fr/user-guide/reference/studio-interface/#dialogs",
                "backLabel": "Dialogs",
                "overview": "Le dialog Journey loader est la surface d'import des fichiers de route.\n",
                "controls": [
                    {
                        "label": "File picker",
                        "icon": "file-import",
                        "type": "File input",
                        "description": "Permet de choisir un fichier de parcours dans le stockage local."
                    },
                    {
                        "label": "Import",
                        "icon": "check",
                        "type": "Button",
                        "description": "Confirme le fichier choisi et démarre l'import."
                    },
                    {
                        "label": "Cancel",
                        "icon": "xmark",
                        "type": "Button",
                        "description": "Ferme le dialog sans importer."
                    }
                ]
            }
        },
        "en": {
            "title": "Journey loader dialog",
            "description": "File picker dialog used to import journey data into the Studio.",
            "ui": {
                "backUrl": "/user-guide/reference/studio-interface/#dialogs",
                "backLabel": "Dialogs",
                "overview": "The Journey loader dialog is the import surface for route files. It lets the user choose local journey data and bring it into the current session.\n",
                "controls": [
                    {
                        "label": "File picker",
                        "icon": "file-import",
                        "type": "File input",
                        "description": "Lets the user pick a journey file from local storage."
                    },
                    {
                        "label": "Import",
                        "icon": "check",
                        "type": "Button",
                        "description": "Confirms the selected file and starts the import."
                    },
                    {
                        "label": "Cancel",
                        "icon": "xmark",
                        "type": "Button",
                        "description": "Closes the dialog without importing anything."
                    }
                ],
                "notes": [
                    "Use this dialog when the session starts from local route data."
                ]
            }
        }
    }
}

export default page
