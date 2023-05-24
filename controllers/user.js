const userModel = require('../models/user')

// get all users
async function getAllUsers(req) {
    let page = req.query.page || 1
    let count = await userModel.countDocuments()
    const limit = 2
    const pageNumbers = count / limit
    // console.log("aaaaaaaaaaa", count);
    const data = {
        pageNumbers: pageNumbers,
        data: await userModel.find().skip((page - 1) * 2).limit(limit).populate('address')
    }
    return data

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