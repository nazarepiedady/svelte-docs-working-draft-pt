---
title: Atualizando os arranjos e objetos
---

A reatividade da Svelte é acionada pelas atribuições. Os métodos que alteram os arranjos ou objetos não acionarão as atualizações por si mesmos.

Neste exemplo, o clique sobre o botão "Add a number" chama a função `addNumber`, que adiciona um número no final do arranjo mas não aciona o novo cálculo de `sum`.

Uma maneira de corrigir isto é atribuir `numbers` à si mesmo para dizer ao compilador que ele mudou:

```js
function addNumber() {
	numbers.push(numbers.length + 1);
	numbers = numbers;
}
```

Tu também poderias escrever isto mais concisamente usando a sintaxe de propagação da ES6:

```js
function addNumber() {
	numbers = [...numbers, numbers.length + 1];
}
```

A mesma regra aplica-se aos métodos do arranjo tais como `pop`, `shift`, e `splice` e aos métodos dos objetos tais como `Map.set`, `Set.add`, etc. 

As atribuições às *propriedades* de arranjos e objetos — por exemplo, `obj.foo += 1` ou `array[i] = x` — funcionam da mesma maneira que as atribuições aos seus próprios valores.

```js
function addNumber() {
	numbers[numbers.length] = numbers.length + 1;
}
```

No entanto, atribuições indiretas para referências tais como...

```js
const foo = obj.foo;
foo.bar = 'baz';
```

or 

```js
function quox(thing) {
	thing.foo.bar = 'baz';
}
quox(obj);
```

...não acionarão a reatividade no `obj.foo.bar`, a menos que o sigas com `obj = obj`.

Uma simples regra de aprovação: a variável atualizada deve aparecer diretamente no lado esquerdo da atribuição.
