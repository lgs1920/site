const page = {
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
}

export default page
