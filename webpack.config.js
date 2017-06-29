/* eslint-disable */

var path = require('path');
var webpack = require('webpack');

var root = path.join(process.cwd(), 'src');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(root, 'index.js')
  ],

  output: {
    path: path.join(process.cwd(), 'dist'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /.\js$/,
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    modules: [
      root,
      'node_modules'
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
