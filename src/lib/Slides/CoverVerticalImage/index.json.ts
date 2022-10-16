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
					left: '2.78px',
					top: '18.66px',
					height: '3441.2px',
					width: '18228.57px'
				}
			},
			element: Text,
			name: 'Text',
			value: '15th Lane\r\nBay, SA 155123'
		},
		{
			fields: {
				attr: {},
				style: {
					left: '2.78px',
					top: '40px',
					height: '255.74px',
					width: '19385.06px'
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
					left: '45.28px',
					top: '4.44px',
					height: '58884.66px',
					width: '38904.09px'
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
					left: '2.78px',
					top: '93.15px',
					height: '113.66px',
					width: '32150.86px'
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
					left: '86.97px',
					top: '93.15px',
					height: '113.66px',
					width: '1515.67px'
				}
			},
			element: Link,
			name: 'Link',
			value: 'luxurypresence.com'
		}
	]
} as ISlide;
