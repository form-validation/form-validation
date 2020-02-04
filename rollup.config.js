import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';
import config from 'sapper/config/rollup.js';
import pkg from './package.json';

const path = require('path');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			alias({
                entries: {
                    formvalidation: path.resolve(__dirname, 'vendors/formvalidation'),
				    highlightjs: path.resolve(__dirname, 'vendors/highlightjs'),
                },
			}),
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			svelte({
				dev,
				hydratable: true,
				emitCss: true
			}),
			resolve({
                browser: true,
				dedupe: ['svelte']
            }),
			commonjs(),

			!dev && terser({
				module: true
			})
		],
	},

	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			alias({
                entries: {
                    formvalidation: path.resolve(__dirname, 'vendors/formvalidation'),
                    highlightjs: path.resolve(__dirname, 'vendors/highlightjs'),
                }
			}),
			replace({
				'process.browser': false,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			svelte({
				generate: 'ssr',
				dev
			}),
			resolve({
                dedupe: ['svelte']
            }),
			commonjs()
		],
		external: Object.keys(pkg.dependencies).concat(
			require('module').builtinModules || Object.keys(process.binding('natives'))
		),
	},

	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			commonjs(),
			!dev && terser()
		]
	}
};
