---
title: Ranhuras Nomeadas
---

O exemplo anterior continha uma *ranhura padrão*, que desenha os filhos diretos dum componente. Algumas vezes precisaremos de mais controlo sobre a colocação, tais como com este `<ContactCard>`. Nestes casos, podemos usar as *ranhuras nomeadas*.

No `ContactCard.svelte`, adicionamos um atributo `name` para cada ranhura:

```html
<article class="contact-card">
	<h2>
		<slot name="name">
			<span class="missing">Unknown name</span>
		</slot>
	</h2>

	<div class="address">
		<slot name="address">
			<span class="missing">Unknown address</span>
		</slot>
	</div>

	<div class="email">
		<slot name="email">
			<span class="missing">Unknown email</span>
		</slot>
	</div>
</article>
```

Depois, adicionamos os elementos com os atributos `slot="..."` correspondentes dentro do componente `<ContactCard>`:

```html
<ContactCard>
	<span slot="name">
		P. Sherman
	</span>

	<span slot="address">
		42 Wallaby Way<br>
		Sydney
	</span>
</ContactCard>
```