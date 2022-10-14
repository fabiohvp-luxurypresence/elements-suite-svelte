<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let value: string;
	export let suffix: string = 'px';

	$: dispatch('change', value);
</script>

<div class="flex">
	<input
		type="number"
		bind:value
		class="input"
		class:full-width={!suffix}
		class:rounded-md={!suffix}
	/>
	{#if suffix}
		<span class="items-center bg-gray-200 justify-center p-1 text-gray-600 rounded-r-md"
			>{suffix}</span
		>
	{/if}
</div>

<style>
	input {
		width: calc(100% - 30px);
	}
	span {
		width: 30px;
	}
</style>
