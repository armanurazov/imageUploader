const mongoose = require('mongoose');

const upload = new mongoose.Schema({
    data: {
        type: Buffer,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('upload', upload);