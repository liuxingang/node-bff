const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const insertHtmlJsPlugin = require('./config/insertHtmlJsPlugin');


const TransferWebpackPlugin = require('transfer-webpack-plugin');



module.exports = {
    entry: {
        index: ['./src/pages/index/index.js']
    },
    output: {
        filename: 'pages/[name]/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '首页',
            filename: 'pages/global/layout.html',
            template: './src/pages/global/layout.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            title: 'index',
            filename: 'pages/index/index.html',
            template: './src/pages/index/index.html',
            inject: false
        }),
        new insertHtmlJsPlugin(),

    ],
}
