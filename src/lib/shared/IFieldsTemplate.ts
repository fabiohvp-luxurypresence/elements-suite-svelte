import type IFieldValue from './IFieldValue';

interface IField {
	[key: string]: {
		component: ConstructorOfATypedSvelteComponent;
		value: IFieldValue;
	};
}

interface IFieldsTemplate {
	attr: IField;
	style: IField;
}
export default IFieldsTemplate;
