import { readable } from 'svelte/store';

export const time = readable(null, function start(set) {
	// a implementação será escrita nesta função

	return function stop() {};
});
