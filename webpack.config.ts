import path from 'path';
import { BuildPaths } from './config/build/types/config';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

const paths: BuildPaths = {
	entry: path.resolve(__dirname, 'src', 'index.ts'),
	build: path.resolve(__dirname, 'build'),
	html: path.resolve(__dirname, 'public', 'index.html'),
}

const mode = 'development';
const isDev = mode === 'development';
const PORT = 3000;

const config: webpack.Configuration = buildWebpackConfig({
	mode: 'development',
	paths,
	isDev,
	port: PORT
});

export default config;