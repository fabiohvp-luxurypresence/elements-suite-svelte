import Image from '$lib/Components/Image/Image.svelte';
import Link from '$lib/Components/Link/Link.svelte';
import Text from '$lib/Components/Text/Text.svelte';
import type { ISlide } from '$lib/Slides/ISlide';

export default {
	key: 'bio',
	name: 'Bio',
	components: [
		{
			fields: {
				attr: {},
				style: {
					left: '55.38px',
					top: '68.41px',
					height: '736.26px',
					width: '467.49px'
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
					left: '648.3px',
					top: '122.17px',
					height: '197.1px',
					width: '662.96px',
					whiteSpace: 'pre-line'
				}
			},
			element: Text,
			name: 'Text',
			value: 'Meet <br>Jane'
		},
		{
			fields: {
				attr: {
					maxSize: '0rem',
					minSize: '0rem'
				},
				style: {
					left: '648.3px',
					top: '358.36px',
					height: '477.26px',
					width: '700.42px',
					columnCount: '2',
					zIndex: '0',
					color: '',
					backgroundColor: ''
				}
			},
			element: Text,
			name: 'Text',
			value:
				'Like many Floridians, Jane fell in love with the opportunities to the south and has become an expert at assisting others with their own relocations to the South Florida area. Her industry specialties include waterfront condos, homes for boat owners, foreclosure investments, estate sales, family relocations and pre-retirement investments.<br>With 16 years of experience in the real estate industry, Jane has been through multiple market cycles as an agent, buyer, and investor, and has a deep understanding for the often-complicated process that her clients will encounter.'
		},
		{
			fields: {
				attr: {},
				style: {
					left: '60.68px',
					top: '835.44px',
					height: '37.72px',
					width: '380.48px',
					zIndex: '0',
					color: '',
					backgroundColor: ''
				}
			},
			element: Link,
			name: 'Link',
			value: 'luxurypresence.com'
		}
	]
} as ISlide;
