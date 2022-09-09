const mongoose = require('mongoose');
let voucherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    thumbnail: {
        type: String,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
    nominals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Nominal',
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
}, {timestamps: true});

module.exports = mongoose.model('Voucher', voucherSchema);