---
title: Adicionando Parâmetros
---

As funções de transição pode aceitar os parâmetros. Substituímos a transição `fade` por `fly`...

```html
<script>
	import { fly } from 'svelte/transition';
	let visible = true;
</script>
```

...e a aplicamos ao `<p>` juntamente com algumas opções:

```html
<p transition:fly="{{ y: 200, duration: 2000 }}">
	Flies in and out
</p>
```

Nota que a transição é *reversível* — se alternarmos a caixa de confirmação enquanto a transição está em curso, transita a partir do ponto atual, ao invés do começo ou fim.