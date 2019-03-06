const path = require("path");

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
				use: [
		          { loader: 'style-loader' },
		          { loader: 'css-loader'}
		        ]
			}
		]
	}
}