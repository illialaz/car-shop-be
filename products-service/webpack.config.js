const path = require('path');
const webpack = require('webpack')
const slsw = require('serverless-webpack');

module.exports = {
  entry: slsw.lib.entries,
  plugins: [
   new webpack.IgnorePlugin(/^pg-native$/)
  ],
  output: {
    libraryTarget: 'commonjs',
    filename: '[name].js',
    path: path.join(__dirname, '.webpack'),
  },
  mode: 'development',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/, // include .js files
        enforce: 'pre', // preload the jshint loader
        exclude: /node_modules/, // exclude any and all files in the node_modules folder
        include: __dirname,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      node: '14',
                    },
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  },
};
