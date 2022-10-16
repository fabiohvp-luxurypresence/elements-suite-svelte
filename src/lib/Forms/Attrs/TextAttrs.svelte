<script lang="ts">
	import type { IAttribute } from '$lib/shared/IAttribute';
	import FormField from '../FormField.svelte';
	import InputNumber from '../InputNumber.svelte';

	export let attr: IAttribute;
</script>

<h4>Font</h4>
<FormField label="Min font size">
	<InputNumber bind:value={attr.minSize} suffix="rem" />
</FormField>

<FormField label="Max font size">
	<InputNumber bind:value={attr.maxSize} suffix="rem" />
</FormField>
