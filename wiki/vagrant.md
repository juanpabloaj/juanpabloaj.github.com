---
layout: default
title: vagrant
---
Conectarse a la maquina virtual vagrant por ssh en el host.

En el directorio donde la maquina fue creada obtener la información de conexión

    vagrant ssh-config

Agregarla a el archivo `~/.ssh/config`

    Host default
      HostName 127.0.0.1
      User vagrant
      Port 2200
      UserKnownHostsFile /dev/null
      StrictHostKeyChecking no
      PasswordAuthentication no
      IdentityFile /home/pablo/vagrant-vm/.vagrant/machines/default/virtualbox/private_key
      IdentitiesOnly yes
      LogLevel FATAL
      ForwardAgent yes

Una opción el usar la llave privada ssh del host `~/.ssh/id_rsa`

    Host vagrant-vm
      HostName 127.0.0.1
      User vagrant
      Port 2200
      UserKnownHostsFile /dev/null
      StrictHostKeyChecking no
      PasswordAuthentication no
      IdentityFile /home/pablo/.ssh/id_rsa
      IdentitiesOnly yes
      LogLevel FATAL
      ForwardAgent yes

Para que sea válido es necesario que la llave pública del host esté alojada en el archivo `~/.ssh/authorized_keys2` de la maquina virtual vagrant y que el archivo tenga permisos `600`.
