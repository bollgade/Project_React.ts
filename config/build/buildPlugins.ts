import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';


export function buildPlugins(): webpack.WebpackPluginInstance[] {
	return [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
	]
}