---
title: Vínculos de Selecionar
---

Nós também podemos usar a `bind:value` com os elementos `<select>`. Atualize a linha 20.

```html
<select bind:value={selected} on:change="{() => answer = ''}">
```

Nota que os valores de `<option>` são objetos em vez de sequência de caracteres. A Svelte não se importa.

> Uma vez que não temos definido uma valor inicial `selected`, o vínculo o definirá para valor padrão (o primeiro na lista) automaticamente. Mesmo assim tenha cuidado — até o vínculo ser inicializado, `selected` permanece `undefined`, então não podemos cegamente fazer referência por exemplo ao `selected.id` no modelo de marcação. Se o teu caso de uso permite-o, também poderias definir um valor inicial para contornar este problema.
