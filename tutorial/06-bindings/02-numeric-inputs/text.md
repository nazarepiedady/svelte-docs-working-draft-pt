---
title: Entradas Numéricas
---

No DOM, tudo é uma sequência de caracteres. O que é inútil quando estás a lidar com entradas numéricas — `type="number"` e `type="range"` — já que isto significa que tens que lembrar de coagir o `input.value` antes de usá-lo.

Com a `bind:value`, a Svelte cuida disto por ti:

```html
<input type=number bind:value={a} min=0 max=10>
<input type=range bind:value={a} min=0 max=10>
```