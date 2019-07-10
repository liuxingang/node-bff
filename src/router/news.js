const router = require('koa-router')()

router.get('/news', async (ctx) => {

    await ctx.render('news/news', {
        title: 'lxg'
    })

})

module.exports = router.routes()