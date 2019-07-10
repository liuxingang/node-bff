const router = require('koa-router')()

router.get('/', async (ctx) => {

    await ctx.render('index/index', {
        title: 'lxg123',
        allData: JSON.stringify({
            url: 'www.baidu.com'
        })
    })

})

module.exports = router.routes()