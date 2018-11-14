'use strict'

// Dependencies
const express = require('express')
const bodyParser = require('body-parser')

// Setup express app
const app = express()

// Handling CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", 'GET, PUT, POST, DELETE')
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next();
})

app.use(bodyParser.json())

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(422).json({error: err.message})
})

// Api endpoints
app.use('/api', require('./routes/api'))


let config = {
    hostname: '127.0.0.1',
    port: process.env.PORT || 5000
}

app.listen(config.port, () => {
    console.log(`Server running on http://${config.hostname}:${config.port}/`)
})