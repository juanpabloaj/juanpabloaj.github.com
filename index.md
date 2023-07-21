---
layout: blog
title : JuanPabloAJ
---
<br />
{% for post in site.posts %}
<a href="{{ post.url }}"><h1>{{ post.title }}</h1></a>
    <div>
        {{ post.content }}
    </div>
{% endfor %}

<br />
<!--
{{ site.categories | size}}
{% for category in site.categories %}
	<a name="{{ category | first }}">{{ category | first }}</a>
{% endfor %}
-->
