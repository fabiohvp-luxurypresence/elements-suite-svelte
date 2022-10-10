import type { SvelteComponent } from 'svelte';

export function getComponentProps(componentInstance: SvelteComponent) {
	const props = Object.keys(componentInstance.$$.props).reduce((obj: any, key) => {
		obj[key] = componentInstance.$$.ctx[componentInstance.$$.props[key]];
		return obj;
	}, {});
	return props;
}
