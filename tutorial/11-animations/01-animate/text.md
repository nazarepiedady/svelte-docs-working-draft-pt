---
title: A Diretiva animate
---

No [capítulo anterior](/tutorial/deferred-transitions), usamos transições retardadas para criar a ilusão de movimento uma vez que os elementos movem-se de uma lista de afazeres para outra.

Para completar a ilusão, também precisamos de aplicar o movimento aos elementos que *não estão* transitando. Para isto, usamos a diretiva `animate`.

Primeiro, importamos a função `flip` — `flip` significa ['First, Last, Invert, Play' (Primeiro, Último, Inverter, Tocar)](https://aerotwist.com/blog/flip-your-animations/) — do `svelte/animate`:

```js
import { flip } from 'svelte/animate';
```

Então o adicionamos aos elementos `<label>`:

```html
<label
	in:receive="{{key: todo.id}}"
	out:send="{{key: todo.id}}"
	animate:flip
>
```

O movimento é um pouco lento neste caso, então podemos adicionar um parâmetro `duration`:

```html
<label
	in:receive="{{key: todo.id}}"
	out:send="{{key: todo.id}}"
	animate:flip="{{duration: 200}}"
>
```

> `duration` também pode ser uma função `d => milliseconds`, onde `d` é o número de píxeis que o elemento tem de viajar

Nota que todas as transições e animações são a ser aplicadas com a CSS, ao invés da JavaScript, o que significa que não bloquearão (ou serão bloqueada pela) a linha principal.