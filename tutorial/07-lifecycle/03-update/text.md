---
title: beforeUpdate e afterUpdate
---

A função `beforeUpdate` agenda atividade para acontecer imediatamente antes do DOM ser atualizado. A `afterUpdate` é a sua equivalente, usada para executar código assim que o DOM estiver em sincronia com os teus dados.

Juntas, são úteis para fazer imperativamente coisas que são difíceis de alcançar de uma maneira puramente orientada a estado, como atualizar a posição de deslocamento de um elemento.

Este robô de discussão [Eliza](https://en.wikipedia.org/wiki/ELIZA) é incomodativo usar porque tens que continuar deslocando a janela da conversa. Vamos corrigir isto:

```js
let div;
let autoscroll;

beforeUpdate(() => {
	autoscroll = div && (div.offsetHeight + div.scrollTop) > (div.scrollHeight - 20);
});

afterUpdate(() => {
	if (autoscroll) div.scrollTo(0, div.scrollHeight);
});
```

Nota que a `beforeUpdate` executará primeiro antes do componente tiver montado, então precisamos verificar a existência do `div` antes ler as suas propriedades.
