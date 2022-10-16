let slideCorrectHeight = 900;
let slideCorrectWidth = 1440;

let stylesToCopy = {
	columnCount: 'auto',
	columnGap: 'normal',
	fontFamily: 'TheSeasons',
	fontWeight: '400',
	textAlign: 'start',
	whiteSpace: 'normal'
};

let iframe = document.querySelector('iframe');
let slide = iframe.contentDocument.querySelector('.lp-slide__container');
let elements = slide.querySelectorAll('[form-value]');
let components = [];
console.clear();

let screenHeightMultiplier = slideCorrectHeight / slide.clientHeight;
let screenWidthMultiplier = slideCorrectWidth / slide.clientWidth;

elements.forEach((element) => {
	let style;
	let component = 'Text';
	let value = element.getAttribute('form-value').trim();

	const inputType = element.getAttribute('form-input');

	if (inputType === 'site') {
		component = 'Link';
		const link = element.querySelector('a');
		value = link.innerHTML;
		style = getStyle(slide, link);
	} else if (inputType.startsWith('imageUpload')) {
		component = 'Image';
	} /*else {
		for (const node of element.childNodes) {
			if (node.innerHTML === value) {
				style = getStyle(slide, node);
				break;
			}
		}
	}*/

	if (!style) style = getStyle(slide, element);

	components.push({
		fields: { attr: {}, style },
		element: component,
		name: component,
		value
	});
});

let json = JSON.stringify(components, null, 2);
json = json.replace(/"element": "(\w+)"/g, `"element": $1`).replace(/\\r\\n/g, '<br>');
// window.prompt('Copy to clipboard: Ctrl+C, Enter', json);
// console.clear();
console.log(json);

function getStyle(slide, element) {
	const elementRect = element.getBoundingClientRect();
	const slideRect = slide.getBoundingClientRect();

	const heightMultiplier = elementRect.height / slide.clientHeight;
	const widthMultiplier = elementRect.width / slide.clientWidth;

	const height = slideCorrectHeight * heightMultiplier;
	const width = slideCorrectWidth * widthMultiplier;

	let left = (elementRect.left - slideRect.left) * screenWidthMultiplier;
	let top = (elementRect.top - slideRect.top) * screenHeightMultiplier;

	const style = {
		left: `${round(left)}px`,
		top: `${round(top)}px`,
		height: `${round(height > slideCorrectHeight ? slideCorrectHeight : height)}px`,
		width: `${round(width > slideCorrectWidth ? slideCorrectWidth : width)}px`
	};

	const computedStyles = window.getComputedStyle(element);

	for (const key of Object.keys(stylesToCopy)) {
		if (computedStyles[key] !== stylesToCopy[key]) {
			style[key] = computedStyles[key];
		}
	}
	return style;
}

function round(value) {
	return Math.round(value);
}
