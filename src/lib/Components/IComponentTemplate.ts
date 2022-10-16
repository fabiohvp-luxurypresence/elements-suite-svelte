import type IComponent from './IComponent';

export interface IComponentTemplate extends IComponent {
	icon: ConstructorOfATypedSvelteComponent;
}
