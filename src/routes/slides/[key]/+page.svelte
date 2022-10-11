<script lang="ts">
	import Editor from '$lib/Editor/Editor.svelte';
	import type { ISlide } from '$lib/Slides/ISlide';

	export let data: { slide: ISlide };
</script>

<nav>
	<a href="/slides">Back</a>
</nav>

<Editor components={data.slide.components} />

<style>
	nav {
		overflow: hidden;
		position: absolute;
	}
</style>
