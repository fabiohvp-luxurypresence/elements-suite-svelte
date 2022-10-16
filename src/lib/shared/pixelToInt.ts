export function pixelToInt(value: string | undefined) {
	if (!value) return 0;
	return parseInt(value.replace('px', ''), 10);
}

export function pixelToIntUnsafe(value: string | undefined) {
	if (!value) return undefined;
	return parseInt(value.replace('px', ''), 10);
}
