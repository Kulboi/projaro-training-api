const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Users schema
const userSchema = new Schema({
    fullname: String,
    slug: String,
    email: String,
    phone: String,
    address: String,
    location: String,
    dob: String,
    marital: String,
    password: String,
    reg_at: {
        type: Date,
        default: Date.now()
    }
});

const User = mongoose.model('user', userSchema)
module.exports = User