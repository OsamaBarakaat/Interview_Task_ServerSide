const addressModel = require('../models/address')

// add new address
function addAddress(address) {
    return addressModel.create(address)
}

// get all adresses
function getAllAddresses() {
    return addressModel.find()
}

// update address
function updateAddress(id, descreption) {
    return addressModel.findByIdAndUpdate({ _id: id }, { descreption: descreption })
}

module.exports = { addAddress, getAllAddresses, updateAddress }