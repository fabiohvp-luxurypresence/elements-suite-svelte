<script lang="ts">
	import Menu from '../Components/Menu/Menu.svelte';
	import Sidebar from '../Components/Sidebar/Sidebar.svelte';
	import PropertiesMenu from '$lib/Components/PropertiesMenu/PropertiesMenu.svelte';
	import { elements as elementsStore } from '../Slides/slidesStore';
	import { DARK_THEME, theme as themeStore } from '../Slides/themeStore';
	import componentTemplates from '$lib/Components';
	import type { IComponent } from '$lib/Components/IComponent';

	export let components: IComponent[] = [];
	export let grid = true;

	let openSidebar = false;
	let openProperties = false;
	let properties: { [key: string]: any } = {};
	let selectedComponent: IComponent;

	function onAdd({ detail }: { detail: IComponent }) {
		components = [...components, detail];
		console.log(components);
	}

	function onGrid() {
		grid = !grid;
	}

	function onComponentClick(component: IComponent, index: number) {
		openProperties = true;
		selectedComponent = component;

		const componentTemplate = componentTemplates[selectedComponent.name];
		properties = componentTemplate!.properties;
	}

	function onPropertyChange(key: string, value: string) {
		if (!selectedComponent.style) return;

		const componentIndex = components.findIndex((o) => o === selectedComponent);
		components[componentIndex] = {
			...components[componentIndex],
			style: {
				...selectedComponent.style,
				[key]: value
			}
		};
	}
</script>

<div>
	<button on:click={() => (openSidebar = !openSidebar)}>Open sidebar</button>
	<Sidebar
		isOpen={openSidebar}
		handleClose={() => ((openSidebar = false), (openProperties = false))}
	>
		{#if !openProperties}
			<Menu on:select={onAdd} />
		{:else}
			<PropertiesMenu {properties} {onPropertyChange} />
		{/if}
	</Sidebar>
	<div class="editor">
		<nav>
			<button on:click={() => elementsStore.togglePreview()}
				>{$elementsStore.preview ? 'Editor' : 'Preview'}</button
			>
			<button on:click={() => themeStore.toggle()}
				>{$themeStore === DARK_THEME ? 'Dark' : 'Light'}</button
			>
			<button on:click={onGrid}>{grid ? 'Hide grid' : 'Show grid'}</button>
		</nav>
		<div
			class="editor-container"
			class:preview-mode={$elementsStore.preview}
			class:editor-mode={!$elementsStore.preview}
			class:grid
			style="--grid-gap:{$elementsStore.gridGap}px"
		>
			{#each components as element, index}
				<svelte:component
					this={element.component}
					style={element.style}
					value={element.value}
					on:click={() => onComponentClick(element, index)}
				/>
			{/each}
		</div>
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
