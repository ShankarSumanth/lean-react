module.exports = {
	test: /\.js$/,
	exclude: /(node_modules|bower_components)/,
	loader: 'babel-loader',
	query: {
		retainLines: true,
		cacheDirectory: true
	}
};
