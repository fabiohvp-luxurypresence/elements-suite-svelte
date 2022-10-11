import { slides } from '$lib/Slides';

interface IParams {
	key: string;
}

/** @type {import('./$types').PageLoad} */
export function load({ params }: { params: IParams }) {
	return {
		slide: slides.find((o) => o.key === params.key)
	};
}
