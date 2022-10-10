<script lang="ts">
	import { draggable } from '../../shared/draggable/draggable';
	import { resizable } from '../../shared/resizable/resizable';
	import { rotable } from '../../shared/rotable/rotable';
	import { styleToString } from '../../shared/styleToString';

	export let alt: string;
	export let value: string;
	export let style: Partial<CSSStyleDeclaration>;
	export let title: string;
</script>

<div class="component" style={styleToString(style)} use:draggable use:resizable use:rotable>
	<img {alt} src={value} {title} style="height: inherit; width: inherit" />
</div>
