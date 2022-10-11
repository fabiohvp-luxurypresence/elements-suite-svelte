<script lang="ts">
	import { draggable } from '../../shared/draggable/draggable';
	import { dynamicText, type ResizeTextOptions } from '../../shared/dynamicText/dynamicText';
	import { resizable } from '../../shared/resizable/resizable';
	import { rotable } from '../../shared/rotable/rotable';
	import { styleToString } from '../../shared/styleToString';

	export let options = {} as Partial<ResizeTextOptions>;
	export let props: any = {};
	export let style: Partial<CSSStyleDeclaration> | undefined = {};
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
	<div
		class:invisible={true}
		contenteditable="true"
		bind:innerHTML={value}
		use:dynamicText={options}
	/>
</div>
