<script lang="ts">
	import type IComponent from '$lib/Components/IComponent';
	import editorStore from './editorStore';

	export let component: IComponent;
	export let index: number;

	let sidebarVisible = false;

	function onClick() {
		editorStore.setCurrentIndex(index);
		sidebarVisible = true;
	}
</script>

<svelte:component
	this={component.element}
	bind:attr={component.attr}
	bind:sidebarVisible
	bind:style={component.style}
	bind:value={component.value}
	on:click={onClick}
/>
