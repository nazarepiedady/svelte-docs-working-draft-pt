---
title: Vincular às instâncias de componente
---

Exatamente como podes vincular aos elementos do DOM, podes vincular às próprias instâncias do componente. Por exemplo, podemos vincular a instância de `<InputField>` à uma variável nomeada `field` da mesma maneira que fizemos quando vinculamos elementos do DOM:

```html
<script>
	let field;
</script>

<InputField bind:this={field} />
```

Agora podes interagir programaticamente com este componente usando `field`:

```html
<button on:click="{() => field.focus()}">
	Focus field
</button>
```

> Nota que não podemos fazer `{field.focus}` já que a `field` é `undefined` quando o botão é apresentado primeiro e lança um erro.
