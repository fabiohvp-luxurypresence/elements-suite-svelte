import { elements as elementsStore } from '../../Slides/slidesStore';
import './dynamic-text.css';

export interface ResizeTextOptions {
	minSize: number;
	maxSize: number;
	step: number;
	unit: 'em' | 'px' | 'rem' | '%';
}

const DEFAULT_RESIZE_TEXT_OPTIONS: ResizeTextOptions = {
	minSize: 1,
	maxSize: 100,
	step: 0.25,
	unit: 'rem'
};

export function dynamicText(element: HTMLElement, options: Partial<ResizeTextOptions> = {}) {
	options = { ...DEFAULT_RESIZE_TEXT_OPTIONS, ...options };
	let previewMode = true;

	const elementsStoreUnsubscriber = elementsStore.subscribe((state) => {
		previewMode = state.preview;
		element.setAttribute('contenteditable', (!state.preview).toString());
	});

	const onClick = () => {
		if (previewMode) return;

		element.setAttribute('contenteditable', 'true');
		element.focus();
	};

	const onClickWindow = (e: any) => {
		if (element && !element.contains(e.target)) {
			element.setAttribute('contenteditable', 'false');
			element.classList.remove('invisible');
		}
	};

	const onCopy = (e: any) => {
		const selection: any = document.getSelection();
		e.clipboardData.setData('text/plain', selection.toString());
		e.preventDefault();
	};

	const onInput = () => processDynamicText(element, options);

	const onResizeWindow = () => processDynamicText(element, options);

	element.parentElement?.classList.add('dynamic-text-container');
	element.classList.add('dynamic-text');

	element.addEventListener('click', onClick);
	element.addEventListener('copy', onCopy);
	element.addEventListener('input', onInput);
	window.addEventListener('click', onClickWindow);
	window.addEventListener('resize', onResizeWindow);

	const observer = new ResizeObserver(() => {
		processDynamicText(element, options);
	});

	observer.observe(element);

	return {
		destroy() {
			elementsStoreUnsubscriber();
			element.removeEventListener('click', onClick);
			element.removeEventListener('copy', onCopy);
			element.removeEventListener('input', onInput);
			window.removeEventListener('click', onClickWindow);
			window.removeEventListener('resize', onResizeWindow);
			observer.unobserve(element);
		}
	};
}

function processDynamicText(
	element: HTMLElement,
	{ minSize, maxSize, step, unit }: Partial<ResizeTextOptions>
) {
	(Array.isArray(element) ? element : [element]).forEach((el: HTMLElement) => {
		let i = minSize! + step!;
		let overflow = false;
		const parent = el.parentElement!;

		while (!overflow && i <= maxSize!) {
			el.style.fontSize = `${i}${unit}`;
			overflow = isOverflown(parent);

			if (!overflow) i += step!;
		}
		el.style.fontSize = `${i - step!}${unit}`;
	});
	element.classList.remove('invisible');
}

function isOverflown({
	clientHeight,
	clientWidth,
	scrollHeight,
	scrollWidth
}: {
	clientHeight: number;
	clientWidth: number;
	scrollHeight: number;
	scrollWidth: number;
}) {
	return scrollHeight > clientHeight || scrollWidth > clientWidth;
}
