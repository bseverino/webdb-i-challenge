const db = require('../dbConfig.js')

module.exports = {
    get,
    getById,
    insert,
    update,
    remove
}

function get() {
    return db('accounts')
}

function getById(id) {
    return db('accounts')
        .where('id', id)
}

function insert(body) {
    return db('accounts')
        .insert(body)
}

function update(id, body) {
    return db('accounts')
        .where('id', id)
        .update({
            name: body.name,
            budget: body.budget
        })
}

function remove(id) {
    return db('accounts')
        .where('id', id)
        .del()
}