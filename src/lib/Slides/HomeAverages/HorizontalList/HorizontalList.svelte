<script lang="ts">
	import { draggable } from '$lib/shared/draggable/draggable';
	import type { IAttribute } from '$lib/shared/IAttribute';
	import { resizable } from '$lib/shared/resizable/resizable';
	import { rotable } from '$lib/shared/rotable/rotable';
	import { styleToString } from '$lib/shared/styleToString';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let attr: IAttribute = {};
	export let style: Partial<CSSStyleDeclaration>;
	export let value: string[] = [];

	function onClick(e: MouseEvent) {
		dispatch('click', e);
	}

	function onStyleUpdate({ detail }: { detail: Partial<CSSStyleDeclaration> }) {
		style = { ...style, ...detail };
	}
</script>

<div
	class:component={true}
	style={styleToString(style)}
	{...attr}
	on:click={onClick}
	on:styleUpdate={onStyleUpdate}
	use:draggable
	use:resizable
	use:rotable
>
	{#each value as item}
		<span>{@html item}</span>
	{/each}
</div>

<style>
	.component {
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	span {
		padding: 1rem 1rem;
		border-left: 1px solid black;
		flex: 1;
	}
</style>
