---
title: Vínculos de Conteúdo Editável
---

Os elementos com um atributo `contenteditable="true"` suportam os vínculos de `textContent` e `innerHTML`:

```html
<div
	contenteditable="true"
	bind:innerHTML={html}
></div>
```