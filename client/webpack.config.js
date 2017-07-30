const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  devServer: {
    proxy: {
      '/api/*': 'http://localhost:3000'
    },
    contentBase: './dist',
    historyApiFallback: true
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test:  /\.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, './src'),
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader', options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.png$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
  ],
};
