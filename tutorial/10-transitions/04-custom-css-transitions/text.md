---
title: Transições de CSS Personalizadas
---

O módulo `svelte/transition` tem uma mão cheia de transições embutidas, mas é muito fácil criar a tua própria. À laia de exemplo, este é a fonte da transição `fade`:

```js
function fade(node, {
	delay = 0,
	duration = 400
}) {
	const o = +getComputedStyle(node).opacity;

	return {
		delay,
		duration,
		css: t => `opacity: ${t * o}`
	};
}
```

A função recebe dois argumentos — o nó para o qual a transição é aplicada, e quaisquer parâmetros que foram passados — e retorna um objeto de transição que pode ter as seguintes propriedades:

* `delay` — milissegundos antes da transição começar
* `duration` — duração da transição em milissegundos
* `easing` — uma função de atenuação `p => t` (consulte o capítulo sobre [intercalação](/tutorial/tweened))
* `css` — uma função `(t, u) => css`, onde `u === 1 - t`
* `tick` — uma função `(t, u) => {...}` que tem algum efeito sobre o nó

O valor de `t` é `0` no começo duma introdução ou fim duma final, e `1` no fim duma introdução ou começo duma final.

Na maioria do tempo devemos retornar a propriedade `css` e *não* a propriedade `tick`, visto que as animações de CSS executam fora da linha principal para evitar interferência onde possível. A Svelte 'simula' a transição e constrói uma animação de CSS, depois deixa-a executar.

Por exemplo, a transição `fade` gera uma animação de CSS de alguma forma parecida com isto:

```css
0% { opacity: 0 }
10% { opacity: 0.1 }
20% { opacity: 0.2 }
/* ... */
100% { opacity: 1 }
```

Nós podemos ser muito mais criativos. Façamos algo verdadeiramente gratuito:

```html
<script>
	import { fade } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';

	let visible = true;

	function spin(node, { duration }) {
		return {
			duration,
			css: t => {
				const eased = elasticOut(t);

				return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
					color: hsl(
						${Math.trunc(t * 360)},
						${Math.min(100, 1000 - 1000 * t)}%,
						${Math.min(50, 500 - 500 * t)}%
					);`
			}
		};
	}
</script>
```

Lembrem-se: com grande poder vem grande responsabilidade.