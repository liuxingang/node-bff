const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const insertHtmlJsPlugin = require('./config/insertHtmlJsPlugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry: {
        index: ['./src/pages/index/index.js']
    },
    mode: 'development',
    output: {
        filename: 'pages/[name]/[name].bundle.js',
        path: path.resolve(__dirname, 'src'),
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
            template: './src/pages/global/layout.html'
        }),
        new HtmlWebpackPlugin({
            title: 'index',
            filename: 'pages/index/index.html',
            template: './src/pages/index/index.html',
            inject: true
        }),
        new insertHtmlJsPlugin(),
    ],
}
