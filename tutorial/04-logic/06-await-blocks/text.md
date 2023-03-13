---
title: Blocos await
---

A maioria das aplicações de web têm de lidar com dados assíncronos em algum ponto. A Svelte torna fácil *esperar* o valor de [promessas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) diretamente na tua marcação:

```html
{#await promise}
	<p>...waiting</p>
{:then number}
	<p>The number is {number}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
```

> Apenas a `promise` mais recente é considerada, querendo dizer que não precisas de te preocupares a respeito das condições da corrida.

Se souberes que a tua promessa não pode rejeitar, podes omitir o bloco `catch`. Tu podes também omitir o primeiro bloco se não quiseres mostrar qualquer coisa até a promessa resolver:

```html
{#await promise then number}
	<p>the number is {number}</p>
{/await}
```
