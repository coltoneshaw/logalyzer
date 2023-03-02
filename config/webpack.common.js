const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '#': path.resolve(__dirname, '../.'),
      types: path.resolve(__dirname, '../src/types'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, '../release'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        include: path.resolve(__dirname, '../src'),
        use: [{ loader: 'ts-loader' }],
      },
    ],
  },
};
