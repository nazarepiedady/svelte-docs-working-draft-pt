---
title: Declarando propriedades
---

Até aqui, lidávamos exclusivamente com estado interno — quer dizer, os valores apenas são acessíveis dentro de um dado componente.

Em qualquer aplicação real, precisarás de passar dados de um componente para os seus filhos. Para fazer isto, precisamos de declarar *propriedades*, geralmente abreviadas como `props`. Na Svelte, fazemos isto com a palavra-chave `export`. Edite o componente `Nested.svelte`:

```html
<script>
	export let answer;
</script>
```

> Tal como `$:`, isto pode parecer um pouco estranho a primeira. Isto não como `export` normalmente funciona nos módulos de JavaScript! apenas por agora aceite como esta — em breve tornar-se-á natural.