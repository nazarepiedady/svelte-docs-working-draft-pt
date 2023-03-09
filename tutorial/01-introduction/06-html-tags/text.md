---
title: Marcadores de HTML
---

Habitualmente, as sequências de caracteres inseridas como texto simples, o que significa que caracteres como `<` e `>` não têm significado especial.

Mas algumas vezes precisas de apresentar o HTML diretamente em um componente. Por exemplo, as palavras que estás a ler agora mesmo existe em um ficheiro de Markdown que é incluído nesta página como um blob de HTML.

Na Svelte, fazes isto com o marcador especial `{@html ...}`:

```html
<p>{@html string}</p>
```

> A Svelte não realiza nenhuma limpeza da expressão dentro de `{@html ...}` antes dela ser inserida no DOM. Em outras palavras, se usares esta funcionalidade é crucial que faças a limpeza manual do HTML proveniente de fontes que não confias, de outro modo arriscas a expor os teus utilizadores aos ataques de *XSS*.
