---
title: Adicionado Dados
---

Um componente que apenas apresenta alguma marcação estática não é muito interessante. Vamos adicionar alguma informação.

Primeiro, adicione um marcador `<script>` ao teu componente e declare uma variável `name`:

```html
<script>
	let name = 'world';
</script>

<h1>Hello world!</h1>
```

Depois, podemos fazer referência ao `name` na marcação:

```html
<h1>Hello {name}!</h1>
```

Dentro das chavetas, podemos colocar qualquer código de JavaScript que quisermos. Experimente mudar a `name` para `name.toUpperCase()` para teres uma saudação aos gritos.