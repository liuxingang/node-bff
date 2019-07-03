const path = require('path');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const merge = require("webpack-merge");
const wbepackBaseConfig = require("./webpack.config.base");

let webpackDevConfig = {
    target: 'node',
    mode: 'development',
    output: {
        filename: 'pages/[name]/[name].bundle.js',
        path: path.resolve(__dirname, '../dev'),
        publicPath: '/'
    },
    plugins: [
    ],
}

webpackDevConfig.plugins.push(new HtmlWebpackHarddiskPlugin())

webpackDevConfig = merge(wbepackBaseConfig, webpackDevConfig)

module.exports = webpackDevConfig