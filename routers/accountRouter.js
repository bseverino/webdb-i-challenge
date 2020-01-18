const express = require('express')

const Accounts = require('../data/helpers/accountModel.js')

const router = express.Router()

router.get('/', (req, res) => {
    Accounts.get()
        .then(acc => {
            console.log(acc)
            res.status(200).json(acc)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Error retrieving accounts.'
            })
        })
})

module.exports = router