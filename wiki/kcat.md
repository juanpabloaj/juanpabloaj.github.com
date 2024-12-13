---
layout: default
title: kcat
---

Enviar JSON

    echo $json | kcat -P -b localhost:9092 -t topics.my_topic

Enlaces

* https://github.com/edenhill/kcat
