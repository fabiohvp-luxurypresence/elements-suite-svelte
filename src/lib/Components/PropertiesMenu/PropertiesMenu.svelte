<script lang="ts">
	export let properties: any = {};
	export let onPropertyChange = (key: string, detail: string) => {};
</script>

<ul>
	{#each Object.keys(properties) as key}
		<li>
			<span>{key}</span>
			<svelte:component
				this={properties[key]}
				on:change={({ detail }) => onPropertyChange(key, detail)}
			/>
		</li>
	{/each}
</ul>

<style>
	ul {
		padding: 0;
		list-style: none;
	}
</style>
