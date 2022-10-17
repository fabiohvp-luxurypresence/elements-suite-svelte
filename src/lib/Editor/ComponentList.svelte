<script lang="ts">
	import slideStore from '$lib/Slides/slideStore';
	import Component from './Component.svelte';
	import editorStore from './editorStore';

	const directions: { [key: string]: 'bottom' | 'left' | 'top' | 'right' } = {
		ArrowDown: 'bottom',
		ArrowUp: 'top',
		ArrowLeft: 'left',
		ArrowRight: 'right'
	};

	function onKeydown(e: KeyboardEvent) {
		if (e.target !== document.body) return;
		if ($slideStore.preview) return;

		if (e.code === 'Delete') {
			editorStore.removeComponent();
			return;
		}
		const direction = directions[e.code];

		if (!direction) return;
		editorStore.moveComponent(direction);
	}
</script>

<svelte:window on:keydown={onKeydown} />

{#each $editorStore.components as component, index (index)}
	<Component {component} {index} />
{/each}
