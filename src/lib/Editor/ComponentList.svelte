<script lang="ts">
	import Component from './Component.svelte';
	import editorStore from './editorStore';
</script>

{#each $editorStore.components as component, index (index)}
	<Component {component} {index} />
{/each}
