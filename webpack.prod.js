const { merge } = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  plugins: [new CompressionPlugin({
    filename: '[path][base].gz',
    algorithm: 'gzip',
    test: /\.js$|\.css$|\.html$/,
    threshold: 10240,
    minRatio: 0.8,
  })],
});
