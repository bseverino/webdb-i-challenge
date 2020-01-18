function validateAccUpdate(req, res, next) {
    const body = req.body

    if (!Object.keys(body).length) {
        res.status(400).json({ message: 'Missing account data.' })
    } else if (!body.name) {
        res.status(400).json({ message: 'Missing required name field.' })
    } else if (!body.budget) {
        res.status(400).json({ message: 'Missing required budget field.' })
    } else if (isNaN(body.budget)) {
        res.status(400).json({ message: 'Budget must be a number.' })
    } else {
        next()
    }
}

module.exports = validateAccUpdate