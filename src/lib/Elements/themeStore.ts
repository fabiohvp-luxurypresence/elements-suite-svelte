import { get, writable } from 'svelte/store';

export const DARK_THEME = 'dark';
export const LIGHT_THEME = 'light';

export const theme = createThemeStore();

function createThemeStore() {
	const store = writable(LIGHT_THEME);

	const setDark = () => {
		document.body.classList.add(DARK_THEME);
		store.set(DARK_THEME);
	};

	const setLight = () => {
		document.body.classList.remove(DARK_THEME);
		store.set(LIGHT_THEME);
	};

	return {
		subscribe: store.subscribe,
		setDark,
		setLight,
		toggle: () => {
			if (get(store) === LIGHT_THEME) setDark();
			else setLight();
		}
	};
}
