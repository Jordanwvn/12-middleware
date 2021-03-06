'use strict'

if(process.env.NODE_ENV !== 'production') require('dotenv').config()

const server = require('./lib/server.js')
server.start(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`))
