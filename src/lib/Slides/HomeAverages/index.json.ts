import type { ISlide } from '$lib/Slides/ISlide';
import Text from '$lib/Components/Text/Text.svelte';
import HorizontalList from '$lib/Slides/HomeAverages/HorizontalList/HorizontalList.svelte';
import Rectangle from '$lib/Components/Shapes/Rectangle/Rectangle.svelte';

export default {
	key: 'home-averages',
	name: 'Home Averages',
	components: [
		{
			name: 'Rectangle',
			element: Rectangle,
			fields: {
				style: {
					left: '0px',
					top: '0px',
					height: '501px',
					width: '808px',
					transform: 'rotate(0deg)',
					zIndex: 0,
					backgroundColor: '#ebe1db'
				}
			}
		},
		{
			name: 'Rectangle',
			element: Rectangle,
			fields: {
				style: {
					left: '18px',
					top: '17px',
					height: '484px',
					width: '771px',
					transform: 'rotate(0deg)',
					zIndex: 0,
					backgroundColor: '#fff'
				}
			}
		},
		{
			name: 'Text',
			element: Text,
			fields: {
				attr: {},
				style: {
					left: '31px',
					top: '32px',
					height: '41px',
					width: '348px',
					transform: 'rotate(0deg)',
					zIndex: 0,
					textAlign: 'center'
				}
			},
			value: 'Home Averages in California'
		},
		{
			name: 'Text',
			element: Text,
			fields: {
				attr: {},
				style: {
					left: '28px',
					top: '267px',
					height: '41px',
					width: '143px',
					transform: 'rotate(0deg)',
					zIndex: 0,
					textAlign: 'center'
				}
			},
			value: 'Pricing'
		},
		{
			name: 'List (H)',
			element: HorizontalList,
			fields: {
				attr: {},
				style: {
					left: '29px',
					top: '96px',
					height: '77px',
					width: '749px',
					transform: 'rotate(0deg)',
					zIndex: 0,
					backgroundColor: null
				}
			},
			value: [
				'<br>Bedrooms',
				'<br>Baths',
				'<br>SQFT',
				'$<br>$/SQFT',
				'<br>Lot SQFT',
				'$<br>$/Lot SQFT'
			]
		}
	]
} as ISlide;
