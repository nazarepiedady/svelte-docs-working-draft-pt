---
title: Transições Retardadas
---

Uma funcionalidade particularmente poderosa do motor de transição da Svelte é a habilidade de *retardar* as transições, para que possam ser coordenadas entre vários elementos.

Considere este par de listas de afazeres, no qual alternar um afazer envia-o para a lista oposta. No mundo real, os objetos não comportam-se desta maneira — ao invés de desaparecer e reaparecer noutro lugar, movem-se através duma série de posições intermediária. O uso de movimento pode ir muito longe para ajudar os utilizadores a entenderem o que está a acontecer na nossa aplicação.

Nós podemos alcançar este efeito usando a função `crossfade`, a qual cria um par de transições chamadas `send` e `receive`. Quando um elemento for 'enviado', procura por um elemento correspondente sendo 'recebido', e gera uma transição que transforma o elemento a posição do seu equivalente e fazê-lo desaparecer progressivamente. Quando um elemento for 'recebido', o inverso acontece. Se não existir nenhum equivalente, a transição `fallback` é usado.

Encontramos o elemento `<label>` na linha 65, e adicionamos as transições `send` e `receive`:

```html
<label
	in:receive="{{key: todo.id}}"
	out:send="{{key: todo.id}}"
>
```

Fazemos o mesmo para o próximo elemento `<label>`:

```html
<label
	class="done"
	in:receive="{{key: todo.id}}"
	out:send="{{key: todo.id}}"
>
```

Agora, quando alternamos os itens, movem-se suavemente para a sua nova localização. Os itens não transitórios ainda saltam à volta desajeitadamente — podemos corrigir isto no próximo capítulo.