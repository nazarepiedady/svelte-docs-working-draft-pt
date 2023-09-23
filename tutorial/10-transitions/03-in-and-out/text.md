---
title: Entrada e Saída
---

No lugar da diretiva `transition`, um elemento pode ter uma diretiva `in` ou `out`, ou ambas juntas. Importe `fade` ao lado de `fly`...

```js
import { fade, fly } from 'svelte/transition';
```

...depois substitua a diretiva `transition` com as diretivas `in` e `out` separados:

```html
<p in:fly="{{ y: 200, duration: 2000 }}" out:fade>
	Flies in, fades out
</p>
```

Neste caso, as transições *não* são invertidas.