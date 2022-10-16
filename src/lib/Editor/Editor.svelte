<script lang="ts">
	import Constants from '$lib/Constants';
	import { onMount } from 'svelte';
	import slideStore from '$lib/Slides/slideStore';
	import SlideOptions from '$lib/SlideOptions/SlideOptions.svelte';
	import { exportJSON } from '$lib/shared/component';
	import ComponentList from './ComponentList.svelte';

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
	}
</script>

<SlideOptions>
	<button on:click={() => exportJSON()}>JSON</button>
</SlideOptions>

<section
	bind:this={editor}
	class="editor"
	class:preview-mode={$slideStore.preview}
	class:editor-mode={!$slideStore.preview}
	style:--slide-scale={scale}
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
