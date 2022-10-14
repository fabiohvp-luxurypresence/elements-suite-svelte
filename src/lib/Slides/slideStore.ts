import { writable } from 'svelte/store';

export interface SlideStore {
	gridGap: number;
	preview: boolean;
	showGrid: boolean;
}

const defaultOptions: SlideStore = {
	gridGap: 10,
	preview: false,
	showGrid: false
};

export default createSlideStore();

function createSlideStore() {
	const store = writable(defaultOptions);

	return {
		subscribe: store.subscribe,
		setPreview: (preview: boolean) => store.update((value) => ({ ...value, preview })),
		togglePreview: () => store.update((value) => ({ ...value, preview: !value.preview })),
		toggleGrid: () => store.update((value) => ({ ...value, showGrid: !value.showGrid }))
	};
}
