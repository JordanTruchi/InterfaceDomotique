'use strict';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const CommonConfig = require('./webpack.config.common.js');

const config = {
  mode: 'development',
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    index: 'index.html',
    hot: true,
    watchOptions: {
      poll: true
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: './.dev.env',
      safe: true,
      systemvars: true,
      silent: true,
      defaults: false
    })
  ]
};

module.exports = merge(CommonConfig, config);
