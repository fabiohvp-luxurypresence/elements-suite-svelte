<script lang="ts">
	import Editor from '$lib/Editor/Editor.svelte';
	import ArrowBack from 'svelte-icons/md/MdArrowBack.svelte';
	import MdMenu from 'svelte-icons/md/MdMenu.svelte';
	import type { ISlide } from '$lib/Slides/ISlide';
	import Constants from '$lib/Constants';
	import Sidebar from '$lib/Sidebar/Sidebar.svelte';
	import ComponentsMenu from '$lib/ComponentsMenu/ComponentsMenu.svelte';
	import editorStore from '$lib/Editor/editorStore';
	import { goto } from '$app/navigation';

	export let data: { slide: ISlide; slides: ISlide[] };

	let sidebarVisible = false;

	$: editorStore.setComponents([...data.slide.components]);

	async function onSlideChange(e: Event) {
		await goto(`/slides/${(e.target as any).value}`);
		editorStore.resizeComponents();
	}
</script>

<div class="page-container">
	<div class="header flex">
		<a href="/slides">
			<span class="icon">
				<ArrowBack />
			</span>
		</a>

		<select
			class="ml-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm 
			rounded-lg focus:ring-blue-500 focus:border-blue-500 
			block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600
			dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
			dark:focus:border-blue-500"
			on:change={(e) => onSlideChange(e)}
		>
			{#each data.slides as item}
				<option selected={item.key === data.slide.key} value={item.key}>{item.name}</option>
			{/each}
		</select>
	</div>

	<div class="slide-container">
		<div class="menu-icon">
			<button on:click={() => (sidebarVisible = true)}>
				<div class="icon"><MdMenu /></div>
			</button>
			<Sidebar bind:visible={sidebarVisible} title="Components">
				<ComponentsMenu />
			</Sidebar>
		</div>
		<div class="editor-container">
			<Editor --slide-height={Constants.SLIDE_HEIGHT} --slide-width={Constants.SLIDE_WIDTH} />
		</div>
	</div>
</div>

<style>
	.header {
		height: 4.5rem;
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
