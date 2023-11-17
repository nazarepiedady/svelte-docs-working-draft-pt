---
title: A Diretiva Class
---

Tal como qualquer outro atributo, podemos especificar classes com um atributo de JavaScript, visto neste exemplo:

```html
<button
	class="{current === 'foo' ? 'selected' : ''}"
	on:click="{() => current = 'foo'}"
>foo</button>
```

Isto é um padrão muito com no desenvolvimento de interfaces que a Svelte inclui uma diretiva especial para simplificá-lo:

```html
<button
	class:selected="{current === 'foo'}"
	on:click="{() => current = 'foo'}"
>foo</button>
```

A classe `selected` é adicionada ao elemento sempre que o valor da expressão for verdadeiro, e removida quando for falso.
