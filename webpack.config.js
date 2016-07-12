var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

var DefinePlugin = new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })

var UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
  sourceMap: false,
  comments: false,
  mangle: true,
  minimize: true});

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './app/js/index.js'
  ],
  output: {
    path: __dirname + '/dist/',
    filename: "js/index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
    }
    ]
  },
  plugins: [DefinePlugin, UglifyJsPlugin, HTMLWebpackPluginConfig]
};