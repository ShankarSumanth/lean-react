const path = require( 'path' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );

module.exports = new CopyWebpackPlugin( [ {
	from: path.join( __dirname, '../', 'src', 'public' )
} ] );
