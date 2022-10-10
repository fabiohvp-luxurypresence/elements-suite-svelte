import BeforeAfter from './BeforeAfter/Index.svelte';
import Bio from './Bio/Index.svelte';
import BioAlternative from './BioAlternative/Index.svelte';
import type { IElement } from './IElement';

export const elements: IElement[] = [
	{
		key: 'before-after',
		name: 'Before/After',
		component: BeforeAfter
	},
	{
		key: 'bio',
		name: 'Bio',
		component: Bio
	},
	{
		key: 'bio-alternative',
		name: 'Bio (Alternative)',
		component: BioAlternative
	}
];
