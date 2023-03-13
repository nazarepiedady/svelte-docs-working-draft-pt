---
title: Blocos if
---

A HTML não tem uma maneira de expressar *lógica*, como condicionais e laços de repetição. A Svelte tem.

Para condicionalmente aprender alguma marcação, envolvemos ela em um bloco de `if`:

```html
{#if user.loggedIn}
	<button on:click={toggle}>
		Log out
	</button>
{/if}

{#if !user.loggedIn}
	<button on:click={toggle}>
		Log in
	</button>
{/if}
```

Experimente-o — atualize o componente, e clique nos botões.