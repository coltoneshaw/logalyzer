/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');
const webapp = require('./webpack.webapp');

module.exports = merge(
  common,
  webapp,
  {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, '../dist/renderer.js'),
      },
      compress: true,
      port: 9000,
    },
    optimization: {
      minimize: false,
    },
  },
);
