<script lang="ts">
	import Editor from '$lib/Editor/Editor.svelte';
	import ArrowBack from 'svelte-icons/md/MdArrowBack.svelte';
	import MdMenu from 'svelte-icons/md/MdMenu.svelte';
	import type { ISlide } from '$lib/Slides/ISlide';
	import Constants from '$lib/Constants';

	export let data: { slide: ISlide };
	let openSidebar = false;

	function onOpenComponents() {
		openSidebar = true;
	}
</script>

<div class="page-container">
	<div class="header">
		<a href="/slides">
			<div class="icon">
				<ArrowBack />
			</div>
		</a>
	</div>

	<div class="slide-container">
		<div class="menu-icon">
			<button on:click={onOpenComponents}>
				<div class="icon"><MdMenu /></div>
			</button>
		</div>
		<div class="editor-container">
			<Editor
				components={data.slide.components}
				bind:openSidebar
				--slide-height={Constants.SLIDE_HEIGHT}
				--slide-width={Constants.SLIDE_WIDTH}
			/>
		</div>
	</div>
</div>

<style>
	.header {
		padding: 1rem 1rem;
		transition: transform 0.5s, box-shadow 1s;
		background-color: var(--header-bg-color);
	}
	.page-container {
		background-color: var(--editor-bg-color);
	}
	.slide-container {
		padding: 1rem 1rem;
		align-items: center;
		display: flex;
		justify-content: center;
		position: relative;
	}
	.menu-icon {
		position: absolute;
		left: 1rem;
		top: 0.5rem;
	}
	.icon {
		width: 40px;
		cursor: pointer;
		transition: transform 0.5s, box-shadow 1s;
	}
	.icon:hover {
		transform: scale(1.2) perspective(0px);
	}
	button {
		border: none;
		transition: transform 0.5s;
	}
</style>
