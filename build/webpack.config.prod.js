const path = require('path');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const merge = require("webpack-merge");
const wbepackBaseConfig = require("./webpack.config.base");

let webpackProdConfig = {
    mode: 'production',
    output: {
        filename: 'pages/[name]/[name]-[hash:5].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    plugins: [
    ],
}

webpackProdConfig = merge(wbepackBaseConfig, webpackProdConfig)

module.exports = webpackProdConfig