var path = require('path');
var webpack = require('webpack');

 module.exports = {
     entry: './src/index.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'app.bundle.js'
     },
     module: {
         rules: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015', 'react']
                 }
             },
             {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }

         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map',
     mode: 'development'
 };
