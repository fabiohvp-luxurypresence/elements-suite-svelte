import type IComponent from '$lib/Components/IComponent';
import { pixelToInt } from '$lib/shared/pixelToInt';
import { round2decimals } from '$lib/shared/round2decimals';
import { writable } from 'svelte/store';

export interface SlideStore {
	components: IComponent[];
}

const defaultOptions: SlideStore = {
	components: []
};

export default createSlideStore();

function createSlideStore() {
	const originalComponent: { [key: number]: IComponent } = {};
	const store = writable({ ...defaultOptions });

	const scaleComponents = (components: IComponent[], scale: number, scaleToOriginal: boolean) => {
		components.forEach((component, index) => {
			const style = component.fields.style;
			let originalStyle = component.fields.style;

			if (scaleToOriginal) {
				originalStyle = originalComponent[index].fields.style;
			}
			style.left = `${round2decimals(pixelToInt(originalStyle.left.toString()) * scale)}px`;
			style.top = `${round2decimals(pixelToInt(originalStyle.top.toString()) * scale)}px`;
			style.width = `${round2decimals(pixelToInt(originalStyle.width.toString()) * scale)}px`;
			style.height = `${round2decimals(pixelToInt(originalStyle.height.toString()) * scale)}px`;
		});
	};

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
		export: (scale: number) =>
			store.update((value) => {
				const components = value.components.map((component) => ({
					...component,
					fields: {
						attr: { ...component.fields.attr },
						style: { ...component.fields.style }
					}
				}));
				scaleComponents(components, 1 + scale, false);
				let json = JSON.stringify(components, null, 2);
				json = json
					.replace(/"name": "(\w+)"/g, `"element": $1,\n\t"name": "$1"`)
					.replace(/\\r\\n/g, '<br>');
				console.log(json);
				return value;
			}),
		removeComponent: (index: number) =>
			store.update((value) => {
				delete originalComponent[index];
				const components = value.components.filter((_, i) => i !== index);
				return {
					...value,
					components
				};
			}),
		resizeComponents: (scale: number) =>
			store.update((value) => {
				const components = [...value.components];
				scaleComponents(components, scale, true);
				return { ...value, components };
			}),
		setComponents: (components: IComponent[]) => {
			components.forEach((component, index) => {
				originalComponent[index] = {
					...component,
					fields: {
						attr: { ...component.fields.attr },
						style: { ...component.fields.style }
					}
				};
			});

			store.update((value) => {
				return {
					...value,
					components
				};
			});
		}
	};
}
