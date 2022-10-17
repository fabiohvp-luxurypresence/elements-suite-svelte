<script lang="ts">
	import type { IAttribute } from '$lib/shared/IAttribute';
	import { createEventDispatcher } from 'svelte';
	import { draggable } from '$lib/shared/draggable/draggable';
	import { resizable } from '$lib/shared/resizable/resizable';
	import { rotable } from '$lib/shared/rotable/rotable';
	import { styleToString } from '$lib/shared/styleToString';
	import Sidebar from '$lib/Sidebar/Sidebar.svelte';
	import ObjectStyles from '$lib/Forms/Styles/ObjectStyles.svelte';
	import ImageStyles from '$lib/Forms/Styles/ImageStyles.svelte';

	const dispatch = createEventDispatcher();

	export let attr: IAttribute = {};
	export let sidebarVisible = false;
	export let style: Partial<CSSStyleDeclaration> = {};
	export let title: string = '';
	export let value: string =
		'https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg';

	$: style.backgroundImage = `url(${value})`;
	$: style.backgroundSize = style.backgroundSize ?? 'cover';
	$: style.backgroundRepeat = style.backgroundRepeat ?? 'no-repeat';

	function onClick(e: MouseEvent) {
		dispatch('click', e);
	}

	function onStyleUpdate({ detail }: { detail: Partial<CSSStyleDeclaration> }) {
		style = { ...style, ...detail };
		console.log(style);
	}
</script>

<Sidebar bind:visible={sidebarVisible} title="Properties">
	<ImageStyles bind:style />
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
	{title}
>
	<!-- <img {alt} src={value} {title} style="height: 100%; width: 100%; object-fit: cover;" /> -->
</div>
