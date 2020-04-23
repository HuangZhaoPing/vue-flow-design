const StyleLintPlugin = require('stylelint-webpack-plugin')
const { resolve } = require('./utils')

module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css', '.vue'],
    alias: {
      '@root': resolve()
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        exclude: /(node_modules|bower_components)/,
        use: 'eslint-loader'
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components|lib)/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: {
          loader: 'url-loader',
          options: {
            esModule: false,
            limit: 8129
          }
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i,
        use: {
          loader: 'url-loader',
          options: { limit: 8129 }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        use: {
          loader: 'url-loader',
          options: { limit: 8129 }
        }
      }
    ]
  },
  plugins: [
    new StyleLintPlugin({
      files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}']
    })
  ]
}
