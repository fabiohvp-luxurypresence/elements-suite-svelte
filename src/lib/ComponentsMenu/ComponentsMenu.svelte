<script lang="ts">
	import ComponentsMenuItem from '$lib/ComponentsMenu/ComponentsMenuItem.svelte';
	import components from '$lib/Components';
</script>

<div>
	{#each components as component}
		<ComponentsMenuItem {component} />
	{/each}
</div>

<style>
	div {
		display: flex;
		gap: 1rem 0.5rem;
		flex-wrap: wrap;
		justify-content: flex-start;
	}
</style>
