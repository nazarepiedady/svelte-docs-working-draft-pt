---
title: Atribuições
---

No coração da Svelte está um sistema de **reatividade** poderoso para manter o DOM em sincronia com o estado da tua aplicação — por exemplo, em resposta à um evento.

Para demonstrá-lo, primeiro precisamos de prender um manipulador de evento. Substitua a linha 9 por esta:

```html
<button on:click={incrementCount}>
```

Dentro da função `incrementCount`, tudo o que precisamos de fazer é mudar o valor da `count`:

```js
function incrementCount() {
	count += 1;
}
```

A Svelte 'instrumentaliza' esta atribuição com algum código que diz ao DOM o que precisará de ser atualizado.
