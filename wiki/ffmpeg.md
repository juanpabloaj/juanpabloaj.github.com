---
layout: wiki-note
title: ffmpeg
---

Cambiar los fps

    ffmpeg -i file.mp4 -filter:v fps=fps=10 changed_file.mp4

Convertir algunos segundos de un mp4 a gif

    ffmpeg -i file.mp4 -ss 00:00:02 -to 00:00:04 changed_file.gif

Extraer image desde frame

    ffmpeg -i vodeo.mp4 -ss 00:00:08.5 -frames:v 1 screenshot.png

Modificar imagen para reel de Instagram (9:16)

    ffmpeg -i image.jpeg -vf "pad=width=iw:height=trunc(iw*16/9/2)*2:x=(ow-iw)/2:y=(oh-ih)/2:color=black" image_for_reel.jpeg

Subir fps de 30 a 60

    ffmpeg -i file.mp4 -filter:v "setpts=PTS/2" -r 60 changed_file.mp4

Generar video desde imágenes, una por cada dos segundos

    ffmpeg -framerate 0.5 -pattern_type glob -i '*.png' -c:v libx264 -pix_fmt yuv420p out.mp4

Escalando video

    ffmpeg -framerate 0.5 -pattern_type glob -i '*.png' -c:v libx264 -r 30 -pix_fmt yuv420p -vf scale=1024:-1 out.mp4

Escalar video

    ffmpeg -i video.mp4 -s 720x480 -c:a copy out.mp4

O

    ffmpeg -i video.mp4 -vf scale=1024:-1 out.mp4

Quitar audio, cortar primer segundo y cambiar codec para reducir tamaño, para mantener codec `-c:v copy`

    ffmpeg -i video.mov -ss 00:00:01 -t 00:00:08 -c:v libx264 -an out.mp4

Generar video con mayor velocidad

    ffmpeg -i input.mov -vf "setpts=0.1*PTS" output.mp4

En ciclos de cinco segundos, conservar los tres primeros, o lo que es lo mismo, borrar los últimos dos segundos.

    ffmpeg -i input.mp4 -vf "select='if(lt(mod(t,5),3),1,0)'" -vsync vfr out.mp4

Copiar el último segundo de un video y unirlo al comienzo del original en un video nuevo

    duration=$(ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 input.mp4)
    start_time=$(bc <<< "scale=2; $duration - 1")
    ffmpeg -i input.mp4 -ss $start_time -t 1 -c copy last_second.mp4
    echo -e "file 'last_second.mp4'\nfile 'input.mp4'" > playlist.txt
    ffmpeg -f concat -safe 0 -i playlist.txt -c copy output.mp4

Referencias

-   https://superuser.com/questions/624563/how-to-resize-a-video-to-make-it-smaller-with-ffmpeg
