---
title: A Diretiva transition
---

Nós podemos tornar a interfaces de utilizador mais apelativas transitando elementos graciosamente para dentro e fora do DOM. A Svelte torna isto muito fácil com a diretiva `transition`.

Primeiro, importamos a função `fade` a partir do `svelte/transition`...

```html
<script>
	import { fade } from 'svelte/transition';
	let visible = true;
</script>
```

...depois a adicionamos ao elemento `<p>`:

```html
<p transition:fade>Fades in and out</p>
```