const webpack = require('webpack');
var path = require('path');
module.exports = {
  resolve: { 
    modules: [path.resolve(__dirname, "node_modules"), "node_modules"],
    symlinks: true
  },
  resolveLoader: {
    modules: [path.resolve(__dirname, "node_modules"), "node_modules"]
  },
  entry: {
    main: '../src/main.js',
  },
  output: {
    path: path.join(__dirname, "../build"),
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
      // loaders: ['babel-loader'],
      // options: {
      //   presets: ['@babel/preset-env']
      // },
      // loaders: [
      //   'babel-loader',
      //   'babel-preset-es2015',
      //   'babel-preset-react'
      // ],
      include: path.join(__dirname, '../src'),
      exclude: /(node_modules|bower_components)/
    }]
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: './',
      manifest: require("../build/bundle.manifest.json"),
    }),
  ]
};