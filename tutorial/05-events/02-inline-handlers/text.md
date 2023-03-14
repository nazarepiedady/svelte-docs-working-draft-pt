---
title: Manipuladores em linha
---

Tu podes também declarar manipuladores de evento em linha:

```html
<div on:mousemove="{e => m = { x: e.clientX, y: e.clientY }}">
	The mouse position is {m.x} x {m.y}
</div>
```

As aspas são opcionais, mas são úteis para o destacamento da sintaxe em alguns ambientes.

> Em algumas abstrações podemos ver recomendações para evitar manipuladores de evento em linha por motivos de desempenho, particularmente dentro de laços de repetições. Este conselho não aplica-se a Svelte — o compilador sempre fará a coisa certa, seja qual for a forma que escolheres.