<script lang="ts">
	import FormField from '../FormField.svelte';
	import InputText from '../InputText.svelte';

	export let style: Partial<CSSStyleDeclaration>;
</script>

<h4>Image</h4>
<FormField label="Background url">
	<InputText bind:value={style.backgroundImage} />
</FormField>
