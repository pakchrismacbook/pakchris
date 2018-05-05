let path = require('path');

module.exports = {
	entry: './app/assets/scripts/App.js',
	output: {
		path: path.resolve(__dirname, './app/temp/scripts'), // requires absolute path, a relative path throws an error
		filename: 'App.js'
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}