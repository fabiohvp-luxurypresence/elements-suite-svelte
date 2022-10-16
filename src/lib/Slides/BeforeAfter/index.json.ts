import Image from '$lib/Components/Image/Image.svelte';
import Text from '$lib/Components/Text/Text.svelte';
import type { ISlide } from '$lib/Slides/ISlide';

export default {
	key: 'before-after',
	name: 'Before/After',
	components: [
		{
			fields: {
				attr: {},
				style: {
					left: '13.45%',
					top: '2.44%',
					height: '14.81%',
					width: '23.11%',
					zIndex: 1
				}
			},
			element: Text,
			name: 'Text',
			value: 'Welcome'
		},
		{
			fields: {
				attr: {},
				style: {
					left: '0%',
					top: '0%',
					height: '100%',
					width: '50%'
				}
			},
			element: Image,
			name: 'Image',
			value:
				'https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/c20g9vrvdws5sdlvfrbm/living-room'
		},
		{
			fields: {
				attr: {},
				style: {
					left: '63.45%',
					top: '2.44%',
					height: '14.81%',
					width: '23.11%',
					zIndex: 1
				}
			},
			element: Text,
			name: 'Text',
			value: 'Welcome'
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
			element: Image,
			name: 'Image',
			value:
				'https://res.cloudinary.com/luxuryp/images/w_1920,c_limit,f_auto,q_auto/vlpqb06o3qdhi9nubjm3/stocksy_txp4c549b86uif300_large_3575119'
		}
	]
} as ISlide;
