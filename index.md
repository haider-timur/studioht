---
layout: default
title: Projects
---

{% assign sorted_projects = site.projects | sort: 'date' | reverse %}

<div class="project-grid">
  {% for project in sorted_projects %}
  <a href="{{ project.url | relative_url }}">
    <div class="project-card">
      {% if project.thumbnail %}
        <img src="{{ project.thumbnail | relative_url }}" alt="{{ project.title }}">
      {% endif %}
      <h2>{{ project.title }}</h2>
    </div></a>
  {% endfor %}
</div>