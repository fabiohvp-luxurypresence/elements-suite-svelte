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
					left: '30px',
					top: '36px',
					height: '736px',
					width: '469px'
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
					left: '326px',
					top: '62px',
					height: '200px',
					width: '663px'
				}
			},
			element: Text,
			name: 'Text',
			value: 'Meet <br>Jane'
		},
		{
			fields: {
				attr: {},
				style: {
					left: '326px',
					top: '180px',
					height: '365px',
					width: '663px'
				}
			},
			element: Text,
			name: 'Text',
			value:
				'Like many Floridians, Jane fell in love with the opportunities to the south and has become an expert at assisting others with their own relocations to the South Florida area. Her industry specialties include waterfront condos, homes for boat owners, foreclosure investments, estate sales, family relocations and pre-retirement investments.<br>With 16 years of experience in the real estate industry, Jane has been through multiple market cycles as an agent, buyer, and investor, and has a deep understanding for the often-complicated process that her clients will encounter. '
		},
		{
			fields: {
				attr: {},
				style: {
					left: '30px',
					top: '423px',
					height: '27px',
					width: '1252px'
				}
			},
			element: Link,
			name: 'Link',
			value: 'luxurypresence.com'
		}
	]
} as ISlide;
