---
title: Propagar as propriedades
---

Se tiveres um objeto de propriedades, podes 'propagá-las' para dentro de um componente no lugar de especificar cada uma:

```html
<Info {...pkg}/>
```

> Inversamente, se precisares de fazer referência à todas as propriedades que foram passadas para um componente, incluindo aquelas que não foram declaradas com `export`, podes fazer isto acessando `$$props` diretamente. Geralmente não é recomendado, já que é difícil para Svelte otimizar, mas é útil em casos raros. 
