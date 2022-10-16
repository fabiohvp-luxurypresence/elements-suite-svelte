import { writable } from 'svelte/store';

export interface SidebarStore {
	closeAll: boolean;
	width: number;
}

const defaultOptions: SidebarStore = {
	closeAll: false,
	width: 12
};

export default createSidebarStore();

function createSidebarStore() {
	const store = writable({ ...defaultOptions });

	return {
		subscribe: store.subscribe,
		set: store.set,
		closeAll: () =>
			store.update((value) => ({
				...value,
				closeAll: true
			}))
	};
}
