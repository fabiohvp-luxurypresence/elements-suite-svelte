import type IFieldValue from '$lib/shared/IFieldValue';

export default interface IComponent {
	name: string; //must be unique
	element: ConstructorOfATypedSvelteComponent;
	attr: { [key: string]: IFieldValue };
	style: { [key: string]: IFieldValue };
	value?: string | string[];
}
