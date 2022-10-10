<script lang="ts">
	import Menu from '../Components/Menu/Menu.svelte';
	import { elements as elementsStore } from '../Elements/elementsStore';
	import type { IElement } from '../Elements/IElement';
	import { DARK_THEME, theme as themeStore } from '../Elements/themeStore';

	export let elements: IElement[] = [];
	export let grid = true;

	let menu = false;

	function add() {
		menu = true;
	}

	function onAdd({ detail }: { detail: IElement }) {
		elements = [...elements, detail];
	}

	function onGrid() {
		grid = !grid;
	}
</script>

<div class="editor">
	<nav>
		<button on:click={() => elementsStore.togglePreview()}
			>{$elementsStore.preview ? 'Editor' : 'Preview'}</button
		>
		<button on:click={() => themeStore.toggle()}
			>{$themeStore === DARK_THEME ? 'Dark' : 'Light'}</button
		>
		<button on:click={onGrid}>{grid ? 'Hide grid' : 'Show grid'}</button>

		<button on:click={add}>Add</button>

		{#if menu}
			<Menu on:select={onAdd} />
		{/if}
	</nav>
	<div
		class="editor-container"
		class:preview-mode={$elementsStore.preview}
		class:editor-mode={!$elementsStore.preview}
		class:grid
		style="--grid-gap:{$elementsStore.gridGap}px"
	>
		{#each elements as element}
			<svelte:component this={element.component} style={element.style} value={element.value} />
		{/each}
	</div>
</div>

<style>
	.editor {
		display: grid;
		grid-template-rows: 1rem calc(100vh - 1rem);
		--grid-gap: unset;
	}

	nav {
		display: flex;
		gap: 1rem;
		justify-content: center;
	}

	.grid {
		background-image: repeating-linear-gradient(var(--grid-color) 0 1px, transparent 1px 100%),
			repeating-linear-gradient(90deg, var(--grid-color) 0 1px, transparent 1px 100%);
		background-size: var(--grid-gap) var(--grid-gap);
	}
</style>
