---
title: Declarações
---

A reatividade da Svelte não apenas mantém o DOM em sincronia com as variáveis da tua aplicação como mostrado na seção anterior, também pode manter as variáveis em sincronia uma com as outras usando declarações reativas. Elas parecem-se com isto:

```js
let count = 0;
$: doubled = count * 2;
```

> Não te preocupes se isto parece um pouco extraterrestre. É JavaScript [válido](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label) (apesar de pouco convencional), o qual a Svelte interpreta para significar 'execute este código novamente sempre que qualquer um dos valores referenciados mudar'. Uma vez que estiveres habituado à isto, não têm como voltar atrás.

Vamos usar `doubled` na nossa marcação:

```html
<p>{count} doubled is {doubled}</p>
```

É claro que, poderias apenas escrever `{count * 2}` na marcação — não tens de usar valores reativos. Os valores reativos tornam-se particularmente valiosos quando precisas de referenciá-los várias vezes, ou tiveres valores que dependem de *outros* valores reativos.
