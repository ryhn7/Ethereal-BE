const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const HASH_ROUND = 10;


let playerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    admin: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    status: {
        type: String,
        enum: ['Y', 'N'],
        default: 'Y'
    },
    avatar: {
        type: String,
    },
    fileName: {
        type: String,
    },
    favorite: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    phoneNumber: {
        type: String,
        required: [true, 'Phone number is required']
    },
}, { timestamps: true });

playerSchema.path('email').validate(async (value) => {
    try {
        const count = await mongoose.models.Player.countDocuments({ email: value });
        return !count;
    } catch (error) {
        throw error;
    }
}, attr => `${attr.value} has been registered`);


playerSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, HASH_ROUND);
    next();
});

module.exports = mongoose.model('Player', playerSchema);