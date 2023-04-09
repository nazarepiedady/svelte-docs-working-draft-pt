---
title: tick
---

A função `tick` é ao diferente de outras funções do ciclo de vida em podes chamá-la a qualquer momento, não apenas quando o componente inicializa primeiro. Ela retorna uma promessa que resolve assim que quaisquer mudanças de estado pendente tiver sido aplicada ao DOM (ou imediatamente, se não existirem mudanças de estado pendente).

Quando atualizas o estado do componente na Svelte, esta não atualiza o DOM imediatamente. No lugar disto, aguarda até a próxima *micro tarefa* para ver se existem quaisquer outras mudanças que precisam ser atualizadas, incluindo em outros componentes. Fazendo assim evita trabalho desnecessário e permite o navegador organizar por grupos as coisas mais eficientemente.

Tu podes ver este comportamento neste exemplo. Selecione um limite de texto e pressione a tecla de tabulação. Uma vez que o valor de `<textarea>`, a seleção atual é limpada e a barra intermitente pula, irritamente, para o final. Nós podemos corrigir isto importando `tick`...:

```js
import { tick } from 'svelte';
```

...e executá-lo imediatamente antes de definirmos `this.selectionStart` e `this.selectionEnd` no final de `handleKeydown`:

```js
await tick();
this.selectionStart = selectionStart;
this.selectionEnd = selectionEnd;
```