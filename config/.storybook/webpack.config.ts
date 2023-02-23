import path from 'path';
import webpack from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { svgLoader } from '../build/buildLoaders';
import { BuildPaths } from '../build/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');

  config.module!.rules! = config.module!.rules!.map((rule: any) => {
    if (/svg/.test(rule.test)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module?.rules?.push(svgLoader)

  config.module?.rules?.push(buildCssLoader(true));

  return config;
};
