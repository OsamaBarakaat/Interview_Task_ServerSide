const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    userName: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, 'name is required']
    },
    age: {
        type: Number,
        required: [true, 'age is required '],

    },
    address: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'address',
        required: true
    }]
}, { timestamps: true })

const userModel = mongoose.model('user', userSchema)
module.exports = userModel