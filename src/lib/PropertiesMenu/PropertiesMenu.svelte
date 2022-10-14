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
					{...attr[key].args}
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
					{...style[key].args}
					on:change={({ detail }) => onChange('style', key, detail)}
				/>
			</li>
		{/each}
	</ul>
{/if}

<button
	on:click={onApply}
	class="block uppercase mx-auto shadow bg-gray-200 hover:bg-gray-700 focus:shadow-outline focus:outline-none text-black hover:text-white text-xs py-3 px-10 rounded"
	>Apply</button
>

<style>
	ul {
		padding: 0;
		list-style: none;
	}

	li {
		margin: 1rem 0;
	}
	button {
		margin: 0;
	}
</style>
