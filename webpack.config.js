var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './examples/app.jsx',
  output: { path: __dirname + '/examples/', filename: 'bundle.js' },
  devServer: {
    contentBase: './examples', // Relative directory for base of server
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};