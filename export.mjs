import commonjs from '@rollup/plugin-commonjs';
import rollupResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import virtual from '@rollup/plugin-virtual';
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { rollup } from 'rollup';
import css from 'rollup-plugin-css-only';
import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

const production = true;

(async function () {
	const code = await rollup({
		input: 'code',
		//input: 'src/main.js',
		output: {
			sourcemap: true,
			format: 'iife',
			name: 'app',
			file: 'public/build/bundle.js'
		},
		plugins: [
			//import App from 'src/lib/Elements/BioAlternative/Index.svelte';
			virtual({
				code: `
					import App from 'src/lib/Editor/Editor.svelte';
					
					export default App;
				`
			}),
			svelte({
				compilerOptions: {
					// enable run-time checks when not in production
					dev: !production
				},
				emitCss: true,
				exclude: ['**Store.*'],
				preprocess: sveltePreprocess({ exclude: ['**Store.*'], sourceMap: !production })
			}),
			// we'll extract any component CSS out into
			// a separate file - better for performance
			css({ output: 'bundle.css' }),

			// If you have external dependencies installed from
			// npm, you'll most likely need these plugins. In
			// some cases you'll need additional configuration -
			// consult the documentation for details:
			// https://github.com/rollup/plugins/tree/master/packages/commonjs
			rollupResolve({
				//browser: true,
				dedupe: ['svelte', '**Store.*']
			}),
			commonjs({ exclude: ['**Store.*'] }),
			typescript({ exclude: ['**Store.*'], inlineSources: !production, sourceMap: !production })

			// In dev mode, call `npm run start` once
			// the bundle has been generated
			//!production && serve(),

			// Watch the `public` directory and refresh the
			// browser on changes when not in production
			//!production && livereload('public'),

			// If we're building for production (npm run build
			// instead of npm run dev), minify
			//production && terser()
		]
	});
	const x = await code.generate({ format: 'esm' });
	writeFileSync(resolve('static/test.css'), x.output[1].source);
	writeFileSync(resolve('static/test.js'), fixOutput(x.output[0].code));
})();

function fixOutput(code) {
	code = code.replace(`import { browser } from '$app/env';`, 'const browser = true;');
	code += `export { elements };`;
	return code;
}
