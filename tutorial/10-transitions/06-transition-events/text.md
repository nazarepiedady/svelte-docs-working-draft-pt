---
title: Eventos de Transição
---

Pode ser útil saber quando as transições começam e terminam. A Svelte despacha eventos nos quais podemos ouvir tal como qualquer outro evento do DOM:

```html
<p
	transition:fly="{{ y: 200, duration: 2000 }}"
	on:introstart="{() => status = 'intro started'}"
	on:outrostart="{() => status = 'outro started'}"
	on:introend="{() => status = 'intro ended'}"
	on:outroend="{() => status = 'outro ended'}"
>
	Flies in and out
</p>
```