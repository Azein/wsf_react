
const webpack = require('webpack');
const CommonsPlugin = new require('webpack/lib/optimize/CommonsChunkPlugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const path = require('path');
const autoprefixer = require('autoprefixer');


const config = {
  context: path.resolve(__dirname + '/app'),
  entry: {
    app: './index.js',
    vendor: ['react', 'react-dom', 'redux', 'react-redux', 'redux-thunk']
  },

  plugins: [
    new CommonsPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    }),

    new StyleLintPlugin({
      configFile: 'stylelintrc.json',
      context: path.resolve(__dirname + '/app'),
      files: '**/*.css',
      failOnError: false
    })
  ],

  output: {
    filename: "[name].js",
    path: "./dist",
  },

  watch: true,

  module: {
  
    preLoaders: [
      {
        test: /\.js?$/,
        loaders: ['eslint-loader']
      }
    ],
    
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }, 
      {
        test: /\.css$/, 
        exclude: /.*\.woff$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]!postcss-loader' 
      },
      { 
        test: /\.(png|jpg)$/, loader: 'file-loader' 
      },    
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
    ],
  },

  postcss: () => {
    return [
      autoprefixer
    ];
  }
}

module.exports = config;