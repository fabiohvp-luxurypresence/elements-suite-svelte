<script lang="ts">
	import FormField from '../FormField.svelte';
	import InputNumber from '../InputNumber.svelte';

	export let style: Partial<CSSStyleDeclaration>;
</script>

<h4>Font</h4>
<FormField label="Font size">
	<InputNumber bind:value={style.fontSize} />
</FormField>
