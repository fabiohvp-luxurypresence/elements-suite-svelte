<script lang="ts">
	import componentTemplates from '$lib/Components';
	import ComponentsMenu from '$lib/Components/ComponentsMenu/ComponentsMenu.svelte';
	import type IComponent from '$lib/Components/IComponent';
	import PropertiesMenu from '$lib/Components/PropertiesMenu/PropertiesMenu.svelte';
	import Sidebar from '$lib/Components/Sidebar/Sidebar.svelte';
	import Constants from '$lib/Constants';
	import type IFields from '$lib/shared/IFields';
	import type IFieldsTemplate from '$lib/shared/IFieldsTemplate';
	import { styleToInt } from '$lib/shared/styleToInt';
	import { onMount } from 'svelte';
	import { elements as elementsStore } from '../Slides/slidesStore';
	import { theme as themeStore, DARK_THEME } from '../Slides/themeStore';

	export let components: IComponent[] = [];
	export let grid = true;
	export let openSidebar = false;

	let editor: HTMLDivElement;
	let fieldsTemplate: IFieldsTemplate | null;
	let previousContainerRect: DOMRect;
	let resizer: ResizeObserver;
	let scale = 1;
	let selectedComponentFields: IFields | null;
	let selectedComponentIndex: number = -1;
	let showComponents = false; // wait for right size math

	onMount(() => {
		resizer = new ResizeObserver(onResize);
		resizer.observe(editor);

		return () => {
			resizer.unobserve(editor);
		};
	});

	function onAdd({ detail: component }: { detail: IComponent }) {
		const componentTemplate = componentTemplates[component.name];
		components = [...components, { ...component, fields: { ...componentTemplate.fields } }];
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

	function onGrid() {
		grid = !grid;
	}

	function onKeypress(e: KeyboardEvent) {
		if (selectedComponentIndex === -1) return true;
		if (e.target !== document.body) return true;

		if (e.code === 'Delete') {
			const index = selectedComponentIndex;
			resetPropertiesMenu();
			components.splice(index, 1);
		} else if (e.code === 'ArrowDown') {
			moveComponent(components[selectedComponentIndex], 'top', 1);
		} else if (e.code === 'ArrowUp') {
			moveComponent(components[selectedComponentIndex], 'top', -1);
		} else if (e.code === 'ArrowLeft') {
			moveComponent(components[selectedComponentIndex], 'left', -1);
		} else if (e.code === 'ArrowRight') {
			moveComponent(components[selectedComponentIndex], 'left', 1);
		}
		components[selectedComponentIndex] = components[selectedComponentIndex];
	}

	function onPropertyApply() {
		selectedComponentFields = { ...components[selectedComponentIndex].fields };
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
	}

	function onResize([container]: ResizeObserverEntry[]) {
		if (
			Math.round(container.contentRect.width) === Constants.SLIDE_WIDTH ||
			Math.round(container.contentRect.height) === Constants.SLIDE_HEIGHT
		) {
			scale = 1;
		} else {
			let diffWidth = (container.contentRect.width * 100) / Constants.SLIDE_WIDTH;
			scale = diffWidth / 100;
		}
		showComponents = true;
		return;
		if (previousContainerRect) {
			const diffHeight = Math.round(container.contentRect.height - previousContainerRect.height);
			const diffWidth = Math.round(container.contentRect.width - previousContainerRect.width);

			for (const component of components) {
				let height = styleToInt(component.fields.style.height.toString()) + diffHeight;
				let width = styleToInt(component.fields.style.width.toString()) + diffWidth;

				if (height < 1) height = 1;
				if (width < 1) width = 1;
				component.fields.style.height = `${height}px`;
				component.fields.style.width = `${width}px`;
			}
			components = components;
		} else if (container.contentRect.width !== Constants.SLIDE_WIDTH) {
			// for (const component of components) {
			// 	resizeRelativeToCurrentSlideSize(
			// 		component,
			// 		'height',
			// 		container.contentRect.height,
			// 		Constants.SLIDE_HEIGHT
			// 	);
			// 	resizeRelativeToCurrentSlideSize(
			// 		component,
			// 		'width',
			// 		container.contentRect.width,
			// 		Constants.SLIDE_WIDTH
			// 	);
			// }
			// components = components;
		}
		previousContainerRect = container.contentRect;
	}

	function onSidebarClose() {
		openSidebar = false;
		resetPropertiesMenu();
	}

	function resizeRelativeToCurrentSlideSize(
		component: IComponent,
		style: string,
		slideCurrentSize: number,
		slideDefaultSize: number
	) {
		const percent = (slideCurrentSize * 100) / slideDefaultSize;
		const currentValue = styleToInt(component.fields.style[style].toString());
		const value = (currentValue * percent) / 100;
		component.fields.style[style] = `${value}px`;
	}

	function moveComponent(component: IComponent, direction: 'left' | 'top', value: number) {
		const currentValue = styleToInt(component.fields.style[direction].toString());
		value = currentValue + value;
		component.fields.style[direction] = `${value}px`;
	}

	function resetPropertiesMenu() {
		fieldsTemplate = null;

		if (selectedComponentFields) {
			components[selectedComponentIndex].fields = { ...selectedComponentFields };
			selectedComponentFields = null;
			selectedComponentIndex = -1;
		}
	}
</script>

<svelte:window on:keydown={onKeypress} />

{#if editor}
	<Sidebar isOpen={openSidebar} on:close={onSidebarClose}>
		{#if fieldsTemplate}
			<PropertiesMenu
				fields={components[selectedComponentIndex].fields}
				{fieldsTemplate}
				on:apply={onPropertyApply}
				on:change={onPropertyChange}
			/>
		{:else}
			<ComponentsMenu on:select={onAdd} />
		{/if}
	</Sidebar>
{/if}
<div class="nav-container">
	<nav>
		<button on:click={() => elementsStore.togglePreview()}
			>{$elementsStore.preview ? 'Editor' : 'Preview'}</button
		>
		<button on:click={() => themeStore.toggle()}
			>{$themeStore === DARK_THEME ? 'Dark' : 'Light'}</button
		>
		<button on:click={onGrid}>{grid ? 'Hide grid' : 'Show grid'}</button>
	</nav>
</div>
<div
	bind:this={editor}
	class="editor"
	class:preview-mode={$elementsStore.preview}
	class:editor-mode={!$elementsStore.preview}
	class:grid
	style:--grid-gap={`${$elementsStore.gridGap}px`}
	style:--slide-scale={scale}
>
	{#if showComponents}
		{#each components as component, index (index)}
			<svelte:component
				this={component.element}
				bind:attr={component.fields.attr}
				bind:style={component.fields.style}
				bind:value={component.value}
				on:click={() => onComponentClick(index)}
			/>
		{/each}
	{/if}
</div>

<style>
	.nav-container {
		position: absolute;
		right: 0;
		height: 100%;
		align-items: center;
		width: 10rem;
		display: grid;
		gap: 2rem;
	}

	.nav-container nav {
		width: 90%;
		justify-content: center;
		gap: 1.5rem;
		height: inherit;
		display: flex;
		flex-direction: column;
	}

	.editor {
		--grid-gap: unset;
		--slide-scale: 1;
	}

	.editor :global(.component) {
		transform: scale(var(--slide-scale));
	}

	.grid {
		background-image: repeating-linear-gradient(var(--grid-color) 0 1px, transparent 1px 100%),
			repeating-linear-gradient(90deg, var(--grid-color) 0 1px, transparent 1px 100%);
		background-size: var(--grid-gap) var(--grid-gap);
	}
	button {
		font-size: 1.5rem;
		cursor: pointer;
		transition: transform 0.5s;
	}

	button:hover {
		background-color: var(--bg-color);
		transform: scale(1.02) perspective(0px);
	}
</style>
