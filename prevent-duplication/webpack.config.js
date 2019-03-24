const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  //entry: ['babel-polyfill', path.resolve(__dirname, 'assets/js/index.js')],
  entry:{
    home: ['babel-polyfill', path.resolve(__dirname, 'assets/js/index.js')],
    contact: ['babel-polyfill', path.resolve(__dirname, 'assets/js/contact.js')]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: [
        //   { loader: "style-loader" }, // Agrega el css al DOM en un <style>
        //   { loader: "css-loader" }, // interpreta los archivos css en js via import
        // ]
        use: extractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.scss$/,
        use: extractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.styl$/,
        use: extractTextPlugin.extract({
          fallback: "style-loader",
          use: [
              "css-loader",
              {
                 loader: "stylus-loader",
                 options: {
                   use:[
                     require('nib'),
                     require('rupture')
                   ],
                   import: [
                     '~nib/lib/nib/index.styl',
                     '~rupture/rupture/index.styl',
                   ]
                 }
              }
          ]
        })
      },
      {
        test: /\.less$/,
        use: extractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", {
            loader: "less-loader",
            options: {
              noIeCompat: true
            }
          }]
        })
      },
      {
        test: /\.json$/i,
        loader:'json-loader'
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/i,
        use:[
          {
            loader: 'url-loader',
            options: {
              limit: 5000000000,
              outputPath: './fonts',
              publicPath: '../fonts',
              name: '[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/react']
          }
        }
      }
    ]
  },
  plugins: [
    // new extractTextPlugin("styles.css")
    new extractTextPlugin("css/[name].css"),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    })
  ]
}