const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
	mode: 'development',
	target: 'node',
	entry: './server/index.js',
	output: {
		path: path.resolve(__dirname),
		filename: 'server.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'dist/[name].[ext]',
						},
					},
				],
			},
		],
	},
	externals: [webpackNodeExternals()],
};
