import type IComponent from './IComponent';

export interface IComponentTemplate extends IComponent {
	invisible?: boolean;
	icon: ConstructorOfATypedSvelteComponent;
}
