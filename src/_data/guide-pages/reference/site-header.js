const buildPage = ({fr, en}) => ({
    "layout": "layouts/page.html",
    "locales": {fr, en}
})

const siteHeader = buildPage({
    "fr": {
        "title": "Aide de l'en-tête",
        "description": "Référence des boutons et raccourcis de l'en-tête du site, adaptés au desktop et au mobile.",
        "hero": {
            "video": false,
            "className": "guide-hero",
            "badge": "Référence",
            "kicker": "En-tête du site",
            "title": "Comprendre l'en-tête du site.",
            "lead": "Retrouvez les boutons de l'en-tête et leur adaptation entre desktop et mobile."
        },
        "sectionNav": [
            {
                "id": "header-desktop",
                "label": "Desktop",
                "summary": "Boutons et raccourcis visibles sur grand écran"
            },
            {
                "id": "header-mobile",
                "label": "Mobile",
                "summary": "Contrôles conservés sur petit écran"
            }
        ]
    },
    "en": {
        "title": "Header help",
        "description": "Reference for the site header buttons and shortcuts across desktop and mobile layouts.",
        "hero": {
            "video": false,
            "className": "guide-hero",
            "badge": "Reference",
            "kicker": "Site header",
            "title": "Understand the site header.",
            "lead": "Find the header buttons and see how they adapt between desktop and mobile layouts."
        },
        "sectionNav": [
            {
                "id": "desktop-header",
                "label": "Desktop",
                "summary": "Buttons and shortcuts visible on large screens"
            },
            {
                "id": "mobile-header",
                "label": "Mobile",
                "summary": "Controls kept on small screens"
            }
        ]
    }
})

const siteSearch = buildPage({
    "fr": {
        "title": "Recherche du site",
        "description": "Utiliser la recherche du site pour retrouver une page du guide, une réponse de FAQ ou une entrée d'historique.",
        "hero": {
            "video": false,
            "className": "guide-hero",
            "badge": "Référence",
            "kicker": "Recherche",
            "title": "Retrouver rapidement une page.",
            "lead": "Utilisez le bouton de recherche ou les raccourcis clavier pour interroger le guide et les autres contenus indexés."
        },
        "sectionNav": [
            {
                "id": "recherche",
                "label": "Recherche",
                "summary": "Recherche dans le guide et le site"
            }
        ]
    },
    "en": {
        "title": "Site search",
        "description": "Use site search to find a guide page, an FAQ answer, or a project history entry.",
        "hero": {
            "video": false,
            "className": "guide-hero",
            "badge": "Reference",
            "kicker": "Search",
            "title": "Find a page quickly.",
            "lead": "Use the search button or keyboard shortcuts to query the guide and other indexed content."
        },
        "sectionNav": [
            {
                "id": "search",
                "label": "Search",
                "summary": "Search the guide and site"
            }
        ]
    }
})

export {siteHeader, siteSearch}
