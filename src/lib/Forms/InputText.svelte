<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let value: string;

	$: dispatch('change', value);
</script>

<div class="flex">
	<input type="text" bind:value class="input rounded-md" />
</div>
