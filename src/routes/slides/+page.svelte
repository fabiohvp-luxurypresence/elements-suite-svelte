<script lang="ts">
	import type { ISlide } from '$lib/Slides/ISlide';

	export let data: { slides: ISlide[] } = { slides: [] };
</script>

<ul>
	{#each data.slides as item}
		<li><a href={`/slides/${item.key}`}>{item.name}</a></li>
	{/each}
</ul>
