---
title: Memórias Legíveis
---

Nem todas as memórias deveriam ser graváveis por quem quer que tiver uma referência à elas. Por exemplo, podes ter uma memória representando a posição do rato ou localização geográfica do utilizador, e não faz sentido ser capaz de definir estes valores a partir do 'lado de fora'. Para estes casos, temos memórias *legíveis*.

Clique sobre o separador `stores.js`. O primeiro argumento para `readable` é um valor inicial, que pode ser `null` ou `undefined` se ainda não tiveres um. O segundo argumento é uma função `start` que recebe uma função de resposta `set` e retorna uma função `stop`. A função `start` é chamada quando a memória recebe o seu primeiro subscritor; `stop` é chamada quando o último subscritor desfazer a subscrição:

```js
export const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});
```
