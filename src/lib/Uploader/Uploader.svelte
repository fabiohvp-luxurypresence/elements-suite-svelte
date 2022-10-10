<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Dropzone from 'svelte-file-dropzone';
	const dispatch = createEventDispatcher();

	export let files: HTMLInputElement[] = [];
	export let options: {
		accept?: string;
		disabled?: boolean;
		maxSize?: number;
		minSize?: number;
		multiple?: boolean;
		noClick?: boolean;
		noDrag?: boolean;
	} = {};

	function handleFilesSelect(e: any) {
		const { acceptedFiles } = e.detail;
		files = [...files, ...acceptedFiles];
		dispatch('change', files);
	}
</script>

<Dropzone
	on:drop={handleFilesSelect}
	{...options}
	containerStyles="background: none;border:none;cursor:pointer;height:100%;"><span /></Dropzone
>
