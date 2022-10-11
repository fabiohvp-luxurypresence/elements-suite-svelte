export interface IComponent {
	name: string; //must be unique
	component: any;
	properties: { [key: string]: any };
	style?: Partial<CSSStyleDeclaration>;
	value?: string;
}
