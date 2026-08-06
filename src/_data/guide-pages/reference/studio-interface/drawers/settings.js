const page = {
    "layout": "layouts/page.html",
    "locales": {
        "fr": {
            "title": "Drawer Settings",
            "description": "Réglages globaux de Studio pour l'espace de travail, l'interaction et le profil.",
            "ui": {
                "backUrl": "/fr/user-guide/reference/studio-interface/#drawers",
                "backLabel": "Drawers",
                "overview": "Le drawer Settings rassemble les options qui changent la façon dont Studio se comporte sur toute la session.\n",
                "controls": [
                    {
                        "label": "Global Settings",
                        "icon": "screwdriver-wrench",
                        "type": "Tab",
                        "description": "Ouvre les réglages applicatifs globaux."
                    },
                    {
                        "label": "User Interface",
                        "icon": "paintbrush-pencil",
                        "type": "Tab",
                        "description": "Ouvre les préférences visuelles et d'interaction."
                    },
                    {
                        "label": "Manage My Profile",
                        "icon": "circle-user",
                        "type": "Tab",
                        "description": "Ouvre les options de profil liées au navigateur ou au compte."
                    }
                ]
            }
        },
        "en": {
            "title": "Settings drawer",
            "description": "Global Studio settings for the workspace, interaction, and profile-related preferences.",
            "ui": {
                "backUrl": "/user-guide/reference/studio-interface/#drawers",
                "backLabel": "Drawers",
                "overview": "The Settings drawer gathers the options that change how Studio behaves across the whole session. Use it when you need to adjust the interface instead of the current journey.\n",
                "controls": [
                    {
                        "label": "Global Settings",
                        "icon": "screwdriver-wrench",
                        "type": "Tab",
                        "description": "Opens the app-wide settings for workspace behavior, editing defaults, and shared preferences."
                    },
                    {
                        "label": "User Interface",
                        "icon": "paintbrush-pencil",
                        "type": "Tab",
                        "description": "Opens the visual and interaction preferences for the Studio surface."
                    },
                    {
                        "label": "Manage My Profile",
                        "icon": "circle-user",
                        "type": "Tab",
                        "description": "Opens profile-specific options for the current browser or account state."
                    }
                ],
                "notes": [
                    "Changes here affect the Studio as a whole, not a single drawer or widget.",
                    "Use this drawer for repeated configuration, not for one-time decisions."
                ]
            }
        }
    }
}

export default page
