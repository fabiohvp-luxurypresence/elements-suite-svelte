import { writable } from 'svelte/store';

export interface ElementsStore {
	gridGap: number;
	preview: boolean;
}

const defaultOptions: ElementsStore = {
	gridGap: 10,
	preview: false
};

export const elements = createElementStore();

function createElementStore() {
	const store = writable(defaultOptions);

	return {
		subscribe: store.subscribe,
		setPreview: (preview: boolean) => store.update((value) => ({ ...value, preview })),
		togglePreview: () => store.update((value) => ({ ...value, preview: !value.preview }))
	};
}
