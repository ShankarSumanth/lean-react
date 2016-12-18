'use strict';
const path = require( 'path' );

// loaders
const react_loader = require( './webpack-config/react-loader' );

// plugins
const html_webpack_plugin = require( './webpack-config/html-webpack-plugin' );
const copy_webpack_plugin = require( './webpack-config/copy-webpack-plugin' );
const commons_chunk_plugin = require( './webpack-config/commons-chunk-plugin' );
const hot_module_plugin = require( './webpack-config/hot-module-plugin' );
const named_module_plugin = require( './webpack-config/named-module-plugin' );
const process_env_plugin = require( './webpack-config/process-env-plugin' );

// dev server
const dev_server = require( './webpack-config/dev-server' );

// define the entry file array of the webpack config
const entry = [
	'./src/main.js',
	'./src/vendors'
];

// define output file object of the webpakc config
const output = {
	filename: '[name].js',
	path: path.join( __dirname, 'dist' ),
	publicPath: '/'
};

// define the modules object of the webpack
const modules = {
	loaders: [ react_loader ]
};

// define the plugins array of the webpack
const plugins = [
	html_webpack_plugin,
	copy_webpack_plugin,
	commons_chunk_plugin,
	process_env_plugin
];

// define the source maps to use based on the Environment
let source_maps = '';

const env = process.env.NODE_ENV;
// Depending on the environment the following
// things will be added to the webpack config objects
switch ( env ) {
case 'dev':
	// add support for hot reloading feature. the 3 files mentioned below are required
	// for hot reloading react application
	entry.unshift(
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server' );
	plugins.push(
		hot_module_plugin,
		named_module_plugin );
	source_maps = 'inline-source-map';
	break;
default:

}

module.exports = {
	entry: entry,
	output: output,
	module: modules,
	plugins: plugins,
	devServer: dev_server,
	devtool: source_maps,
	performance: {
		hints: false
	}

};
