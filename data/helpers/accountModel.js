const db = require('../dbConfig.js')

module.exports = {
    get,
    getById,
    insert
}

function get() {
    return db('accounts')
}

function getById(queryId) {
    return db('accounts')
        .where({ id: queryId })
}

function insert(queryBody) {
    return db('accounts')
        .insert(queryBody)
}