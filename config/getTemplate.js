const axios = require('axios')
let config = require('./config')

const isDev = process.env.NODE_ENV === 'devlopment' ? true : false

config = isDev ? config.dev : config.prod

function getTemplate(filename) {
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:${config.port}/${config.viewsPathText}/${filename}`)
            .then(res => {
                resolve(res.data)
            })
            .catch(reject)
    })
}

module.exports = getTemplate