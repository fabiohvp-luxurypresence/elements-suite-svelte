<script lang="ts">
	import Toggle from '$lib/Forms/Toggle.svelte';
	import slideStore from '$lib/Slides/slideStore';
	import themeStore from '$lib/Slides/themeStore';
</script>

<section>
	<Toggle on:toggle={() => slideStore.togglePreview()} label="Preview Mode" />
	<Toggle on:toggle={() => themeStore.toggle()} label="Dark Mode" />
	<slot />
</section>

<style>
	section {
		display: flex;
		gap: 1.5rem;
		justify-content: center;
	}
</style>
