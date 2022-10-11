import Image from '$lib/Components/Image/Image.svelte';
import Link from '$lib/Components/Link/Link.svelte';
import Text from '$lib/Components/Text/Text.svelte';
import InputText from '$lib/Forms/InputText.svelte';
import type { IComponent } from './IComponent';

const DEFAULT_STYLE = {
	left: '0',
	top: '0',
	width: '200px'
};

const textProperties = {
	height: InputText,
	width: InputText
};

export default {
	Image: {
		name: 'Image',
		component: Image,
		properties: {
			...textProperties,
			url: InputText
		},
		style: { ...DEFAULT_STYLE, height: 'fit-content' },
		value:
			'https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg'
	},
	Text: {
		name: 'Text',
		component: Text,
		properties: textProperties,
		style: { ...DEFAULT_STYLE, height: '80px', textAlign: 'center' },
		value: 'change me'
	},
	Link: {
		name: 'Link',
		component: Link,
		properties: textProperties,
		style: { ...DEFAULT_STYLE, height: '80px', textAlign: 'center' },
		value: 'https://google.com'
	}
} as { [key: string]: IComponent };
