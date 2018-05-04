const path = require('path'); // required from node for creating absolute file path
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	entry: './src/index.js', // relative file path
	output: {
		path: path.resolve(__dirname, 'build'), // must be an absolute file path; __dirname reference to current working directory
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/
			},
			{
				use: ExtractTextPlugin.extract({
					use: 'css-loader'
				}),
				test: /\.css$/
			},
			{
				use: ExtractTextPlugin.extract({
					use: ['css-loader', 'sass-loader']
				}),
				test: /\.scss$/
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css')
	]
};

module.exports = config;