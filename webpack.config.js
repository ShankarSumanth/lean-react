'use strict';
const path = require( 'path' );

// loaders
const react_loader = require( './webpack-config/react-loader' );
const webpack = require( 'webpack' );

// plugins
const html_webpack_plugin = require( './webpack-config/html-webpack-plugin' );
const copy_webpack_plugin = require( './webpack-config/copy-webpack-plugin' );
const commons_chunk_plugin = require( './webpack-config/commons-chunk-plugin' );
const hot_module_plugin = require( './webpack-config/hot-module-plugin' );
const named_module_plugin = require( './webpack-config/named-module-plugin' );
const dev_server = require( './webpack-config/dev-server' );

// entry file array
const entry = [];

module.exports = {
	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./src/main.js',
		'./src/vendors'
	],
	output: {
		filename: '[name].js',
		path: path.join( __dirname, 'dist' ),
		publicPath: '/'
	},
	module: {
		loaders: [ react_loader ]
	},
	plugins: [
		html_webpack_plugin,
		copy_webpack_plugin,
		commons_chunk_plugin,
		hot_module_plugin,
		named_module_plugin
	],
	devServer: dev_server,
	devtool: 'inline-source-map',
	performance: {
		hints: false
	}

};
