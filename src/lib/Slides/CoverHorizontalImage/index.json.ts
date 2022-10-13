import Image from '$lib/Components/Image/Image.svelte';
import Link from '$lib/Components/Link/Link.svelte';
import Text from '$lib/Components/Text/Text.svelte';
import type { ISlide } from '../ISlide';

export default {
	key: 'cover-horizontal-image',
	name: 'Cover (Horizontal Image)',
	components: [
		{
			fields: {
				attr: {},
				style: {
					left: '2.78%',
					top: '4.89%',
					height: '2.66%',
					width: '30.77%',
					'font-size': '',
					'text-align': ''
				}
			},
			element: Text,
			name: 'Text',
			value: 'Jane Mills'
		},
		{
			fields: {
				attr: {},
				style: {
					left: '35.7%',
					top: '4.89%',
					height: '2.66%',
					width: '61.55%',
					'font-size': '',
					'text-align': ''
				}
			},
			element: Link,
			name: 'Link',
			value: 'luxurypresence.com'
		},
		{
			fields: {
				attr: {},
				style: {
					left: '2.78%',
					top: '16.88%',
					height: '17.78%',
					width: '94.49%',
					'font-size': '',
					'text-align': ''
				}
			},
			element: Text,
			name: 'Text',
			value: '15th Lane Bay,<br>SA 155123'
		},
		{
			fields: {
				attr: {},
				style: {
					left: '2.56%',
					top: '35.82%',
					height: '5.33%',
					width: '94.49%',
					'font-size': '',
					'text-align': ''
				}
			},
			element: Text,
			name: 'Text',
			value: 'Prepared for Joey Williams'
		},
		{
			fields: {
				attr: {},
				style: {
					left: '2.78%',
					top: '52.5%',
					height: '43.5%',
					width: '93.83%',
					'font-size': '',
					'text-align': ''
				}
			},
			element: Image,
			name: 'Image',
			value:
				'https://res.cloudinary.com/luxuryp/images/w_1920,c_limit,f_auto,q_auto/vennjafmxuycijiedp6j/stocksy_txp4c549b86uif300_large_3582078'
		}
	]
} as ISlide;
