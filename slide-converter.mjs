let iframe = document.querySelector('iframe');
let slide = iframe.contentDocument.querySelector('.lp-slide__container');
let elements = slide.querySelectorAll('[form-value]');
let components = [];
console.clear();

elements.forEach((element) => {
	const style = getStyle(slide, element);
	let component = 'Text';
	let value = element.getAttribute('form-value');

	const inputType = element.getAttribute('form-input');

	if (inputType === 'site') {
		component = 'Link';
		value = element.querySelector('a').innerHTML;
	} else if (inputType.startsWith('imageUpload')) {
		component = 'Image';
	}

	components.push({
		fields: { attr: {}, style },
		element: component,
		name: component,
		value
	});
});

let json = JSON.stringify(components, null, 2);
json = json.replace(/"element": "(\w+)"/g, `"element": $1`).replace(/\\r\\n/g, '<br>');
window.prompt('Copy to clipboard: Ctrl+C, Enter', json);
//console.clear();

function getStyle(slide, element) {
	const slideCorrectHeight = 900;
	const slideCorrectWidth = 1440;

	const elementRect = element.getBoundingClientRect();
	const slideRect = slide.getBoundingClientRect();

	const heightMultiplier = elementRect.height / slide.clientHeight;
	const widthMultiplier = elementRect.width / slide.clientWidth;

	const height = slideCorrectHeight * heightMultiplier;
	const width = slideCorrectWidth * widthMultiplier;

	let left = elementRect.left - slideRect.left;
	let top = elementRect.top - slideRect.top;

	// left *= widthMultiplier;
	// top *= heightMultiplier;
	// console.log(element, left, top);

	// const leftPercentage = (left * 100) / slideRect.width;
	// const topPercentage = (top * 100) / slideRect.height;

	// left = (slideCorrectWidth * leftPercentage) / 100;
	// top = (slideCorrectHeight * topPercentage) / 100;

	// left = (left * 100) / slideCorrectWidth;
	// top = (top * 100) / slideCorrectHeight;

	const style = {
		left: `${round(left)}px`,
		top: `${round(top)}px`,
		height: `${round(height > slideCorrectHeight ? slideCorrectHeight : height)}px`,
		width: `${round(width > slideCorrectWidth ? slideCorrectWidth : width)}px`
	};

	if (element.style.fontSize) {
		style['fontSize'] = element.style.fontSize;
	}
	if (element.style.textAlign) {
		style['textAlign'] = element.style.textAlign;
	}
	return style;
}

function round(value) {
	return Math.round(value);
}
