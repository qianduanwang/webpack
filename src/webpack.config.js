const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');
module.exports = {
  entry: {
    main: './main.js',
  },
  output: {
    path: path.join(__dirname, "build"),
    publicPath: './',
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    }, {
      test: /\.jsx?$/,
      loaders: ['babel-loader?presets[]=es2015&presets[]=react'],
      include: path.join(__dirname, '.')
    }]
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: './',
      manifest: require("./build/bundle.manifest.json"),
    }),
    new HtmlWebpackPlugin({
      templateContent: function(templateParams, compilation) {
        // Return your template content synchronously here 
        return '..';
      }
    })
  ]
};