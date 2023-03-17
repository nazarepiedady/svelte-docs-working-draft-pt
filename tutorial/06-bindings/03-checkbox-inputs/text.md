---
title: Entradas da Caixa de Verificação
---

As caixas de verificação são usadas para alternar entre estados. No lugar de vincular ao `input.value`, vinculamos ao `input.checked`:

```html
<input type=checkbox bind:checked={yes}>
```