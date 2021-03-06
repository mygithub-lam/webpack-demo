const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin") //涉及到计算机权限问题
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack')
module.exports = {
  entry: {
    index: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    // hot:true,
    contentBase: './dist'
    // historyApiFallback: true,
    // inline: true
  },
  module: {
    rules: [{
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new UglifyJSPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      title: 'yuting',
      mobile: true,
      meta: [{
        name: 'description',
        content: 'A better default template for html-webpack-plugin.'
      }]
    })
  ]
}