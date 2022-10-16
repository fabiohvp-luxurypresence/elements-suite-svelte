<script lang="ts">
	export let label: string;
</script>

<div class="form-field">
	<div class="text-sm">{label}</div>
	<slot />
</div>
