<script lang="ts">
	import type IComponent from '$lib/Components/IComponent';
	import { moveComponent } from '$lib/shared/component';
	import editorStore from './editorStore';

	export let component: IComponent;
	export let index: number;

	let sidebarVisible = false;

	function onKeypress(e: KeyboardEvent) {
		if (e.target !== document.body) return true;

		if (e.code === 'Delete') {
			editorStore.removeComponent(index);
		} else if (e.code === 'ArrowDown') {
			moveComponent(component, 'top', 1);
		} else if (e.code === 'ArrowUp') {
			moveComponent(component, 'top', -1);
		} else if (e.code === 'ArrowLeft') {
			moveComponent(component, 'left', -1);
		} else if (e.code === 'ArrowRight') {
			moveComponent(component, 'left', 1);
		}
		component = component;
	}
</script>

<svelte:window on:keydown={onKeypress} />

<svelte:component
	this={component.element}
	bind:attr={component.fields.attr}
	bind:sidebarVisible
	bind:style={component.fields.style}
	bind:value={component.value}
	on:click={() => (sidebarVisible = true)}
/>
