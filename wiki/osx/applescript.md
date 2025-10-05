---
layout: wiki-note
title : Applescript
---
## Volumen modo consola
El mínimo volumen es 0, el máximo es 10

    osascript -e "set Volume 10"

## Abrir Safari

    tell application "Safari"
        open location "http://www.google.com"
    end tell

## Cerrar tab de Safari

    tell application "Safari"
        repeat with t in tabs of windows
            tell t
                if name starts with "oogl" then close
            end tell
        end repeat
    end tell

