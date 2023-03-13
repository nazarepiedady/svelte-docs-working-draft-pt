---
title: Blocos else
---

Já que as duas condições — `if user.loggedIn` e `if !user.loggedIn` — são mutuamente exclusivas, podemos simplificar este componente ligeiramente usando um bloco de `else`:

```html
{#if user.loggedIn}
	<button on:click={toggle}>
		Log out
	</button>
{:else}
	<button on:click={toggle}>
		Log in
	</button>
{/if}
```

> Um carácter `#` sempre indica que um marcador de *abertura de bloco*. Um carácter `/` sempre indica um marcador de *fechamento de bloco*. Um carácter `:`, assim como em `{:else}` indica um marcador de *continuação de bloco*. Não te preocupes — já aprendeste quase toda sintaxe que a Svelte adiciona ao HTML.