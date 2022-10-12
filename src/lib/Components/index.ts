import Image from '$lib/Components/Image/Image.svelte';
import Link from '$lib/Components/Link/Link.svelte';
import Text from '$lib/Components/Text/Text.svelte';
import InputText from '$lib/Forms/InputText.svelte';
import Line from '$lib/Components/Shapes/Line/Line.svelte';
import Rectangle from '$lib/Components/Shapes/Rectangle/Rectangle.svelte';
import type IFieldsTemplate from '$lib/shared/IFieldsTemplate';
import type IComponent from './IComponent';

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
		height: {
			component: InputText,
			value: ''
		},
		width: {
			component: InputText,
			value: ''
		},
		transform: {
			component: InputText,
			value: 'rotate(90deg)'
		},
		zIndex: {
			component: InputText,
			value: 0
		}
	}
};

const textFields = {
	...shapeFields
};

const linkFields = {
	attr: {},
	style: {
		...textFields.style,
		url: {
			component: InputText,
			value: ''
		}
	}
};

export type IComponentTemplate = IComponent & {
	fieldsTemplate: IFieldsTemplate;
};

export default {
	Image: {
		name: 'Image',
		component: Image,
		fields: {
			attr: {},
			style: { ...DEFAULT_STYLE, height: 'fit-content' }
		},
		fieldsTemplate: textFields,
		value:
			'https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg'
	},
	Text: {
		name: 'Text',
		component: Text,
		fields: {
			attr: {},
			style: { ...DEFAULT_STYLE, height: '80px', textAlign: 'center' }
		},
		fieldsTemplate: textFields,
		value: 'change me'
	},
	Link: {
		name: 'Link',
		component: Link,
		fields: {
			attr: {},
			style: {}
		},
		fieldsTemplate: linkFields,
		value: 'https://google.com'
	},
	// Shapes
	Line: {
		name: 'Line',
		component: Line,
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
		component: Rectangle,
		fields: {
			attr: {},
			style: { ...DEFAULT_STYLE }
		},
		fieldsTemplate: shapeFields
	}
} as { [key: string]: IComponentTemplate };
