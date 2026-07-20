{% assign is_french = false %}
{% if locale == 'fr' %}
    {% assign is_french = true %}
{% endif %}
{% assign ui = localizedPage.ui | default: ui %}
{% if ui.backUrl %}
<p><a href="{{ ui.backUrl }}">{% if is_french %}Retour vers{% else %}Back to{% endif %} {{ ui.backLabel | default: 'Use the Studio' }}</a></p>
{% endif %}

<h2>{% if is_french %}Vue d'ensemble{% else %}Overview{% endif %}</h2>
<p>{{ ui.overview | strip }}</p>

{% if ui.screenshot %}
<h2>{% if is_french %}Capture d'écran{% else %}Screenshot{% endif %}</h2>
{% if ui.screenshot.src %}
<figure class="guide-screenshot-figure">
<div class="guide-screenshot-frame">
<img class="guide-screenshot-image" src="{{ ui.screenshot.src }}" alt="{% if ui.screenshot.alt %}{{ ui.screenshot.alt }}{% elsif is_french %}Capture d'écran du composant{% else %}Screenshot of the component{% endif %}">
</div>
{% if ui.screenshot.description %}
<figcaption>{{ ui.screenshot.description }}</figcaption>
{% endif %}
</figure>
{% else %}
<div class="guide-screenshot-placeholder" role="img" aria-label="{% if ui.screenshot.ariaLabel %}{{ ui.screenshot.ariaLabel }}{% elsif is_french %}Capture d'écran du composant{% else %}Screenshot of the component{% endif %}">
    <wa-icon variant="regular" name="image"></wa-icon>
    <strong>{% if is_french %}Capture d'écran{% else %}Screenshot{% endif %}</strong>
    <span>{{ ui.screenshot.description }}</span>
</div>
{% endif %}

{% if ui.screenshot.annotations and ui.screenshot.annotations.size > 0 %}
<ul class="guide-screenshot-legend">
{% for annotation in ui.screenshot.annotations %}
<li class="guide-screenshot-legend-item">
<strong>{{ annotation.label }}</strong>
{% if annotation.description %}
<p>{{ annotation.description }}</p>
{% endif %}
</li>
{% endfor %}
</ul>
{% endif %}
{% endif %}

<h2>{% if is_french %}Contrôles{% else %}Controls{% endif %}</h2>

{% if is_french %}
<p>Les contrôles ci-dessous sont les parties de l'UI sur lesquelles l'utilisateur peut agir directement.</p>
{% else %}
<p>The controls below are the parts of the UI that the user can act on directly.</p>
{% endif %}

<table>
<thead>
<tr>
<th>{% if is_french %}Élément{% else %}Element{% endif %}</th>
<th>{% if is_french %}Icône{% else %}Icon{% endif %}</th>
<th>Type</th>
<th>{% if is_french %}Ce qu'il fait{% else %}What it does{% endif %}</th>
</tr>
</thead>
<tbody>
{% for item in ui.controls %}
<tr>
<td>{{ item.label }}</td>
<td>{% if item.icons %}{% for icon in item.icons %}<span class="guide-icon-chip"><wa-icon name="{{ icon }}" variant="{{ item.variant | default: 'regular' }}"></wa-icon></span>{% unless forloop.last %} {% endunless %}{% endfor %}{% else %}<span class="guide-icon-chip"><wa-icon name="{{ item.icon }}" variant="{{ item.variant | default: 'regular' }}"></wa-icon></span>{% endif %}</td>
<td>{{ item.type }}</td>
<td>{{ item.description }}</td>
</tr>
{% endfor %}
</tbody>
</table>

{% if ui.steps and ui.steps.size > 0 %}
<h2>{% if is_french %}Comment l'utiliser{% else %}How to use{% endif %}</h2>
<ol>
{% for step in ui.steps %}
<li>{% if step.icon %}<wa-icon variant="{{ step.variant | default: 'regular' }}" name="{{ step.icon }}"></wa-icon> {% endif %}{% if step.title %}<strong>{{ step.title }}</strong> {% endif %}{{ step.description }}</li>
{% endfor %}
</ol>
{% endif %}

{% if ui.notes and ui.notes.size > 0 %}
<h2>Notes</h2>
<ul>
{% for note in ui.notes %}
<li>{{ note }}</li>
{% endfor %}
</ul>
{% endif %}
