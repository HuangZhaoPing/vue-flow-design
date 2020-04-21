const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const merge = require('webpack-merge')
const { resolve } = require('./utils')
const common = require('./webpack.common')

const config = merge(common, {
  mode: 'development',
  entry: resolve('example/main.js'),
  output: {
    filename: '[name].js',
    path: resolve('dist')
  },
  devServer: {
    host: 'localhost',
    port: 9000,
    clientLogLevel: 'warning',
    compress: true,
    inline: true,
    hot: true,
    quiet: true,
    progress: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Example',
      template: resolve('example/index.html')
    }),
    new VueLoaderPlugin()
  ]
})

module.exports = () => {
  const { https, host, port } = config.devServer
  const protocol = https ? 'https:' : 'http:'
  config.plugins.push(
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`Example is running here ${protocol}//${host}:${port}`]
      }
    })
  )
  return config
}
