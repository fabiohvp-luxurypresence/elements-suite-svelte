<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { draggable } from '../../../shared/draggable/draggable';
	import { resizable } from '../../../shared/resizable/resizable';
	import { rotable } from '../../../shared/rotable/rotable';
	import { styleToString } from '../../../shared/styleToString';

	const dispatch = createEventDispatcher();

	export let style: Partial<CSSStyleDeclaration> = {};

	function onClick(e: MouseEvent) {
		dispatch('click', e);
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="component"
	style={styleToString(style)}
	on:click={onClick}
	use:draggable
	use:resizable
	use:rotable
/>

<style>
	.component {
		border-top: 1px solid var(--primary-color);
	}
</style>
