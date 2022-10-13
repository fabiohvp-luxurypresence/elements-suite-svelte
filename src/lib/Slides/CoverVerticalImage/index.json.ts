import Image from '$lib/Components/Image/Image.svelte';
import Link from '$lib/Components/Link/Link.svelte';
import Text from '$lib/Components/Text/Text.svelte';
import type { ISlide } from '../ISlide';

export default {
	key: 'cover-vertical-image',
	name: 'Cover (Vertical Image)',
	components: [
		{
			fields: {
				attr: {},
				style: {
					left: '2.78%',
					top: '18.66%',
					height: '19.55%',
					width: '35.57%',
					'font-size': '',
					'text-align': ''
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
					left: '2.78%',
					top: '39.99%',
					height: '5.33%',
					width: '36.68%',
					'font-size': '',
					'text-align': ''
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
					left: '45.28%',
					top: '4.44%',
					height: '80.89%',
					width: '51.97%',
					'font-size': '',
					'text-align': ''
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
					left: '2.78%',
					top: '93.15%',
					height: '3.55%',
					width: '47.25%',
					fontSize: '',
					textAlign: ''
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
					left: '86.97%',
					top: '93.15%',
					height: '3.55%',
					width: '10.26%',
					fontSize: '',
					textAlign: ''
				}
			},
			element: Link,
			name: 'Link',
			value: 'luxurypresence.com'
		}
	]
} as ISlide;
