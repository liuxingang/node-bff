const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const insertHtmlJsPlugin = require('./config/insertHtmlJsPlugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry: {
        index: ['./src/pages/index/index.js']
    },

    target: 'node',
    mode: 'development',
    output: {
        filename: 'pages/[name]/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist1'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.html$/,
            loader: "art-template-loader",
            options: {
                // art-template options (if necessary)
                // @see https://github.com/aui/art-template
            }
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
