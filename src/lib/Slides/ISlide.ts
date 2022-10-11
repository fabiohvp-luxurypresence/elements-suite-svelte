import type { IComponent } from '$lib/Components/IComponent';

export interface ISlide {
	name: string;
	key: string;
	components: IComponent[];
}
