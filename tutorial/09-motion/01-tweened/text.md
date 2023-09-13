---
title: Intercalado
---

Definir valores e observar o DOM atualizar-se automaticamente é fantástico. Sabes o que é mais fantástico? *Intercalar* estes valores. A Svelte inclui ferramentas para ajudar-te a construir interfaces de utilizador astutas que usam animação para comunicar mudanças.

Vamos começar por mudar a memória `progress` para um valor `tweened`:

```html
<script>
	import { tweened } from 'svelte/motion';

	const progress = tweened(0);
</script>
```

Clicar nos botões faz a barra de progresso animar para o seu novo valor. No entanto, é um pouco robótico e insatisfatório. Nós precisamos de adicionar uma função atenuação:

```html
<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	});
</script>
```

> O módulo `svelte/easing` contém as [equações de atenuação de Penner](https://web.archive.org/web/20190805215728/http://robertpenner.com/easing/), ou podes fornecer a tua própria função `p => t` onde `p` e `t` são ambos valores entre 0 e 1.

O conjunto completo de opções disponíveis para `tweened`:

* `delay` — milissegundos antes da interpolação começar
* `duration` — a duração da interpolação em milissegundos, uma função `(from, to) => milliseconds` que permite-te (por exemplo) especificar interpolações mais longas para as mudanças maiores no valor
* `easing` — uma função `p => t`
* `interpolate` — uma função `(from, to) => t => value` personalizada para interpolar entre números, datas, vetores e objetos de forma idêntica (desde contenham apenas números e datas ou vetores e objetos válidos). Se quiseres interpolar (por exemplo) sequências de caracteres de cor ou transformações de matrizes, forneça um interpolador personalizado.

Tu também podes passar estas opções à `progress.set` e `progress.update` como um segundo argumento, no caso em que sobreporão os padrões. Os métodos `set` e `update` ambos retornam uma promessa que resolve-se quando a interpolação terminar.
