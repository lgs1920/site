import i18n from './i18n.js'

const guidePages = {
  "/user-guide/": {
    "layout": "layouts/page.html",
    "locales": {
      "fr": {
        "title": "Guide Utilisateur",
        "description": "Guide pratique en français pour utiliser LGS1920 Studio au quotidien.",
        "hero": {
          "video": false,
          "className": "guide-hero",
          "badge": "Guide utilisateur",
          "kicker": "Documentation",
          "title": "Utiliser LGS1920 Studio au quotidien.",
          "lead": "Un guide pratique organisé selon la façon dont vous préparez, éditez, composez et exportez vos scènes de parcours.",
          "highlights": [
            {
              "icon": "circle-play",
              "label": "Démarrer et importer",
              "variant": "regular"
            },
            {
              "icon": "route",
              "label": "Parcours, traces et POI",
              "variant": "regular"
            },
            {
              "icon": "clapperboard-play",
              "label": "Captures et vidéo",
              "variant": "regular"
            },
            {
              "icon": "file-pdf",
              "label": "Exports",
              "variant": "regular"
            }
          ]
        },
        "sectionNav": [
          {
            "id": "presentation-generale",
            "label": "Présentation générale",
            "summary": "À quoi sert Studio"
          },
          {
            "id": "etapes-principales",
            "label": "Étapes principales",
            "summary": "Quoi faire ensuite"
          },
          {
            "id": "session-type",
            "label": "Session type",
            "summary": "Le flux utilisateur attendu"
          },
          {
            "id": "captures",
            "label": "Captures",
            "summary": "Emplacements réservés aux visuels"
          }
        ]
      },
      "en": {
        "title": "User Guide",
        "description": "Practical user guide for LGS1920 Studio journeys, tracks, POIs, camera tools, widgets, reports, screenshots, and video exports with privacy-first browser storage.",
        "hero": {
          "video": false,
          "className": "guide-hero",
          "badge": "User guide",
          "kicker": "Documentation",
          "title": "Use LGS1920 Studio day to day.",
          "lead": "A practical guide organized around the way you prepare, edit, compose, and export route scenes while keeping data local or synced in the browser.",
          "highlights": [
            {
              "icon": "circle-play",
              "label": "Start and import",
              "variant": "regular"
            },
            {
              "icon": "route",
              "label": "Journeys, tracks, and POIs",
              "variant": "regular"
            },
            {
              "icon": "clapperboard-play",
              "label": "Snapshot and video output",
              "variant": "regular"
            },
            {
              "icon": "file-pdf",
              "label": "Export output",
              "variant": "regular"
            }
          ]
        },
        "sectionNav": [
          {
            "id": "general-presentation",
            "label": "General presentation",
            "summary": "What the Studio is for"
          },
          {
            "id": "main-steps",
            "label": "Main steps",
            "summary": "What to do next"
          },
          {
            "id": "typical-session",
            "label": "Typical session",
            "summary": "The expected user flow"
          },
          {
            "id": "screenshots",
            "label": "Screenshots",
            "summary": "Reserved areas for visuals"
          }
        ]
      }
    }
  },
  "/user-guide/getting-started/first-steps/": {
    "layout": "layouts/page.html",
    "locales": {
      "fr": {
        "title": "Démarrer Une Session",
        "description": "Premières étapes dans LGS1920 Studio: ouvrir l'espace de travail et repérer les contrôles principaux.",
        "hero": {
          "video": false,
          "className": "guide-hero",
          "badge": "Étape principale",
          "kicker": "Guide utilisateur",
          "title": "Démarrer une session Studio.",
          "lead": "Ouvrir Studio, identifier les zones principales et préparer la première session d'édition."
        },
        "sectionNav": [
          {
            "id": "ouvrir-studio",
            "label": "Ouvrir Studio",
            "summary": "Accéder à l'éditeur"
          },
          {
            "id": "reperer-les-zones",
            "label": "Repérer l'espace",
            "summary": "Scène, panneaux, contrôles"
          },
          {
            "id": "premiers-controles",
            "label": "Premiers contrôles",
            "summary": "Avant l'import"
          }
        ]
      },
      "en": {
        "title": "Start A Session",
        "description": "First user steps in LGS1920 Studio: open the workspace, identify the scene, panels, and primary controls.",
        "hero": {
          "video": false,
          "className": "guide-hero",
          "badge": "Main step",
          "kicker": "User guide",
          "title": "Start a Studio session.",
          "lead": "Open the Studio, identify the main areas, and prepare the first editing session with browser-local data.",
          "highlights": [
            {
              "icon": "circle-play",
              "label": "First launch",
              "variant": "regular"
            },
            {
              "icon": "table-layout",
              "label": "Workspace areas",
              "variant": "regular"
            },
            {
              "icon": "bars",
              "label": "Side panels",
              "variant": "regular"
            }
          ]
        },
        "sectionNav": [
          {
            "id": "open-the-studio",
            "label": "Open the Studio",
            "summary": "Access the editor"
          },
          {
            "id": "identify-the-workspace",
            "label": "Workspace areas",
            "summary": "Scene, panels, controls"
          },
          {
            "id": "first-checks",
            "label": "First checks",
            "summary": "Before importing data"
          }
        ]
      }
    }
  },
  "/user-guide/getting-started/import-source-data/": {
    "layout": "layouts/page.html",
    "locales": {
      "fr": {
        "title": "Importer Un Parcours",
        "description": "Charger des données GeoJSON, GPX ou KML dans LGS1920 Studio et vérifier le résultat.",
        "hero": {
          "video": false,
          "className": "guide-hero",
          "badge": "Étape principale",
          "kicker": "Import",
          "title": "Importer un parcours dans Studio.",
          "lead": "Chargez des fichiers GeoJSON, GPX ou KML et confirmez que le parcours est prêt à être modifié."
        },
        "sectionNav": [
          {
            "id": "fichiers-pris-en-charge",
            "label": "Fichiers pris en charge",
            "summary": "Formats source"
          },
          {
            "id": "checklist-import",
            "label": "Checklist d'import",
            "summary": "Ce qu'il faut vérifier"
          },
          {
            "id": "apres-import",
            "label": "Après l'import",
            "summary": "Actions suivantes"
          }
        ]
      },
      "en": {
        "title": "Import A Route",
        "description": "Load GeoJSON, GPX, or KML route data into LGS1920 Studio and verify the imported journey.",
        "hero": {
          "video": false,
          "className": "guide-hero",
          "badge": "Main step",
          "kicker": "Import",
          "title": "Import a route into the Studio.",
          "lead": "Load GeoJSON, GPX, or KML files and confirm that the journey is ready to edit.",
          "highlights": [
            {
              "icon": "file-import",
              "label": "GeoJSON, GPX, KML",
              "variant": "regular"
            },
            {
              "icon": "route",
              "label": "Journey creation",
              "variant": "regular"
            },
            {
              "icon": "bullseye",
              "label": "First focus check",
              "variant": "regular"
            }
          ]
        },
        "sectionNav": [
          {
            "id": "supported-files",
            "label": "Supported files",
            "summary": "Source data formats"
          },
          {
            "id": "import-checklist",
            "label": "Import checklist",
            "summary": "What to verify"
          },
          {
            "id": "after-import",
            "label": "After import",
            "summary": "Next user actions"
          }
        ]
      }
    }
  },
  "/user-guide/reference/actions/": {
    "layout": "layouts/page.html",
    "locales": {
      "fr": {
        "title": "Actions",
        "description": "Référence utilisateur des actions fréquentes de LGS1920 Studio et de leur effet visible.",
        "hero": {
          "video": false,
          "className": "guide-hero",
          "badge": "Référence",
          "kicker": "Actions",
          "title": "Relier les actions à leurs résultats.",
          "lead": "Utilisez cette page quand vous savez ce que vous voulez faire mais qu'il vous manque la bonne commande."
        },
        "sectionNav": [
          {
            "id": "tableau-des-actions",
            "label": "Tableau des actions",
            "summary": "Commande et résultat"
          },
          {
            "id": "verifications",
            "label": "Vérifications",
            "summary": "Avant un changement important"
          }
        ]
      },
      "en": {
        "title": "Actions",
        "description": "User-facing reference for common LGS1920 Studio actions and their visible effect.",
        "hero": {
          "video": false,
          "className": "guide-hero",
          "badge": "Reference",
          "kicker": "Actions",
          "title": "Match actions to outcomes.",
          "lead": "Use this page when you know what you want to do but need the right command.",
          "highlights": [
            {
              "icon": "list-check",
              "label": "Common commands",
              "variant": "regular"
            },
            {
              "icon": "bullseye",
              "label": "Focus and movement",
              "variant": "regular"
            },
            {
              "icon": "download",
              "label": "Capture and export",
              "variant": "regular"
            }
          ]
        },
        "sectionNav": [
          {
            "id": "action-table",
            "label": "Action table",
            "summary": "Command and result"
          },
          {
            "id": "action-safety",
            "label": "Action checks",
            "summary": "Before major changes"
          }
        ]
      }
    }
  },
  "/user-guide/reference/objects/": {
    "layout": "layouts/page.html",
    "locales": {
      "fr": {
        "title": "Objets",
        "description": "Référence utilisateur pour les parcours, traces, POI, widgets, cibles caméra, rapports et zones de capture.",
        "hero": {
          "video": false,
          "className": "guide-hero",
          "badge": "Référence",
          "kicker": "Objets",
          "title": "Comprendre les objets principaux.",
          "lead": "Savoir ce que représente chaque objet visible côté utilisateur et où il s'insère dans le workflow."
        },
        "sectionNav": [
          {
            "id": "tableau-des-objets",
            "label": "Tableau des objets",
            "summary": "Rôle et contrôles"
          },
          {
            "id": "ordre-des-objets",
            "label": "Ordre des objets",
            "summary": "Comment les aborder"
          }
        ]
      },
      "en": {
        "title": "Objects",
        "description": "User-facing reference for journeys, tracks, POIs, widgets, camera targets, journey reports, and capture areas.",
        "hero": {
          "video": false,
          "className": "guide-hero",
          "badge": "Reference",
          "kicker": "Objects",
          "title": "Understand the main objects.",
          "lead": "Know what each user-facing object represents and where it fits in the workflow.",
          "highlights": [
            {
              "icon": "diagram-project",
              "label": "Object model",
              "variant": "regular"
            },
            {
              "icon": "route",
              "label": "Route objects",
              "variant": "regular"
            },
            {
              "icon": "box",
              "label": "Output overlays",
              "variant": "regular"
            },
            {
              "icon": "file-pdf",
              "label": "Report output",
              "variant": "regular"
            }
          ]
        },
        "sectionNav": [
          {
            "id": "object-table",
            "label": "Object table",
            "summary": "Purpose and controls"
          },
          {
            "id": "object-order",
            "label": "Object order",
            "summary": "How to think about them"
          }
        ]
      }
    }
  },
  "/user-guide/reference/studio-interface/": {
    "layout": "layouts/page.html",
    "locales": {
      "fr": {
        "title": "Utiliser Studio",
        "description": "Guide orienté flux pour les boutons de la scène principale, widgets, drawers, dialogs et contrôles associés.",
        "hero": {
          "video": false,
          "className": "guide-hero",
          "badge": "Workflow",
          "kicker": "Studio",
          "title": "Suivre le flux de Studio.",
          "lead": "Partez d'un bouton, puis suivez le drawer ou le dialog qu'il ouvre. Utilisez les pages ci-dessous pour voir à quoi sert chaque surface et comment revenir."
        },
        "sectionNav": [
          {
            "id": "vue-densemble",
            "label": "Vue d'ensemble",
            "summary": "Comment l'espace est organisé"
          },
          {
            "id": "boutons-principaux",
            "label": "Boutons principaux",
            "summary": "Top bar et actions de scène"
          },
          {
            "id": "widgets",
            "label": "Widgets",
            "summary": "Overlays et contrôles visibles"
          },
          {
            "id": "drawers",
            "label": "Drawers",
            "summary": "Panneaux latéraux coulissants"
          },
          {
            "id": "dialogs",
            "label": "Dialogs",
            "summary": "Modales et prompts"
          },
          {
            "id": "raccourcis",
            "label": "Raccourcis",
            "summary": "Actions clavier et pointeur"
          },
          {
            "id": "carte-du-guide",
            "label": "Carte du guide",
            "summary": "Comment le guide suit le flux de l'app"
          }
        ]
      },
      "en": {
        "title": "Use the Studio",
        "description": "Flow-based guide for the main Studio scene buttons, widgets, drawers, dialogs, and supporting controls.",
        "hero": {
          "video": false,
          "className": "guide-hero",
          "badge": "Workflow",
          "kicker": "Studio",
          "title": "Follow the Studio flow.",
          "lead": "Start from a button, then follow the drawer or dialog it opens. Use the pages below to see what each surface does and how to return.",
          "highlights": [
            {
              "icon": "route",
              "label": "Main scene buttons",
              "variant": "regular"
            },
            {
              "icon": "box",
              "label": "Widgets",
              "variant": "regular"
            },
            {
              "icon": "window-maximize",
              "label": "Drawers and dialogs",
              "variant": "regular"
            }
          ]
        },
        "sectionNav": [
          {
            "id": "overview",
            "label": "Overview",
            "summary": "How the workspace is organized"
          },
          {
            "id": "main-scene-buttons",
            "label": "Main scene buttons",
            "summary": "Top bar and scene actions"
          },
          {
            "id": "widgets",
            "label": "Widgets",
            "summary": "Visible overlays and controls"
          },
          {
            "id": "drawers",
            "label": "Drawers",
            "summary": "Side panels that slide in"
          },
          {
            "id": "dialogs",
            "label": "Dialogs",
            "summary": "Modals and prompts"
          },
          {
            "id": "shortcuts",
            "label": "Shortcuts",
            "summary": "Keyboard and pointer actions"
          },
          {
            "id": "guide-map",
            "label": "Guide map",
            "summary": "How the guide follows the app flow"
          }
        ]
      }
    }
  },
  "/user-guide/reference/studio-interface/dialogs/backend-restart/": {
    "layout": "layouts/page.html",
    "locales": {
      "fr": {
        "title": "Dialog Backend restart",
        "description": "Dialog d'état affiché pendant le redémarrage du backend.",
        "ui": {
          "backUrl": "/fr/user-guide/reference/studio-interface/#dialogs",
          "backLabel": "Dialogs",
          "overview": "Le dialog Backend restart apparaît quand le backend redémarre ou se reconnecte.\n",
          "controls": [
            {
              "label": "Status text",
              "icon": "server",
              "type": "Read-only panel",
              "description": "Explique que le backend redémarre ou est temporairement indisponible."
            },
            {
              "label": "Retry",
              "icon": "arrow-rotate-right",
              "type": "Button",
              "description": "Vérifie à nouveau la disponibilité du backend."
            },
            {
              "label": "Close",
              "icon": "xmark",
              "type": "Button",
              "description": "Ferme le dialog si le workflow le permet."
            }
          ]
        }
      },
      "en": {
        "title": "Backend restart dialog",
        "description": "Status dialog shown while the backend is restarting.",
        "ui": {
          "backUrl": "/user-guide/reference/studio-interface/#dialogs",
          "backLabel": "Dialogs",
          "overview": "The Backend restart dialog appears when the backend is restarting or reconnecting. It tells the user that the workspace is temporarily waiting for the service to come back.\n",
          "controls": [
            {
              "label": "Status text",
              "icon": "server",
              "type": "Read-only panel",
              "description": "Explains that the backend is currently restarting or unavailable."
            },
            {
              "label": "Retry",
              "icon": "arrow-rotate-right",
              "type": "Button",
              "description": "Checks again for the backend and resumes once it is available."
            },
            {
              "label": "Close",
              "icon": "xmark",
              "type": "Button",
              "description": "Dismisses the dialog if the workflow allows it."
            }
          ],
          "notes": [
            "Use this dialog as a temporary status surface while the service recovers."
          ]
        }
      }
    }
  },
  "/user-guide/reference/studio-interface/dialogs/cesium-token/": {
    "layout": "layouts/page.html",
    "locales": {
      "fr": {
        "title": "Prompt Cesium token",
        "description": "Prompt de jeton affiché quand l'accès Cesium manque ou est invalide.",
        "ui": {
          "backUrl": "/fr/user-guide/reference/studio-interface/#dialogs",
          "backLabel": "Dialogs",
          "overview": "Le prompt Cesium token apparaît quand Studio a besoin d'un jeton Cesium Ion valide.\n",
          "controls": [
            {
              "label": "Token field",
              "icon": "key",
              "type": "Text field",
              "description": "Reçoit le jeton Cesium Ion à valider."
            },
            {
              "label": "Validate",
              "icon": "circle-check",
              "type": "Button",
              "description": "Vérifie le jeton et l'enregistre s'il est valide."
            },
            {
              "label": "Cancel",
              "icon": "xmark",
              "type": "Button",
              "description": "Ferme le prompt sans rien enregistrer."
            }
          ]
        }
      },
      "en": {
        "title": "Cesium token prompt",
        "description": "Token prompt shown when Cesium access is missing or invalid.",
        "ui": {
          "backUrl": "/user-guide/reference/studio-interface/#dialogs",
          "backLabel": "Dialogs",
          "overview": "The Cesium token prompt appears when the Studio needs a valid Cesium Ion token. It blocks the flow until the user provides access or closes the prompt.\n",
          "controls": [
            {
              "label": "Token field",
              "icon": "key",
              "type": "Text field",
              "description": "Accepts the Cesium Ion token to be validated."
            },
            {
              "label": "Validate",
              "icon": "circle-check",
              "type": "Button",
              "description": "Checks the token and stores it when it is valid."
            },
            {
              "label": "Cancel",
              "icon": "xmark",
              "type": "Button",
              "description": "Closes the prompt without saving anything."
            }
          ],
          "notes": [
            "The prompt appears only when the scene cannot continue without Cesium access."
          ]
        }
      }
    }
  },
  "/user-guide/reference/studio-interface/dialogs/confirm/": {
    "layout": "layouts/page.html",
    "locales": {
      "fr": {
        "title": "Dialog Confirm",
        "description": "Dialog de confirmation finale pour les actions difficiles à annuler.",
        "ui": {
          "backUrl": "/fr/user-guide/reference/studio-interface/#dialogs",
          "backLabel": "Dialogs",
          "overview": "Le dialog Confirm est le dernier checkpoint avant une action destructive ou à fort impact.\n",
          "controls": [
            {
              "label": "Confirmation text",
              "icon": "circle-question",
              "type": "Read-only panel",
              "description": "Explique ce que l'action va faire avant exécution."
            },
            {
              "label": "Confirm",
              "icon": "circle-check",
              "type": "Button",
              "description": "Lance l'action."
            },
            {
              "label": "Cancel",
              "icon": "xmark",
              "type": "Button",
              "description": "Annule l'action et ferme le dialog."
            }
          ]
        }
      },
      "en": {
        "title": "Confirm dialog",
        "description": "Final confirmation dialog for actions that cannot be undone easily.",
        "ui": {
          "backUrl": "/user-guide/reference/studio-interface/#dialogs",
          "backLabel": "Dialogs",
          "overview": "The Confirm dialog is the final checkpoint before a destructive or high-impact action runs. It keeps the user in control of the last decision.\n",
          "controls": [
            {
              "label": "Confirmation text",
              "icon": "circle-question",
              "type": "Read-only panel",
              "description": "Explains what the action will do before it runs."
            },
            {
              "label": "Confirm",
              "icon": "circle-check",
              "type": "Button",
              "description": "Proceeds with the action."
            },
            {
              "label": "Cancel",
              "icon": "xmark",
              "type": "Button",
              "description": "Stops the action and closes the dialog."
            }
          ],
          "notes": [
            "Use the confirm dialog for destructive or irreversible actions."
          ]
        }
      }
    }
  },
  "/user-guide/reference/studio-interface/dialogs/geocoding/": {
    "layout": "layouts/page.html",
    "locales": {
      "fr": {
        "title": "Dialog Geocoding",
        "description": "Dialog de recherche pour lieux, adresses et coordonnées.",
        "ui": {
          "backUrl": "/fr/user-guide/reference/studio-interface/#dialogs",
          "backLabel": "Dialogs",
          "overview": "Le dialog Geocoding est la surface de recherche de lieu. Il aide à transformer un nom de lieu ou une coordonnée en résultat cartographique.\n",
          "controls": [
            {
              "label": "Search field",
              "icon": "magnifying-glass",
              "type": "Text field",
              "description": "Reçoit une adresse, un lieu ou une requête de coordonnées."
            },
            {
              "label": "Search",
              "icon": "search",
              "type": "Button",
              "description": "Lance la recherche pour la requête courante."
            },
            {
              "label": "Results list",
              "icon": "list",
              "type": "Selectable list",
              "description": "Affiche les lieux ou coordonnées retournés."
            },
            {
              "label": "Create temporary POI",
              "icon": "location-dot",
              "type": "Button",
              "description": "Ajoute le résultat sélectionné comme POI temporaire quand c'est supporté."
            }
          ]
        }
      },
      "en": {
        "title": "Geocoding dialog",
        "description": "Search dialog for places, addresses, and coordinates.",
        "ui": {
          "backUrl": "/user-guide/reference/studio-interface/#dialogs",
          "backLabel": "Dialogs",
          "overview": "The Geocoding dialog is the place lookup surface. It helps the user turn a place name or coordinate entry into a map result that can be used for focusing or temporary POI creation.\n",
          "controls": [
            {
              "label": "Search field",
              "icon": "magnifying-glass",
              "type": "Text field",
              "description": "Accepts an address, place name, or coordinate query."
            },
            {
              "label": "Search",
              "icon": "search",
              "type": "Button",
              "description": "Runs the lookup for the current query."
            },
            {
              "label": "Results list",
              "icon": "list",
              "type": "Selectable list",
              "description": "Shows the matching locations or coordinates returned by the lookup."
            },
            {
              "label": "Create temporary POI",
              "icon": "location-dot",
              "type": "Button",
              "description": "Adds the selected result as a temporary point of interest when supported."
            }
          ],
          "notes": [
            "Use this dialog when you want to jump to a place without leaving the scene."
          ]
        }
      }
    }
  },
  "/user-guide/reference/studio-interface/dialogs/initial-error/": {
    "layout": "layouts/page.html",
    "locales": {
      "fr": {
        "title": "Dialog Initial error",
        "description": "Dialog d'erreur de démarrage affiché quand Studio ne s'initialise pas.",
        "ui": {
          "backUrl": "/fr/user-guide/reference/studio-interface/#dialogs",
          "backLabel": "Dialogs",
          "overview": "Le dialog Initial error apparaît quand Studio ne parvient pas à finir son démarrage.\n",
          "controls": [
            {
              "label": "Error details",
              "icon": "triangle-exclamation",
              "type": "Read-only panel",
              "description": "Affiche l'erreur de démarrage et les informations de diagnostic."
            },
            {
              "label": "Copy details",
              "icon": "copy",
              "type": "Button",
              "description": "Copie les informations d'erreur pour signalement ou debug."
            },
            {
              "label": "Retry",
              "icon": "arrow-rotate-right",
              "type": "Button",
              "description": "Tente de redémarrer Studio."
            }
          ]
        }
      },
      "en": {
        "title": "Initial error dialog",
        "description": "Startup error dialog shown when the Studio fails to initialize.",
        "ui": {
          "backUrl": "/user-guide/reference/studio-interface/#dialogs",
          "backLabel": "Dialogs",
          "overview": "The Initial error dialog appears when the Studio cannot finish starting. It shows the failure details so you can understand what blocked the session and decide whether to retry.\n",
          "controls": [
            {
              "label": "Error details",
              "icon": "triangle-exclamation",
              "type": "Read-only panel",
              "description": "Shows the startup failure and any stack trace or diagnostic text."
            },
            {
              "label": "Copy details",
              "icon": "copy",
              "type": "Button",
              "description": "Copies the error information for reporting or debugging."
            },
            {
              "label": "Retry",
              "icon": "arrow-rotate-right",
              "type": "Button",
              "description": "Tries to start the Studio again."
            }
          ],
          "notes": [
            "Use this dialog when the application never reaches the workspace."
          ]
        }
      }
    }
  },
  "/user-guide/reference/studio-interface/dialogs/journey-loader/": {
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
  },
  "/user-guide/reference/studio-interface/dialogs/layer-information/": {
    "layout": "layouts/page.html",
    "locales": {
      "fr": {
        "title": "Modal Layer information",
        "description": "Modal d'avertissement et d'information pour une couche ou une source de terrain.",
        "ui": {
          "backUrl": "/fr/user-guide/reference/studio-interface/drawers/layers/",
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
          "backUrl": "/user-guide/reference/studio-interface/drawers/layers/",
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
  },
  "/user-guide/reference/studio-interface/dialogs/layer-token/": {
    "layout": "layouts/page.html",
    "locales": {
      "fr": {
        "title": "Modal Layer token",
        "description": "Prompt de jeton d'accès pour les couches ou terrains protégés.",
        "ui": {
          "backUrl": "/fr/user-guide/reference/studio-interface/drawers/layers/",
          "backLabel": "Drawer Layers",
          "overview": "Le modal Layer token apparaît quand une couche ou une source de terrain protégée demande un jeton d'accès.\n",
          "controls": [
            {
              "label": "Token field",
              "icon": "key",
              "type": "Text field",
              "description": "Reçoit le jeton d'accès pour la source sélectionnée."
            },
            {
              "label": "Validate",
              "icon": "circle-check",
              "type": "Button",
              "description": "Vérifie le jeton et déverrouille la source s'il est valide."
            },
            {
              "label": "Cancel",
              "icon": "xmark",
              "type": "Button",
              "description": "Ferme le modal sans enregistrer de jeton."
            }
          ]
        }
      },
      "en": {
        "title": "Layer token modal",
        "description": "Access token prompt for protected layer or terrain sources.",
        "ui": {
          "backUrl": "/user-guide/reference/studio-interface/drawers/layers/",
          "backLabel": "Layers drawer",
          "overview": "The Layer token modal appears when a protected layer or terrain source needs an access token. It keeps the token request tied to the source that needs it.\n",
          "controls": [
            {
              "label": "Token field",
              "icon": "key",
              "type": "Text field",
              "description": "Accepts the access token for the selected layer or terrain source."
            },
            {
              "label": "Validate",
              "icon": "circle-check",
              "type": "Button",
              "description": "Checks the token and unlocks the source when it is valid."
            },
            {
              "label": "Cancel",
              "icon": "xmark",
              "type": "Button",
              "description": "Closes the modal without saving a token."
            }
          ],
          "notes": [
            "Use the token modal only for protected source access."
          ]
        }
      }
    }
  },
  "/user-guide/reference/studio-interface/dialogs/profile-sync/": {
    "layout": "layouts/page.html",
    "locales": {
      "fr": {
        "title": "Dialog Profile sync",
        "description": "Actions de profil liées à la synchronisation et état enregistré du profil.",
        "ui": {
          "backUrl": "/fr/user-guide/reference/studio-interface/#dialogs",
          "backLabel": "Dialogs",
          "overview": "Le dialog Profile sync gère l'état de profil navigateur que Studio utilise pour le comportement de synchronisation.\n",
          "controls": [
            {
              "label": "Sync switch",
              "icon": "link",
              "type": "Switch",
              "description": "Active ou désactive la synchronisation du profil quand la fonctionnalité est disponible."
            },
            {
              "label": "Save",
              "icon": "floppy-disk",
              "type": "Button",
              "description": "Enregistre l'état courant du profil."
            },
            {
              "label": "Clear",
              "icon": "trash",
              "type": "Button",
              "description": "Supprime les données de profil courantes du navigateur."
            },
            {
              "label": "Close",
              "icon": "xmark",
              "type": "Button",
              "description": "Ferme le dialog et revient à l'espace de travail."
            }
          ]
        }
      },
      "en": {
        "title": "Profile sync dialog",
        "description": "Sync-related profile actions and saved profile state.",
        "ui": {
          "backUrl": "/user-guide/reference/studio-interface/#dialogs",
          "backLabel": "Dialogs",
          "overview": "The Profile sync dialog manages the browser profile state that the Studio uses for sync-related behavior. It is where you review or reset profile data tied to the current session.\n",
          "controls": [
            {
              "label": "Sync switch",
              "icon": "link",
              "type": "Switch",
              "description": "Turns the profile sync behavior on or off when the feature is available."
            },
            {
              "label": "Save",
              "icon": "floppy-disk",
              "type": "Button",
              "description": "Stores the current profile state."
            },
            {
              "label": "Clear",
              "icon": "trash",
              "type": "Button",
              "description": "Removes the current profile data from the browser profile."
            },
            {
              "label": "Close",
              "icon": "xmark",
              "type": "Button",
              "description": "Closes the dialog and returns to the workspace."
            }
          ],
          "notes": [
            "This dialog is part of profile management, not route editing."
          ]
        }
      }
    }
  },
  "/user-guide/reference/studio-interface/dialogs/pwa-update/": {
    "layout": "layouts/page.html",
    "locales": {
      "fr": {
        "title": "Dialog PWA update",
        "description": "Prompt d'installation et de mise à jour pour le flux Progressive Web App.",
        "ui": {
          "backUrl": "/fr/user-guide/reference/studio-interface/#dialogs",
          "backLabel": "Dialogs",
          "overview": "Le dialog PWA update apparaît quand le navigateur propose une nouvelle version d'app ou une installation.\n",
          "controls": [
            {
              "label": "Install or update",
              "icon": "download",
              "type": "Button",
              "description": "Lance l'installation ou la mise à jour de la session navigateur courante."
            },
            {
              "label": "Later",
              "icon": "clock",
              "type": "Button",
              "description": "Ferme le prompt pour le moment."
            },
            {
              "label": "Release note text",
              "icon": "newspaper",
              "type": "Read-only panel",
              "description": "Explique ce qui a changé ou pourquoi le prompt apparaît."
            }
          ]
        }
      },
      "en": {
        "title": "PWA update dialog",
        "description": "Install and update prompt for the Progressive Web App flow.",
        "ui": {
          "backUrl": "/user-guide/reference/studio-interface/#dialogs",
          "backLabel": "Dialogs",
          "overview": "The PWA update dialog appears when the browser offers a new app version or an install action. It keeps the update decision in one place so the user can continue with the newest Studio build.\n",
          "controls": [
            {
              "label": "Install or update",
              "icon": "download",
              "type": "Button",
              "description": "Starts the install or update action for the current browser session."
            },
            {
              "label": "Later",
              "icon": "clock",
              "type": "Button",
              "description": "Dismisses the prompt for the moment."
            },
            {
              "label": "Release note text",
              "icon": "newspaper",
              "type": "Read-only panel",
              "description": "Explains what changed in the update or why the prompt appeared."
            }
          ],
          "notes": [
            "The exact button label can vary depending on whether the app is being installed or updated."
          ]
        }
      }
    }
  },
  "/user-guide/reference/studio-interface/dialogs/support/": {
    "layout": "layouts/page.html",
    "locales": {
      "fr": {
        "title": "Dialog Support",
        "description": "Dialog d'aide qui expose les informations de support de Studio.",
        "ui": {
          "backUrl": "/fr/user-guide/reference/studio-interface/#dialogs",
          "backLabel": "Dialogs",
          "overview": "Le dialog Support fournit de l'aide sans changer la scène.\n",
          "controls": [
            {
              "label": "Help content",
              "icon": "message-question",
              "type": "Read-only panel",
              "description": "Affiche les informations de support, liens ou notes d'usage."
            },
            {
              "label": "Close",
              "icon": "xmark",
              "type": "Button",
              "description": "Ferme le dialog et revient à l'espace de travail."
            }
          ]
        }
      },
      "en": {
        "title": "Support dialog",
        "description": "Help dialog that exposes the Studio support information.",
        "ui": {
          "backUrl": "/user-guide/reference/studio-interface/#dialogs",
          "backLabel": "Dialogs",
          "overview": "The Support dialog provides help text without changing the scene. Use it when the user needs guidance or a support entry point while staying inside the Studio.\n",
          "controls": [
            {
              "label": "Help content",
              "icon": "message-question",
              "type": "Read-only panel",
              "description": "Shows the support information, links, or usage notes."
            },
            {
              "label": "Close",
              "icon": "xmark",
              "type": "Button",
              "description": "Closes the dialog and returns to the workspace."
            }
          ],
          "notes": [
            "This is a help surface, not an editing surface."
          ]
        }
      }
    }
  },
  "/user-guide/reference/studio-interface/dialogs/video-download/": {
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
  },
  "/user-guide/reference/studio-interface/dialogs/widget-mount-error/": {
    "layout": "layouts/page.html",
    "locales": {
      "fr": {
        "title": "Dialog Widget mount error",
        "description": "Dialog d'avertissement affiché quand les widgets ne sont pas prêts pour une capture.",
        "ui": {
          "backUrl": "/fr/user-guide/reference/studio-interface/#dialogs",
          "backLabel": "Dialogs",
          "overview": "Le dialog Widget mount error avertit qu'un ou plusieurs widgets ne sont pas prêts pendant la préparation d'une capture ou d'une sortie similaire.\n",
          "controls": [
            {
              "label": "Warning text",
              "icon": "box-exclamation",
              "type": "Read-only panel",
              "description": "Explique que les widgets n'étaient pas prêts au moment de la capture."
            },
            {
              "label": "Retry",
              "icon": "arrow-rotate-right",
              "type": "Button",
              "description": "Réessaie l'étape de capture ou de montage."
            },
            {
              "label": "Continue anyway",
              "icon": "play",
              "type": "Button",
              "description": "Continue le workflow malgré l'état incomplet des widgets."
            }
          ]
        }
      },
      "en": {
        "title": "Widget mount error dialog",
        "description": "Warning dialog shown when widgets are not ready for capture.",
        "ui": {
          "backUrl": "/user-guide/reference/studio-interface/#dialogs",
          "backLabel": "Dialogs",
          "overview": "The Widget mount error dialog warns that one or more widgets are not ready while the Studio prepares a capture or similar output. It keeps the user informed when the widget surface is not fully mounted yet.\n",
          "controls": [
            {
              "label": "Warning text",
              "icon": "box-exclamation",
              "type": "Read-only panel",
              "description": "Explains that the widgets were not ready at capture time."
            },
            {
              "label": "Retry",
              "icon": "arrow-rotate-right",
              "type": "Button",
              "description": "Tries the capture or mount step again."
            },
            {
              "label": "Continue anyway",
              "icon": "play",
              "type": "Button",
              "description": "Continues the workflow even though the widget state is incomplete."
            }
          ],
          "notes": [
            "This dialog is a workflow warning, not a configuration panel."
          ]
        }
      }
    }
  },
  "/user-guide/reference/studio-interface/drawers/flythrough/": {
    "layout": "layouts/page.html",
    "locales": {
      "fr": {
        "title": "Drawer Flythrough",
        "description": "Contrôles de flythrough caméra pour prévisualiser et capturer le mouvement.",
        "ui": {
          "backUrl": "/fr/user-guide/reference/studio-interface/#drawers",
          "backLabel": "Drawers",
          "overview": "Le drawer Flythrough contrôle une séquence de mouvement caméra utilisable pour l'enregistrement ou la prévisualisation d'un déplacement de parcours.\n",
          "controls": [
            {
              "label": "Play / stop",
              "icon": "play",
              "type": "Button",
              "description": "Démarre ou arrête le mouvement flythrough."
            },
            {
              "label": "Direction settings",
              "icon": "arrows-rotate",
              "type": "Control",
              "description": "Choisit la façon dont le mouvement tourne autour de la cible courante."
            },
            {
              "label": "Timing settings",
              "icon": "clock",
              "type": "Fields",
              "description": "Ajuste la durée et le rythme du flythrough."
            },
            {
              "label": "Sync options",
              "icon": "link-simple",
              "type": "Switches",
              "description": "Lie le flythrough à d'autres états de capture ou vidéo quand c'est supporté."
            }
          ],
          "notes": [
            "Utilisez ce drawer quand le mouvement caméra fait partie de la sortie finale."
          ]
        }
      },
      "en": {
        "title": "Flythrough drawer",
        "description": "Camera flythrough controls for previewing and capturing motion.",
        "ui": {
          "backUrl": "/user-guide/reference/studio-interface/#drawers",
          "backLabel": "Drawers",
          "overview": "The Flythrough drawer controls a camera motion sequence that can be used for recording or previewing route movement. It keeps the scene visible while you tune how the movement behaves.\n",
          "controls": [
            {
              "label": "Play / stop",
              "icon": "play",
              "type": "Button",
              "description": "Starts or stops the flythrough movement."
            },
            {
              "label": "Direction settings",
              "icon": "arrows-rotate",
              "type": "Control",
              "description": "Chooses how the movement runs around the current target."
            },
            {
              "label": "Timing settings",
              "icon": "clock",
              "type": "Fields",
              "description": "Adjusts the duration and pacing of the flythrough."
            },
            {
              "label": "Sync options",
              "icon": "link-simple",
              "type": "Switches",
              "description": "Links the flythrough with other capture or video state when supported."
            }
          ],
          "notes": [
            "Use this drawer when the camera movement is part of the final output.",
            "Check the scene, widgets, and capture area before starting the movement."
          ]
        }
      }
    }
  },
  "/user-guide/reference/studio-interface/drawers/information/": {
    "layout": "layouts/page.html",
    "locales": {
      "fr": {
        "title": "Drawer Information",
        "description": "Informations projet, mises à jour, raccourcis et crédits pour Studio.",
        "ui": {
          "backUrl": "/fr/user-guide/reference/studio-interface/#drawers",
          "backLabel": "Drawers",
          "overview": "Le drawer Information est l'endroit où lire le contexte de l'application elle-même. Il regroupe notes de mise à jour, rappels de raccourcis et crédits sans interrompre l'espace de travail.\n",
          "controls": [
            {
              "label": "What's New?",
              "icon": "newspaper",
              "type": "Tab",
              "description": "Ouvre la vue de mise à jour ou changelog des derniers changements."
            },
            {
              "label": "Shortcuts",
              "icon": "keyboard",
              "type": "Tab",
              "description": "Ouvre la référence des raccourcis clavier."
            },
            {
              "label": "Credits",
              "icon": "users",
              "type": "Tab",
              "description": "Ouvre la vue de crédits et d'attribution du projet."
            }
          ]
        }
      },
      "en": {
        "title": "Information drawer",
        "description": "Project information, recent updates, shortcuts, and credits for the Studio.",
        "ui": {
          "backUrl": "/user-guide/reference/studio-interface/#drawers",
          "backLabel": "Drawers",
          "overview": "The Information drawer is the place to read the app story around the editor itself. It holds update notes, shortcut reminders, and credits without interrupting the workspace.\n",
          "controls": [
            {
              "label": "What's New?",
              "icon": "newspaper",
              "type": "Tab",
              "description": "Opens the update or changelog view for the latest Studio changes."
            },
            {
              "label": "Shortcuts",
              "icon": "keyboard",
              "type": "Tab",
              "description": "Opens the keyboard shortcut reference that helps you work faster."
            },
            {
              "label": "Credits",
              "icon": "users",
              "type": "Tab",
              "description": "Opens the credits and attribution view for the project."
            }
          ],
          "notes": [
            "This drawer explains the app rather than editing the current journey.",
            "Keep it open when you need to check help content without leaving the scene."
          ]
        }
      }
    }
  },
  "/user-guide/reference/studio-interface/drawers/journey-editor/": {
    "layout": "layouts/page.html",
    "locales": {
      "fr": {
        "title": "Drawer Journey editor",
        "description": "Métadonnées de parcours, réglages de traces, visibilité et caméra.",
        "ui": {
          "backUrl": "/fr/user-guide/reference/studio-interface/#drawers",
          "backLabel": "Drawers",
          "overview": "Le drawer Journey editor porte les réglages de niveau parcours pour le parcours actif. C'est aussi là que vivent les contrôles de trace.\n",
          "controls": [
            {
              "label": "Title and description fields",
              "icon": "pen-to-square",
              "type": "Inputs",
              "description": "Permet de renommer le parcours et d'affiner la description."
            },
            {
              "label": "Track selector",
              "icon": "route",
              "type": "Selector",
              "description": "Choisit la trace du parcours actif à éditer."
            },
            {
              "label": "Track visibility switch",
              "icon": "eye",
              "type": "Switch",
              "description": "Affiche ou masque la trace sélectionnée sans la supprimer."
            },
            {
              "label": "Track style fields",
              "icon": "paintbrush",
              "type": "Fields",
              "description": "Ajuste couleur, épaisseur et réglages d'affichage liés."
            },
            {
              "label": "Visibility switch",
              "icon": "eye",
              "type": "Switch",
              "description": "Affiche ou masque le contenu au niveau parcours."
            },
            {
              "label": "Focus journey",
              "icon": "bullseye",
              "type": "Button",
              "description": "Centre la scène sur le parcours courant pour vérifier le cadrage."
            },
            {
              "label": "Camera and movement settings",
              "icon": "camera",
              "type": "Fields",
              "description": "Ajuste les valeurs caméra utiles à la présentation finale."
            }
          ]
        }
      },
      "en": {
        "title": "Journey editor drawer",
        "description": "Journey-level metadata, track settings, visibility, and camera-related settings.",
        "ui": {
          "backUrl": "/user-guide/reference/studio-interface/#drawers",
          "backLabel": "Drawers",
          "overview": "The Journey editor drawer holds the story-level settings for the active journey. It is also where the track controls live, so the path styling and visibility flow through the same surface after you open the Journey button.\n",
          "controls": [
            {
              "label": "Title and description fields",
              "icon": "pen-to-square",
              "type": "Inputs",
              "description": "Lets you rename the journey and refine the story description."
            },
            {
              "label": "Track selector",
              "icon": "route",
              "type": "Selector",
              "description": "Chooses which track inside the active journey you want to edit."
            },
            {
              "label": "Track visibility switch",
              "icon": "eye",
              "type": "Switch",
              "description": "Shows or hides the selected track without removing it."
            },
            {
              "label": "Track style fields",
              "icon": "paintbrush",
              "type": "Fields",
              "description": "Adjusts line color, thickness, and related display settings for the selected track."
            },
            {
              "label": "Visibility switch",
              "icon": "eye",
              "type": "Switch",
              "description": "Shows or hides the journey-level content without removing the data."
            },
            {
              "label": "Focus journey",
              "icon": "bullseye",
              "type": "Button",
              "description": "Centers the scene on the current journey so you can verify the framing."
            },
            {
              "label": "Camera and movement settings",
              "icon": "camera",
              "type": "Fields",
              "description": "Adjusts the camera-related values that support the final presentation."
            }
          ],
          "notes": [
            "Journey edits are story-level changes, not single-object tweaks.",
            "Track editing is reached from the same drawer after you select the active track.",
            "Review metadata and statistics here before generating a report or capture."
          ]
        }
      }
    }
  },
  "/user-guide/reference/studio-interface/drawers/journey-groups/": {
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
  },
  "/user-guide/reference/studio-interface/drawers/layers/": {
    "layout": "layouts/page.html",
    "locales": {
      "fr": {
        "title": "Drawer Layers",
        "description": "Gestion des sources cartographiques et de terrain pour la scène Studio.",
        "ui": {
          "backUrl": "/fr/user-guide/reference/studio-interface/#drawers",
          "backLabel": "Drawers",
          "overview": "Le drawer Layers gère les sources de données qui définissent la carte et le terrain visibles.\n",
          "controls": [
            {
              "label": "Layer disclaimer",
              "icon": "bell-exclamation",
              "type": "Button",
              "description": "Ouvre le modal d'information de couche pour lire les avertissements spécifiques à la source."
            },
            {
              "label": "Layers and terrains list",
              "icon": "layer-group",
              "type": "List",
              "description": "Affiche les fonds de carte et terrains disponibles avec leur état d'accès et de visibilité."
            },
            {
              "label": "Source visibility",
              "icon": "eye",
              "type": "Switch",
              "description": "Active ou désactive une couche ou une source de terrain dans la scène courante."
            }
          ],
          "notes": [
            "Utilisez ce drawer quand l'utilisateur doit changer la base cartographique ou relire des notes d'accès aux données."
          ]
        }
      },
      "en": {
        "title": "Layers drawer",
        "description": "Map and terrain source management for the Studio scene.",
        "ui": {
          "backUrl": "/user-guide/reference/studio-interface/#drawers",
          "backLabel": "Drawers",
          "overview": "The Layers drawer manages the data sources that define the visible map and terrain. It is where you review what the scene is drawing and how the background data is sourced.\n",
          "controls": [
            {
              "label": "Layer disclaimer",
              "icon": "bell-exclamation",
              "type": "Button",
              "description": "Opens the layer information modal so the user can read source-specific warnings."
            },
            {
              "label": "Layers and terrains list",
              "icon": "layer-group",
              "type": "List",
              "description": "Shows the available base layers and terrain sources with their access and visibility state."
            },
            {
              "label": "Source visibility",
              "icon": "eye",
              "type": "Switch",
              "description": "Turns a layer or terrain source on or off in the current scene."
            }
          ],
          "notes": [
            "Use this drawer when the user needs to change the map foundation or review data access notes.",
            "The layer information modal and layer token modal belong to this drawer-driven workflow."
          ]
        }
      }
    }
  },
  "/user-guide/reference/studio-interface/drawers/pois/": {
    "layout": "layouts/page.html",
    "locales": {
      "fr": {
        "title": "Drawer POIs",
        "description": "Édition des points d'intérêt pour marqueurs, annotations et moments du parcours.",
        "ui": {
          "backUrl": "/fr/user-guide/reference/studio-interface/#drawers",
          "backLabel": "Drawers",
          "overview": "Le drawer POIs est l'endroit où éditer les points d'intérêt qui soutiennent le récit du parcours.\n",
          "controls": [
            {
              "label": "Title and category fields",
              "icon": "pen-to-square",
              "type": "Inputs",
              "description": "Permet de nommer le POI et de choisir la catégorie la plus adaptée."
            },
            {
              "label": "Coordinates fields",
              "icon": "map-location-dot",
              "type": "Inputs",
              "description": "Permet de relire ou éditer la position et les valeurs associées."
            },
            {
              "label": "Visibility switch",
              "icon": "eye",
              "type": "Switch",
              "description": "Affiche ou masque le POI sans le supprimer du parcours."
            },
            {
              "label": "Focus POI",
              "icon": "bullseye",
              "type": "Button",
              "description": "Centre la caméra sur le POI sélectionné."
            }
          ]
        }
      },
      "en": {
        "title": "POIs drawer",
        "description": "Point of interest editing for markers, annotations, and route story moments.",
        "ui": {
          "backUrl": "/user-guide/reference/studio-interface/#drawers",
          "backLabel": "Drawers",
          "overview": "The POIs drawer is where you edit the points of interest that support the route story. It covers the marker data, the visual state, and the details that keep a POI useful in the scene and in exports.\n",
          "controls": [
            {
              "label": "Title and category fields",
              "icon": "pen-to-square",
              "type": "Inputs",
              "description": "Lets you name the POI and choose the category that best describes it."
            },
            {
              "label": "Coordinates fields",
              "icon": "map-location-dot",
              "type": "Inputs",
              "description": "Lets you review or edit the POI position and related location values."
            },
            {
              "label": "Visibility switch",
              "icon": "eye",
              "type": "Switch",
              "description": "Shows or hides the POI without deleting it from the journey."
            },
            {
              "label": "Focus POI",
              "icon": "bullseye",
              "type": "Button",
              "description": "Centers the camera on the selected POI for review or adjustment."
            }
          ],
          "notes": [
            "Use POIs to support story moments, points of interest, or map annotations.",
            "Check the POI presentation before export so important markers remain readable."
          ]
        }
      }
    }
  },
  "/user-guide/reference/studio-interface/drawers/settings/": {
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
  },
  "/user-guide/reference/studio-interface/drawers/widget-management/": {
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
  },
  "/user-guide/reference/studio-interface/drawers/widgets-editor/": {
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
            }
          ],
          "notes": [
            "This drawer is the configuration surface for a selected widget.",
            "Use it after selecting the widget you want to tune in the scene."
          ]
        }
      }
    }
  },
  "/user-guide/reference/studio-interface/widgets/": {
    "layout": "layouts/page.html",
    "locales": {
      "fr": {
        "title": "Widgets",
        "description": "Référence des overlays visibles attachés à la scène Studio ou au board d'export.",
        "ui": {
          "backUrl": "/fr/user-guide/reference/studio-interface/#widgets",
          "backLabel": "Utiliser Studio",
          "overview": "Les widgets sont les overlays live posés au-dessus de la scène ou du board d'export. Ils montrent du contexte, un état ou des données de synthèse pendant que la carte reste visible dessous.\n",
          "controls": [
            {
              "label": "Compass",
              "icon": "compass",
              "type": "Widget",
              "description": "Affiche le cap et l'orientation pour confirmer comment la scène est tournée."
            },
            {
              "label": "Credits",
              "icon": "user",
              "type": "Widget",
              "description": "Affiche les crédits cartographiques et sources. Gardez-le visible quand l'export doit conserver l'attribution."
            },
            {
              "label": "Elevation Profile",
              "icon": "chart-fft",
              "type": "Widget",
              "description": "Affiche le profil altimétrique du parcours et aide à vérifier sa lisibilité dans la zone de capture."
            },
            {
              "label": "Text",
              "icon": "text",
              "type": "Widget",
              "description": "Ajoute un label, une note ou un callout personnalisé à la scène ou au board."
            },
            {
              "label": "Journey Stats",
              "icon": "route",
              "type": "Widget",
              "description": "Affiche distance, dénivelé, durée et données de synthèse du parcours actif."
            }
          ],
          "notes": [
            "Les widgets peuvent être déplacés, redimensionnés, tournés ou masqués selon leurs capacités.",
            "Utilisez le drawer Widgets editor quand vous devez changer la configuration du widget sélectionné.",
            "Vérifiez toujours la taille finale de capture avant d'exporter."
          ]
        }
      },
      "en": {
        "title": "Widgets",
        "description": "Reference for the visible overlays that stay attached to the Studio scene or export board.",
        "ui": {
          "backUrl": "/user-guide/reference/studio-interface/#widgets",
          "backLabel": "Use the Studio",
          "overview": "Widgets are the live overlays that sit on top of the scene or the export board. They show context, status, or summary data while the map stays visible underneath.\n",
          "controls": [
            {
              "label": "Compass",
              "icon": "compass",
              "type": "Widget",
              "description": "Shows heading and orientation so you can confirm how the scene is turned."
            },
            {
              "label": "Credits",
              "icon": "user",
              "type": "Widget",
              "description": "Shows map and source credits. Keep it visible when the output must keep attribution in frame."
            },
            {
              "label": "Elevation Profile",
              "icon": "chart-fft",
              "type": "Widget",
              "description": "Shows the route elevation shape and helps you check profile readability in the capture area."
            },
            {
              "label": "Text",
              "icon": "text",
              "type": "Widget",
              "description": "Adds a custom label, note, or callout to the scene or journey board."
            },
            {
              "label": "Journey Stats",
              "icon": "route",
              "type": "Widget",
              "description": "Shows distance, elevation, duration, and summary data for the active journey."
            }
          ],
          "notes": [
            "Widgets can be moved, resized, rotated, or hidden depending on their capabilities.",
            "Use the widget editor drawer when you need to change the configuration of a selected widget.",
            "Check the final capture size, not just the editing zoom, before exporting."
          ]
        }
      }
    }
  },
  "/user-guide/workflows/appearance/": {
    "layout": "layouts/page.html",
    "locales": {
      "fr": {
        "title": "Changer Les Couleurs Et L'apparence",
        "description": "Changer le mode de thème, la couleur de marque et les préférences d'interface.",
        "hero": {
          "video": false,
          "className": "guide-hero",
          "badge": "Étape principale",
          "kicker": "Apparence",
          "title": "Ajuster l'apparence de l'espace de travail.",
          "lead": "Utilisez les réglages d'apparence lorsque l'interface, la couleur de marque ou le mode de thème doivent changer."
        },
        "sectionNav": [
          {
            "id": "ouvrir-settings",
            "label": "Ouvrir Settings",
            "summary": "Depuis le bouton Settings"
          },
          {
            "id": "changer-le-theme",
            "label": "Changer le thème",
            "summary": "Light, dark, system"
          },
          {
            "id": "changer-la-couleur",
            "label": "Changer la couleur",
            "summary": "Marque et saison"
          }
        ]
      },
      "en": {
        "title": "Change Colors And Appearance",
        "description": "Change theme mode, brand color, seasonal palette, and interface preferences.",
        "hero": {
          "video": false,
          "className": "guide-hero",
          "badge": "Main step",
          "kicker": "Appearance",
          "title": "Adjust the look of the workspace.",
          "lead": "Use appearance settings when the interface, brand color, or theme mode needs to match the current work.",
          "highlights": [
            {
              "icon": "palette",
              "label": "Brand color",
              "variant": "regular"
            },
            {
              "icon": "sun-bright",
              "label": "Theme mode",
              "variant": "regular"
            },
            {
              "icon": "paintbrush-pencil",
              "label": "Interface settings",
              "variant": "regular"
            }
          ]
        },
        "sectionNav": [
          {
            "id": "open-settings",
            "label": "Open settings",
            "summary": "Start from the Settings button"
          },
          {
            "id": "change-theme",
            "label": "Change theme",
            "summary": "Light, dark, system"
          },
          {
            "id": "change-brand",
            "label": "Change brand",
            "summary": "Brand and seasonal color"
          },
          {
            "id": "checks",
            "label": "Checks",
            "summary": "Readability and export"
          }
        ]
      }
    }
  },
  "/user-guide/workflows/common-problems/": {
    "layout": "layouts/page.html",
    "locales": {
      "fr": {
        "title": "Résoudre Les Problèmes Courants",
        "description": "Résoudre les problèmes fréquents d'import, de jetons, de widgets et de démarrage.",
        "hero": {
          "video": false,
          "className": "guide-hero",
          "badge": "Aide",
          "kicker": "Problèmes",
          "title": "Débloquer rapidement la situation.",
          "lead": "Utilisez cette page quand Studio demande un jeton, n'importe pas de données ou bloque un export."
        },
        "sectionNav": [
          {
            "id": "problemes-import",
            "label": "Problèmes d'import",
            "summary": "Fichiers de parcours"
          },
          {
            "id": "problemes-jetons",
            "label": "Problèmes de jetons",
            "summary": "Cesium et couches"
          },
          {
            "id": "problemes-export",
            "label": "Problèmes d'export",
            "summary": "Widgets et médias"
          }
        ]
      },
      "en": {
        "title": "Fix Common Problems",
        "description": "Resolve common import, token, layer, widget, startup, and backend issues.",
        "hero": {
          "video": false,
          "className": "guide-hero",
          "badge": "Help",
          "kicker": "Problems",
          "title": "Get unstuck quickly.",
          "lead": "Use this page when the Studio asks for a token, cannot import data, or blocks an export.",
          "highlights": [
            {
              "icon": "triangle-exclamation",
              "label": "Errors",
              "variant": "regular"
            },
            {
              "icon": "key",
              "label": "Tokens",
              "variant": "regular"
            },
            {
              "icon": "box-exclamation",
              "label": "Widgets",
              "variant": "regular"
            }
          ]
        },
        "sectionNav": [
          {
            "id": "import-problems",
            "label": "Import problems",
            "summary": "Route file issues"
          },
          {
            "id": "token-problems",
            "label": "Token problems",
            "summary": "Cesium and layers"
          },
          {
            "id": "export-problems",
            "label": "Export problems",
            "summary": "Widgets and media"
          },
          {
            "id": "app-problems",
            "label": "App problems",
            "summary": "Startup and backend"
          }
        ]
      }
    }
  },
  "/user-guide/workflows/export/": {
    "layout": "layouts/page.html",
    "locales": {
      "fr": {
        "title": "Exporter",
        "description": "Exporter des captures, vidéos et rapports de parcours depuis la scène préparée.",
        "hero": {
          "video": false,
          "className": "guide-hero",
          "badge": "Étape principale",
          "kicker": "Export",
          "title": "Exporter le rendu final.",
          "lead": "Choisissez le bon flux d'export une fois le parcours, la scène, les widgets et la caméra prêts."
        },
        "sectionNav": [
          {
            "id": "choisir-la-sortie",
            "label": "Choisir la sortie",
            "summary": "Capture, vidéo, rapport"
          },
          {
            "id": "capture-et-video",
            "label": "Capture et vidéo",
            "summary": "Capturer la scène"
          },
          {
            "id": "rapport",
            "label": "Rapport",
            "summary": "Export documentaire"
          }
        ]
      },
      "en": {
        "title": "Export",
        "description": "Export snapshots, videos, and journey reports from the prepared Studio scene.",
        "hero": {
          "video": false,
          "className": "guide-hero",
          "badge": "Main step",
          "kicker": "Export",
          "title": "Export the final output.",
          "lead": "Choose the right export path after the journey, scene, widgets, and camera are ready.",
          "highlights": [
            {
              "icon": "camera",
              "label": "Snapshot",
              "variant": "regular"
            },
            {
              "icon": "video",
              "label": "Video",
              "variant": "regular"
            },
            {
              "icon": "file-pdf",
              "label": "Report",
              "variant": "regular"
            }
          ]
        },
        "sectionNav": [
          {
            "id": "choose-output",
            "label": "Choose output",
            "summary": "Snapshot, video, report"
          },
          {
            "id": "snapshot-video",
            "label": "Snapshot and video",
            "summary": "Capture the scene"
          },
          {
            "id": "report",
            "label": "Report",
            "summary": "Export route documentation"
          },
          {
            "id": "final-checks",
            "label": "Final checks",
            "summary": "Before saving"
          }
        ]
      }
    }
  },
  "/user-guide/workflows/journey-reports/": {
    "layout": "layouts/page.html",
    "locales": {
      "fr": {
        "title": "Exporter Des Rapports De Parcours",
        "description": "Exporter des rapports de parcours en PDF ou HTML ZIP avec métadonnées, statistiques et cartes.",
        "hero": {
          "video": false,
          "className": "guide-hero",
          "badge": "Workflow",
          "kicker": "Rapports",
          "title": "Conditionner un parcours sous forme de rapport.",
          "lead": "Générez des exports documentaires quand le parcours a besoin de métadonnées, statistiques, POI et captures de carte."
        },
        "sectionNav": [
          {
            "id": "sorties-de-rapport",
            "label": "Sorties",
            "summary": "PDF et HTML ZIP"
          },
          {
            "id": "contenu-du-rapport",
            "label": "Contenu",
            "summary": "Métadonnées et données"
          },
          {
            "id": "checklist-export",
            "label": "Checklist",
            "summary": "Avant génération"
          }
        ]
      },
      "en": {
        "title": "Export Journey Reports",
        "description": "Export journey reports as PDF documents or ZIP-packaged HTML reports with metadata, statistics, POIs, and map captures.",
        "hero": {
          "video": false,
          "className": "guide-hero",
          "badge": "Workflow",
          "kicker": "Reports",
          "title": "Package a journey as a report.",
          "lead": "Generate document exports when a journey needs metadata, statistics, POIs, altitude data, and map captures.",
          "highlights": [
            {
              "icon": "file-pdf",
              "label": "PDF report",
              "variant": "regular"
            },
            {
              "icon": "file-zipper",
              "label": "HTML ZIP",
              "variant": "regular"
            },
            {
              "icon": "map",
              "label": "Map captures",
              "variant": "regular"
            }
          ]
        },
        "sectionNav": [
          {
            "id": "report-outputs",
            "label": "Report outputs",
            "summary": "PDF and HTML ZIP"
          },
          {
            "id": "report-content",
            "label": "Report content",
            "summary": "Metadata and route data"
          },
          {
            "id": "map-captures",
            "label": "Map captures",
            "summary": "2D overview and 3D views"
          },
          {
            "id": "export-checklist",
            "label": "Export checklist",
            "summary": "Before generating"
          }
        ]
      }
    }
  },
  "/user-guide/workflows/journeys-and-tracks/": {
    "layout": "layouts/page.html",
    "locales": {
      "fr": {
        "title": "Modifier Les Parcours Et Traces",
        "description": "Modifier les informations de parcours, le style des traces et la visibilité.",
        "hero": {
          "video": false,
          "className": "guide-hero",
          "badge": "Étape principale",
          "kicker": "Parcours",
          "title": "Modifier l'histoire du parcours.",
          "lead": "Utilisez les parcours pour les réglages globaux et les traces pour la présentation des lignes."
        },
        "sectionNav": [
          {
            "id": "parcours-vs-trace",
            "label": "Parcours vs trace",
            "summary": "Ce que chaque objet contrôle"
          },
          {
            "id": "ouvrir-track-editor",
            "label": "Ouvrir l'éditeur",
            "summary": "Flux depuis le bouton"
          },
          {
            "id": "modifier-le-parcours",
            "label": "Modifier le parcours",
            "summary": "Réglages globaux"
          },
          {
            "id": "modifier-les-traces",
            "label": "Modifier les traces",
            "summary": "Style et données"
          }
        ]
      },
      "en": {
        "title": "Edit Journeys And Tracks",
        "description": "Edit journey-level information, track styling, visibility, reporting context, and route presentation in LGS1920 Studio.",
        "hero": {
          "video": false,
          "className": "guide-hero",
          "badge": "Main step",
          "kicker": "Journeys",
          "title": "Edit the route story.",
          "lead": "Use journeys for story-level settings and tracks for line-level presentation.",
          "highlights": [
            {
              "icon": "route",
              "label": "Journey selection",
              "variant": "regular"
            },
            {
              "icon": "pen-to-square",
              "label": "Metadata and style",
              "variant": "regular"
            },
            {
              "icon": "eye",
              "label": "Visibility controls",
              "variant": "regular"
            }
          ]
        },
        "sectionNav": [
          {
            "id": "journey-vs-track",
            "label": "Journey vs track",
            "summary": "What each object controls"
          },
          {
            "id": "edit-the-journey",
            "label": "Edit the journey",
            "summary": "Story-level settings"
          },
          {
            "id": "edit-tracks",
            "label": "Edit tracks",
            "summary": "Path styling and data"
          },
          {
            "id": "report-readiness",
            "label": "Report readiness",
            "summary": "Metadata, statistics, and POIs"
          }
        ]
      }
    }
  },
  "/user-guide/workflows/points-of-interest/": {
    "layout": "layouts/page.html",
    "locales": {
      "fr": {
        "title": "Utiliser Les POI",
        "description": "Ajouter, modifier et organiser les points d'intérêt.",
        "hero": {
          "video": false,
          "className": "guide-hero",
          "badge": "Étape principale",
          "kicker": "POI",
          "title": "Marquer les lieux importants.",
          "lead": "Utilisez les points d'intérêt pour les lieux, départs, arrêts, points de vue et repères narratifs."
        },
        "sectionNav": [
          {
            "id": "quand-utiliser-les-poi",
            "label": "Quand utiliser les POI",
            "summary": "Moments liés aux lieux"
          },
          {
            "id": "modifier-un-poi",
            "label": "Modifier un POI",
            "summary": "Champs à vérifier"
          },
          {
            "id": "poi-et-camera",
            "label": "POI et caméra",
            "summary": "Focus et mouvement"
          }
        ]
      },
      "en": {
        "title": "Use POIs",
        "description": "Add, edit, focus, and organize POIs for places, starts, stops, viewpoints, and route story moments.",
        "hero": {
          "video": false,
          "className": "guide-hero",
          "badge": "Main step",
          "kicker": "POIs",
          "title": "Mark the important places.",
          "lead": "Use points of interest for locations, starts, stops, viewpoints, and narrative markers.",
          "highlights": [
            {
              "icon": "map-location-dot",
              "label": "Place markers",
              "variant": "regular"
            },
            {
              "icon": "bullseye",
              "label": "Camera targets",
              "variant": "regular"
            },
            {
              "icon": "tags",
              "label": "Categories",
              "variant": "regular"
            }
          ]
        },
        "sectionNav": [
          {
            "id": "when-to-use-pois",
            "label": "When to use POIs",
            "summary": "Place-based moments"
          },
          {
            "id": "edit-a-poi",
            "label": "Edit a POI",
            "summary": "Fields to check"
          },
          {
            "id": "use-pois-with-camera",
            "label": "POIs and camera",
            "summary": "Focus and movement"
          }
        ]
      }
    }
  },
  "/user-guide/workflows/scene-and-camera/": {
    "layout": "layouts/page.html",
    "locales": {
      "fr": {
        "title": "Régler La Caméra Et La Scène",
        "description": "Choisir le mode de scène, focaliser les objets et ajuster le cadrage caméra.",
        "hero": {
          "video": false,
          "className": "guide-hero",
          "badge": "Étape principale",
          "kicker": "Caméra",
          "title": "Diriger la scène cartographique.",
          "lead": "Choisissez le mode de scène, focalisez les objets du parcours et réglez les mouvements de caméra avant la capture."
        },
        "sectionNav": [
          {
            "id": "choisir-le-mode",
            "label": "Mode de scène",
            "summary": "2D et 3D"
          },
          {
            "id": "focaliser-la-cible",
            "label": "Focaliser la cible",
            "summary": "Parcours, trace, POI"
          },
          {
            "id": "controles-de-mouvement",
            "label": "Contrôles de mouvement",
            "summary": "Orbit et panorama"
          }
        ]
      },
      "en": {
        "title": "Set Camera And Scene",
        "description": "Choose scene mode, focus objects, adjust camera framing, and use orbit or panorama movement.",
        "hero": {
          "video": false,
          "className": "guide-hero",
          "badge": "Main step",
          "kicker": "Camera",
          "title": "Direct the map scene.",
          "lead": "Choose the scene mode, focus route objects, and tune camera movement before capture.",
          "highlights": [
            {
              "icon": "globe-pointer",
              "label": "Scene mode",
              "variant": "regular"
            },
            {
              "icon": "camera",
              "label": "Focus and framing",
              "variant": "regular"
            },
            {
              "icon": "arrows-rotate",
              "label": "Orbit and panorama",
              "variant": "regular"
            }
          ]
        },
        "sectionNav": [
          {
            "id": "choose-scene-mode",
            "label": "Scene mode",
            "summary": "2D and 3D"
          },
          {
            "id": "focus-the-target",
            "label": "Focus target",
            "summary": "Journey, track, POI, coordinate"
          },
          {
            "id": "movement-controls",
            "label": "Movement controls",
            "summary": "Orbit and panorama"
          }
        ]
      }
    }
  },
  "/user-guide/workflows/shortcuts/": {
    "layout": "layouts/page.html",
    "locales": {
      "fr": {
        "title": "Raccourcis",
        "description": "Raccourcis clavier et pointeur pour travailler plus vite dans Studio.",
        "hero": {
          "video": false,
          "className": "guide-hero",
          "badge": "Annexe",
          "kicker": "Raccourcis",
          "title": "Aller plus vite avec les raccourcis.",
          "lead": "Utilisez ces raccourcis une fois le flux principal de Studio compris."
        },
        "sectionNav": [
          {
            "id": "raccourcis-de-lapplication",
            "label": "Application",
            "summary": "Commandes globales"
          },
          {
            "id": "raccourcis-du-widget-selectionne",
            "label": "Widget sélectionné",
            "summary": "Widget actif"
          },
          {
            "id": "actions-du-pointeur",
            "label": "Pointeur",
            "summary": "Souris et tactile"
          },
          {
            "id": "rotation-et-panorama",
            "label": "Rotation et panorama",
            "summary": "Mouvement caméra"
          },
          {
            "id": "navigation-cesium",
            "label": "Navigation Cesium",
            "summary": "Contrôles de carte"
          }
        ]
      },
      "en": {
        "title": "Shortcuts",
        "description": "Keyboard and pointer shortcuts for faster Studio work.",
        "hero": {
          "video": false,
          "className": "guide-hero",
          "badge": "Appendix",
          "kicker": "Shortcuts",
          "title": "Work faster with shortcuts.",
          "lead": "Use shortcuts after you understand the main Studio flow.",
          "highlights": [
            {
              "icon": "keyboard",
              "label": "Keyboard",
              "variant": "regular"
            },
            {
              "icon": "cursor",
              "label": "Pointer",
              "variant": "regular"
            },
            {
              "icon": "arrows-rotate",
              "label": "Camera movement",
              "variant": "regular"
            }
          ]
        },
        "sectionNav": [
          {
            "id": "app-shortcuts",
            "label": "App shortcuts",
            "summary": "Global commands"
          },
          {
            "id": "selected-widget-shortcuts",
            "label": "Widget shortcuts",
            "summary": "Selected widget"
          },
          {
            "id": "pointer-actions",
            "label": "Pointer actions",
            "summary": "Mouse and touch"
          },
          {
            "id": "rotation-and-panorama",
            "label": "Rotation and panorama",
            "summary": "Camera movement"
          },
          {
            "id": "cesium-navigation",
            "label": "Cesium navigation",
            "summary": "Map controls"
          }
        ]
      }
    }
  },
  "/user-guide/workflows/snapshots-and-video/": {
    "layout": "layouts/page.html",
    "locales": {
      "fr": {
        "title": "Exporter Des Captures Et Vidéos",
        "description": "Préparer la zone de capture, les overlays, les mouvements de caméra et les réglages de sortie.",
        "hero": {
          "video": false,
          "className": "guide-hero",
          "badge": "Workflow",
          "kicker": "Capture",
          "title": "Exporter la scène composée.",
          "lead": "Capturez une image fixe ou enregistrez une vidéo après vérification du cadrage, des overlays et du mouvement."
        },
        "sectionNav": [
          {
            "id": "workflow-snapshot",
            "label": "Snapshot",
            "summary": "Export image"
          },
          {
            "id": "workflow-video",
            "label": "Vidéo",
            "summary": "Préparation enregistrement"
          },
          {
            "id": "checklist-finale",
            "label": "Checklist finale",
            "summary": "Avant capture"
          }
        ]
      },
      "en": {
        "title": "Export Snapshots And Video",
        "description": "Prepare crop area, overlays, camera movement, and output settings before image or video capture.",
        "hero": {
          "video": false,
          "className": "guide-hero",
          "badge": "Workflow",
          "kicker": "Capture",
          "title": "Export the composed scene.",
          "lead": "Capture a still image or record video after checking framing, overlays, movement, and output quality.",
          "highlights": [
            {
              "icon": "camera",
              "label": "Snapshot",
              "variant": "regular"
            },
            {
              "icon": "video",
              "label": "Video recording",
              "variant": "regular"
            },
            {
              "icon": "crop-simple",
              "label": "Capture area",
              "variant": "regular"
            }
          ]
        },
        "sectionNav": [
          {
            "id": "snapshot-workflow",
            "label": "Snapshot",
            "summary": "Still image export"
          },
          {
            "id": "video-workflow",
            "label": "Video",
            "summary": "Recording preparation"
          },
          {
            "id": "final-checklist",
            "label": "Final checklist",
            "summary": "Before capture"
          }
        ]
      }
    }
  },
  "/user-guide/workflows/use-map-layers/": {
    "layout": "layouts/page.html",
    "locales": {
      "fr": {
        "title": "Utiliser Les Couches Cartographiques",
        "description": "Changer le fond de carte, le terrain, la visibilité des couches et les accès protégés.",
        "hero": {
          "video": false,
          "className": "guide-hero",
          "badge": "Étape principale",
          "kicker": "Couches",
          "title": "Choisir ce que la carte affiche.",
          "lead": "Utilisez les couches pour changer le fond cartographique, le terrain, les overlays et l'accès aux sources protégées."
        },
        "sectionNav": [
          {
            "id": "ouvrir-les-couches",
            "label": "Ouvrir les couches",
            "summary": "Depuis le bouton Layers"
          },
          {
            "id": "changer-une-couche",
            "label": "Changer une couche",
            "summary": "Visibilité et choix de source"
          },
          {
            "id": "acces-source",
            "label": "Accès aux sources",
            "summary": "Avertissements et jetons"
          }
        ]
      },
      "en": {
        "title": "Use Map Layers",
        "description": "Change the map background, terrain, layer visibility, disclaimers, and protected source tokens.",
        "hero": {
          "video": false,
          "className": "guide-hero",
          "badge": "Main step",
          "kicker": "Layers",
          "title": "Choose what the map shows.",
          "lead": "Use layers to change the map background, terrain, overlays, and protected source access.",
          "highlights": [
            {
              "icon": "layer-group",
              "label": "Map sources",
              "variant": "regular"
            },
            {
              "icon": "eye",
              "label": "Visibility",
              "variant": "regular"
            },
            {
              "icon": "key",
              "label": "Tokens",
              "variant": "regular"
            }
          ]
        },
        "sectionNav": [
          {
            "id": "open-layers",
            "label": "Open layers",
            "summary": "Start from the Layers button"
          },
          {
            "id": "change-layer",
            "label": "Change a layer",
            "summary": "Visibility and source choice"
          },
          {
            "id": "source-access",
            "label": "Source access",
            "summary": "Disclaimers and tokens"
          },
          {
            "id": "checks",
            "label": "Checks",
            "summary": "Before export"
          }
        ]
      }
    }
  },
  "/user-guide/workflows/widgets-and-overlays/": {
    "layout": "layouts/page.html",
    "locales": {
      "fr": {
        "title": "Utiliser Les Widgets",
        "description": "Ajouter, placer et vérifier les overlays visuels.",
        "hero": {
          "video": false,
          "className": "guide-hero",
          "badge": "Étape principale",
          "kicker": "Widgets",
          "title": "Composer la couche visuelle du récit.",
          "lead": "Ajoutez les overlays qui expliquent le parcours sans masquer la carte."
        },
        "sectionNav": [
          {
            "id": "choisir-les-widgets",
            "label": "Choisir les widgets",
            "summary": "Overlays utiles"
          },
          {
            "id": "placer-les-widgets",
            "label": "Placer les widgets",
            "summary": "Position et taille"
          },
          {
            "id": "verification-export",
            "label": "Vérification export",
            "summary": "Relecture finale"
          }
        ]
      },
      "en": {
        "title": "Use Widgets",
        "description": "Add, place, and review visual overlays such as text, credits, compass, profile, and journey statistics.",
        "hero": {
          "video": false,
          "className": "guide-hero",
          "badge": "Main step",
          "kicker": "Widgets",
          "title": "Compose the visible story layer.",
          "lead": "Add overlays that explain the route without hiding the map.",
          "highlights": [
            {
              "icon": "compass",
              "label": "Compass",
              "variant": "regular"
            },
            {
              "icon": "chart-line",
              "label": "Profile and stats",
              "variant": "regular"
            },
            {
              "icon": "text",
              "label": "Text and credits",
              "variant": "regular"
            }
          ]
        },
        "sectionNav": [
          {
            "id": "choose-widgets",
            "label": "Choose widgets",
            "summary": "Useful overlays"
          },
          {
            "id": "place-widgets",
            "label": "Place widgets",
            "summary": "Position and size"
          },
          {
            "id": "export-ready-checks",
            "label": "Export checks",
            "summary": "Final review"
          }
        ]
      }
    }
  }
}

const getGuidePageDefinition = (url = '') => guidePages[i18n.getCanonicalGuidePath(i18n.normalizeUrl(url))] ?? null

const getGuidePageContent = (url = '', locale = i18n.getLocaleFromUrl(url)) => {
  const definition = getGuidePageDefinition(url)

  if (!definition) return null

  return definition.locales?.[locale] ?? definition.locales?.[i18n.defaultLocale] ?? null
}

export { guidePages, getGuidePageDefinition, getGuidePageContent }
export default guidePages
