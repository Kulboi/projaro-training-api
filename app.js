'use strict'

// Dependencies
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// Setup express app
const app = express()

// Handling CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", 'GET, PUT, POST, DELETE')
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next();
})

let config = {
    hostname: '127.0.0.1',
    port: process.env.PORT || 5000,
    dev_db: 'mongodb://localhost/projaro',
    prod_db: 'mongodb://super_admin:iucsh8780@ds047752.mlab.com:47752/heroku_9wn9n3k7'
}

// connect to db 
mongoose.Promise = global.Promise

// Database connection
mongoose.connect(config.prod_db)

app.use(bodyParser.json())

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(422).json({error: err.message})
})

// Api endpoints
app.use('/api', require('./routes/api'))

app.listen(config.port, () => {
    console.log(`Server running on http://${config.hostname}:${config.port}/`)
})