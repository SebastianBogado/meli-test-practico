const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  devtool: 'source-map',
  entry:  {
    app: [
      'react-hot-loader/patch',
      './client/src/index'
    ]
  },
  devServer: {
    proxy: {
      '/api/*': 'http://localhost:3000'
    },
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test:  /\.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, './src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
          'eslint-loader'
        ],
      },
      {
        test: /\.css$/,
        use: process.env.NODE_ENV === 'PRODUCTION' ?
          ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [{
              loader: 'css-loader', options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
            'postcss-loader'
          ]
        }) :
          [
            "style-loader",
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
          {
            loader: 'file-loader', options: {
              publicPath: process.env.NODE_ENV === 'PRODUCTION' ? '/client/dist/' : '',
              name: '[name].[ext]',
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("styles.css"),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './client/src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
  ],
};
