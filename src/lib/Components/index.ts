import Image from '$lib/Components/Image/Image.svelte';
import Link from '$lib/Components/Link/Link.svelte';
import Text from '$lib/Components/Text/Text.svelte';
import InputText from '$lib/Forms/InputText.svelte';
import type IFieldsTemplate from '$lib/shared/IFieldsTemplate';
import type IComponent from './IComponent';

const DEFAULT_STYLE = {
	left: '0',
	top: '0',
	height: '50px',
	width: '200px'
};

const textFields = {
	attr: {},
	style: {
		height: {
			component: InputText,
			value: ''
		},
		width: {
			component: InputText,
			value: ''
		}
	}
};

const linkFields = {
	...textFields,
	style: {
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
			style: { ...DEFAULT_STYLE, height: '80px', textAlign: 'center' }
		},
		fieldsTemplate: linkFields,
		value: 'https://google.com'
	}
} as { [key: string]: IComponentTemplate };
