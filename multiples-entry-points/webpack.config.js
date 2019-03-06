const path = require("path");
const extractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		home: path.resolve(__dirname, "src/js/index.js"),
		precios: path.resolve(__dirname, "src/js/precios.js"),
		contacto: path.resolve(__dirname, "src/js/contacto.js")
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/[name].js"
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