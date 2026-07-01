{% assign is_french = false %}
{% if locale == 'fr' %}
    {% assign is_french = true %}
{% endif %}
{% if ui.backUrl %}
[{% if is_french %}Retour vers{% else %}Back to{% endif %} {{ ui.backLabel | default: 'Use the Studio' }}]({{ ui.backUrl }})
{% endif %}

## {% if is_french %}Vue d'ensemble{% else %}Overview{% endif %}

{{ ui.overview }}

## {% if is_french %}Contrôles{% else %}Controls{% endif %}

{% if is_french %}
Les contrôles ci-dessous sont les parties de l'UI sur lesquelles l'utilisateur peut agir directement.
{% else %}
The controls below are the parts of the UI that the user can act on directly.
{% endif %}

| {% if is_french %}Élément{% else %}Element{% endif %} | {% if is_french %}Icône{% else %}Icon{% endif %} | Type | {% if is_french %}Ce qu'il fait{% else %}What it does{% endif %} |
| --- | --- | --- | --- |
{% for item in ui.controls %}
| {{ item.label }} | {% if item.icons %}{% for icon in item.icons %}<span class="guide-icon-chip"><wa-icon name="{{ icon }}" variant="{{ item.variant | default: 'regular' }}"></wa-icon></span>{% unless forloop.last %} {% endunless %}{% endfor %}{% else %}<span class="guide-icon-chip"><wa-icon name="{{ item.icon }}" variant="{{ item.variant | default: 'regular' }}"></wa-icon></span>{% endif %} | {{ item.type }} | {{ item.description }} |
{% endfor %}

{% if ui.notes and ui.notes.size > 0 %}
## Notes

{% for note in ui.notes %}
- {{ note }}
{% endfor %}
{% endif %}
