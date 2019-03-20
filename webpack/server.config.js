const config = require('sapper/webpack/config.js');
const pkg = require('../package.json');
const path = require('path');

module.exports = {
	entry: config.server.entry(),
	output: config.server.output(),
	target: 'node',
	resolve: {
		extensions: ['.js', '.html'],
		alias: {
			formvalidation: path.resolve(__dirname, '../vendors/formvalidation'),
			highlightjs: path.resolve(__dirname, '../vendors/highlightjs'),
		}
	},
	externals: new RegExp(`^${Object.keys(pkg.dependencies).filter(d => d !== 'svelte').join('|')}`),
	module: {
		rules: [
			{
				test: /\.html$/,
				exclude: /node_modules/,
				use: {
					loader: 'svelte-loader',
					options: {
						css: false,
						cascade: false,
						store: true,
						generate: 'ssr'
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
	},
	mode: process.env.NODE_ENV
};
