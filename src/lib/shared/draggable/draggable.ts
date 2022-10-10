import { elements as elementsStore } from '../../Elements/elementsStore';
import { styleToInt } from '../styleToInt';
import './draggable.css';

export interface DraggableOptions {
	detectorSize: number;
}

const DEFAULT_DRAGGABLE_OPTIONS: DraggableOptions = {
	detectorSize: 5
};

export function draggable(element: HTMLElement, options: Partial<DraggableOptions> = {}) {
	options = { ...DEFAULT_DRAGGABLE_OPTIONS, ...options };

	let left = 0;
	let moving = false;
	let previewMode = true;
	let top = 0;

	const container = document.createElement('div');
	container.classList.add('draggable-container');

	const detectors = [
		createDetectionDiv('bottom'),
		createDetectionDiv('left'),
		createDetectionDiv('right'),
		createDetectionDiv('top')
	];

	const elementsStoreUnsubscriber = elementsStore.subscribe((state) => {
		previewMode = state.preview;
		previewMode ? element.classList.remove('draggable') : element.classList.add('draggable');
		element.setAttribute('draggable', (!previewMode).toString());
	});

	function onMouseDown(e: MouseEvent) {
		if (previewMode) return;

		moving = true;
		element.classList.add('dragging');
		left = styleToInt(element.style?.left);
		top = styleToInt(element.style?.top);
		e.preventDefault();
		return false;
	}

	function onMouseMove(e: MouseEvent) {
		if (!moving) return;

		left += e.movementX;
		top += e.movementY;
		element.style.left = `${left}px`;
		element.style.top = `${top}px`;
	}

	function onMouseUp() {
		moving = false;
		element.classList.remove('dragging');
	}

	window.addEventListener('mousemove', onMouseMove);
	window.addEventListener('mouseup', onMouseUp);

	element.classList.add('draggable');
	element.style.setProperty('--detector-size', `${options.detectorSize}px`);
	element.appendChild(container);

	detectors.forEach((detector) => {
		detector.addEventListener('mousedown', onMouseDown);
		container.appendChild(detector);
	});

	return {
		destroy() {
			elementsStoreUnsubscriber();
			window.removeEventListener('mousemove', onMouseMove);
			window.removeEventListener('mouseup', onMouseUp);
			detectors.forEach((detector) => detector.removeEventListener('mousedown', onMouseDown));
		}
	};
}

function createDetectionDiv(position: string) {
	const resizer = document.createElement('div');
	resizer.classList.add('detector');
	resizer.classList.add(position);
	return resizer;
}
