const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Posts schema
const postSchema = new Schema({
    User: {},
    title: String,
    content: String,
    reg_at: {
        type: Date,
        default: Date.now()
    }
});

const Post = mongoose.model('post', postSchema)
module.exports = Post