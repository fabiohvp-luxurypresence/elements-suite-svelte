<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import componentTemplates from '$lib/Components';
	import type IComponent from '../IComponent';

	const dispatch = createEventDispatcher();

	function onSelect(component: IComponent) {
		dispatch('select', component);
	}
</script>

<div class="components-list">
	<div class="title">Components</div>
	{#each Object.keys(componentTemplates) as key}
		<div class="item">
			<button on:click={() => onSelect(componentTemplates[key])}>
				<div class="icon">
					<svelte:component
						this={componentTemplates[key].icon}
						objAttributes={componentTemplates[key].icon}
					/>
				</div>
				<div class="name">{componentTemplates[key].name}</div>
			</button>
		</div>
	{/each}
</div>

<style>
	.components-list {
		display: flex;
		gap: 1rem 0.5rem;
		flex-wrap: wrap;
		padding: 3rem 0 2rem;
		justify-content: flex-start;
	}

	.title {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}
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
