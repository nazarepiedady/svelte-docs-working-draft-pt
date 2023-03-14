---
title: Expedição de Evento do DOM
---

A expedição de evento funciona também para os eventos do DOM.

Nós queremos ser notificados a respeito de cada clique que for realizado sobre o nosso `<CustomButton>` — para fazer isto, apenas precisamos de expedir os eventos de `click` sobre o elemento `<button>` no `CustomButton.svelte`:

```html
<button on:click>
	Click me
</button>
```