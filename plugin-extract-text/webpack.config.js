const path = require("path");
const extractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: path.resolve(__dirname, "index.js"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	module:{
		rules:[
		// Loaders
			{
				//test: archivo a reconocer
				//use: loader a usar para el archivo
				test: /\.css$/,
				use: extractTextPlugin.extract({
		          fallback: "style-loader",
		          use: "css-loader"
		        })
			}
		]
	},
	plugins:[
		//PLUGINS
		new extractTextPlugin("css/[name].css")

	]
}