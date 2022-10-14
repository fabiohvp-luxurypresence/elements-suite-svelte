import type IFieldsTemplate from '$lib/shared/IFieldsTemplate';
import type IComponent from './IComponent';

export type IComponentTemplate = IComponent & {
	fieldsTemplate: IFieldsTemplate;
	icon: ConstructorOfATypedSvelteComponent;
	invisible?: boolean;
};
