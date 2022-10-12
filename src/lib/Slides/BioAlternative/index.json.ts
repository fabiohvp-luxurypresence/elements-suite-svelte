import Image from '$lib/Components/Image/Image.svelte';
import Link from '$lib/Components/Link/Link.svelte';
import Text from '$lib/Components/Text/Text.svelte';
import type { ISlide } from '../ISlide';

export default {
	key: 'bio-alternative',
	name: 'Bio (Alternative)',
	components: [
		{
			fields: {
				attr: {},
				style: {
					left: '6.11%',
					top: '5.33%',
					height: '25.33%',
					width: '37.78%'
				}
			},
			component: Text,
			name: 'Text',
			value: 'Jane Williams'
		},
		{
			fields: {
				attr: {},
				style: {
					left: '8.79%',
					top: '36.88%',
					height: '53.67%',
					width: '32.42%'
				}
			},
			component: Text,
			name: 'Text',
			value:
				'Urna tortor ipsum venenatis porttitor nunc id ut purus. Cursus nec quam fringilla pellentesque justo lobortis tempor. Volutpat netus velit sed congue netus tortor. Arcu enim quis lobortis.\r\n\r\nAt consectetur sit fames enim id amet nisl vulputate. Cras mi facilisis id mauris, cursus nunc turpis nunc. Nisl, amet ac gravida etiam at vel donec consequat. Aliquam et tristique lacus.'
		},
		{
			fields: {
				attr: {},
				style: {
					left: '19.44%',
					top: '90.96%',
					height: '2.49%',
					width: '11.11%'
				}
			},
			component: Link,
			name: 'Link',
			value: 'luxurypresence.com'
		},
		{
			fields: {
				attr: {},
				style: {
					left: '50%',
					top: '0%',
					height: '100%',
					width: '50%'
				}
			},
			component: Image,
			name: 'Image',
			value:
				'https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/etmgfhcf2n0ugqpkcqb9/stocksy_txp4c549b86uif300_large_3610229'
		}
	]
} as ISlide;
