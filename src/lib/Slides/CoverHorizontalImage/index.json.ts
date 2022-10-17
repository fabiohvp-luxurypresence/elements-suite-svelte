import Image from '$lib/Components/Image/Image.svelte';
import Link from '$lib/Components/Link/Link.svelte';
import Text from '$lib/Components/Text/Text.svelte';
import type { ISlide } from '$lib/Slides/ISlide';

export default {
	key: 'cover-horizontal-image',
	name: 'Cover (Horizontal Image)',
	components: [
		{
			attr: {},
			style: {
				left: '40px',
				top: '44px',
				height: '24px',
				width: '443px',
				fontWeight: '700',
				whiteSpace: 'nowrap'
			},
			element: Text,
			name: 'Text',
			value: 'Jane Mills'
		},
		{
			attr: {},
			style: {
				left: '514px',
				top: '44px',
				height: '18px',
				width: '886px',
				fontWeight: '700',
				textAlign: 'right'
			},
			element: Link,
			name: 'Link',
			value: 'luxurypresence.com'
		},
		{
			attr: {},
			style: {
				left: '40px',
				top: '152px',
				height: '160px',
				width: '1360px',
				whiteSpace: 'pre-line'
			},
			element: Text,
			name: 'Text',
			value: '15th Lane Bay,<br>SA 155123'
		},
		{
			attr: {},
			style: {
				left: '37px',
				top: '322px',
				height: '48px',
				width: '1360px'
			},
			element: Text,
			name: 'Text',
			value: 'Prepared for Joey Williams'
		},
		{
			attr: {},
			style: {
				left: '40px',
				top: '472px',
				height: '392px',
				width: '1351px'
			},
			element: Image,
			name: 'Image',
			value:
				'https://res.cloudinary.com/luxuryp/images/w_1920,c_limit,f_auto,q_auto/vennjafmxuycijiedp6j/stocksy_txp4c549b86uif300_large_3582078'
		}
	]
} as ISlide;
