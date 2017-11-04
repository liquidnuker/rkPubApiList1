const path = require('path');
const webpack = require('webpack');
const Promise = require('es6-promise').Promise;

const glob = require('glob-all');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const extractCSS = new ExtractTextPlugin('../[name].bundle.css');

module.exports = {
  context: path.resolve(__dirname, './src'),
  // Map, Set, requestAnimationFrame <IE11 polyfill
  // entry: ['babel-polyfill', './index.jsx'],
  entry: ['./index.jsx'],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: "dist/",
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    rules: [
      // extractCSS
      {
        test: /\.scss$/,
        loader: extractCSS.extract(['css-loader', 'sass-loader'])
      },
      // url loader
      {
        test: /\.(png|svg|jpg|otf|ttf)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          } // Convert images < 10k to base64 strings
        }]
      },
      // babel-loader
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      // babel jsx
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  externals : {
    React: 'react',
    ReactDOM: 'react-dom'
  },
  plugins: [
    extractCSS,
    new PurifyCSSPlugin({
      // Give paths to parse for rules. These should be absolute!
      paths: glob.sync([
        path.join(__dirname, '*.html'),
        path.join(__dirname, 'src/components/*.jsx')
      ]),
      purifyOptions: {
        whitelist: [ '*:not*' ]
      },
      minimize: true
    })
  ],
  resolve: {
    modules: [
      '../node_modules',
    ]
  }
};