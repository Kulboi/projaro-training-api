'use strict'

const express = require('express')
const router = express.Router()
const axios = require('axios')
// const request = require('request')

// Base endpoint
router.get('/', (req, res) => {
    let msg = "Welcome to corwdforce api"
    res.json(msg)
})

router.get('/user', (req, res) => {
    let endpoint = 'https://crowdforce.api-us1.com/admin/api.php?api_action=contact_add&api_output=json&api_key=d1ebaea9047f9bc5c829bc269c161d8ffc6ac4fd8da71517d8f0aae69eb5308588c1d97c'
    let data = { email: req.query.email, p: [1,2] }
    console.log(data)
    axios.post(endpoint, data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then((response) => {
        res.json({ status: 200 })
    })
})

module.exports = router
