---
layout: default
title: Home
---

<div class="intro" id="intro">
<p >Haider Timur (he/him) is a graphic designer and hybrid media artist based in Amsterdam.</p>

<p>As the founder of Studio Haider Timur, he began a sound, performance, and installation practice to create narrative-driven performances. Haider is currently studying in the MA programme in Design at the Sandberg Institute (2026-2028).</p></div>

<div class="all">
<p>↘↘↘↘↘ Showing: all works ↘↘↘↘↘</p></div>

{% assign sorted_projects = site.projects | sort: 'date' | reverse %}

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
    </div>
  {% endfor %}
</div>