import Image from '$lib/Components/Image/Image.svelte';
import Text from '$lib/Components/Text/Text.svelte';
import type { ISlide } from '$lib/Slides/ISlide';

export default {
	key: 'before-after',
	name: 'Before/After',
	components: [
		{
			attr: {},
			style: {
				left: '194px',
				top: '22px',
				height: '133px',
				width: '333px',
				textAlign: 'center',
				zIndex: '1'
			},
			element: Text,
			name: 'Text',
			value: 'Welcome'
		},
		{
			attr: {},
			style: {
				left: '0px',
				top: '0px',
				height: '900px',
				width: '720px'
			},
			element: Image,
			name: 'Image',
			value:
				'https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/c20g9vrvdws5sdlvfrbm/living-room'
		},
		{
			attr: {},
			style: {
				left: '914px',
				top: '22px',
				height: '133px',
				width: '333px',
				textAlign: 'center',
				zIndex: '1'
			},
			element: Text,
			name: 'Text',
			value: 'Welcome'
		},
		{
			attr: {},
			style: {
				left: '720px',
				top: '0px',
				height: '900px',
				width: '720px'
			},
			element: Image,
			name: 'Image',
			value:
				'https://res.cloudinary.com/luxuryp/images/w_1920,c_limit,f_auto,q_auto/vlpqb06o3qdhi9nubjm3/stocksy_txp4c549b86uif300_large_3575119'
		}
	]
} as ISlide;
