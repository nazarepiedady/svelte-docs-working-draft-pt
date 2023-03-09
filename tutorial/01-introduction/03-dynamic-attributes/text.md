---
title: Atributos dinâmicos
---

Tu podes usar as chavetas para controlar os atributos do elemento, tal como os usas para controlar o texto.

Na nossa imagem está faltando um atributo `src` — vamos adicionar um:

```html
<img src={src}>
```

Assim está melhor. Mas a Svelte está dando-nos um aviso:

> A11y: O elemento `<img>` deveria ter um atributo `alt`

Quando construimos aplicações de web, é importante certificar-nos de que somos *acessíveis* para a mais extensa base de utilizador possível, incluído pessoas com (por exemplo) deficiência visual ou motora, ou pessoas sem hardware poderoso ou boas conexões de internet. A acessibilidade (abreviada para a11y) nem sempre é fácil de conseguir, mas a Svelte ajudar-te-á avisando-te se escreveres marcação inacessível.

Neste caso, estávamos a esquecer do atributo `alt` que descreve a imagem para as pessoas que estiverem a usar leitores de tela, ou pessoas com conexões de internet lentas ou instáveis que podem descarregar a imagem. Vamos adicionar um:

```html
<img src={src} alt="A man dances.">
```

Nós podemos usar as chavetas *dentro dos* atributos. Experimente mudá-lo para `"{name} dances."` — lembre de declarar uma variável `name` no bloco `<script>`

## Abreviação de atributos

Não é invulgar ter um atributo onde o nome e o valor são o mesmo, tal como `src={src}`. A Svelte dá-nos uma abreviação conveniente para estes casos:

```html
<img {src} alt="A man dances.">
```
