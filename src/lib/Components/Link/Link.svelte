<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { draggable } from '../../shared/draggable/draggable';
	import { dynamicText, type ResizeTextOptions } from '../../shared/dynamicText/dynamicText';
	import { resizable } from '../../shared/resizable/resizable';
	import { rotable } from '../../shared/rotable/rotable';
	import { styleToString } from '../../shared/styleToString';

	const dispatch = createEventDispatcher();

	export let options = {} as Partial<ResizeTextOptions>;
	export let props: any = {};
	export let style: Partial<CSSStyleDeclaration> = {};
	export let target = '_blank';
	export let value = '';

	function onClick(e: MouseEvent) {
		dispatch('click', e);
	}
</script>

<div
	class="component"
	style={styleToString(style)}
	{...props}
	on:click={onClick}
	use:draggable
	use:resizable
	use:rotable
>
	<a
		class:invisible={true}
		contenteditable="true"
		href={value}
		style="color: inherit;"
		{target}
		bind:innerHTML={value}
		use:dynamicText={options}
	/>
</div>
