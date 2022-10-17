import Image from '$lib/Components/Image/Image.svelte';
import type { ISlide } from '$lib/Slides/ISlide';

export default {
	key: 'image',
	name: 'Image',
	components: [
		{
			attr: {},
			style: {
				left: '0px',
				top: '0px',
				height: '900px',
				width: '1440px'
			},
			element: Image,
			name: 'Image',
			value: 'https://res.cloudinary.com/luxuryp/image/upload/v1652407596/houze_yufwil.jpg'
		}
	]
} as ISlide;
