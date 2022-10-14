import Image from '$lib/Components/Image/Image.svelte';
import ImageIcon from 'svelte-icons/io/IoIosImage.svelte';
import Link from '$lib/Components/Link/Link.svelte';
import LinkIcon from 'svelte-icons/md/MdLink.svelte';
import Text from '$lib/Components/Text/Text.svelte';
import TextIcon from 'svelte-icons/md/MdShortText.svelte';
import InputText from '$lib/Forms/InputText.svelte';
import Line from '$lib/Components/Shapes/Line/Line.svelte';
import LineIcon from 'svelte-icons/md/MdLinearScale.svelte';
import Rectangle from '$lib/Components/Shapes/Rectangle/Rectangle.svelte';
import RectangleIcon from 'svelte-icons/md/MdCropSquare.svelte';
import type { IComponentTemplate } from './IComponentTemplate';
import InputNumber from '$lib/Forms/InputNumber.svelte';

const DEFAULT_STYLE = {
	left: '0',
	top: '0',
	height: '50px',
	width: '200px',
	transform: 'rotate(0deg)',
	zIndex: 0
};

const shapeFields = {
	attr: {},
	style: {
		backgroundColor: {
			component: InputText,
			value: ''
		},
		color: {
			component: InputText,
			value: ''
		},
		top: {
			component: InputNumber,
			value: ''
		},
		left: {
			component: InputNumber,
			value: ''
		},
		height: {
			component: InputNumber,
			value: ''
		},
		width: {
			component: InputNumber,
			value: ''
		},
		transform: {
			component: InputText,
			value: 'rotate(0deg)'
		},
		zIndex: {
			args: { suffix: null },
			component: InputNumber,
			value: 0
		}
	}
};

const textFields = {
	...shapeFields
};

export default {
	Image: {
		name: 'Image',
		icon: ImageIcon,
		element: Image,
		fields: {
			attr: {},
			style: { ...DEFAULT_STYLE, height: '144px' }
		},
		fieldsTemplate: textFields,
		value:
			'https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg'
	},
	Text: {
		name: 'Text',
		icon: TextIcon,
		element: Text,
		fields: {
			attr: {},
			style: { ...DEFAULT_STYLE, height: '80px', textAlign: 'center' }
		},
		fieldsTemplate: textFields,
		value: 'change me'
	},
	Link: {
		name: 'Link',
		icon: LinkIcon,
		element: Link,
		fields: {
			attr: {},
			style: { ...DEFAULT_STYLE }
		},
		fieldsTemplate: textFields,
		value: 'https://google.com'
	},
	// Shapes
	Line: {
		name: 'Line',
		icon: LineIcon,
		element: Line,
		fields: {
			attr: {},
			style: {
				left: '10px',
				top: '10px',
				height: '1px',
				width: '200px',
				transform: 'rotate(0deg)'
			}
		},
		fieldsTemplate: shapeFields
	},
	Rectangle: {
		name: 'Rectangle',
		icon: RectangleIcon,
		element: Rectangle,
		fields: {
			attr: {},
			style: { ...DEFAULT_STYLE }
		},
		fieldsTemplate: shapeFields
	}
} as { [key: string]: IComponentTemplate };
