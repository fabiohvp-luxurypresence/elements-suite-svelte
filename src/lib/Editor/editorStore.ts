import type IComponent from '$lib/Components/IComponent';
import { pixelToInt } from '$lib/shared/pixelToInt';
import { round2decimals } from '$lib/shared/round2decimals';
import { writable } from 'svelte/store';

export interface SlideStore {
	components: IComponent[];
	currentIndex: number | undefined;
}

const defaultOptions: SlideStore = {
	components: [],
	currentIndex: undefined
};

const directions: { [key: string]: [string, number] } = {
	bottom: ['top', 1],
	top: ['top', -1],
	left: ['left', -1],
	right: ['left', 1]
};

export default createSlideStore();

function createSlideStore() {
	let originalComponent: { [key: number]: IComponent } = {};
	const store = writable({ ...defaultOptions });

	const scaleComponents = (components: IComponent[], scale: number, scaleToOriginal: boolean) => {
		components.forEach((component, index) => {
			const style = component.style;
			let originalStyle = component.style;

			if (scaleToOriginal) {
				originalStyle = originalComponent[index].style;
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
			const componentCopy = copyComponent(component);
			return store.update((value) => {
				return {
					...value,
					components: [...value.components, componentCopy],
					currentIndex: value.components.length + 1
				};
			});
		},
		export: (scale: number) =>
			store.update((value) => {
				const components = value.components.map(copyComponent);
				scaleComponents(components, 1 + scale, false);

				let json = JSON.stringify(components, null, 2);
				json = json
					.replace(/"name": "(\w+)"/g, `"element": $1,\n\t"name": "$1"`)
					.replace(/\\r\\n/g, '<br>');
				console.log(json);
				return value;
			}),
		moveComponent: (direction: 'bottom' | 'left' | 'right' | 'top') => {
			store.update((value) => {
				if (value.currentIndex === undefined) return value;
				const component = value.components[value.currentIndex];
				const positioning = directions[direction];
				let currentValue = pixelToInt(component.style[positioning[0]].toString());
				currentValue += positioning[1];
				component.style[positioning[0]] = `${currentValue}px`;
				return value;
			});
		},
		removeComponent: () => {
			store.update((value) => {
				if (value.currentIndex === undefined) return value;

				delete originalComponent[value.currentIndex];
				const components = value.components.filter((_, i) => i !== value.currentIndex);
				return {
					...value,
					components
				};
			});
		},
		resizeComponents: (scale: number) =>
			store.update((value) => {
				const components = value.components.map(copyComponent);
				scaleComponents(components, scale, true);
				return { ...value, components };
			}),
		setCurrentIndex: (index: number) =>
			store.update((value) => ({
				...value,
				currentIndex: index
			})),
		setComponents: (components: IComponent[]) => {
			originalComponent = {};

			components.forEach((component, index) => {
				originalComponent[index] = copyComponent(component);
			});

			store.update((value) => {
				return {
					...value,
					currentIndex: undefined,
					components
				};
			});
		}
	};
}

function copyComponent(component: IComponent) {
	return {
		...component,
		attr: { ...component.attr },
		style: { ...component.style }
	};
}
