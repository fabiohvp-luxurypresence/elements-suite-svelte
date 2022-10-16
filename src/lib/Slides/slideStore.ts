import { writable } from 'svelte/store';

export interface SlideStore {
	preview: boolean;
}

const defaultOptions: SlideStore = {
	preview: false
};

export default createSlideStore();

function createSlideStore() {
	const store = writable({ ...defaultOptions });

	return {
		subscribe: store.subscribe,
		setPreview: (preview: boolean) => store.update((value) => ({ ...value, preview })),
		togglePreview: () => store.update((value) => ({ ...value, preview: !value.preview }))
	};
}
