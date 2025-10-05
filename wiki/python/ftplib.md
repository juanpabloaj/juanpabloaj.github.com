---
layout: wiki-note
title : ftplib
---
Listar el contenido de un directorio FTP

    from ftplib import FTP
    source='ftp_host'
    dir='ftp_dir'
    ftp = FTP(source)
    ftp.login()
    ftp.cwd(dir)
    print ftp.retrlines('LIST')
