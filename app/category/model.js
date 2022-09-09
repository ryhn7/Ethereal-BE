const mongoose = require('mongoose');
let categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    }
}, {timestamps: true});

module.exports = mongoose.model('Category', categorySchema);