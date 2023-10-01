---
title: Blocos Chave
---

Os blocos chave destroem e recriam o seu conteúdo quando o valor duma expressão mudar:

```html
{#key value}
	<div transition:fade>{value}</div>
{/key}
```

Isto é útil se quisermos um elemento para tocar a sua transição sempre que um valor mudar ao invés de apenas quando o elemento entrar ou sair do DOM.

Envolvemos o elemento `<span>` num bloco chave dependendo do `number`. Isto fará a animação entrar em cena sempre que pressionarmos o botão de incrementar.
