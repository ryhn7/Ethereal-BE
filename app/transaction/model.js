const mongoose = require('mongoose');
let transactionSchema = new mongoose.Schema({
    historyVoucher : {
        gameName: {type: String, required: [true, 'Game name is required']},
        category: {type: String, required: [true, 'Category is required']},
        thumbnail: {type: String},
        itemName: {type: String, required: [true, 'Item name is required']},
        itemQuantity: {type: String, required: [true, 'Item quantity is required']},
        price: {type: Number},
    },
    historyPayment : {
        name: {type: String, required: [true, 'Name is required']},
        type: {type: String, required: [true, 'Payment type is required']},
        bankName: {type: String, required: [true, 'Bank name is required']},
        accountNum: {type: String, required: [true, 'Account number is required']},
    },
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    accountName: {
        type: String,
        required: [true, 'Account Name is required']
    },
    tax: {
        type: Number,
        default: 0
    },
    value: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: ['pending', 'success', 'failed'],
        default: 'pending'
    },
    player: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    },
    historyUser: {
        name: {type: String, required: [true, 'Player name is required']},
        phoneNumber : {type: String, required: [true, 'Phone number is required']},

    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
}, {timestamps: true});

module.exports = mongoose.model('Transaction', transactionSchema);