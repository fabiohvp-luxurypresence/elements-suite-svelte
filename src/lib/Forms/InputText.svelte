<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let value: string;

	$: {
		dispatch('change', value);
		console.log(value);
	}
</script>

<input type="text" bind:value />
