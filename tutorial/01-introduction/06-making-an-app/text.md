---
title: Cirando uma aplicação
---

Este passo-a-passo está desenhado para deixar-te familiarizado com o processo de escrita de componentes. Mas em algum ponto, desejarás começar a escrever componentes no conforto do teu próprio editor de texto.

Primeiro, precisarás de integrar a Svelte com uma ferramenta de construção. Nós recomendamos usar a [SvelteKit](https://kit.svelte.dev), a qual configura por ti a [Vite](https://vitejs.dev/) com a extensão [`vite-plugin-svelte`](https://github.com/sveltejs/vite-plugin-svelte/)...

```bash
npm create svelte@latest myapp
```

Também existem um número de [integrações mantidas pela comunidade](https://sveltesociety.dev/tools).

Não te preocupes se fores relativamente novo para o desenvolvimento de web e nunca usaste estas ferramentas antes. Temos preparado um guia passo-por-passo simples, [Svelte para Programadores](/blog/svelte-for-new-developers), o qual guia-te através do processo.

Desejarás também configurar o teu editor de texto. Existem [extensões](https://sveltesociety.dev/tools#editor-support) para o vários editores populares bem como uma [extensão oficial de VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

<!-- 
NOTE: Removed until we have better place for setting-up-your-editor guide. See https://github.com/sveltejs/svelte/pull/7310#issuecomment-1049923609
If your editor does not have a Svelte plugin then you can follow [this guide](/blog/setting-up-your-editor) to configure your text editor to treat `.svelte` files the same as `.html` for the sake of syntax highlighting. -->

Então, uma vez que tiveres o teu projeto configurado, usar os componente de Svelte é fácil. O compilador transforma cada componente em uma classe normal de JavaScript — apenas importe-o e cria uma instância com `new`:

```js
import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		// aprenderemos sobre propriedades depois
		answer: 42
	}
});
```

Tu podes então interagir com a `app` usando a [API do componente](/docs#run-time-client-side-component-api) se precisares de o fazer.
