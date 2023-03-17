---
title: Entradas de Grupo
---

Se tiveres várias entradas relacionadas ao mesmo valor, podes usar a `bind:group` junto do atributo `value`. As entradas de rádio no mesmo grupo são mutuamente exclusivos; as entradas da caixa de verificação no mesmo grupo formam um arranjo de valores selecionado.

Adicione a `bind:group` para cada entrada:

```html
<input type=radio bind:group={scoops} name="scoops" value={1}>
```

Neste caso, poderíamos tornar o código mais simples movendo as entradas de caixa de verificação para um bloco `each`. Primeiro, adicione uma variável `menu` ao bloco `<script>`...

```js
let menu = [
	'Cookies and cream',
	'Mint choc chip',
	'Raspberry ripple'
];
```

...depois substitua a segunda seção:

```html
<h2>Flavours</h2>

{#each menu as flavour}
	<label>
		<input type=checkbox bind:group={flavours} name="flavours" value={flavour}>
		{flavour}
	</label>
{/each}
```

Agora é fácil expandir o nosso menu de gelados em novas e entusiasmantes direções.