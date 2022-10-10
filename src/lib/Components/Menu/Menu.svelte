<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { IElement } from '../../Elements/IElement';
	import Image from '../Image/Image.svelte';
	import Link from '../Link/Link.svelte';
	import Text from '../Text/Text.svelte';

	const dispatch = createEventDispatcher();

	const DEFAULT_STYLE = {
		left: '0',
		position: 'absolute',
		top: '0',
		width: '200px'
	};

	const options: IElement[] = [
		{
			component: Image,
			key: 'image',
			name: 'Image',
			style: { ...DEFAULT_STYLE, height: 'fit-content' },
			value:
				'https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg'
		},
		{
			component: Text,
			key: 'text',
			name: 'Text',
			style: { ...DEFAULT_STYLE, height: '80px', textAlign: 'center' },
			value: 'change me'
		},
		{
			component: Link,
			key: 'link',
			name: 'Link',
			style: { ...DEFAULT_STYLE, height: '80px', textAlign: 'center' },
			value: 'https://google.com'
		}
	];

	function onSelect(option: IElement) {
		dispatch('select', option);
	}
</script>

<ul>
	{#each options as option}
		<li on:click={() => onSelect(option)}>{option.name}</li>
	{/each}
</ul>

<style>
	ul {
		text-decoration: none;
	}

	li {
		display: inline-block;
	}
</style>
