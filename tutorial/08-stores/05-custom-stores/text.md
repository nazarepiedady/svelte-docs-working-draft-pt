---
title: Memórias Personalizadas
---

Enquanto um objeto implementar corretamente o método `subscribe`, este é uma memória. Além disto, tudo funciona. É muito fácil, portanto, criar memórias personalizadas com a lógica específica de domínio.

Por exemplo, a memória `count` de nosso exemplo anterior poderia incluir os métodos `increment`, `decrement` e `reset` e evitar expor `set` e `update`:

```js
function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update(n => n + 1),
		decrement: () => update(n => n - 1),
		reset: () => set(0)
	};
}
```

