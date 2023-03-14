---
title: Eventos do Componente
---

Os componentes também podem despachar eventos. Para o fazer, devem criar um despachador. Atualize `Inner.svelte`:

```html
<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function sayHello() {
		dispatch('message', {
			text: 'Hello!'
		});
	}
</script>
```

> `createEventDispatcher` deve ser chamado quando o componente for instanciado primero — não podes o fazer depois dentro de, por exemplo, uma função de resposta `setTimeout`. Isto liga a `dispatch` à instância do componente.

Nota que o componente `App` está ouvindo às mensagens despachadas pelo componente `Inner` graças à diretiva `on:message`. Esta diretiva é um atributo prefixado com `on:` seguido do nome do evento que estamos a despachar (neste caso, `message`).

Sem este atributo, as mensagens ainda seriam despachadas, mas o `App` não reagiria à elas. Tu podes tentar remover o atributo `on:message` e pressionar o botão novamente.

> Tu também podes tentar mudar o nome do evento para outra coisa. Por exemplo, mudar `dispatch('message')` para `dispatch('myevent')` no `Inner.svelte` e mudar o nome do atributo de `on:message` para `on:myevent` no componente `App.svelte`.
