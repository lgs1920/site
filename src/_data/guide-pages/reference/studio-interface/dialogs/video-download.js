const page = {
    "layout": "layouts/page.html",
    "locales": {
        "fr": {
            "title": "Dialog Video download",
            "description": "Dialog de prévisualisation et téléchargement de la sortie vidéo capturée.",
            "ui": {
                "backUrl": "/fr/user-guide/reference/studio-interface/#dialogs",
                "backLabel": "Dialogs",
                "overview": "Le dialog Video download apparaît après qu'une capture est prête.\n",
                "controls": [
                    {
                        "label": "Preview area",
                        "icon": "clapperboard-play",
                        "type": "Read-only panel",
                        "description": "Affiche la sortie vidéo capturée avant téléchargement ou partage."
                    },
                    {
                        "label": "Download",
                        "icon": "download",
                        "type": "Button",
                        "description": "Enregistre le fichier vidéo en local."
                    },
                    {
                        "label": "Share",
                        "icon": "share-nodes",
                        "type": "Button",
                        "description": "Ouvre le flux de partage navigateur quand il est disponible."
                    },
                    {
                        "label": "Close",
                        "icon": "xmark",
                        "type": "Button",
                        "description": "Ferme le dialog sans modifier le fichier de sortie."
                    }
                ]
            }
        },
        "en": {
            "title": "Video download dialog",
            "description": "Preview and download dialog for captured video output.",
            "ui": {
                "backUrl": "/user-guide/reference/studio-interface/#dialogs",
                "backLabel": "Dialogs",
                "overview": "The Video download dialog appears after a capture is ready. It gives the user a last check before downloading or sharing the recorded output.\n",
                "controls": [
                    {
                        "label": "Preview area",
                        "icon": "clapperboard-play",
                        "type": "Read-only panel",
                        "description": "Shows the captured video output before download or sharing."
                    },
                    {
                        "label": "Download",
                        "icon": "download",
                        "type": "Button",
                        "description": "Saves the video file to local storage."
                    },
                    {
                        "label": "Share",
                        "icon": "share-nodes",
                        "type": "Button",
                        "description": "Opens the browser sharing flow when available."
                    },
                    {
                        "label": "Close",
                        "icon": "xmark",
                        "type": "Button",
                        "description": "Dismisses the dialog without changing the output file."
                    }
                ],
                "notes": [
                    "Review the final framing here before handing the media to someone else."
                ]
            }
        }
    }
}

export default page
