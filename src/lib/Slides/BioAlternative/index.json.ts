import Image from '$lib/Components/Image/Image.svelte';
import Link from '$lib/Components/Link/Link.svelte';
import Text from '$lib/Components/Text/Text.svelte';
import type { ISlide } from '$lib/Slides/ISlide';

export default {
	key: 'bio-alternative',
	name: 'Bio (Alternative)',
	components: [
		{
			fields: {
				attr: {},
				style: {
					left: '88px',
					top: '48px',
					height: '228px',
					width: '544px'
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
					left: '127px',
					top: '332px',
					height: '483px',
					width: '467px'
				}
			},
			element: Text,
			name: 'Text',
			value:
				'Urna tortor ipsum venenatis porttitor nunc id ut purus. Cursus nec quam fringilla pellentesque justo lobortis tempor. Volutpat netus velit sed congue netus tortor. Arcu enim quis lobortis.<br><br>At consectetur sit fames enim id amet nisl vulputate. Cras mi facilisis id mauris, cursus nunc turpis nunc. Nisl, amet ac gravida etiam at vel donec consequat. Aliquam et tristique lacus.'
		},
		{
			fields: {
				attr: {},
				style: {
					left: '280px',
					top: '819px',
					height: '22px',
					width: '160px'
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
					left: '720px',
					top: '0px',
					height: '900px',
					width: '720px'
				}
			},
			element: Image,
			name: 'Image',
			value:
				'https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/etmgfhcf2n0ugqpkcqb9/stocksy_txp4c549b86uif300_large_3610229'
		}
	]
} as ISlide;
