<script lang="ts">
	import Menu from '../Components/Menu/Menu.svelte';
	import Sidebar from '../Components/Sidebar/Sidebar.svelte';
	import PropertiesMenu from '$lib/Components/PropertiesMenu/PropertiesMenu.svelte';
	import { elements as elementsStore } from '../Slides/slidesStore';
	import { DARK_THEME, theme as themeStore } from '../Slides/themeStore';
	import componentTemplates from '$lib/Components';
	import type IComponent from '$lib/Components/IComponent';
	import type IFieldsTemplate from '$lib/shared/IFieldsTemplate';
	import type IFields from '$lib/shared/IFields';

	export let components: IComponent[] = [];
	export let grid = true;

	let openSidebar = false;
	let fieldsTemplate: IFieldsTemplate | null = null;
	let selectedComponentFields: IFields | null;
	let selectedComponentIndex: number;

	function onAdd({ detail }: { detail: IComponent }) {
		components = [...components, detail];
		console.log(components);
	}

	function onSidebarClose() {
		openSidebar = false;
		resetPropertiesMenu();
	}

	function onGrid() {
		grid = !grid;
	}

	function onComponentClick(index: number) {
		if (selectedComponentIndex === index) return;

		openSidebar = true;
		const selectedComponent = components[index];
		selectedComponentFields = {
			attr: { ...selectedComponent.fields.attr },
			style: { ...selectedComponent.fields.style }
		};
		selectedComponentIndex = index;

		const componentTemplate = componentTemplates[selectedComponent.name];
		fieldsTemplate = componentTemplate.fieldsTemplate;
	}

	function onOpenComponents() {
		openSidebar = true;
		resetPropertiesMenu();
	}

	function onPropertyApply() {
		selectedComponentFields = components[selectedComponentIndex].fields;
		onSidebarClose();
	}

	function onPropertyChange({
		detail
	}: {
		detail: { type: 'attr' | 'style'; key: string; value: any };
	}) {
		if (!fieldsTemplate) return;

		const { type, key, value } = detail;
		components[selectedComponentIndex].fields[type][key] = value;
		components[selectedComponentIndex] = components[selectedComponentIndex];
	}

	function resetPropertiesMenu() {
		fieldsTemplate = null;

		if (selectedComponentFields) {
			components[selectedComponentIndex].fields = selectedComponentFields;
			selectedComponentFields = null;
			selectedComponentIndex = -1;
		}
	}
</script>

<div>
	<button on:click={onOpenComponents} style="margin-top: 2rem">Components</button>
	<Sidebar isOpen={openSidebar} on:close={onSidebarClose}>
		{#if fieldsTemplate}
			<PropertiesMenu
				fields={components[selectedComponentIndex].fields}
				{fieldsTemplate}
				on:apply={onPropertyApply}
				on:change={onPropertyChange}
			/>
		{:else}
			<Menu on:select={onAdd} />
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
					style={element.fields.style}
					value={element.value}
					on:click={() => onComponentClick(index)}
				/>
			{/each}
		</div>
	</div>
</div>

<style>
	.editor {
		display: grid;
		grid-template-rows: auto calc(100vh - 1rem);
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
