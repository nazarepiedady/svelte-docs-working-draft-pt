---
title: Ranhuras
---

Tal como os elementos podem ter filhos...:

```html
<div>
	<p>I'm a child of the div</p>
</div>
```

...os componentes também podem. No entanto, antes dum componente puder aceitar filhos, este precisa saber onde colocá-los. Nós fazemos isto com o elemento `<slot>`. Colocamos isto dentro do `Box.svelte`:

```html
<div class="box">
	<slot></slot>
</div>
```

Nós agora podemos colocar coisas na caixa:

```html
<Box>
	<h2>Hello!</h2>
	<p>This is a box. It can contain anything.</p>
</Box>
```