---
title: Selecionar Vários
---

Um elemento de selecionar podem ter um atributo `multiple`, naqueles casos em que povoará um arranjo ao invés de selecionar um único valor.

Retornando ao nosso [anterior exemplo de gelados](/tutorial/group-inputs), podemos substituir as caixas de verificação com um `<select multiple>`:

```html
<h2>Flavours</h2>

<select multiple bind:value={flavours}>
	{#each menu as flavour}
		<option value={flavour}>
			{flavour}
		</option>
	{/each}
</select>
```

> Pressione e segure a tecla `control` (ou a a tecla `command` no MacOs) para selecionar várias opções.
