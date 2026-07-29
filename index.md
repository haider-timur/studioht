---
layout: default
title: Home
---

<div class="intro" id="intro">
<p>Haider Timur (he/him) is a graphic designer and hybrid media artist based in Amsterdam.</p>

<p>As the founder of Studio Haider Timur, he began a sound, performance, and installation practice to create narrative-driven performances and express his artistic vision. <a href="{{ '/about' | relative_url }}">(...more)</a></p>
<p>See his projects below.</p></div>

{% assign sorted_projects = site.projects | sort: 'date' | reverse %}

<div id="filter-indicator" style="display:none; margin-bottom: 1rem;">
  Showing: <strong id="filter-tag-label"></strong>
  <a style ="text-decoration:none; color: #20c320;" href="{{ '/' | relative_url }}">(clear)</a>
</div>

<div class="project-grid" id="project-grid">
  {% for project in sorted_projects %}
    <div class="project-item" data-tags="{{ project.tags | join: ',' }}">
      <a href="{{ project.url | relative_url }}" class="project-card-link">
        <div class="project-card">
          {% if project.thumbnail %}
            <img src="{{ project.thumbnail | relative_url }}" alt="{{ project.title }}">
          {% endif %}
          <h2>{{ project.title }}</h2>
        </div>
      </a>
      {% if project.tags %}
        <ul class="project-tags">
          {% for tag in project.tags %}
            <li><a href="{{ '/' | relative_url }}?tag={{ tag }}">{{ tag }}</a></li>
          {% endfor %}
        </ul>
      {% endif %}
    </div>
  {% endfor %}
</div>