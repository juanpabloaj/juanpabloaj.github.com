---
layout: default
title : fstab
---
En archivo `/etc/fstab`

    #dispositivo punto_montaje sistema_archivos opciones dump-freq pass-num
    /dev/sdb1 /directorio ext3 defaults 0 0

Para montar un `cfis`

    //10.0.0.1/Volume_1 /dir_path cifs rw,user=user,pass=password 0 0

Para no detallar el password en el `cifs` se puede agregar la opción

    credentials=/path_to_file/.cifscredentials`

Donde el archivo `.cifscredentials` contiene

    username=user_name
    password=user_pass
