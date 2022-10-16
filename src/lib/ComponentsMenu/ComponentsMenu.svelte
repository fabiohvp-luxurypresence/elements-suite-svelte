<script lang="ts">
	import ComponentsMenuItem from '$lib/ComponentsMenu/ComponentsMenuItem.svelte';
	import components from '$lib/Components';
</script>

<div class="title">Components</div>
<div class="components-list">
	{#each components as component}
		<ComponentsMenuItem {component} />
	{/each}
</div>

<style>
	.components-list {
		display: flex;
		gap: 1rem 0.5rem;
		flex-wrap: wrap;
		padding: 3rem 0 2rem;
		justify-content: flex-start;
	}

	.title {
		font-size: 1.2rem;
	}
</style>
