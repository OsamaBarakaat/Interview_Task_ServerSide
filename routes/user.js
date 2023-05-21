const express = require('express')
const router = express.Router()

function validateAge(age) {
    if (age < 21) {
        throw new Error("age is not big enough");
    }
}

const { getAllUsers, getUserById, addUser, updateUser, deleteUser } = require('../controllers/user')

// add user
router.post('/', async (req, res) => {
    let user = req.body

    try {
        let age = req.body.age
        validateAge(age)
        let newUser = await addUser(user)
        res.status(200).json(newUser)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// get user by id 
router.get('/:id', async (req, res) => {
    let { id } = req.params
    try {
        let user = await getUserById(id)
        res.status(200).json(user)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

// get all users
router.get('/', async (req, res) => {
    try {
        let users = await getAllUsers()
        res.status(201).json(users)
    }
    catch (err) {
        res.status(404).json({ message: err.message })
    }
})

// update user
router.put('/:id', async (req, res) => {
    let { id } = req.params
    let { userName, age, address } = req.body
    try {
        let updatedUser = await updateUser(id, userName, age, address)
        res.status(200).json(`Updated Successfully ${updatedUser}`)
    }
    catch (err) {
        res.status(404).json({ message: err.message })
    }

})

// delete user 
router.delete('/:id', async (req, res) => {
    var { id } = req.params
    try {
        var deletedUser = await deleteUser(id)
        res.status(200).json(`deleted Successfully ${deletedUser}`)
    } catch (err) {
        res.status(401).json({ message: err.message })
    }
})

module.exports = router