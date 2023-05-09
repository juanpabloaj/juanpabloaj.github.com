---
layout: default
title: ffmpeg
---

Cambiar los fps

    ffmpeg -i file.mp4 -filter:v fps=fps=10 changed_file.mp4

Convertir algunos segundos de un mp4 a gif

    ffmpeg -i file.mp4 -ss 00:00:02 -to 00:00:04 changed_file.gif

Subir fps de 30 a 60

    ffmpeg -i file.mp4 -filter:v "setpts=PTS/2" -r 60 changed_file.mp4

Generar video desde imágenes, una por cada dos segundos

    ffmpeg -framerate 0.5 -pattern_type glob -i '*.png' -c:v libx264 -pix_fmt yuv420p out.mp4

Escalar video

    ffmpeg -i video.mp4 -vf scale=1024:-1 out.mp4

Generar video con mayor velocidad

    ffmpeg -i input.mov -vf "setpts=0.1*PTS" output.mp4
