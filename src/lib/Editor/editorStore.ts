import type IComponent from '$lib/Components/IComponent';
import { writable } from 'svelte/store';

export interface SlideStore {
	components: IComponent[];
}

const defaultOptions: SlideStore = {
	components: []
};

export default createSlideStore();

function createSlideStore() {
	const store = writable({ ...defaultOptions });

	return {
		subscribe: store.subscribe,
		addComponent: (component: IComponent) => {
			const componentCopy = {
				...component,
				fields: {
					attr: { ...component.fields.attr },
					style: { ...component.fields.style }
				}
			};
			return store.update((value) => {
				return {
					...value,
					components: [...value.components, componentCopy]
				};
			});
		},
		removeComponent: (index: number) =>
			store.update((value) => {
				const components = value.components.filter((_, i) => i !== index);
				return {
					...value,
					components
				};
			}),
		setComponents: (components: IComponent[]) =>
			store.update((value) => {
				return {
					...value,
					components
				};
			})
	};
}
