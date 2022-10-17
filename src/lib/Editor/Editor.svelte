<script lang="ts">
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
		editorStore.setEditor(editor);
		resizer = new ResizeObserver(onResize);
		resizer.observe(editor);

		return () => {
			resizer.unobserve(editor);
		};
	});

	async function onResize() {
		editorStore.resizeComponents();
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
