/* eslint-disable */

var path = require('path');
var webpack = require('webpack');

var root = path.join(process.cwd(), 'src');

module.exports = {
  entry: [
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
  }
};
