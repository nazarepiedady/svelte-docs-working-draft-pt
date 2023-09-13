---
title: Salto
---

A função `spring` é uma alternativa à `tweened` que muitas vezes funciona melhor para valores que estão mudando frequentemente.

Neste exemplo, temos duas memórias — uma representando as coordenadas do círculo, e uma representando o seu tamanho. Vamos convertê-los aos saltos:

```html
<script>
	import { spring } from 'svelte/motion';

	let coords = spring({ x: 50, y: 50 });
	let size = spring(10);
</script>
```

Ambos saltos têm valores de `stiffness` e `damping` padrão, os quais controlam os saltos, bem... a capacidades de saltar. Nós podemos especificar os nossos valores iniciais:

```js
let coords = spring({ x: 50, y: 50 }, {
	stiffness: 0.1,
	damping: 0.25
});
```

Agite o teu rato em torno, e tente arrastar os controlos deslizantes saberes como afetam o comportamento do salto. Repara que podes ajustar os valores enquanto o salto continuar em movimento.

Consulte a [referência da API](/docs#run-time-svelte-motion-spring) por mais informação.
