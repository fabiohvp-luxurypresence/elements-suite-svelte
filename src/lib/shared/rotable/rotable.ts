import slideStore from '../../Slides/slideStore';
import './rotable.css';

export function rotable(element: HTMLElement) {
	const cursor = createChild('cursor');
	element.appendChild(cursor);
	cursor.appendChild(createChild('center'));

	let moving = false;
	let previewMode = true;
	const previousPosition = { pageX: 0, pageY: 0 };

	const slideStoreUnsubscriber = slideStore.subscribe((state) => {
		previewMode = state.preview;
		previewMode ? element.classList.remove('rotable') : element.classList.add('rotable');
	});

	function onMouseDown(e: MouseEvent) {
		if (previewMode) return;

		moving = true;
		element.classList.add('rotating');
		e.preventDefault();
		return false;
	}

	function onMouseMove(e: MouseEvent) {
		if (!moving) return;

		const rect = cursor.getBoundingClientRect();
		const diffX = rect.left - e.pageX!;
		const diffY = rect.top - e.pageY!;
		const tan = diffY / diffX;

		let angle = (Math.atan(tan) * 180) / Math.PI;

		if (diffY > 0 && diffX > 0) {
			angle += 180;
		} else if (diffY < 0 && diffX > 0) {
			angle -= 180;
		}

		previousPosition.pageX = e.pageX;
		previousPosition.pageY = e.pageY;

		element.dispatchEvent(
			new CustomEvent('styleUpdate', {
				detail: {
					transform: `rotate(${angle}deg)`
				}
			})
		);
	}

	function onMouseUp() {
		moving = false;
		element.classList.remove('rotating');
	}

	cursor.addEventListener('mousedown', onMouseDown);
	window.addEventListener('mousemove', onMouseMove);
	window.addEventListener('mouseup', onMouseUp);

	return {
		destroy() {
			slideStoreUnsubscriber();
			cursor.removeEventListener('mousedown', onMouseDown);
			window.removeEventListener('mousemove', onMouseMove);
			window.removeEventListener('mouseup', onMouseUp);
		}
	};
}

function createChild(position: string) {
	const child = document.createElement('div');
	child.classList.add('rotable-container');
	child.classList.add(position);
	return child;
}
