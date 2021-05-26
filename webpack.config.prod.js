const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
				use:[ MiniCssExtractPlugin.loader, "css-loader" ]
			}
		]
	},
	plugins:[ 
		new MiniCssExtractPlugin({
			filename:"[name].[contenthash].css"
		}), 
		new HtmlWebpackPlugin({
			title:"webpack生成页",
			template:"./src/index.html"
		}) ]
};