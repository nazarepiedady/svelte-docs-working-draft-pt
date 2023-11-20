---
title: tick
---

A função `tick` é diferente de outras funções do ciclo de vida a que podemos chamar a qualquer momento, não apenas quando o componente inicializa primeiro. Esta retorna uma promessa que resolve assim que quaisquer mudanças de estado pendentes tiver sido aplicada ao DOM (ou imediatamente, se não existirem mudanças de estado pendentes).

Quando atualizas o estado do componente na Svelte, esta não atualiza o DOM imediatamente. No lugar disto, aguarda até a próxima *micro tarefa* para ver se existem quaisquer outras mudanças que precisam ser atualizadas, incluindo em outros componentes. Fazendo assim evita trabalho desnecessário e permite o navegador organizar por grupos as coisas mais eficientemente.

Nós podemos ver este comportamento neste exemplo. Selecionamos um limite de texto e pressionamos tecla de tabulação. Uma vez que o valor de `<textarea>` muda, a seleção atual é limpada e a barra intermitente pula, irritantemente, para o final. Nós podemos corrigir isto importando `tick`...:

```js
import { tick } from 'svelte';
```

...e executando-a imediatamente antes de definirmos `this.selectionStart` e `this.selectionEnd` no final da `handleKeydown`:

```js
await tick();
this.selectionStart = selectionStart;
this.selectionEnd = selectionEnd;
```
