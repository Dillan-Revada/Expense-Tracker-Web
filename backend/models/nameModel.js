const mongoose = require('mongoose');


const NameSchema = new mongoose.Schema({
    Fullname: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
}, {timestamps: true})

module.exports = mongoose.model('Name', NameSchema)