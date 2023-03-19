---
title: This
---

O vínculo de apenas leitura de `this` aplica-se à todo elemento (e componente) e permite-te obter uma referência para os elementos apresentados. Por exemplo, podemos receber uma referência para um elemento `<canvas>`:

```html
<canvas
	bind:this={canvas}
	width={32}
	height={32}
></canvas>
```

Nota que o valor de `canvas` será `undefined` até o componente tiver sido montado, assim colocamos a lógica dentro da [função `onMount` do ciclo de vida](/tutorial/onmount).
