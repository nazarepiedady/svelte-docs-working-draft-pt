---
title: A Diretiva Use
---

As ações são essencialmente funções de ciclo de vida do nível do elemento. São úteis para coisas como:

- criar uma interface com bibliotecas de terceiros
- imagens carregadas preguiçoso
- dicas de ferramentas
- adicionar manipuladores de evento personalizado

Nesta aplicação, queremos fazer o model laranja fechar quando o utilizador clicar fora dele. Ele tem um manipulador de evento para o evento `outclick`, mas este não é um evento de DOM nativo. Nós temos de despachá-lo nós mesmo. Primeiro, importamos a função `clickOutside`...

```js
import { clickOutside } from "./click_outside.js";
```

...depois a usamos com o elemento:

```html
<div class="box" use:clickOutside on:outclick="{() => (showModal = false)}">
	Click outside me!
</div>
```

Abra o ficheiro `click_outside.js`. Tal como as funções de transição, uma função de ação recebe um `node` (que é o elemento para qual a ação é aplicada) e alguns parâmetros opcionais, e retorna um objeto de ação. O objeto pode ter uma função `destroy`, que é chamada quando o elemento é desmontado.

Nós queremos disparar o evento `outclick` quando o utilizador clicar fora da caixa laranja. Uma possível implementação parece-se com isto:

```js
export function clickOutside(node) {
	const handleClick = (event) => {
		if (!node.contains(event.target)) {
			node.dispatchEvent(new CustomEvent("outclick"));
		}
	};

	document.addEventListener("click", handleClick, true);

	return {
		destroy() {
			document.removeEventListener("click", handleClick, true);
		},
	};
}
```

Atualize a função `clickOutside`, clique botão para mostrar o modal e depois clica fora dele para fechá-lo.
