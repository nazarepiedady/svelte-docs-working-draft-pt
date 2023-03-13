---
title: Blocos each
---

Se precisares iterar sobre uma lista de dados, use um bloco `each`:

```html
<ul>
	{#each cats as cat}
		<li><a target="_blank" href="https://www.youtube.com/watch?v={cat.id}" rel="noreferrer">
			{cat.name}
		</a></li>
	{/each}
</ul>
```

> A expressão (`cats`, neste caso) pode ser qualquer arranjo ou objeto parecido com um arranjo (por exemplo, ele tem uma propriedade `length`). Tu podes iterar sobre iteráveis com `each [...iterable]`.

Tu podes receber o *índice* atual como segundo argumento, como:

```html
{#each cats as cat, i}
	<li><a target="_blank" href="https://www.youtube.com/watch?v={cat.id}" rel="noreferrer">
		{i + 1}: {cat.name}
	</a></li>
{/each}
```

Se preferires, podes usar a desestruturação — `each cats as { id, name }` — e substitua o `cat.id` e `cat.name` com o `id` e `name`.
