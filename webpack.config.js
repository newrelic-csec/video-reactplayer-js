var path = require('path')
var webpack = require('webpack')

var pkg = require('./package.json')
var license = '@license ' + pkg.license +
    '\n' + pkg.name + ' ' + pkg.version +
    '\nCopyright New Relic <http://newrelic.com/>' +
    '\n@author ' + pkg.author

module.exports = {
  entry: {
    'newrelic-video-reactplayer': './src/index.js',
    'sample': './samples/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].min.js',
    library: 'nrvideo',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: ['transform-class-properties']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: license,
      entryOnly: true
    })
  ]
}
