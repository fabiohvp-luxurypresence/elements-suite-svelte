<script lang="ts">
	import type { IAttribute } from '$lib/shared/IAttribute';
	import Sidebar from '$lib/Sidebar/Sidebar.svelte';
	import { createEventDispatcher } from 'svelte';
	import { draggable } from '$lib/shared/draggable/draggable';
	import {
		dynamicText,
		type ResizeTextOptions,
		DEFAULT_RESIZE_TEXT_OPTIONS
	} from '$lib/shared/dynamicText/dynamicText';
	import { resizable } from '$lib/shared/resizable/resizable';
	import { rotable } from '$lib/shared/rotable/rotable';
	import { styleToString } from '$lib/shared/styleToString';
	import sidebarStore from '$lib/Sidebar/sidebarStore';
	import ObjectStyles from '$lib/Forms/Styles/ObjectStyles.svelte';
	import TextAttrs from '$lib/Forms/Attrs/TextAttrs.svelte';
	import { pixelToIntUnsafe } from '$lib/shared/pixelToInt';

	const dispatch = createEventDispatcher();

	export let attr: IAttribute = {};
	export let options: Partial<ResizeTextOptions> = {};
	export let sidebarVisible = false;
	export let style: Partial<CSSStyleDeclaration> = {};
	export let value: string = 'change me';

	function onClick(e: MouseEvent) {
		sidebarStore.closeAll();
		dispatch('click', e);
	}

	function onStyleUpdate({ detail }: { detail: Partial<CSSStyleDeclaration> }) {
		style = { ...style, ...detail };
	}

	$: calculatedOptions = {
		maxSize: pixelToIntUnsafe(attr.maxSize) ?? DEFAULT_RESIZE_TEXT_OPTIONS.maxSize,
		minSize: pixelToIntUnsafe(attr.minSize) ?? DEFAULT_RESIZE_TEXT_OPTIONS.minSize,
		step: pixelToIntUnsafe(attr.step) ?? DEFAULT_RESIZE_TEXT_OPTIONS.step,
		unit: (attr.unit as any) ?? DEFAULT_RESIZE_TEXT_OPTIONS.unit
	};
</script>

<Sidebar bind:visible={sidebarVisible} title="Properties">
	<TextAttrs bind:attr />
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
	<div
		class:invisible={true}
		contenteditable="true"
		style="color: inherit;"
		bind:innerHTML={value}
		use:dynamicText={calculatedOptions}
	/>
</div>
