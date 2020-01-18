const db = require('../data/dbConfig.js')

function validateAccount(req, res, next) {
    const body = req.body

    if (!Object.keys(body).length) {
        res.status(400).json({ message: 'Missing account data.' })
    } else if (body.name) {
        db('accounts')
            .where({ name: body.name })
            .then(acc => {
                if (acc.length) {
                    res.status(400).json({ message: 'Name is already taken.' })
                } else if (!body.budget) {
                    res.status(400).json({ message: 'Missing required budget field.' })
                } else if (isNaN(body.budget)) {
                    res.status(400).json({ message: 'Budget must be a number.' })
                } else {
                    next()
                }
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({ message: 'Error retrieving accounts.' })
            })
    } else {
        res.status(400).json({ message: 'Missing required name field.' })
    }
}

module.exports = validateAccount