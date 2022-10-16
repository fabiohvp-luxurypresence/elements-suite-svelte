<script lang="ts">
	import FaRegWindowClose from 'svelte-icons/fa/FaRegWindowClose.svelte';
	import { styleToString } from '$lib/shared/styleToString';
	import { fly } from 'svelte/transition';
	import sidebarStore from './sidebarStore';
	import { remToPixel } from '$lib/shared/remToPixel';
	import slideStore from '$lib/Slides/slideStore';

	export let style: Partial<CSSStyleDeclaration> = {};
	export let title: string;
	export let visible: boolean = false;

	let sidebar: HTMLElement;

	$: $sidebarStore.closeAll && (visible = false);
	$: $slideStore.preview && (visible = false);
	$: width = $sidebarStore.width;
</script>

{#if visible}
	<section
		bind:this={sidebar}
		class="sidebar"
		style={styleToString(style)}
		style:width={`${width}rem`}
		transition:fly={{ x: -remToPixel(width), duration: 500 }}
	>
		<button class="close" on:click={() => sidebarStore.closeAll()}>
			<FaRegWindowClose />
		</button>
		<div class="content">
			<div class="title">{title}</div>
			<slot />
		</div>
	</section>
{/if}

<style>
	.content {
		padding: 0.5rem 0.5rem;
	}
	.sidebar {
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
		background-color: var(--bg-color);
		border: 1px solid var(--bg-color);
		height: 100%;
		max-height: calc(100vh - 4.5rem);
		left: -1px;
		top: 4.5rem;
		overflow: auto;
		position: fixed;
		transition: all 1s ease-out;
		z-index: 1;
	}
	.close {
		background-color: transparent;
		border: none;
		color: var(--bg-color-inverted);
		cursor: pointer;
		font-size: 1rem;
		position: absolute;
		right: 10px;
		top: 10px;
		width: 30px;
		padding: 0;
	}
	.title {
		font-size: 1.2rem;
		margin-bottom: 1rem;
	}
</style>
