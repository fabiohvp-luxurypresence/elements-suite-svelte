<script lang="ts">
	import type { IElement } from '$lib/Elements/IElement';

	export let data: {elements: IElement[]} = {elements:[]};
</script>

<ul>
	{#each data.elements as item}
		<li><a href={`/elements/${item.key}`}>{item.name}</a></li>
	{/each}
</ul>
