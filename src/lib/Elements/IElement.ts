export interface IElement {
	name: string;
	component: any;
	key: string;
	style?: Partial<CSSStyleDeclaration>;
	value?: string;
}
