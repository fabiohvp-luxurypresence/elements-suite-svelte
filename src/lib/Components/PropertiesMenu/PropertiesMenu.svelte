<script lang="ts">
	import type IFields from '$lib/shared/IFieldsTemplate';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let fields: IFields;

	$: attr = fields.attr;
	$: style = fields.style;

	$: attrKeys = Object.keys(attr);
	$: styleKeys = Object.keys(style);

	function onApply() {
		dispatch('apply');
	}

	function onChange(type: 'attr' | 'style', key: string, value: any) {
		dispatch('change', { type, key, value });
	}
</script>

{#if attrKeys.length}
	<h3>Attributes</h3>
	<ul>
		{#each attrKeys as key}
			<li>
				<span>{key}</span>
				<svelte:component
					this={attr[key].component}
					value={attr[key].value}
					on:change={({ detail }) => onChange('attr', key, detail)}
				/>
			</li>
		{/each}
	</ul>
{/if}

{#if styleKeys.length}
	<h3>Styles</h3>
	<ul>
		{#each styleKeys as key}
			<li>
				<span>{key}</span>
				<svelte:component
					this={style[key].component}
					value={style[key].value}
					on:change={({ detail }) => onChange('style', key, detail)}
				/>
			</li>
		{/each}
	</ul>
{/if}

<button on:click={onApply}>Apply</button>

<style>
	ul {
		padding: 0;
		list-style: none;
	}
</style>
