
const express = require('express')
const kodersRouter = require('./routes/koders')

const server = express()

server.use(express.json())

server.use('/koders', kodersRouter)

server.get('/', (request, response) => {
    response.json({
        success: true,
        message: 'kodeaAPiV10'
    })
})

module.exports = server