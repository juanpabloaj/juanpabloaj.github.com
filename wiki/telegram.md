---
layout: wiki-note
title: telegram
---

Obtener lista de canales donde está el bot

    curl -i -X GET https://api.telegram.org/bot$TELEGRAM_TOKEN/getUpdates

Enviar mensaje

    curl -X POST -H 'Content-Type: application/json' \
    -d '{"chat_id": "channel_id", "text": "This is a test from curl"}' \
    https://api.telegram.org/bot$TELEGRAM_TOKEN/sendMessage
