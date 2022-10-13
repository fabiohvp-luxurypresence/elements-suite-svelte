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

	function onStyleUpdate({ detail }: { detail: Partial<CSSStyleDeclaration> }) {
		style = { ...style, ...detail };
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class:component={true}
	style={styleToString(style)}
	on:click={onClick}
	on:styleUpdate={onStyleUpdate}
	use:draggable
	use:resizable
	use:rotable
/>

<style>
	.component {
		border: 1px solid var(--primary-color);
	}
</style>
