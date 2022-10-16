import type IFieldValue from './IFieldValue';

export interface IFieldTemplateValue {
	args?: any;
	component: ConstructorOfATypedSvelteComponent;
	value: IFieldValue;
}

export default interface IFieldTemplate {
	[key: string]: IFieldTemplateValue;
}
