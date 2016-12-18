const path = require( 'path' );

module.exports = {
	hot: true,
	contentBase: path.resolve( __dirname, '../', 'dist' ),
	publicPath: '/',
	stats: {
		colors: true,
		hash: false,
		version: false,
		timings: false,
		assets: true,
		chunks: false,
		modules: false,
		errors: true,
		errorDetails: true,
		warnings: false,
		publicPath: false
	}
};
