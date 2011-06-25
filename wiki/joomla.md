--- 
layout: default
title : Joomla
---

Para mostrar un contenido solo en portada

	<?php if (JRequest::getVar('view')=='frontpage') : ?>
		<div>
		...
		</div>
	<?php endif; ?>

### Frienly Urls
