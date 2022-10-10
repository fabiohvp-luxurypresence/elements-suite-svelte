import { readdir } from 'node:fs/promises';
import { resolve } from 'node:path';

export async function getFiles(
	dir: string,
	fnFilter: (path: string) => boolean
): Promise<string[]> {
	const dirents = await readdir(dir, { withFileTypes: true });
	const files = await Promise.all(
		dirents.map((dirent) => {
			const res = resolve(dir, dirent.name);
			return dirent.isDirectory() ? getFiles(res, fnFilter) : res;
		})
	);
	return Array.prototype.concat(...files).filter(fnFilter);
}
