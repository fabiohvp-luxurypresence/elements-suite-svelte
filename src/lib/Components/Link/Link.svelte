<script lang="ts">
	import type { IAttribute } from '$lib/shared/IAttribute';
	import { createEventDispatcher } from 'svelte';
	import { draggable } from '$lib/shared/draggable/draggable';
	import { DEFAULT_RESIZE_TEXT_OPTIONS, dynamicText } from '$lib/shared/dynamicText/dynamicText';
	import { resizable } from '$lib/shared/resizable/resizable';
	import { rotable } from '$lib/shared/rotable/rotable';
	import { styleToString } from '$lib/shared/styleToString';
	import Sidebar from '$lib/Sidebar/Sidebar.svelte';
	import ObjectStyles from '$lib/Forms/Styles/ObjectStyles.svelte';
	import { pixelToIntUnsafe } from '$lib/shared/pixelToInt';

	const dispatch = createEventDispatcher();

	export let attr: IAttribute = {};
	export let sidebarVisible = false;
	export let style: Partial<CSSStyleDeclaration> = {};
	export let target = '_blank';
	export let value = 'https://google.com';

	$: dynamicTextOptions = {
		maxSize: pixelToIntUnsafe(attr.maxSize) ?? DEFAULT_RESIZE_TEXT_OPTIONS.maxSize,
		minSize: pixelToIntUnsafe(attr.minSize) ?? DEFAULT_RESIZE_TEXT_OPTIONS.minSize,
		step: pixelToIntUnsafe(attr.step) ?? DEFAULT_RESIZE_TEXT_OPTIONS.step,
		unit: (attr.unit as any) ?? DEFAULT_RESIZE_TEXT_OPTIONS.unit
	};

	function onClick(e: MouseEvent) {
		dispatch('click', e);
	}

	function onStyleUpdate({ detail }: { detail: Partial<CSSStyleDeclaration> }) {
		style = { ...style, ...detail };
	}
</script>

<Sidebar bind:visible={sidebarVisible} title="Properties">
	<ObjectStyles bind:style />
</Sidebar>

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
	<a
		class:invisible={true}
		contenteditable="true"
		href={value}
		style="color: inherit;"
		{target}
		bind:innerHTML={value}
		use:dynamicText={dynamicTextOptions}
	/>
</div>
