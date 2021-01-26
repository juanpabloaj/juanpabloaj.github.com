---
layout: default
title: ansible
---

Ejecutar comando en uno de los hosts

    ansible myhostname -m command -a "date"

Validar playbook

    ansible-playbook --syntax-check playbook.yaml

Aplicar playbook en un host

    ansible-playbook --limit myhostname playbook.yaml

## Referencias

* https://www.redhat.com/en/blog/system-administrators-guide-getting-started-ansible-fast
