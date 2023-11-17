---
title: Adicionando Parâmetros
---

Tal como as transições e animações, uma ação pode receber um argumento, com a qual a função da ação que será chamada ao lado do elemento em que esta pertence.

Neste contexto, usamos uma ação `longpress` que dispara um evento com o mesmo nome sempre que o utilizador pressionar e segurar o botão por uma dada duração. Neste exato momento, se mudarmos para o ficheiro `longpress.js`, veremos que está codificado manualmente para 500ms.

Nós podemos mudar a função da ação para aceitar uma `duration` como segundo argumento, e passar esta `duration` à chamada de `setTimeout`:

```js
export function longpress(node, duration) {
	// ...

	const handleMousedown = () => {
		timer = setTimeout(() => {
			node.dispatchEvent(
				new CustomEvent('longpress')
			);
		}, duration);
	};

	// ...
}
```

De volta ao `App.svelte`, podemos passar o valor da `duration` à ação:

```html
<button use:longpress={duration}
```

Isto *quase* funciona — agora o evento apenas dispara depois de 2 segundos. Mas se deslizarmos a duração para baixo, ainda continuará a receber dois segundos.

Para mudar isto, podemos adicionar um método `update` no `longpress.js`. Isto será chamado sempre que o argumento mudar:

```js
return {
	update(newDuration) {
		duration = newDuration;
	},
	// ...
};
```

> Se precisarmos de passar vários argumentos à uma ação, as combinamos num único objeto, como em `use:longpress={{duration, spiciness}}`.