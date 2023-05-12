---
title: Auto-subscrições
---

A aplicação no exemplo anterior funciona, mas existe um subtil erro de programação — a memória é subscrita para, mas a subscrição nunca é desfeita. Se o componente fosse instanciado e destruído muitas vezes, isto resultaria num *vazamento de memória*.

Comece por declarar `unsubscribe` no `App.svelte`:

```js
const unsubscribe = count.subscribe(value => {
	countValue = value;
});
```
> A chamada de um método `subscribe` retorna uma função `unsubscribe`.

Tu agora declaraste `unsubscribe`, mas ele ainda precisa de ser chamada, por exemplo através do [gatilho de ciclo de vida](/tutorial/ondestroy) `onDestroy`:

```html
<script>
	import { onDestroy } from 'svelte';
	import { count } from './stores.js';
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';

	let countValue;

	const unsubscribe = count.subscribe(value => {
		countValue = value;
	});

	onDestroy(unsubscribe);
</script>

<h1>The count is {countValue}</h1>
```

No entanto, isto começa a tornar-se um pouco complicado, especialmente se o teu componente subscreve a várias memórias. Ao invés disto, a Svelte tem um truque na sua manga — podes referenciar um valor da memória prefixando o nome da memória com `$`:

```html
<script>
	import { count } from './stores.js';
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';
</script>

<h1>The count is {$count}</h1>
```

> A auto-subscrição apenas funciona com as variáveis da memória que são declaradas (ou importadas) no âmbito de alto nível dum componente. 

Não estás limitado a usar `$count` dentro da marcação — podes usá-lo em qualquer parte no `<script>` também, tal como em manipuladores de evento ou declarações reativas.

> Qualquer nome começando com `$`  é suposto fazer referência à um valor da memória. É efetivamente um carácter reservado — a Svelte impedir-te-á de declarar as tuas próprias variáveis com um prefixo `$`.
