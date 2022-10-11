<script lang="ts">
	import { draggable } from '../../shared/draggable/draggable';
	import { dynamicText, type ResizeTextOptions } from '../../shared/dynamicText/dynamicText';
	import { resizable } from '../../shared/resizable/resizable';
	import { rotable } from '../../shared/rotable/rotable';
	import { styleToString } from '../../shared/styleToString';

	export let options = {} as Partial<ResizeTextOptions>;
	export let props: unknown = {};
	export let style: Partial<CSSStyleDeclaration> | undefined = {};
	export let target = '_blank';
	export let value = '';
</script>

<div
	class="component"
	style={styleToString(style)}
	{...props}
	use:draggable
	use:resizable
	use:rotable
>
	<a
		class:invisible={true}
		contenteditable="true"
		href={value}
		{target}
		bind:innerHTML={value}
		use:dynamicText={options}
	/>
</div>
