/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const webapp = require('./webpack.webapp');

const productionObject = {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: false,
  },
};

module.exports = [
  merge(common, webapp, productionObject),
];
