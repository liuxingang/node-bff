
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const insertHtmlJsPlugin = require('./insertHtmlJsPlugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const glob = require("glob")

// 获取入口文件
const entries = () => {

    const entriesFile = glob.sync(path.resolve(__dirname, '../src/pages/**/*.js'))
    const map = {}
    for (let i = 0; i < entriesFile.length; i++) {
        const filePath = entriesFile[i]
        const fileName = filePath.match(/src\/pages\/.*\/(.*)\.js/)[1]
        map[fileName] = [`${filePath}`]
    }
    return map
}
let webpackBaseConfig = {
    entry: entries(),
    optimization: {
        splitChunks: {
            chunks: "all",
            minChunks: 1,
            name: 'common',
            minSize: 0,
        }
    },
    module: {
        rules: [{
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                { loader: MiniCssExtractPlugin.loader },
                // 'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.less$/,
            exclude: /node_modules/,
            use: [
                { loader: MiniCssExtractPlugin.loader },
                // 'style-loader',
                'css-loader',
                'less-loader'
            ]
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'pages/[name]/[name].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            title: '首页',
            filename: 'pages/global/layout.html',
            template: path.resolve(__dirname, '../src/pages/global/layout.html'),
            inject: false,
            alwaysWriteToDisk: true
        })
    ],
}

Object.keys(webpackBaseConfig.entry).forEach(entry => {
    webpackBaseConfig.plugins.push(new HtmlWebpackPlugin({
        filename: `pages/${entry}/${entry}.html`,
        template: path.resolve(__dirname, `../src/pages/${entry}/${entry}.html`),
        inject: false, //取消js默认注入页面
        chunks: ['common', `${entry}`],
        alwaysWriteToDisk: true //将内存文件写入磁盘
    }))
})
webpackBaseConfig.plugins.push(new insertHtmlJsPlugin())

module.exports = webpackBaseConfig