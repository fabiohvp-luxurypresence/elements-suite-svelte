<script lang="ts">
	import Editor from '$lib/Editor/Editor.svelte';
	import type { ISlide } from '$lib/Slides/ISlide';

	export let data: { slide: ISlide };
	let openSidebar = false;

	function onOpenComponents() {
		openSidebar = true;
	}
</script>

<div class="container">
	<nav>
		<a href="/slides">Back</a>
		<button on:click={onOpenComponents}>Components</button>
	</nav>

	<div class="editor-container">
		<Editor components={data.slide.components} bind:openSidebar />
	</div>
</div>

<style>
	.container {
		display: grid;
		grid-template-rows: auto auto;
	}
	.editor-container {
		align-items: center;
		display: flex;
		justify-content: center;
		margin-top: 2rem;
		position: relative;
	}
</style>
