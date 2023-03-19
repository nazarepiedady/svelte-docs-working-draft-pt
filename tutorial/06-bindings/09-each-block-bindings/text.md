---
title: Vínculos de Block Each
---

Tu podes vincular às propriedades dentro de um bloco `each`.

```html
{#each todos as todo}
	<div class:done={todo.done}>
		<input
			type=checkbox
			bind:checked={todo.done}
		>

		<input
			placeholder="What needs to be done?"
			bind:value={todo.text}
		>
	</div>
{/each}
```

> Nota que ao interagir com testes elementos de `<input>` alterarão o arranjo. Se preferes trabalhar com dados imutáveis, deves evitar estes vínculos e usar os manipuladores de evento no lugar deles.
