const express = require('express');

const accountRouter = require('./routers/accountRouter.js')

const logger = require('./middleware/logger.js')

const server = express();

server.use(express.json());
server.use(logger)

server.use('/api/accounts', accountRouter)

module.exports = server;