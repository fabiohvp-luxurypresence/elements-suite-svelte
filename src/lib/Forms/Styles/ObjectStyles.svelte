<script lang="ts">
	import ColorPick from '../ColorPick.svelte';
	import FormField from '../FormField.svelte';
	import InputNumber from '../InputNumber.svelte';

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
		numericAngle = Math.round(numericAngle * 100) / 100;
		style.transform = style.transform?.replace(/rotate\((\d+)deg\)/g, `rotate(${numericAngle}deg)`);
	}
</script>

<div class="form-group-label">Colors</div>
<FormField label="Background color">
	<ColorPick bind:value={style.backgroundColor} />
</FormField>
<FormField label="Color">
	<ColorPick bind:value={style.color} />
</FormField>

<div class="form-group-label">Position</div>
<FormField label="Left">
	<InputNumber bind:value={style.left} />
</FormField>
<FormField label="Top">
	<InputNumber bind:value={style.top} />
</FormField>
<FormField label="Layer">
	<InputNumber bind:value={style.zIndex} min={0} suffix={null} />
</FormField>

<div class="form-group-label">Size</div>
<FormField label="Height">
	<InputNumber bind:value={style.height} />
</FormField>
<FormField label="Width">
	<InputNumber bind:value={style.width} />
</FormField>

<div class="form-group-label">Transformation</div>
<FormField label="Angle">
	<InputNumber bind:value={transform} suffix="deg" on:change={onAngleChange} />
</FormField>
