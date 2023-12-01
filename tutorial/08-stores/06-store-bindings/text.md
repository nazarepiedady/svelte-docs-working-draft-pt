---
title: Vínculos de Memória
---

Se uma memória for gravável — isto é, tiver um método `set` — podemos vincular ao seu valor, exatamente como podemos vincular ao estado do componente local.

Neste exemplo temos uma memória gravável `name` e uma memória derivada `greeting`. Atualize o elemento `<input>`:

```html
<input bind:value={$name}>
```

Agora alterar o valor da entrada atualizará `name` e todos os seus dependentes.

Nós podemos também atribuir diretamente aos valores da memória dentro dum componente. Adicione um elemento `<button>`:

```html
<button on:click="{() => $name += '!'}">
	Add exclamation mark!
</button>
```

A atribuição `$name += '!'` é equivalente à `name.set($name + '!')`.
