const HtmlWebpackPlugin = require('html-webpack-plugin');
const MyPlugin = 'InsertHtmlJsPlugin'

class InsertHtmlJsPlugin {
    apply(compiler) {
        // 指定一个挂载到 webpack 自身的事件钩子。
        compiler.hooks.compilation.tap(MyPlugin, compilation => {
            console.log('🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌')
            compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tap(MyPlugin, (data, cb) => {
                // console.log(data)
                const _js = data.assets.js
                let _html = data.html
                _html = _html.replace("<!--injectjs-->", `<script src=${_js}></script>`)
                data.html = _html
            })
        })
    };
}

module.exports = InsertHtmlJsPlugin