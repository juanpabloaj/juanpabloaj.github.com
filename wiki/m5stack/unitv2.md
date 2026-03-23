---
layout: wiki-note
title: unitv2
---


## Trobleshooting

### Problema: `scp` falla al copiar desde la UnitV2

Sintoma:

```bash
scp unitv2:~/file.txt .
Couldn't open /dev/null: Permission denied
```

Aunque `ssh unitv2 ls` funcione, `scp` puede fallar si en la UnitV2 el nodo `/dev/null` tiene permisos incorrectos.

Diagnostico observado en el equipo:

```bash
ssh unitv2 'ls -l /dev/null'
crw-rw----    1 root     root        1,   3 Jan  1  1970 /dev/null
```

Eso esta mal. `/dev/null` deberia permitir lectura y escritura a cualquier usuario:

```bash
crw-rw-rw- 1 root root 1, 3 /dev/null
```

#### Solución

Entrar como `root` y corregir permisos:

```bash
chmod 666 /dev/null
ls -l /dev/null
```

## Referencias

- https://docs.m5stack.com/en/unit/unitv2
- https://docs.m5stack.com/en/unit/unitv2_m12
- https://docs.m5stack.com/en/guide/ai_camera/unitv2/config
