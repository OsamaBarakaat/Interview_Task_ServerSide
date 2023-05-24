const mongoose = require('mongoose')

const addressSchema = mongoose.Schema({
    descreption: [{
        type: String,
        required: [true, 'address is required'],
        minLength: 3
    }]
}, { timestamps: true })

const addressModel = mongoose.model('address', addressSchema)
module.exports = addressModel