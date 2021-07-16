---
layout: default
title: jq
---

jq con un streaming de datos

    websocat wss://ws.coincap.io/prices?assets=bitcoin | jq '.bitcoin|tonumber' --unbuffered | asciigraph -r -c "BTC"
