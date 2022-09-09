const mongoose = require('mongoose');
let nominalSchema = new mongoose.Schema({
    itemQuantity: {
        type: Number,
        default: 0
    },
    itemName: {
        type: String,
        required: [true, 'Name is required']
    },
    price: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

module.exports = mongoose.model('Nominal', nominalSchema);