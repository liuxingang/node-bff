const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const insertHtmlJsPlugin = require('./config/insertHtmlJsPlugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const glob = require("glob")

// 获取入口文件
const entries = () => {

    const entriesFile = glob.sync(path.resolve(__dirname, 'src/pages/**/*.js'))
    const map = {}
    for (let i = 0; i < entriesFile.length; i++) {
        const filePath = entriesFile[i]
        const fileName = filePath.match(/src\/pages\/.*\/(.*)\.js/)[1]
        map[fileName] = [`${filePath}`]
    }
    return map
}
let webpackDevConfig = {
    entry: entries(),

    target: 'node',
    mode: 'development',
    output: {
        filename: 'pages/[name]/[name].bundle.js',
        path: path.resolve(__dirname, 'dev'),
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
        // new HtmlWebpackPlugin({
        //     title: '首页',
        //     filename: 'pages/global/layout.html',
        //     template: './src/pages/global/layout.html',
        //     inject: false,
        //     alwaysWriteToDisk: true
        // }),
        new insertHtmlJsPlugin(),

        new HtmlWebpackHarddiskPlugin()
    ],
}

Object.keys(webpackDevConfig.entry).forEach(entry => {
    webpackDevConfig.plugins.push(new HtmlWebpackPlugin({
        filename: `pages/${entry}/${entry}.html`,
        template: path.resolve(__dirname, `src/pages/${entry}/${entry}.html`),
        inject: false, //取消js默认注入页面
        chunks: [`${entry}`],
        alwaysWriteToDisk: true //将内存文件写入磁盘
    }))
})

console.log(webpackDevConfig)

module.exports = webpackDevConfig