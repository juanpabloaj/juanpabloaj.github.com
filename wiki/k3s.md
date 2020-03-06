---
layout: default
title: k3s
---
Agregar repositorio privado sin TLS ni autenticación, en `/etc/rancher/k3s/registries.yaml

	mirrors:
	  "mycustomreg.com:5000":
		endpoint:
		  - "http://mycustomreg.com:5000"

### Referencias

* https://rancher.com/docs/k3s/latest/en/installation/private-registry/
