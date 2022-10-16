<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let value: string = '';
</script>

<div class="flex">
	<input
		type="color"
		bind:value
		class="input rounded-md"
		on:input={() => dispatch('change', value)}
	/>
</div>
