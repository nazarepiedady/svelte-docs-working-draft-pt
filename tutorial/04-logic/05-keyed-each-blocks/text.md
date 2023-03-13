---
title: Blocos each com chave
---

Por padrão, quando modificares o valor de um bloco de `each`, ele adicionará e removerá itens no *final* do bloco, e atualizará quaisquer valores que mudaram. Isto pode não ser o que queres.

É mais fácil mostrar o porquê do que explicar. Clique no botão 'Remove first thing' algumas vezes, e repare no que acontece: ele não remove o primeiro componente `<Thing>`, mas no lugar deste o *último* nó do DOM. Depois atualiza o valor de `name` nos nós de DOM restantes, mas não o emoji.

No lugar deste, gostaríamos de remover apenas o primeiro componente `<Thing>` e seu nó do DOM, e deixar os outros não afetados.

Para fazer isto, especificamos um identificador único (ou "chave") para o bloco de `each`:

```html
{#each things as thing (thing.id)}
	<Thing name={thing.name}/>
{/each}
```

Neste bloco, `(thing.id)` é a *chave*, que diz à Svelte como encontrar qual nó do DOM à mudar quando o componente atualiza.

> Tu podes usar qualquer objeto como chave, já que a Svelte usa um `Map` internamente — em outras palavras poderias fazer `(thing)` no lugar de `(thing.id)`. Usando uma sequência de caracteres ou número é geralmente mais seguro, no entanto, visto que isto significa que a identidade persiste sem a igualdade referencial, por exemplo quando estiveres a atualizar com novos dados de um servidor de API.
