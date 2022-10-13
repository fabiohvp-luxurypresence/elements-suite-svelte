import Image from '$lib/Components/Image/Image.svelte';
import Link from '$lib/Components/Link/Link.svelte';
import Text from '$lib/Components/Text/Text.svelte';
import type { ISlide } from '../ISlide';

export default {
	key: 'bio',
	name: 'Bio',
	components: [
		{
			fields: {
				attr: {},
				style: {
					left: '4.17%',
					top: '8%',
					height: '81.78%',
					width: '32.57%'
				}
			},
			element: Image,
			name: 'Image',
			value:
				'https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/etmgfhcf2n0ugqpkcqb9/stocksy_txp4c549b86uif300_large_3610229'
		},
		{
			fields: {
				attr: {},
				style: {
					left: '45.07%',
					top: '13.77%',
					height: '22.22%',
					width: '46.04%'
				}
			},
			element: Text,
			name: 'Text',
			value: 'Meet \r\nJane'
		},
		{
			fields: {
				attr: {},
				style: {
					left: '45.07%',
					top: '39.72%',
					height: '40.47%',
					width: '46.04%'
				}
			},
			element: Text,
			name: 'Text',
			value:
				'Like many Floridians, Jane fell in love with the opportunities to the south and has become an expert at assisting others with their own relocations to the South Florida area. Her industry specialties include waterfront condos, homes for boat owners, foreclosure investments, estate sales, family relocations and pre-retirement investments.\r\nWith 16 years of experience in the real estate industry, Jane has been through multiple market cycles as an agent, buyer, and investor, and has a deep understanding for the often-complicated process that her clients will encounter. '
		},
		{
			fields: {
				attr: {},
				style: {
					left: '4.17%',
					top: '93.49%',
					height: '2.95%',
					width: '86.95%'
				}
			},
			element: Link,
			name: 'Link',
			value: 'luxurypresence.com'
		}
	]
} as ISlide;
