const express = require('express')

const Accounts = require('../data/helpers/accountModel.js')

const validateId = require('../middleware/validateId.js')

const router = express.Router()

router.get('/', (req, res) => {
    Accounts.get()
        .then(acc => {
            res.status(200).json(acc)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Error retrieving accounts.'
            })
        })
})

router.get('/:id', validateId(Accounts), (req, res) => {
    Accounts.getById(req.params.id)
        .then(acc => {
            res.status(200).json(acc)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Error retrieving account.'
            })
        })
})

module.exports = router