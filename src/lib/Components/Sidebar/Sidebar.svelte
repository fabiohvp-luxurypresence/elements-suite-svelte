<script lang="ts">
	import FaRegWindowClose from 'svelte-icons/fa/FaRegWindowClose.svelte';
	import { styleToString } from '$lib/shared/styleToString';
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';

	const dispatch = createEventDispatcher();

	export let isOpen = false;
	export let style: Partial<CSSStyleDeclaration> = {};

	function onClose() {
		dispatch('close');
	}
</script>

{#if isOpen}
	<section class="sidebar" style={styleToString(style)} transition:fly={{ x: -200, duration: 500 }}>
		<button class="close" on:click={onClose}>
			<FaRegWindowClose />
		</button>
		<div class="content">
			<slot />
		</div>
	</section>
{/if}

<style>
	.content {
		padding: 10px 10px;
	}
	.sidebar {
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
		background-color: var(--bg-color);
		border: 1px solid var(--bg-color);
		height: 100%;
		left: -1px;
		top: 0;
		overflow: auto;
		position: absolute;
		transition: all 1s ease-out;
		width: 12rem;
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
</style>
