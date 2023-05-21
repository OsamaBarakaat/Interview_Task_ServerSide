const userModel = require('../models/user')

// get all users
function getAllUsers() {
    return userModel.find().populate('address')
}

// get one user by id 
function getUserById(id) {
    return userModel.findById(id).populate('address')
}

// create user
function addUser(user) {
    return userModel.create(user)
}

// update user
function updateUser(id, userName, age, address) {
    return userModel.findByIdAndUpdate({ _id: id }, { userName: userName, age: age, address: address })
}

// delete user by id
function deleteUser(id) {
    return userModel.findByIdAndDelete(id)
}

module.exports = { getAllUsers, getUserById, addUser, updateUser, deleteUser }