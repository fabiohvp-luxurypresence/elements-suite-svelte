<script lang="ts">
	import ColorPick from '../ColorPick.svelte';
	import FormField from '../FormField.svelte';
	import InputNumber from '../InputNumber.svelte';
	import InputText from '../InputText.svelte';

	export let style: Partial<CSSStyleDeclaration>;
	$: transform = style.transform?.replace(/rotate\((\d+)deg\)/g, '$1') ?? '0';

	function onAngleChange({ detail: angle }: { detail: string }) {
		let numericAngle = parseInt(angle);

		if (numericAngle < 0) {
			numericAngle = 360 + numericAngle;
		}
		if (numericAngle > 360) {
			numericAngle = 0;
		}
		style.transform = style.transform?.replace(/rotate\((\d+)deg\)/g, `rotate(${numericAngle}deg)`);
	}
</script>

<h4>Colors</h4>
<FormField label="Background color">
	<ColorPick bind:value={style.backgroundColor} />
</FormField>
<FormField label="Color">
	<ColorPick bind:value={style.color} />
</FormField>

<h4>Position</h4>
<FormField label="Left">
	<InputNumber bind:value={style.left} />
</FormField>
<FormField label="Top">
	<InputNumber bind:value={style.top} />
</FormField>
<FormField label="Layer">
	<InputNumber bind:value={style.zIndex} min={0} suffix={null} />
</FormField>

<h4>Size</h4>
<FormField label="Height">
	<InputNumber bind:value={style.height} />
</FormField>
<FormField label="Width">
	<InputNumber bind:value={style.width} />
</FormField>

<h4>Transformation</h4>
<FormField label="Angle">
	<InputNumber bind:value={transform} suffix="deg" on:change={onAngleChange} />
</FormField>

<style>
	h4 {
		font-weight: bold;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}

	:global(.form-field) {
		margin-left: 1rem;
	}
</style>
