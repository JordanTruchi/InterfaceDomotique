'use strict';

const path = require('path');
const merge = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const CommonConfig = require('./webpack.config.common.js');

const config = {
  mode: 'production',
  output: {
    filename: 'js/[name].min.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new Dotenv({
      path: './.prod.env',
      safe: true,
      systemvars: true,
      silent: true,
      defaults: false
    })
  ]
};

module.exports = merge(CommonConfig, config);
