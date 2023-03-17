---
title: Entradas de Texto
---

Como regra geral, o fluxo de dados na Svelte é de *cima para baixo* — um componente pai pode definir propriedades sobre um componente filho, e um componente pode definir atributos sobre um elemento, mas não na maneira inversa.

Algumas vezes é útil quebrar esta regra. Considere o caso do elemento `<input>` neste componente — nós *poderíamos* adicionar um manipulador de evento `on:input` que define o valor do `name` para `event.target.value`, porém é um pouco... cozinhado. Fica ainda pior com outros elementos de formulário, como veremos.

Ao invés disto, podemos usar a diretiva `bind:value`:

```html
<input bind:value={name}>
```

Isto significa que não apenas mudará para o valor da `name` que atualiza o valor da entrada, mas as mudanças ao valor da entrada atualizarão a `name`.
