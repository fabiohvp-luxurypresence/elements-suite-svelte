<script lang="ts">
	import componentTemplates from '$lib/Components';
	import ComponentsMenu from '$lib/ComponentsMenu/ComponentsMenu.svelte';
	import type IComponent from '$lib/Components/IComponent';
	import PropertiesMenu from '$lib/PropertiesMenu/PropertiesMenu.svelte';
	import Sidebar from '$lib/Sidebar/Sidebar.svelte';
	import Constants from '$lib/Constants';
	import type IFields from '$lib/shared/IFields';
	import type IFieldsTemplate from '$lib/shared/IFieldsTemplate';
	import { styleToInt } from '$lib/shared/styleToInt';
	import { onMount } from 'svelte';
	import slideStore from '../Slides/slideStore';
	import SlideOptions from '$lib/SlideOptions/SlideOptions.svelte';

	export let components: IComponent[] = [];
	export let openSidebar = false;

	let editor: HTMLElement;
	let fieldsTemplate: IFieldsTemplate | null;
	let previousContainerRect: DOMRect;
	let resizer: ResizeObserver;
	let scale = 1;
	let selectedComponentFields: IFields | null;
	let selectedComponentIndex: number = -1;
	let showComponents = false; // wait for right size math

	$: $slideStore.preview && onSidebarClose();

	onMount(() => {
		resizer = new ResizeObserver(onResize);
		resizer.observe(editor);

		return () => {
			resizer.unobserve(editor);
		};
	});

	function onAdd({ detail }: { detail: IComponent }) {
		const componentTemplate = getComponentTemplate(detail);
		const component = { ...detail, fields: { ...componentTemplate.fields } };
		components = [...components, component];
	}

	function onComponentClick(index: number) {
		if ($slideStore.preview) return;
		if (selectedComponentIndex === index) return;

		openSidebar = true;
		const selectedComponent = components[index];
		selectedComponentFields = {
			attr: { ...selectedComponent.fields.attr },
			style: { ...selectedComponent.fields.style }
		};
		selectedComponentIndex = index;

		const componentTemplate = getComponentTemplate(selectedComponent);
		fieldsTemplate = componentTemplate.fieldsTemplate;
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

	function getComponentTemplate(component: IComponent) {
		return componentTemplates[getElementName(component.element.name)];
	}

	function getElementName(element: string) {
		return element.replace(/Proxy<(\w+)>/g, '$1');
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

	function exportJSON() {
		let componentsTemp = components.map((o) => {
			const element = getElementName(o['element'].name);
			let slide = { ...o };
			delete (slide as any)['fieldsTemplate'];
			return {
				...slide,
				element
			};
		});
		let json = JSON.stringify(componentsTemp, null, 2);
		json = json.replace(/"element": "(\w+)"/g, `"element": $1`).replace(/\\r\\n/g, '<br>');
		window.prompt('Copy to clipboard: Ctrl+C, Enter', json);
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

<SlideOptions>
	<button on:click={exportJSON}>JSON</button>
</SlideOptions>

<section
	bind:this={editor}
	class="editor"
	class:preview-mode={$slideStore.preview}
	class:editor-mode={!$slideStore.preview}
	class:grid={$slideStore.showGrid}
	style:--grid-gap={`${$slideStore.gridGap}px`}
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
</section>

<style>
	.editor {
		--grid-gap: unset;
		--slide-scale: 1;
		margin-top: 1rem;
	}

	.editor :global(.component) {
		transform: scale(var(--slide-scale));
	}

	.grid {
		background-image: repeating-linear-gradient(var(--grid-color) 0 1px, transparent 1px 100%),
			repeating-linear-gradient(90deg, var(--grid-color) 0 1px, transparent 1px 100%);
		background-size: var(--grid-gap) var(--grid-gap);
	}
</style>
