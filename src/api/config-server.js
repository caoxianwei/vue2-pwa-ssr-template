var lruCache = require('lru-cache')

let api
if (process.__API__) {
    api = process.__API__
} else {
    api = process.__API__ = {
        api: 'https://cnodejs.org/api/v1/',
        port: 8080,
        timeout: 30000,
        cached: lruCache({
            max: 1000,
            maxAge: 1000 * 60 * 15
        }),
        cachedItem: {}
    }
}

module.exports = api
