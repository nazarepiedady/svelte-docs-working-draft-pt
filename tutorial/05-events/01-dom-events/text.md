---
title: Eventos do DOM
---

Conforme já brevemente vimos, podes ouvir qualquer evento em um elemento com a diretiva `on:`:

```html
<div on:mousemove={handleMousemove}>
	The mouse position is {m.x} x {m.y}
</div>
```