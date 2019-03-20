const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', path.resolve(__dirname, 'assets/js/index.js')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
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
          use: "css-loader"
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
    new extractTextPlugin("css/[name].css")
  ]
}