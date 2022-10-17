import Image from '$lib/Components/Image/Image.svelte';
import Link from '$lib/Components/Link/Link.svelte';
import Text from '$lib/Components/Text/Text.svelte';
import type { ISlide } from '$lib/Slides/ISlide';

export default {
	key: 'bio-alternative',
	name: 'Bio (Alternative)',
	components: [
		{
			attr: {
				maxSize: '0rem',
				minSize: '0rem'
			},
			style: {
				left: '145px',
				top: '39.55px',
				height: '192.79px',
				width: '469.62px',
				textAlign: 'center',
				whiteSpace: 'nowrap',
				zIndex: '0',
				color: '',
				backgroundColor: ''
			},
			element: Text,
			name: 'Text',
			value: 'Jane Williams'
		},
		{
			attr: {
				maxSize: '0rem',
				minSize: '0rem'
			},
			style: {
				left: '173.02px',
				top: '273.53px',
				height: '474.56px',
				width: '426.77px',
				textAlign: 'center',
				whiteSpace: 'pre-line',
				zIndex: '0',
				color: '',
				backgroundColor: ''
			},
			element: Text,
			name: 'Text',
			value:
				'Urna tortor ipsum venenatis porttitor nunc id ut purus. Cursus nec quam fringilla pellentesque justo lobortis tempor. Volutpat netus velit sed congue netus tortor. Arcu enim quis lobortis.<br><br>At consectetur sit fames enim id amet nisl vulputate. Cras mi facilisis id mauris, cursus nunc turpis nunc. Nisl, amet ac gravida etiam at vel donec consequat. Aliquam et tristique lacus.'
		},
		{
			attr: {},
			style: {
				left: '262px',
				top: '830.48px',
				height: '26.36px',
				width: '270.24px',
				textAlign: 'center',
				zIndex: '0',
				color: '',
				backgroundColor: ''
			},
			element: Link,
			name: 'Link',
			value: 'luxurypresence.com'
		},
		{
			attr: {},
			style: {
				left: '720px',
				top: '0px',
				height: '900px',
				width: '720px',
				zIndex: '0',
				color: '',
				backgroundColor: ''
			},
			element: Image,
			name: 'Image',
			value:
				'https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/etmgfhcf2n0ugqpkcqb9/stocksy_txp4c549b86uif300_large_3610229'
		}
	]
} as ISlide;
