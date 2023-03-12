---
title: Valores predefinidos
---

Nós podemos facilmente especificar valores predefinidos para as propriedades na `Nested.svelte`:

```html
<script>
	export let answer = 'a mystery';
</script>
```

Se agora adicionarmos um segundo componente *sem* uma propriedade `answer`, ele descerá para o valor predefinido:

```html
<Nested answer={42}/>
<Nested/>
```
