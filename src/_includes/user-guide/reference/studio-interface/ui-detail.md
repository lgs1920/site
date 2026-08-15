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

<h2>{% if is_french %}Commandes communes{% else %}Shared drawer controls{% endif %}</h2>
{% if is_french %}
<p>Ces commandes sont disponibles dans la plupart des drawers, quel que soit leur contenu.</p>
{% else %}
<p>These controls are available in most drawers, regardless of the drawer-specific content.</p>
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
{% if is_french %}
<tr><td>Close drawer</td><td><span class="guide-icon-chip"><wa-icon name="xmark" variant="regular"></wa-icon></span></td><td>Bouton</td><td>Ferme le drawer courant et rend la scène visible. La touche <kbd>Escape</kbd> produit le même effet lorsque le focus le permet.</td></tr>
<tr><td>Theme selector</td><td><span class="guide-icon-chip"><wa-icon name="palette" variant="regular"></wa-icon></span></td><td>Bouton</td><td>Ouvre le sélecteur de thème pour choisir la couleur de marque et le thème de saison de l'interface.</td></tr>
<tr><td>Back</td><td><span class="guide-icon-chip"><wa-icon name="chevrons-left" variant="regular"></wa-icon></span></td><td>Bouton</td><td>Revient au drawer précédent lorsqu'un drawer a été ouvert par-dessus un autre.</td></tr>
<tr><td>Version information</td><td><span class="guide-icon-chip"><wa-icon name="server" variant="regular"></wa-icon></span></td><td>Information</td><td>Affiche les versions de Studio et du backend utilisées par la session.</td></tr>
<tr><td>Changelog</td><td><span class="guide-icon-chip"><wa-icon name="circle-info" variant="regular"></wa-icon></span></td><td>Bouton</td><td>Ouvre le drawer Information directement sur l'onglet <em>What's New?</em>.</td></tr>
<tr><td>LGS1920 project Web site</td><td><span class="guide-icon-chip"><wa-icon name="globe-pointer" variant="regular"></wa-icon></span></td><td>Lien externe</td><td>Ouvre le site du projet LGS1920 dans un nouvel onglet.</td></tr>
<tr><td>Our Github repos</td><td><span class="guide-icon-chip"><wa-icon name="github" variant="brands"></wa-icon></span></td><td>Lien externe</td><td>Ouvre les dépôts GitHub du projet dans un nouvel onglet.</td></tr>
{% else %}
<tr><td>Close drawer</td><td><span class="guide-icon-chip"><wa-icon name="xmark" variant="regular"></wa-icon></span></td><td>Button</td><td>Closes the current drawer and returns the scene to view. Press <kbd>Escape</kbd> for the same action when focus allows it.</td></tr>
<tr><td>Theme selector</td><td><span class="guide-icon-chip"><wa-icon name="palette" variant="regular"></wa-icon></span></td><td>Button</td><td>Opens the theme selector so you can choose the interface brand color and seasonal theme.</td></tr>
<tr><td>Back</td><td><span class="guide-icon-chip"><wa-icon name="chevrons-left" variant="regular"></wa-icon></span></td><td>Button</td><td>Returns to the previous drawer when the current drawer was opened on top of another one.</td></tr>
<tr><td>Version information</td><td><span class="guide-icon-chip"><wa-icon name="server" variant="regular"></wa-icon></span></td><td>Information</td><td>Shows the Studio and backend versions used by the current session.</td></tr>
<tr><td>Changelog</td><td><span class="guide-icon-chip"><wa-icon name="circle-info" variant="regular"></wa-icon></span></td><td>Button</td><td>Opens the Information drawer directly on the <em>What's New?</em> tab.</td></tr>
<tr><td>LGS1920 project Web site</td><td><span class="guide-icon-chip"><wa-icon name="globe-pointer" variant="regular"></wa-icon></span></td><td>External link</td><td>Opens the LGS1920 project website in a new tab.</td></tr>
<tr><td>Our Github repos</td><td><span class="guide-icon-chip"><wa-icon name="github" variant="brands"></wa-icon></span></td><td>External link</td><td>Opens the project's GitHub repositories in a new tab.</td></tr>
{% endif %}
</tbody>
</table>

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
