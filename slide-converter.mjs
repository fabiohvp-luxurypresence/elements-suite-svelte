let iframe = document.querySelector('iframe');
let slide = iframe.contentDocument.querySelector('.lp-slide__container');
let elements = slide.querySelectorAll('[form-value]');
let components = [];
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
		component: component,
		name: component,
		value
	});
});

console.log(JSON.stringify(components, null, 2));
// add text-align
// initial font-size
// handle line-break

function getStyle(slide, element) {
	const slideCorrectHeight = 900;
	const slideCorrectWidth = 1440;

	const elementRect = element.getBoundingClientRect();
	const targetRect = slide.getBoundingClientRect();

	const heightMultiplier = elementRect.height / slide.clientHeight;
	const widthMultiplier = elementRect.width / slide.clientWidth;

	let height = slideCorrectHeight * heightMultiplier;
	let width = slideCorrectWidth * widthMultiplier;

	height = (height * 100) / slideCorrectHeight;
	width = (width * 100) / slideCorrectWidth;

	let top = elementRect.top - targetRect.top;
	let left = elementRect.left - targetRect.left;

	const leftPercentage = (left * 100) / targetRect.width;
	const topPercentage = (top * 100) / targetRect.height;

	left = (slideCorrectWidth * leftPercentage) / 100;
	top = (slideCorrectHeight * topPercentage) / 100;

	left = (left * 100) / slideCorrectWidth;
	top = (top * 100) / slideCorrectHeight;

	const style = {
		left: `${round(left)}%`,
		top: `${round(top)}%`,
		height: `${round(height)}%`,
		width: `${round(width)}%`
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
	return Math.round(value * 100) / 100;
}
