<script lang="ts">
	import Editor from '$lib/Editor/Editor.svelte';
	import ArrowBack from 'svelte-icons/md/MdArrowBack.svelte';
	import MdMenu from 'svelte-icons/md/MdMenu.svelte';
	import type { ISlide } from '$lib/Slides/ISlide';

	export let data: { slide: ISlide };
	let openSidebar = false;

	function onOpenComponents() {
		openSidebar = true;
	}
</script>

<div class="container">
	<div class="goback">
		<a href="/slides">
			<div class="icon">
				<ArrowBack />
			</div>
		</a>
	</div>

	<div class="editor-container">
		<div class="menu-icon">
			<button on:click={onOpenComponents}>
				<div class="icon"><MdMenu /></div>
			</button>
		</div>
		<Editor components={data.slide.components} bind:openSidebar />
	</div>
</div>

<style>
	.goback {
		margin: 1rem 0.3rem 0;
		transition: transform 0.5s, box-shadow 1s;
	}
	.container {
		display: grid;
		flex-direction: column;
		grid-template-rows: auto auto;
	}
	.editor-container {
		height: 100%;
		background-color: #efefef;
		align-items: center;
		display: flex;
		justify-content: center;
		margin-top: 2rem;
		padding-top: 2rem;
		position: relative;
	}
	.menu-icon {
		position: absolute;
		left: 0.1rem;
		top: 1rem;
	}
	.icon {
		padding: 0.5rem;
		width: 40px;
		cursor: pointer;
		transition: transform 0.5s, box-shadow 1s;
	}
	button {
		border: none;
		transition: transform 0.5s;
	}
	.icon:hover {
		transform: scale(1.2) perspective(0px);
	}
</style>
