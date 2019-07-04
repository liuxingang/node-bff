/*
 * @Author: liuxingang
 * @Date: 2019-06-26 09:42:39
 * @Last Modified by: liuxingang
 * @Last Modified time: 2019-07-03 16:34:58
 */
const path = require('path');
const Koa = require('koa');
const static = require('koa-static');
const render = require('koa-art-template')
const Router = require('koa-router')
let config = require('./config/config')





const isDev = process.env.NODE_ENV === 'devlopment' ? true : false

config = isDev ? config.dev : config.prod
const port = config.port || 3000

const app = new Koa();


if (isDev) {
    const Webpack = require('webpack');
    const koaWebpack = require('koa-webpack')
    let webpackConfig = require('./build/webpack.config.dev')
    const devServerOptions = Object.assign({}, webpackConfig, {
        publicPath: webpackConfig.output.publicPath,
        open: true,
        hot: true,
        inline: true,
        stats: {
            colors: true
        }
    })
    const compiler = Webpack(webpackConfig);

    async function start() {
        const middleware = await koaWebpack({ compiler });
        app.use(middleware);
    }
    start()


}

render(app, {
    root: config.viewsPath,
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production',
})

if (!isDev) {
    app.use(static(config.staticPath))
}


const router = new Router();

// logger
app.use(async (ctx, next) => {
    ctx.state.auth = 'lxg'

    await next();
})



router.get('/', async (ctx) => {

    await ctx.render('index/index', {
        title: 'lxg'
    })

})
router.get('/news', async (ctx) => {
    await ctx.render('news/news', {
        title: 'lxg'
    })
})
router.get('/about', async (ctx) => {
    await ctx.render('about/about', {
        title: 'lxg'
    })
})

app.use(router.routes())
    .use(router.allowedMethods());


app.on('error', (err, ctx) => {
    console.log('server error', err, ctx)
})

app.listen(port);
console.log(`server is start ${port}`)