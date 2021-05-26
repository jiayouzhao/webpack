const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode:"development",
	entry:"./src/index.js",
	devServer:{
		contentBase:"./dist"
	},
	output:{
		filename:"[name].[contenthash].js",
		path: path.resolve(__dirname, "dist"),
		clean:true
	},
	module:{
		rules:[
			{
				test:/\.css$/i,
				use:[ "style-loader", "css-loader" ]
			}
		]
	},
	plugins:[ new HtmlWebpackPlugin({
		title:"webpack生成页",
		template:"./src/index.html"
	}) ]
};