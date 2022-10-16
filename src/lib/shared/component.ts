import type IComponent from '$lib/Components/IComponent';
import editorStore from '$lib/Editor/editorStore';
import type { SvelteComponent } from 'svelte';
import { get } from 'svelte/store';
import { styleToInt } from './styleToInt';

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
	const currentValue = styleToInt(component.fields.style[direction].toString());
	value = currentValue + value;
	component.fields.style[direction] = `${value}px`;
}

export function exportJSON() {
	const components = get(editorStore).components;
	const componentsTemp = components.map((o) => {
		const element = getElementName(o['element'].name);
		const slide = { ...o };
		delete (slide as any)['fieldsTemplate'];
		return {
			...slide,
			element
		};
	});
	let json = JSON.stringify(componentsTemp, null, 2);
	json = json.replace(/"element": "(\w+)"/g, `"element": $1`).replace(/\\r\\n/g, '<br>');
	window.prompt('Copy to clipboard: Ctrl+C, Enter', json);
}
