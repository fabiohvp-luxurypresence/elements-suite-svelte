<script lang="ts">
	import { fly } from 'svelte/transition';
	export let isOpen = false;
	export let handleClose = () => {};
</script>

{#if isOpen}
	<div class="sidebar" transition:fly={{ x: -200, duration: 500 }}>
		<button class="close" on:click={handleClose}>x</button>
		<slot />
	</div>
{/if}

<style>
	.sidebar {
		display: block;
		top: 30px;
		left: 0;
		border: 1px solid black;
		position: absolute;
		height: 100vh;
		transition: all 1s ease-out;
		overflow: hidden;
		width: 12rem;
		padding: 2rem 1rem;
		z-index: 1;
		background-color: #fff;
	}
	.close {
		position: absolute;
		right: 10px;
		top: 10px;
		cursor: pointer;
		font-size: 24px;
		background-color: transparent;
		border: none;
	}
</style>
