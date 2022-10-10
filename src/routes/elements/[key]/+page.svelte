<script lang="ts">
	import { page } from '$app/stores';
	import Editor from '$lib/Editor/Editor.svelte';

	const { key } = $page.params;
</script>

<nav>
	<a href="/elements">Back</a>
</nav>

<Editor />

<style>
	nav {
		overflow: hidden;
		position: absolute;
	}
</style>
