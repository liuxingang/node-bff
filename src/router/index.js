const router = require('koa-router')()

router.get('/', async (ctx) => {

    await ctx.render('index/index', {
        title: 'lxg1'
    })

})

module.exports = router.routes()