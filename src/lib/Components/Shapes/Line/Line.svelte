<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { draggable } from '$lib/shared/draggable/draggable';
	import { resizable } from '$lib/shared/resizable/resizable';
	import { rotable } from '$lib/shared/rotable/rotable';
	import { styleToString } from '$lib/shared/styleToString';
	import Sidebar from '$lib/Sidebar/Sidebar.svelte';
	import ObjectStyles from '$lib/Forms/Styles/ObjectStyles.svelte';

	const dispatch = createEventDispatcher();

	export let sidebarVisible = false;
	export let style: Partial<CSSStyleDeclaration> = {};

	function onClick(e: MouseEvent) {
		dispatch('click', e);
	}

	function onStyleUpdate({ detail }: { detail: Partial<CSSStyleDeclaration> }) {
		style = { ...style, ...detail };
	}
</script>

<Sidebar bind:visible={sidebarVisible}>
	<ObjectStyles bind:style />
</Sidebar>

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
		border-top: 1px solid var(--primary-color);
	}
</style>
