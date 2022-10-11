import Link from '$lib/Components/Link/Link.svelte';
import Text from '$lib/Components/Text/Text.svelte';
import type { ISlide } from '../ISlide';

export default {
	key: 'before-after',
	name: 'Before/After',
	components: [
		{
			name: 'Text',
			component: Text,
			fields: {
				attr: {},
				style: { left: 0, top: 0, height: '50px', width: '100px' }
			},
			value: 'testing'
		},
		{
			name: 'Link',
			component: Link,
			fields: {
				attr: {},
				style: { left: '50px', bottom: '100px', height: '50px', width: '300px' }
			},
			value: 'www.google.com'
		}
	]
} as ISlide;
