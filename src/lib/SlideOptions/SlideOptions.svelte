<script lang="ts">
	import Toggle from '../Forms/Toggle.svelte';
	import slideStore from '../Slides/slideStore';
	import themeStore, { DARK_THEME } from '../Slides/themeStore';
</script>

<section>
	<Toggle on:toggle={() => slideStore.togglePreview()} label="Preview Mode" />
	<Toggle on:toggle={() => themeStore.toggle()} label="Dar Mode" />
	<Toggle on:toggle={() => slideStore.toggleGrid()} label="Grid" />
	<slot />
</section>

<style>
	section {
		display: flex;
		gap: 1.5rem;
		justify-content: center;
	}
</style>
