import 'webpack-dev-server';
import * as webpack from 'webpack';
import { resolve } from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const NODE_ENV = process.env.NODE_ENV as
  | 'development'
  | 'production'
  | undefined;

const GITHUB_PREFIX = '/spa-deploy--js-basic.03.2022';

const config: webpack.Configuration = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    clean: true,
    publicPath: NODE_ENV === 'production' ? GITHUB_PREFIX : '/',
  },
  mode: NODE_ENV,
  resolve: {
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new webpack.DefinePlugin({
      isProd: NODE_ENV === 'production',
      PREFIX: JSON.stringify(GITHUB_PREFIX),
    })
  ],
  devServer: {
    compress: true,
    port: 9000,
    watchFiles: ['public/index.html'],
    historyApiFallback: true,
  },
};

export default config;
