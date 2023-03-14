---
title: Modificadores de Evento
---

Os manipuladores de evento do DOM podem ter *modificadores* que alteram o seu comportamento. Por exemplo, um manipulador com um modificador `once` apenas executará uma única vez:

```html
<script>
	function handleClick() {
		alert('no more alerts')
	}
</script>

<button on:click|once={handleClick}>
	Click me
</button>
```

A lista completa dos modificadores:

* `preventDefault` — chama `event.preventDefault()` antes da execução do manipulador. Útil para manipulação de formulário no lado do cliente, por exemplo.
* `stopPropagation` — chama `event.stopPropagation()`, impedindo o evento de chegar ao próximo elemento.
* `passive` — melhora o desempenho do deslocamento nos eventos tocar/empurrar (ou *touch/wheel* em Inglês) (a Svelte irá adicioná-lo onde for seguro)
* `nopassive` — define explicitamente `passive: false`.
* `capture` — dispara o manipulador durante a fase de *captura* ao invés da fase *transbordamento* ([documentação da MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture)).
* `once` — remove o manipulador depois da primeira vez que for executado.
* `self` — apenas aciona o manipulador se a `event.target` for o próprio elemento.
* `trusted` — apenas aciona o manipulador se a `event.isTrusted` for `true`. Por exemplo, se o evento for acionado por uma ação do utilizador.

Tu podes encadear modificadores, por exemplo `on:click|once|capture={...}`.
