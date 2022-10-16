import slideStore from '$lib/Slides/slideStore';
import { styleToInt } from '$lib/shared/styleToInt';
import '$lib/shared/resizable/resizable.css';

export interface ResizableOptions {
	dotSize: number;
	minHeight: number;
	minWidth: number;
}

const DEFAULT_RESIZABLE_OPTIONS: ResizableOptions = {
	dotSize: 5,
	minHeight: 20,
	minWidth: 20
};

export function resizable(element: HTMLElement, options: Partial<ResizableOptions> = {}) {
	options = { ...DEFAULT_RESIZABLE_OPTIONS, ...options };

	const container = document.createElement('div');
	container.classList.add('resizable-container');

	const resizers = [
		createResizer('top-left'),
		createResizer('top-right'),
		createResizer('bottom-left'),
		createResizer('bottom-right')
	];

	let coordinates = { left: 0, height: 0, top: 0, width: 0 };
	let elementCss: CSSStyleDeclaration = {} as CSSStyleDeclaration;
	let previewMode = true;
	let resizer: HTMLDivElement | null = null;

	const slideStoreUnsubscriber = slideStore.subscribe((state) => {
		previewMode = state.preview;
		previewMode ? element.classList.remove('resizable') : element.classList.add('resizable');
	});

	function onMouseDown(e: MouseEvent) {
		if (previewMode) return;

		e.stopImmediatePropagation();
		e.preventDefault();

		element.classList.add('resizing');

		resizer = e.target as HTMLDivElement;
		elementCss = getComputedStyle(element);
		coordinates = {
			left: styleToInt(elementCss.left),
			height: styleToInt(elementCss.height),
			top: styleToInt(elementCss.top),
			width: styleToInt(elementCss.width)
		};
		return false;
	}

	function onMouseMove(e: MouseEvent) {
		if (!resizer) return;

		const originalCoordinates = { ...coordinates };

		if (resizer.classList.contains('top-left')) {
			coordinates.left += e.movementX;
			coordinates.height -= e.movementY;
			coordinates.top += e.movementY;
			coordinates.width -= e.movementX;
		}

		if (resizer.classList.contains('top-right')) {
			coordinates.height -= e.movementY;
			coordinates.top += e.movementY;
			coordinates.width += e.movementX;
		}

		if (resizer.classList.contains('bottom-left')) {
			coordinates.height -= e.movementY;
			coordinates.left += e.movementX;
			coordinates.top += e.movementY;
			coordinates.width -= e.movementX;
		}

		if (resizer.classList.contains('bottom-right')) {
			coordinates.height += e.movementY;
			coordinates.width += e.movementX;
		}

		if (coordinates.height < options.minHeight! || coordinates.width < options.minWidth!) {
			coordinates = originalCoordinates;
			return;
		}
		element.dispatchEvent(
			new CustomEvent('styleUpdate', {
				detail: {
					left: `${coordinates.left}px`,
					height: `${coordinates.height}px`,
					top: `${coordinates.top}px`,
					width: `${coordinates.width}px`
				}
			})
		);
	}

	function onMouseUp() {
		resizer = null;
		element.classList.remove('resizing');
	}

	window.addEventListener('mousemove', onMouseMove);
	window.addEventListener('mouseup', onMouseUp);

	element.style.setProperty('--dot-size', `${options.dotSize}px`);
	element.appendChild(container);

	resizers.forEach((resizer) => {
		resizer.addEventListener('mousedown', onMouseDown);
		container.appendChild(resizer);
	});

	return {
		destroy() {
			slideStoreUnsubscriber();
			window.removeEventListener('mousemove', onMouseMove);
			window.removeEventListener('mouseup', onMouseUp);
			resizers.forEach((resizer) => resizer.removeEventListener('mousedown', onMouseDown));
		}
	};
}

function createResizer(position: string) {
	const resizer = document.createElement('span');
	resizer.classList.add('resizer');
	resizer.classList.add(position);
	return resizer;
}
