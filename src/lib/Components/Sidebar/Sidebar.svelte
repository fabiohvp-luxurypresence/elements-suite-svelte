<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';

	const dispatch = createEventDispatcher();

	export let isOpen = false;

	function onClose() {
		dispatch('close');
	}
</script>

{#if isOpen}
	<div class="sidebar" transition:fly={{ x: -200, duration: 500 }}>
		<button class="close" on:click={onClose}>x</button>
		<slot />
	</div>
{/if}

<style>
	.sidebar {
		display: block;
		top: -2px;
		left: -1px;
		border: 1px solid var(--bg-color-inverted);
		position: absolute;
		height: 100vh;
		transition: all 1s ease-out;
		overflow: hidden;
		width: 12rem;
		padding: 2rem 1rem;
		z-index: 1;
		background-color: var(--bg-color);
	}
	.close {
		position: absolute;
		right: 10px;
		top: 10px;
		cursor: pointer;
		font-size: 24px;
		background-color: transparent;
		border: none;
		color: var(--bg-color-inverted);
	}
</style>
