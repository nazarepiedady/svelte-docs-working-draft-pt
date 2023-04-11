---
title: Memórias Graváveis
---

Nem todo o estado da aplicação deve estar dentro da hierarquia de componente da tua aplicação. Algumas vezes, terás valores que precisam ser acessados por vários componentes não relacionados, ou por um módulo normal de JavaScript.

Na Svelte, fazemos isto com *memórias*. Uma memória é simplesmente um objeto com um método `subscribe` que permite partes interessadas serem notificadas sempre que o valor da memória mudar. No `App.svelte`, `count` é uma memória, e estamos a definir `countValue` na função de resposta `count.subscribe`.

Clique no separador `stores.js` para veres a definição de `count`. É uma memória *gravável*, que significa que tem os métodos `set` e `update` além do `subscribe`.

Agora vá para o separador `Incrementer.svelte` para que possamos ligar ao botão `+`:

```js
function increment() {
	count.update(n => n + 1);
}
```

Clicar sobre o botão `+` deveria agora atualizar a `count`. Faça o inverso para o `Decrementer.svelte`.

Finalmente, no `Resetter.svelte`, implemente `reset`:

```js
function reset() {
	count.set(0);
}
```
