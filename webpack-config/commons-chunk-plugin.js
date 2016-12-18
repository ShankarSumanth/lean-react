const webpack = require( 'webpack' );

const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = new CommonsChunkPlugin( {
	name: [ 'vendors', 'manifest' ],
	minChunks: Infinity,
} );
