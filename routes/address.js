const express = require('express')
const router = express.Router()
const { addAddress, getAllAddresses, updateAddress } = require('../controllers/address')


// get addresses

router.get('/', async (req, res) => {
    try {
        let addresses = await getAllAddresses()
        res.status(200).json(addresses)
    }
    catch (err) {
        res.status(404).json({ message: err.message })
    }
})

// add address
router.post('/', async (req, res) => {
    let address = req.body
    try {
        let newAddress = await addAddress(address)
        res.status(200).json(newAddress)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
// update user
router.put('/:id', async (req, res) => {
    let { id } = req.params
    let { descreption } = req.body
    try {
        let updatedAddress = await updateAddress(id, descreption)
        res.status(200).json(`Updated Successfully ${updatedAddress}`)
    }
    catch (err) {
        res.status(404).json({ message: err.message })
    }
})

module.exports = router