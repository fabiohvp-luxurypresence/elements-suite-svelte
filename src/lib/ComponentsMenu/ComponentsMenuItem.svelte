<script lang="ts">
	import type { IComponentTemplate } from '$lib/Components/IComponentTemplate';
	import editorStore from '$lib/Editor/editorStore';

	export let component: IComponentTemplate;
</script>

<button class="item" on:click={() => editorStore.addComponent(component)}>
	<div class="icon">
		<svelte:component this={component.icon} objAttributes={component.icon} />
	</div>
	<div class="name">{component.name}</div>
</button>

<style>
	.item {
		cursor: pointer;
	}

	.item:hover {
		color: var(--bg-color-inverted);
	}

	.item .icon {
		width: 4rem;
	}
	button {
		cursor: pointer;
		border: none;
		transition: transform 0.3s, box-shadow 1s;
	}
	button:hover {
		transform: scale(1.2) perspective(0px);
		box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
	}
	.name {
		padding-bottom: 0.3rem;
	}
</style>
