<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let min: number | undefined = undefined;
	export let max: number | undefined = undefined;
	export let value: string = '';
	export let suffix: string | null = 'px';

	$: numberValue = parseInt(value?.replace(/px/g, '') ?? '0').toString();
	$: change(numberValue);

	function change(numberValue: string) {
		value = numberValue + suffix;
		dispatch('change', numberValue);
	}
</script>

<div class="flex">
	<input
		type="number"
		bind:value={numberValue}
		{min}
		{max}
		class="input"
		class:full-width={!suffix}
		class:rounded-md={!suffix}
	/>
	{#if suffix}
		<span class="items-center bg-gray-200 justify-center px-1 h-5 text-gray-600 rounded-r-md"
			>{suffix}</span
		>
	{/if}
</div>

<style>
	input {
		width: calc(100% - 35px);
	}
	span {
		width: 35px;
	}
</style>
