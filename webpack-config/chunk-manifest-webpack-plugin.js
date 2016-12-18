const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');

module.exports = new ChunkManifestPlugin({
	filename: 'chunk-manifest.json',
	manifestVariable: 'webpackManifest'
});
