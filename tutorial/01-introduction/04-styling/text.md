---
title: Estilizando
---

Tal como no HTML, podes adicionar um marcador `<style>` ao teu componente. Vamos adicionar alguns estilos ao elemento `<p>`:

```html
<p>This is a paragraph.</p>

<style>
	p {
		color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>
```

Com importância, estas regras são *isoladas para o componente*. Tu não mudarás acidentalmente o estilo dos elementos `<p>` noutro lado na tua aplicação, como veremos na próxima etapa.
