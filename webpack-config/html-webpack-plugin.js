const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

const html_webpack_plugin = new HtmlWebpackPlugin( {
	template: './public/index.html',
	chunksSortMode: 'dependency'
} );

module.exports = html_webpack_plugin;
