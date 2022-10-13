<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import componentTemplates from '$lib/Components';
	import type IComponent from '../IComponent';

	const dispatch = createEventDispatcher();

	function onSelect(component: IComponent) {
		dispatch('select', component);
	}
</script>

<ul>
	{#each Object.keys(componentTemplates) as key}
		<li>
			<button on:click={() => onSelect(componentTemplates[key])}
				>{componentTemplates[key].name}</button
			>
		</li>
	{/each}
</ul>

<style>
	ul {
		text-decoration: none;
		padding: 0;
	}

	li {
		list-style: none;
		margin: 1rem 0;
	}
	button {
		cursor: pointer;
	}
</style>
