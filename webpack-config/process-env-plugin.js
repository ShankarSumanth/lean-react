const webpack = require( 'webpack' );

module.exports = new webpack.EnvironmentPlugin( [ "NODE_ENV" ] )
