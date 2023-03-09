---
title: Componentes encaixados
---

Seria pouco prático colocar a tua aplicação inteira em um único componente. Ao invés disto, podemos importar os componentes a partir de outros ficheiros e depois usá-los como se estivéssemos a incluir elementos.

Agora apresentamos-te 2 ficheiros no editor na direita (barra superior) para clicar sobre, `App.svelte` e `Nested.svelte`.

Cada ficheiro `.svelte` segura um componente que é um bloco de código autossuficiente reutilizável que envolve o HTML, CSS, e JavaScript estão relacionados.

Vamos adicionar um marcador `<script>` ao `App.svelte` que importa o ficheiro (o nosso componente) `Nested.svelte` para a nossa aplicação...

```html
<script>
	import Nested from './Nested.svelte';
</script>
```

...depois usar o componente `Nested` na marcação da aplicação:

```html
<p>This is a paragraph.</p>
<Nested/>
```

Nota que apesar do `Nested.svelte` ter um elemento `<p>`, os estilos do `App.svelte` não vazam para dentro.

Além disto nota que o nome do componente `Nested` está com a primeira letra em maiúscula. Esta convenção tem sido adotada para permitir-nos diferenciar entre os componentes definidos pelos utilizador e os marcadores de HTML normais.
