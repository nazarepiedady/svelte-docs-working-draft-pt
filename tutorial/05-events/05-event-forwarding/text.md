---
title: Expedição de Evento
---

Ao contrário dos eventos do DOM, os eventos do componente não *transbordam*. Se quiseres ouvir um evento em algum componente profundamente encaixado, os componentes intermediários devem *expedir* o evento.

Neste caso, temos o mesmo `App.svelte` e `Inner.svelte` como no [capítulo anterior](/tutorial/component-events), mas agora existe um componente `Outer.svelte` que contém o `<Inner/>`.

Um maneira que poderíamos resolver o problema é adicionar `createEventDispatcher` ao `Outer.svelte`, ouvindo o evento `message`, e criar um manipulador para ele:

```html
<script>
	import Inner from './Inner.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function forward(event) {
		dispatch('message', event.detail);
	}
</script>

<Inner on:message={forward}/>
```

Porém é muito código para escrever, então a Svelte oferece-nos uma abreviação equivalente — uma diretiva de evento `on:message` sem um valor significa 'expedir todos os eventos de `message`':

```html
<script>
	import Inner from './Inner.svelte';
</script>

<Inner on:message/>
```