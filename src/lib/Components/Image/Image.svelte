<script lang="ts">
	import type { IAttribute } from '$lib/shared/IAttribute';
	import { createEventDispatcher } from 'svelte';
	import { draggable } from '../../shared/draggable/draggable';
	import { resizable } from '../../shared/resizable/resizable';
	import { rotable } from '../../shared/rotable/rotable';
	import { styleToString } from '../../shared/styleToString';

	const dispatch = createEventDispatcher();

	export let alt: string;
	export let attr: IAttribute = {};
	export let style: Partial<CSSStyleDeclaration> = {};
	export let title: string;
	export let value: string;

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
	<img {alt} src={value} {title} style="height: 100%; width: 100%; object-fit: cover;" />
</div>
