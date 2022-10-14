<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let label: string = '';
	export let checked: Boolean = false;

	const dispatch = createEventDispatcher();
</script>

<label class="flex items-center relative w-max cursor-pointer select-none">
	<span class="label text-md font-bold mr-3">{label}</span>
	<input
		bind:checked
		on:change={() => dispatch('toggle', checked)}
		type="checkbox"
		class="appearance-none transition-colors cursor-pointer 
			w-12 h-5 rounded-full focus:outline-none
			focus:ring-2 focus:ring-offset-2 
			focus:ring-offset-black focus:ring-blue-500 
			bg-gray-500"
	/>
	<span class="relative text-xs uppercase">
		<span class:hide={checked} class="absolute right-1 top-[-6px] text-white"> OFF </span>
		<span class:hide={!checked} class="absolute right-6 top-[-6px] text-white"> ON </span>
	</span>
	<span
		class="w-5 h-5 right-7 absolute rounded-full transform 
		transition-transform bg-gray-200"
	/>
</label>

<style>
	input:checked {
		background-color: #a2c9fc; /* bg-green-500 */
	}

	input:checked ~ span:last-child {
		--tw-translate-x: 1.75rem; /* translate-x-7 */
	}
	.label {
		color: black;
	}

	.hide {
		display: none;
	}
</style>
