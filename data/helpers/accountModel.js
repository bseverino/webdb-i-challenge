const db = require('../dbConfig.js')

module.exports = {
    get,
    getById
}

function get() {
    return db('accounts')
}

function getById(queryId) {
    return db('accounts')
        .where({ id: queryId })
}