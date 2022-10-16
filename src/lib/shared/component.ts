import type IComponent from '$lib/Components/IComponent';
import editorStore from '$lib/Editor/editorStore';
import type { SvelteComponent } from 'svelte';
import { get } from 'svelte/store';
import { pixelToInt } from './pixelToInt';

export function getComponentProps(componentInstance: SvelteComponent) {
	const props = Object.keys(componentInstance.$$.props).reduce((obj: any, key) => {
		obj[key] = componentInstance.$$.ctx[componentInstance.$$.props[key] as any];
		return obj;
	}, {});
	return props;
}

export function getElementName(element: string) {
	return element.replace(/Proxy<(\w+)>/g, '$1');
}

export function moveComponent(component: IComponent, direction: 'left' | 'top', value: number) {
	const currentValue = pixelToInt(component.fields.style[direction].toString());
	value = currentValue + value;
	component.fields.style[direction] = `${value}px`;
}
