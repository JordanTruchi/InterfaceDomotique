'use strict';

const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              data: `
              @import "Scss/_mixins.scss";
              `
            }
          }
        ]
      },
      {
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.(png|PNG|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      Image: path.resolve(__dirname, 'static/img'),
      Component: path.resolve(__dirname, 'src/components'),
      Data: path.resolve(__dirname, 'src/data'),
      Class: path.resolve(__dirname, 'src/class'),
      Scenario: path.resolve(__dirname, 'src/scenario'),
      Asset: path.resolve(__dirname, 'assets'),
      Src: path.resolve(__dirname, 'src'),
      Function: path.resolve(__dirname, 'src/function'),
      Mixin: path.resolve(__dirname, 'src/mixin'),
      Scss: path.resolve(__dirname, 'src/scss')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Interface Domotique',
      chunks: ['index', 'vue', 'lodash'],
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, 'static/img'),
      to: path.resolve(__dirname, 'dist/static/img'),
      toType: 'dir'
    }]),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: 'src',
      files: ['**/*.{vue,css,scss}'],
      failOnError: false,
      quiet: false
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vue: {
          reuseExistingChunk: true,
          test: /[\\/]node_modules[\\/]vue/,
          name: 'vue',
          chunks: 'all'
        },
        lodash: {
          reuseExistingChunk: true,
          test: /[\\/]node_modules[\\/]lodash-es/,
          name: 'lodash',
          chunks: 'all'
        }
      }
    }
  }
};
