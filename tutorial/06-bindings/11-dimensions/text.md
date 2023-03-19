---
title: Dimensões
---

Todo elemento de nível de bloco tem os vínculos `clientWidth`, `clientHeight`, `offsetWidth` e `offsetHeight`:

```html
<div bind:clientWidth={w} bind:clientHeight={h}>
	<span style="font-size: {size}px">{text}</span>
</div>
```

Estes vínculos são de apenas leitura — mudar os valores de `w` e `h` não terá nenhum efeito.

> Os elementos são medidos usando uma técnica parecida com [esta](http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/). Há algumas despesas gerais envolvidas, então não é recomendado usar isto para grandes números de elementos.
>
> Os elementos `display: inline` não podem ser medidos com esta abordagem; nem podem os elementos que não podem conter outros elementos (tais como `<canvas>`). Nestes casos precisarás de medir o elemento envolvedor.