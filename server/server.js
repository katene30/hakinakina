const path = require('path')
const express = require('express')

const fruitRoutes = require('./routes/fruits')
const authRoutes = require('./routes/auth')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/fruits', fruitRoutes)

server.use(express.json())
server.use('/api/v1/auth', authRoutes)

module.exports = server
