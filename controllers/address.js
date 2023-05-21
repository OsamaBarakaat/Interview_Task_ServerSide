const addressModel = require('../models/address')

// add new address
function addAddress(address) {
    return addressModel.create(address)
}

// get all adresses
function getAllAddresses() {
    return addressModel.find()
}

module.exports = { addAddress, getAllAddresses }