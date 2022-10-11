import type IFields from '$lib/shared/IFields';

export default interface IComponent {
	name: string; //must be unique
	component: ConstructorOfATypedSvelteComponent;
	fields: IFields;
	value?: string;
}
