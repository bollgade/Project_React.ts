const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	mode: "development",
	entry: path.resolve(__dirname, 'src', 'index.ts'),
	output: {
		filename: "[name].[contenthash].js",
		path: path.resolve(__dirname, 'build'),
		clean: true,
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new HTMLWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
}