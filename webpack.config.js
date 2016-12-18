'use strict';
const path = require('path');
const webpack = require('webpack');
// loaders
const react_loader = require('./webpack-config/react-loader');

// plugins
const html_plugin = require( './webpack-config/html-webpack-plugin' );
const copy_plugin = require( './webpack-config/copy-webpack-plugin' );
const commons_chunk_plugin = require( './webpack-config/commons-chunk-plugin' );
const process_env_plugin = require( './webpack-config/process-env-plugin' );
// common config for all environments
const webpack_config = {
	context: path.resolve(__dirname, 'src'),
	entry: {
		'vendors': './vendors.js'
	},
	output: {
		path: path.join( __dirname, 'dist' ),
	  sourceMapFilename: '[file].map',
	  publicPath: '/'
	},
	module: {
		loaders: [react_loader]
	},
	plugins: [ html_plugin,	copy_plugin,	commons_chunk_plugin, process_env_plugin]
};

const addToEntry = (key, value) => {webpack_config.entry[key] = value;};
const addToOutput = (key, value) => {webpack_config.output[key] = value;};
const addToPlugins = (...values) => {webpack_config.plugins.push.apply(webpack_config.plugins, values);};
const addToWebpack = (key, value) => {webpack_config[key]=value;};

switch (process.env.npm_lifecycle_event) {
case 'dev':
	addToEntry('main', './main_dev.js');
	addToEntry('hot', [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server'
	] );

	addToOutput('filename', '[name].js');

	addToPlugins(
		require( './webpack-config/hot-module-plugin' ),
		require( './webpack-config/named-module-plugin' ) );

	addToWebpack('devtool','eval-source-map');
	addToWebpack('performance', { hints: false });
	addToWebpack('devServer', require( './webpack-config/dev-server' ));

	break;
case 'prod':
case 'dist':
	addToEntry('main', './main_prod.js');

	addToOutput('filename', '[name].[chunkhash].js');
	addToOutput('chunkFilename', '[name].[chunkhash].js');

	const WebpackMd5Hash = require('webpack-md5-hash');
	const ManifestPlugin = require('webpack-manifest-plugin');

	addToPlugins(
    new WebpackMd5Hash(),
    new ManifestPlugin(),
    require('./webpack-config/chunk-manifest-webpack-plugin')
  );

	addToWebpack('devtool','source-map');

	if (process.env.npm_lifecycle_event === 'prod') {
		//addToPlugins(new webpack.optimize.UglifyJsPlugin());
		addToWebpack('devServer', require( './webpack-config/dev-server' ));
		webpack_config.devServer.hot = false;
	}

	break;
default:
	console.error('The lifecycle event does not exist');
}

module.exports = webpack_config;
