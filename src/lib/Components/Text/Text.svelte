<script lang="ts">
	import type { IAttribute } from '$lib/shared/IAttribute';
	import { createEventDispatcher } from 'svelte';
	import { draggable } from '../../shared/draggable/draggable';
	import { dynamicText, type ResizeTextOptions } from '../../shared/dynamicText/dynamicText';
	import { resizable } from '../../shared/resizable/resizable';
	import { rotable } from '../../shared/rotable/rotable';
	import { styleToString } from '../../shared/styleToString';

	const dispatch = createEventDispatcher();

	export let attr: IAttribute = {};
	export let options: Partial<ResizeTextOptions> = {};
	export let style: Partial<CSSStyleDeclaration>;
	export let value = '';

	function onClick(e: MouseEvent) {
		dispatch('click', e);
	}
</script>

<div
	class:component={true}
	style={styleToString(style)}
	{...attr}
	on:click={onClick}
	use:draggable
	use:resizable
	use:rotable
>
	<div
		class:invisible={true}
		contenteditable="true"
		style="color: inherit;"
		bind:innerHTML={value}
		use:dynamicText={options}
	/>
</div>
