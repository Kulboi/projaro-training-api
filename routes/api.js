'use strict'

const express = require('express')
const router = express.Router()

// Base endpoint
router.get('/', (req, res) => {
    let msg = "Welcome to projaro test api"
    res.json(msg)
})

// Models
const userModel = require('./../models/users.js')

// Utility class
const utilityClass = require('./utility.js')
const utility = new utilityClass()

/*
    Endpoint /user (POST)
    Purpose: Create new user
*/
router.post('/user', (req, res) => {
    let data = req.body
    userModel
        .find({ email: data.email, password: data.password }).then((user) => {
            if (!user.length) {
                userModel.create(data).then((record) => {
                    utility.successResponse(res, 201, "User successfully created")
                }).catch((error) => {
                    utility.errResponse(res)
                })
            } else {
                utility.successResponse(res, 400, "User already registered, kindly login")
            }
        }).catch((err) => {
            utility.errResponse(res)
        })
})

/*
    Endpoint /user/login (POST)
    Purpose: LOgin user to system
*/
router.post('/user/login', (req, res) => {
    let data = req.body
    userModel
        .find({ email: data.email, password: data.password })
        .then((user) => {
            if (!user.length) {
                utility.errResponse(res, 404, "Invalid login credentials")
            } else {
                utility.successResponse(res, 200, user[0])
            }
        }).catch((err) => {
            utility.errResponse(res)
        })
})

/*
    Endpoint /user (GET)
    Purpose: Get user credentials
*/
router.get('/user', (req, res) => {
    userModel
        .find({ _id: req.params.id })
        .then((user) => {
            utility.successResponse(res, 200, user[0])
        }).catch((err) => {
            utility.errResponse(res)
        })
})

/*
    Endpoint /user (PUT)
    Purpose: Update user data
*/
router.put('/user', (req, res) => {
    userModel
        .findByIdAndUpdate({ _id: req.params.id }, req.body)
        .then((user) => {
            utility.successResponse(res, 200, user[0])
        }).catch((err) => {
            utility.errResponse(res)
        })
})

module.exports = router
