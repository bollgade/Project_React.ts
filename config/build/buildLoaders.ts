import { BuildOptions } from './types/config';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

	const { isDev } = options;

	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? "style-loader" : MiniCssExtractPlugin.loader,
			"css-loader",
			"sass-loader",
		],
	}

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	return [
		typescriptLoader,
		cssLoader,
	];
}