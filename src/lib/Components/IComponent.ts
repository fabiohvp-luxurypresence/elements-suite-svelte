import type IFields from '$lib/shared/IFields';

export default interface IComponent {
	name: string; //must be unique
	element: ConstructorOfATypedSvelteComponent;
	fields: IFields;
	value?: string | string[];
}
