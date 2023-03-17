---
title: Entradas da Área de Texto
---

O elemento `<textarea>` comporta-se de maneira parecida com uma entrada de texto na Svelte — use a `bind:value` para criar um vínculo de dois caminhos entre o conteúdo do `<textarea>` e a variável `value`:

```html
<textarea bind:value={value}></textarea>
```

Em casos como estes, onde os nomes correspondem-se, também podemos usar uma forma abreviada:

```html
<textarea bind:value></textarea>
```

Isto aplica-se à todos vínculos, não apenas aos da área de texto.
