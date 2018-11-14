'use strict'

const express = require('express')
const router = express.Router()
var unirest = require('unirest')

// Base endpoint
router.get('/', (req, res) => {
    let msg = "Welcome to corwdforce api"
    res.json(msg)
})

router.get('/user', (req, res) => {
    let endpoint = 'https://crowdforce.api-us1.com/admin/api.php?api_action=contact_add&api_output=json&api_key=d1ebaea9047f9bc5c829bc269c161d8ffc6ac4fd8da71517d8f0aae69eb5308588c1d97c'
    let data = { email: req.query.email.slice(1, -1), 'p[123]': 1, 'status[123]': 1 }

    unirest.post(endpoint)
        .headers({ 'Content-Type': 'application/x-www-form-urlencoded' })
        .send(data)
        .end(function (response) {
            if(response.body.result_code == 1) {
                res.json(200)
            }
        });
})

module.exports = router
