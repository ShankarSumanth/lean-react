'use strict';
const path = require( 'path' );
const webpack = require('webpack');
// loaders
const react_loader = require( './webpack-config/react-loader' );

// plugins
const html_webpack_plugin = require( './webpack-config/html-webpack-plugin' );
const copy_webpack_plugin = require( './webpack-config/copy-webpack-plugin' );
const commons_chunk_plugin = require( './webpack-config/commons-chunk-plugin' );
const hot_module_plugin = require( './webpack-config/hot-module-plugin' );
const named_module_plugin = require( './webpack-config/named-module-plugin' );
const process_env_plugin = require( './webpack-config/process-env-plugin' );
const WebpackMd5Hash = require('webpack-md5-hash');
const ManifestPlugin = require('webpack-manifest-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');

// dev server
const dev_server = require( './webpack-config/dev-server' );

const env = process.env.NODE_ENV;

const env_webpack_plugin = require('./webpack-config/env-webpack-plugin');

// define the entry file array of the webpack config
const entry = {
	'main': './main_prod.js',
	'vendors': './vendors.js'
};

// define output file object of the webpakc config
const output = {
	filename: '[name].[chunkhash].js',
	chunkFilename: '[name].[chunkhash].js',
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

// sets the performance information of the webpack build
const performance = {};

const webpack_config = {
	entry: entry,
	output: output,
	module: modules,
	plugins: plugins,
	devtool: source_maps,
	performance: performance,
	context: path.resolve( __dirname, 'src' ),
};

// Depending on the environment the following
// things will be added to the webpack config objects
switch ( env ) {
case 'development':
	entry.main = './main_dev.js';
	// add support for hot reloading feature. the 3 files mentioned below are required
	// for hot reloading react application
	entry.hot = [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server'
	];

	// output file name prevent chunckhash for development mode
	output.filename = '[name].js';
	// plugins required for hot reloading.
	plugins.push(
		hot_module_plugin,
		named_module_plugin );

	// necessary source maps for dev environment
	source_maps = 'inline-source-map';

	// hide the performance hints when in dev mode
	performance.hints = false;

	// add the default dev server features
	webpack_config.devServer = dev_server;
	break;
case 'production':
	// add production related plugins
	plugins.push(
		new WebpackMd5Hash(),
		new ManifestPlugin(),
		new ChunkManifestPlugin({
			filename: 'chunk-manifest.json',
			manifestVariable: 'webpackManifest'
		}),
		new webpack.optimize.UglifyJsPlugin()
	);

	// cheap source maps for production build
	source_maps = 'cheap-module-source-map';

	// change the dev server status for production
	Object.keys( dev_server.stats )
		.forEach( ( key ) => {
			if (
				key == 'chunks' ||
				key == 'modules' )
				return;
			dev_server.stats[ key ] = true;
		} );
	webpack_config.devServer = dev_server;
	webpack_config.devServer.hot = false;
	break;
case 'test':

	break;
default:

}

module.exports = webpack_config;
