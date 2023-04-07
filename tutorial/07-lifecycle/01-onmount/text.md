---
title: onMount
---

Todo componente tem um *ciclo de vida* que começa quando é criado, e termina quando é destruído. Existem um punhado de funções que permitem-te executar o código em momentos chaves durante este ciclo de vida.

Aquela que usarás com mais frequência é `onMount`, a qual executa depois do componente ser apresentado primeiro no DOM. Nós deparámos-nos com ele sucintamente [anteriormente](/tutorial/bind-this) quando precisávamos de interagir com um elemento `<canvas>` depois de ter sido apresentado.

Adicionaremos um manipulador de `onMount` que carrega alguns dados sobre a rede:

```html
<script>
	import { onMount } from 'svelte';

	let photos = [];

	onMount(async () => {
		const res = await fetch(`/tutorial/api/album`);
		photos = await res.json();
	});
</script>
```

> É recomendado colocar a `fetch` na `onMount` ao invés do nível superior do `<script>` por causa da interpretação no lado do servidor (SSR). Com a exceção de `onDestroy`, as funções do ciclo de vida não executam durante a SSR, o que significa que podemos evitar a requisição de dados que deveriam ser carregados preguiçosamente assim que o componente tiver sido montado no DOM.

As funções do ciclo de vida devem ser chamadas enquanto o componente estiver inicializando para que a função de resposta seja vinculada à instância do componente — não estamos a (dizer) dentro de um `setTimeout`.

Se a função de reposta de `onMount` retornar uma função, esta função será chamada quando o componente for destruído.