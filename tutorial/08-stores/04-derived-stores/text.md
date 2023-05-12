---
title: Memórias Derivadas
---

Tu podes criar uma memória cujo valor é baseado no valor de uma ou mais *outras* memórias com `derived`. Construindo o nosso exemplo anterior, podemos criar uma memória que deriva o momento que a página foi aberta:

```js
export const elapsed = derived(
	time,
	$time => Math.round(($time - start) / 1000)
);
```

> É possível derivar uma memória a partir de várias entradas, e `set` (definir) explicitamente um valor no lugar de retorná-lo (o que é útil para derivar os valores de maneira assíncrona). Consulte a [referência da API](/docs#run-time-svelte-store-derived) por mais informação.
