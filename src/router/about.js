const router = require('koa-router')()

router.get('/about', async (ctx) => {

    await ctx.render('about/about', {
        title: 'lxg'
    })

})

module.exports = router.routes()