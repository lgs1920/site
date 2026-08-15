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
                    },
                    {
                        "label": "Units System",
                        "icon": "ruler-combined",
                        "type": "Radio groups",
                        "description": "Choisit le système Metric ou Impérial et le format de coordonnées DD ou DMS."
                    },
                    {
                        "label": "Camera Settings",
                        "icon": "camera",
                        "type": "Switches and selectors",
                        "description": "Contrôle les informations de caméra, les marqueurs de cible, le focus initial et le comportement d'orbite."
                    },
                    {
                        "label": "Journey Statistics Settings",
                        "icon": "chart-line",
                        "type": "Fields",
                        "description": "Choisit le profil d'activité et règle les seuils de durée, distance, altitude, vitesse et pente. Chaque seuil peut être réinitialisé."
                    },
                    {
                        "label": "Menu / Compass / Editor / PWA Settings",
                        "icon": "sliders",
                        "type": "Sections",
                        "description": "Regroupe les préférences de menu, boussole, éditeur et application installable."
                    },
                    {
                        "label": "Sync my profile",
                        "icon": "cloud-arrow-up",
                        "type": "Action and fields",
                        "description": "Permet de saisir un token et d'enregistrer ou effacer la synchronisation du profil."
                    },
                    {
                        "label": "Reset profile",
                        "icon": "arrow-rotate-left",
                        "type": "Options and button",
                        "description": "Sélectionne les données à réinitialiser, par exemple les parcours, POIs, widgets, réglages ou tokens, puis applique Reset."
                    }
                ],
                "steps": [
                    {
                        "title": "Choisir une catégorie",
                        "description": "Ouvrez <em>Global Settings</em>, <em>User Interface</em> ou <em>Manage My Profile</em> selon la portée du changement."
                    },
                    {
                        "title": "Régler les unités",
                        "description": "Dans <em>Units System</em>, choisissez Metric ou Impérial et le format de coordonnées DD ou DMS."
                    },
                    {
                        "title": "Configurer la caméra et les statistiques",
                        "description": "Ajustez les switches et sélecteurs de <em>Camera Settings</em>, puis les seuils du profil d'activité dans <em>Journey Statistics Settings</em>."
                    },
                    {
                        "title": "Synchroniser ou réinitialiser",
                        "description": "Dans le profil, enregistrez un token avec <em>Save</em> ou choisissez précisément les données à remettre à zéro avant de cliquer sur <em>Reset</em>."
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
                    },
                    {
                        "label": "Units System",
                        "icon": "ruler-combined",
                        "type": "Radio groups",
                        "description": "Chooses Metric or Imperial units and DD or DMS coordinate format."
                    },
                    {
                        "label": "Camera Settings",
                        "icon": "camera",
                        "type": "Switches and selectors",
                        "description": "Controls camera information, target markers, initial focus, and orbit behavior."
                    },
                    {
                        "label": "Journey Statistics Settings",
                        "icon": "chart-line",
                        "type": "Fields",
                        "description": "Selects an activity profile and tunes duration, distance, altitude, speed, and climb thresholds. Each threshold can be reset."
                    },
                    {
                        "label": "Menu / Compass / Editor / PWA Settings",
                        "icon": "sliders",
                        "type": "Sections",
                        "description": "Groups the preferences for the menu, compass, editor, and installable application behavior."
                    },
                    {
                        "label": "Sync my profile",
                        "icon": "cloud-arrow-up",
                        "type": "Action and fields",
                        "description": "Lets you enter a token and save or clear profile synchronization."
                    },
                    {
                        "label": "Reset profile",
                        "icon": "arrow-rotate-left",
                        "type": "Options and button",
                        "description": "Selects data to reset, such as journeys, POIs, widgets, settings, or tokens, then applies Reset."
                    }
                ],
                "steps": [
                    {
                        "title": "Choose a category",
                        "description": "Open <em>Global Settings</em>, <em>User Interface</em>, or <em>Manage My Profile</em> according to the scope of the change."
                    },
                    {
                        "title": "Set units",
                        "description": "In <em>Units System</em>, choose Metric or Imperial and the DD or DMS coordinate format."
                    },
                    {
                        "title": "Configure camera and statistics",
                        "description": "Adjust the switches and selectors in <em>Camera Settings</em>, then tune the activity profile thresholds in <em>Journey Statistics Settings</em>."
                    },
                    {
                        "title": "Sync or reset",
                        "description": "In the profile area, save a token with <em>Save</em> or select exactly which data to clear before choosing <em>Reset</em>."
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
