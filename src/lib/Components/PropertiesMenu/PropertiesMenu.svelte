<script lang="ts">
	import type IFieldsTemplate from '$lib/shared/IFieldsTemplate';
	import type IFields from '$lib/shared/IFields';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let fields: IFields;
	export let fieldsTemplate: IFieldsTemplate;

	$: attr = fieldsTemplate.attr;
	$: style = fieldsTemplate.style;

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
					value={fields.attr[key]}
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
					value={fields.style[key]}
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

	li {
		margin: 1rem 0;
	}
</style>
