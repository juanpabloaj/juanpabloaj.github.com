---
layout: wiki-note
title: logging
---

Logear a stdout y a archivo

    parent = Path(__file__).parent
    logging.basicConfig(
        format="%(asctime)s %(message)s",
        level=logging.INFO,
        handlers=[
            logging.FileHandler(parent / "logging_task.log"),
            logging.StreamHandler(),
        ],
    )
