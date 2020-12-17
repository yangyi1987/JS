const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = {
  entry:{
    app: './src/main.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'dist')  
  }
}
