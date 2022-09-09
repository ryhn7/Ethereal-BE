const mongoose = require('mongoose');
let bankSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Account name is required']
    },
    bankName: {
        type: String,
        required: [true, 'Bank name is required']
    },
    accountNum: {
        type: String,
        required: [true, 'Account number is required']
    },
}, {timestamps: true});

module.exports = mongoose.model('Bank', bankSchema);