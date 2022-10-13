import type IFields from '$lib/shared/IFields';

export default interface IComponent {
	name: string; //must be unique
	icon: ConstructorOfATypedSvelteComponent;
	element: ConstructorOfATypedSvelteComponent;
	fields: IFields;
	value?: string;
}
