import RectangleIcon from 'svelte-icons/md/MdCropSquare.svelte';
import LineIcon from 'svelte-icons/md/MdLinearScale.svelte';
import Image from '$lib/Components/Image/Image.svelte';
import Link from '$lib/Components/Link/Link.svelte';
import Text from '$lib/Components/Text/Text.svelte';
import Line from '$lib/Components/Shapes/Line/Line.svelte';
import Rectangle from '$lib/Components/Shapes/Rectangle/Rectangle.svelte';
import HorizontalList from '$lib/Slides/HomeAverages/HorizontalList/HorizontalList.svelte';
import ImageIcon from 'svelte-icons/io/IoIosImage.svelte';
import TextIcon from 'svelte-icons/md/MdShortText.svelte';
import LinkIcon from 'svelte-icons/md/MdLink.svelte';
import type { IComponentTemplate } from './IComponentTemplate';
import Constants from '$lib/Constants';

export default [
	{
		name: 'Image',
		element: Image,
		attr: {},
		style: {
			...Constants.DEFAULT_COMPONENT_STYLE,
			height: '144px'
		},
		icon: ImageIcon
	},
	{
		name: 'Text',
		element: Text,
		attr: {},
		style: {
			...Constants.DEFAULT_COMPONENT_STYLE,
			height: '80px',
			textAlign: 'center',
			width: '100px'
		},
		icon: TextIcon
	},
	{
		name: 'Link',
		element: Link,
		attr: {},
		style: { ...Constants.DEFAULT_COMPONENT_STYLE },
		icon: LinkIcon
	},
	{
		name: 'Line',
		element: Line,
		attr: {},
		style: {
			...Constants.DEFAULT_COMPONENT_STYLE,
			left: '10px',
			top: '10px',
			height: '1px'
		},
		icon: LineIcon
	},
	{
		name: 'Rectangle',
		element: Rectangle,
		attr: {},
		style: { ...Constants.DEFAULT_COMPONENT_STYLE },
		icon: RectangleIcon
	},
	{
		invisible: true,
		name: 'HorizontalList',
		element: HorizontalList,
		attr: {},
		style: { ...Constants.DEFAULT_COMPONENT_STYLE },
		icon: TextIcon
	}
] as IComponentTemplate[];
