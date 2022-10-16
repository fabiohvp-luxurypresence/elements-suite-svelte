<script lang="ts">
	import Constants from '$lib/Constants';
	import { onMount } from 'svelte';
	import slideStore from '$lib/Slides/slideStore';
	import SlideOptions from '$lib/SlideOptions/SlideOptions.svelte';
	import ComponentList from './ComponentList.svelte';
	import editorStore from './editorStore';

	let editor: HTMLElement;
	let resizer: ResizeObserver;
	let scale = 1;
	let showComponents = false; // wait for right size math

	onMount(() => {
		resizer = new ResizeObserver(onResize);
		resizer.observe(editor);

		return () => {
			resizer.unobserve(editor);
		};
	});

	async function onResize([container]: ResizeObserverEntry[]) {
		if (Math.round(container.contentRect.height) !== Constants.SLIDE_HEIGHT) {
			let diff = (container.contentRect.height * 100) / Constants.SLIDE_HEIGHT;
			scale = diff / 100;
			editorStore.resizeComponents(scale);
		}
		showComponents = true;
	}
</script>

<SlideOptions>
	<button on:click={() => editorStore.export(scale)}>JSON</button>
</SlideOptions>

<section
	bind:this={editor}
	class="editor"
	class:preview-mode={$slideStore.preview}
	class:editor-mode={!$slideStore.preview}
>
	{#if showComponents}
		<ComponentList />
	{/if}
</section>

<style>
	.editor {
		--slide-scale: 1;
	}
</style>
