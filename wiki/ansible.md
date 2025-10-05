---
layout: wiki-note
title: ansible
---

Agregar hosts en el archivo

    /etc/ansible/hosts

Listar hosts

    ansible-inventory --list -y

Ping a los hosts

    ansible all -m ping

Ejecutar comando en uno de los hosts

    ansible myhostname -a "date"

Validar playbook

    ansible-playbook --syntax-check playbook.yaml

Aplicar playbook en un host

    ansible-playbook --limit myhostname playbook.yaml

## Referencias

-   https://www.redhat.com/en/blog/system-administrators-guide-getting-started-ansible-fast
-   https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-ansible-on-ubuntu-20-04
