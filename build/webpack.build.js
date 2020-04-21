const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const { resolve } = require('./utils')

module.exports = merge(common, {
  mode: 'production',
  entry: resolve('src/main.js'),
  output: {
    filename: '[name].js',
    path: resolve('lib')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new SimpleProgressWebpackPlugin()
  ],
  stats: { modules: false }
})
