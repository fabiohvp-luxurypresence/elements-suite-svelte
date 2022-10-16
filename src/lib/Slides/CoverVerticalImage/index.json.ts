import Image from '$lib/Components/Image/Image.svelte';
import Link from '$lib/Components/Link/Link.svelte';
import Text from '$lib/Components/Text/Text.svelte';
import type { ISlide } from '$lib/Slides/ISlide';

export default {
	key: 'cover-vertical-image',
	name: 'Cover (Vertical Image)',
	components: [
		{
			fields: {
				attr: {},
				style: {
					left: '40px',
					top: '168px',
					height: '176px',
					width: '512px',
					whiteSpace: 'pre-line'
				}
			},
			element: Text,
			name: 'Text',
			value: '15th Lane<br>Bay, SA 155123'
		},
		{
			fields: {
				attr: {},
				style: {
					left: '40px',
					top: '360px',
					height: '48px',
					width: '528px',
					whiteSpace: 'pre-line'
				}
			},
			element: Text,
			name: 'Text',
			value: 'Prepared for Joey Miranda'
		},
		{
			fields: {
				attr: {},
				style: {
					left: '652px',
					top: '40px',
					height: '728px',
					width: '748px'
				}
			},
			element: Image,
			name: 'Image',
			value:
				'https://res.cloudinary.com/luxuryp/images/w_1920,c_limit,f_auto,q_auto/thyclgpcfgnndae1f7jv/stocksy_txp4c549b86uif300_large_3582078_1'
		},
		{
			fields: {
				attr: {},
				style: {
					left: '40px',
					top: '838px',
					height: '32px',
					width: '680px',
					fontWeight: '700'
				}
			},
			element: Text,
			name: 'Text',
			value: 'Jane Williams'
		},
		{
			fields: {
				attr: {},
				style: {
					left: '1253px',
					top: '838px',
					height: '32px',
					width: '148px',
					fontWeight: '700'
				}
			},
			element: Link,
			name: 'Link',
			value: 'luxurypresence.com'
		}
	]
} as ISlide;
