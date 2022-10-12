import Image from '$lib/Components/Image/Image.svelte';
import Link from '$lib/Components/Link/Link.svelte';
import Text from '$lib/Components/Text/Text.svelte';
import type { ISlide } from '../ISlide';

export default {
	key: 'before-after',
	name: 'Before/After',
	components: [
		{
			fields: {
				attr: {},
				style: {
					left: '27.125px',
					top: '32.546875px',
					width: '212.109375px',
					height: '332.828125px'
				}
			},
			component: Image,
			name: 'Image',
			value:
				'https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/etmgfhcf2n0ugqpkcqb9/stocksy_txp4c549b86uif300_large_3610229'
		},
		{
			fields: {
				attr: {},
				style: {
					left: '293.5px',
					top: '56.046875px',
					width: '299.8125px',
					height: '90.4375px'
				}
			},
			component: Text,
			name: 'Text',
			value: 'Meet \r\nJane'
		},
		{
			fields: {
				attr: {},
				style: {
					left: '293.5px',
					top: '161.671875px',
					width: '299.8125px',
					height: '164.8125px'
				}
			},
			component: Text,
			name: 'Text',
			value:
				'Like many Floridians, Jane fell in love with the opportunities to the south and has become an expert at assisting others with their own relocations to the South Florida area. Her industry specialties include waterfront condos, homes for boat owners, foreclosure investments, estate sales, family relocations and pre-retirement investments.\r\nWith 16 years of experience in the real estate industry, Jane has been through multiple market cycles as an agent, buyer, and investor, and has a deep understanding for the often-complicated process that her clients will encounter. '
		},
		{
			fields: {
				attr: {},
				style: {
					left: '27.125px',
					top: '380.515625px',
					width: '566.1875px',
					height: '12px'
				}
			},
			component: Link,
			name: 'Link',
			value: 'luxurypresence.com'
		}
	]
} as ISlide;
