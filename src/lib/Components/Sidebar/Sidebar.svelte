<script lang="ts">
	import { fly } from 'svelte/transition';
	export let isOpen = false;
	let title = isOpen ? 'Open' : 'Close';
</script>

{#if isOpen}
	<div class="sidebar" transition:fly={{ x: -130, duration: 500 }}>
		<div>{title}</div>
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
		width: 130px;
	}
</style>
