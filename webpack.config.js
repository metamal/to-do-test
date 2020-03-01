const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const srcPath = path.resolve(__dirname, 'src');

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    filename: 'js/[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    modules: [srcPath, 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [srcPath],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {modules: false}],
                '@babel/preset-react',
              ],
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {loader: 'css-loader', options: {sourceMap: true}},
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
    }),
    new CopyPlugin([
      './src/.htaccess',
      './src/404.html',
      './src/favicon.ico',
      './src/icon.png',
      './src/robots.txt',
      './src/site.webmanifest',
    ]),
  ],
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    open: true,
  },
};
