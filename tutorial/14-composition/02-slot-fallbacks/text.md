---
title: Alternativas da Ranhura
---

Um componente pode especificar *alternativas* para quaisquer ranhuras que forem deixadas vazias, colocando o conteúdo dentro do elemento `<slot>`:

```html
<div class="box">
	<slot>
		<em>no content was provided</em>
	</slot>
</div>
```

Nós agora podemos criar instâncias do `<Box>` sem quaisquer filhos:

```html
<Box>
	<h2>Hello!</h2>
	<p>This is a box. It can contain anything.</p>
</Box>

<Box/>
```
