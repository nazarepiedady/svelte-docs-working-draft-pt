---
title: Expressões
---

Não estamos limitados a declarar *valores* reativos — também podemos executar *expressões* arbitrárias de maneira reativa. Por exemplo, podemos registar na consola do valor da `count` sempre que esta mudar:

```js
$: console.log('the count is ' + count);
```

Tu podes agrupar facilmente as expressões com um bloco:

```js
$: {
	console.log('the count is ' + count);
	alert('I SAID THE COUNT IS ' + count);
}
```

Tu podes até mesmo colocar o `$:` em frente de coisas como blocos de `if`:

```js
$: if (count >= 10) {
	alert('count is dangerously high!');
	count = 9;
}
```