---
title: onDestroy
---

Para executares código quando o teu componente for destruído, use `onDestroy`.

Por exemplo, podemos adicionar uma função `setInterval` quando o nosso componente inicializa, e limpá-la quando não for mais relevante. Fazer isto evita vazamentos de memória.

```html
<script>
	import { onDestroy } from 'svelte';

	let counter = 0;
	const interval = setInterval(() => counter += 1, 1000);

	onDestroy(() => clearInterval(interval));
</script>
```

Embora seja importante chamar funções de ciclo de vida durante a inicialização do componente, não importa de *onde* as chamas. Então se quiséssemos, poderíamos abstrair a lógica interna para uma função auxiliar no `utils.js`...:

```js
import { onDestroy } from 'svelte';

export function onInterval(callback, milliseconds) {
	const interval = setInterval(callback, milliseconds);

	onDestroy(() => {
		clearInterval(interval);
	});
}
```

...e importá-la para o nosso componente:

```html
<script>
	import { onInterval } from './utils.js';

	let counter = 0;
	onInterval(() => counter += 1, 1000);
</script>
```

Abra e feche o temporizador algumas vezes e certifica-te de que o contador continua a fazer tiquetaque e a carga da CPU aumentar. Isto é devido à um vazamento de memória já que os temporizadores anteriores não foram eliminados. Não te esqueças de atualizar a página antes de solucionares o exemplo.