---
title: Elementos de Media
---

Os elementos `<audio>` e `<video>` têm várias propriedades que podes com as quais podes vincular. Este exemplo demonstra algumas delas. 

Na linha 62, adicione os vínculos `currentTime={time}`, `duration` e `paused`:

```html
<video
	poster="https://sveltejs.github.io/assets/caminandes-llamigos.jpg"
	src="https://sveltejs.github.io/assets/caminandes-llamigos.mp4"
	on:mousemove={handleMove}
	on:touchmove|preventDefault={handleMove}
	on:mousedown={handleMousedown}
	on:mouseup={handleMouseup}
	bind:currentTime={time}
	bind:duration
	bind:paused>
	<track kind="captions">
</video>
```

> `bind:duration` é equivalente ao `bind:duration={duration}`

Agora, quando clicares no vídeo, ele atualizará a `time`, `duration` e `paused` conforme o apropriado. Isto significa que podemos usá-los para construir controlos personalizados.

> Normalmente na Web, rastearias a `currentTime` ouvindo os eventos de `timeupdate`. Mas estes eventos disparam com muita pouca frequência, resultando em interface de utilizador agitada. A Svelte faz melhor — verifica a `currentTime` usando `requestAnimationFrame`.

O conjunto completo de vínculos para `<audio>` e `<video>` é como se segue — seis vínculos de *apenas leitura*...

* `duration` (apenas leitura) — a duração total do vídeo, em segundos.
* `buffered` (apenas leitura) — um arranjo de objetos `{start, end}`.
* `seekable` (apenas leitura) — idem (ditto).
* `played`   (apenas leitura) — idem (ditto).
* `seeking`  (apenas leitura) — booleano.
* `ended`    (apenas leitura) — booleano.

...e cinco vínculos de *dois sentidos*:

* `currentTime`  — o ponto atual no vídeo, em segundos.
* `playbackRate` — quão rápido reproduzir o vídeo, onde `1` é 'normal'.
* `paused`       — este deveria ser auto-explicativo.
* `volume`       — um valor entre 0 e 1.
* `muted`        — um valor booleano onde `true` é abafado.

Os vídeos têm adicionalmente os vínculos `videoWidth` e `videoHeight` de apenas leitura.
