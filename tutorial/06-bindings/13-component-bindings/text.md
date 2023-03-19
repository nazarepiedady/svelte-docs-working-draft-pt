---
title: Vínculos de Componente
---

Exatamente como podes vincular às propriedades dos elementos do DOM, podes vincular às propriedades do componente. Por exemplo, podemos vincular à propriedade `value` deste componente `<Keypad>` como se fosse um elemento de formulário:

```html
<Keypad bind:value={pin} on:submit={handleSubmit}/>
```

Agora, quando o utilizador interagir com o teclado numérico, o valor de `pin` no componente pai é imediatamente atualizado.

> Use os vínculos de componente com moderação. Pode ser difícil de rastrear o fluxo dos dados em torno da tua aplicação se tiveres muitos deles, especialmente se não houver 'única fonte de verdade'.