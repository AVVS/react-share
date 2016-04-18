const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach(mod => {
    nodeModules[mod] = `commonjs ${mod}`;
  });

module.exports = {
  devtool: 'sourcemap',

  entry: './src/react-share.jsx',

  target: 'node',

  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'react-share.js',
    libraryTarget: 'commonjs',
  },

  externals: nodeModules,

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: path.resolve(__dirname, 'node_modules'),
      },
    ],
  },

  resolve: {
    root: [path.resolve('./src')],
    extensions: ['', '.js', '.jsx'],
  },

  plugins: [
    new webpack.BannerPlugin('require("source-map-support").install();',
                             { raw: true, entryOnly: false }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],

};
