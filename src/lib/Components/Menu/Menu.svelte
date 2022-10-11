<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { ISlide } from '../../Slides/ISlide';
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

	const options: ISlide[] = [
		{
			key: 'image',
			name: 'Image',
			components: [
				{
					component: Image,
					style: { ...DEFAULT_STYLE, height: 'fit-content' },
					value:
						'https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg'
				}
			]
		},
		{
			key: 'text',
			name: 'Text',
			components: [
				{
					component: Text,
					style: { ...DEFAULT_STYLE, height: '80px', textAlign: 'center' },
					value: 'change me'
				}
			]
		},
		{
			key: 'link',
			name: 'Link',
			components: [
				{
					component: Link,
					style: { ...DEFAULT_STYLE, height: '80px', textAlign: 'center' },
					value: 'https://google.com'
				}
			]
		}
	];

	function onSelect(option: ISlide) {
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
