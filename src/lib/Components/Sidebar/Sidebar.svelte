<script lang="ts">
	import { fly } from 'svelte/transition';
	export let isOpen = false;
	let title = isOpen ? 'Open' : 'Close';
</script>

{#if isOpen}
	<div class="sidebar" transition:fly={{ x: -100, duration: 500 }}>
		<div>{title}</div>
		<div>This is a sidebar</div>
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
	}
	.sidebar.visible {
		opacity: 1;
		width: 100px;
		padding: 1rem;
	}
	.sidebar.hidden {
		opacity: 0;
		width: 0;
	}
</style>
