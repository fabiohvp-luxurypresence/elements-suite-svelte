export function styleToString(style: Partial<CSSStyleDeclaration> | undefined): string {
	return style
		? Object.keys(style).reduce(
				(acc, key) =>
					acc +
					key
						.split(/(?=[A-Z])/)
						.join('-')
						.toLowerCase() +
					':' +
					style[key as any] +
					';',
				''
		  )
		: '';
}
