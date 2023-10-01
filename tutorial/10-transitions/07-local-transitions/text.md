---
title: Transições Locais
---

Normalmente, as transições atuarão sobre os elementos quando qualquer bloco contentor for adicionado ou destruído. Neste exemplo, a alternância da visibilidade da lista inteira também aplica transições aos elementos da lista individuais.

No lugar disto, gostaríamos de transições que apenas entram em cena quando os itens individuais forem adicionados ou removidos — em outras palavras, quando o utilizador arrastar o controlo deslizante.

Nós podemos alcançar isto com uma transição *local*, que entra em cena apenas quando o bloco com a própria transição for adicionado ou removido:

```html
<div transition:slide|local>
	{item}
</div>
```
