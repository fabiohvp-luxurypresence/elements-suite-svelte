<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { draggable } from '../../shared/draggable/draggable';
	import { resizable } from '../../shared/resizable/resizable';
	import { rotable } from '../../shared/rotable/rotable';
	import { styleToString } from '../../shared/styleToString';

	const dispatch = createEventDispatcher();

	export let alt: string;
	export let props: any = {};
	export let style: Partial<CSSStyleDeclaration> = {};
	export let title: string;
	export let value: string;

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
>
	<img {alt} src={value} {title} {...props} style="height: 100%; width: 100%; object-fit: cover;" />
</div>
