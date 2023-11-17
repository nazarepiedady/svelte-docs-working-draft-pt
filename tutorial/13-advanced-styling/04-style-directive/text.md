---
title: A Diretiva Style
---

Ser capaz de definir propriedades de CSS dinamicamente é fantástico. No entanto, isto pode tornar-se difícil de gerir se tivermos de escrever uma longa sequência de caracteres. Erros como deixar de fora qualquer um dos pontos e vírgula poderia tornar a sequência de caracteres inteira inválida. Portanto, a Svelte fornece uma maneira mais agradável de escrever estilos em linha com a diretiva `style`. 

Mudamos o atributo `style` do parágrafo para o seguinte:

```html
<p 
	style:color 
	style:--opacity="{bgOpacity}"
>
```

A diretiva `style` partilha algumas qualidades com a diretiva `class`. Nós podemos usar uma abreviação quando o nome da propriedade e da variável são o mesmo. Assim `style:color="{color}"` pode ser escrito apenas como `style:color`.

Semelhante à diretiva `class`, a diretiva `style` terão a prioridade se tentarmos definir a mesma propriedade através dum atributo `style`.
