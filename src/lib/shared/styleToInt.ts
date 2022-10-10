export function styleToInt(value: string | undefined) {
	if (!value) return 0;
	return parseInt(value.replace('px', ''), 10);
}
