---
layout: wiki-note
title : uv
---

If the host machine does not already provide a recent enough Python, `uv` can install and manage one for this project:

```bash
uv python install 3.12
uv venv --python 3.12
uv sync
```

After that, use the virtualenv interpreter or activate `.venv/`.


## Referencias

* https://docs.astral.sh/uv/
