---
permalink: /search/
layout: page-fullwidth
title: "Search"
sitemap: false
---



  <div id="search-searchbar"></div>

  <div class="post-list" id="search-hits">
    {% for post in site.posts %}
      <div class="post-item">
        <h2>
          <a class="post-link" href="{{ post.url | relative_url }}">
            {{ post.title | escape }}
          </a>
        </h2>
        <div class="post-snippet">{{ post.excerpt }}</div>
      </div>
    {% endfor %}
  </div>

{% include _google_search.html %}
