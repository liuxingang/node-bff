/* 配置文件*/
const path = require('path')
module.exports = {
    // 开发环境配置
    dev: {
        port: 3000,
        // viewsPath: path.join(__dirname, '../dist1/pages'),
        viewsPath: path.join(__dirname, '../dev/pages'),
        staticPath: path.join(__dirname, '../'),
    },
    //正式环境配置
    prod: {
        port: 3100,
        viewsPath: path.join(__dirname, '../dist/pages'),
        staticPath: path.join(__dirname, '../dist'),
    }
}