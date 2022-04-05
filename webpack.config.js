const path = require('path');
// const webpack = require('webpack');

module.exports = {
  entry: './client/src/index.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'client/dist'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        resolve: {
          extensions: ['.js', '.jsx'],
        },
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
