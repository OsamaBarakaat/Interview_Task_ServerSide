const express = require('express')
const router = express.Router()
const { addAddress, getAllAddresses } = require('../controllers/address')


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
        res.status(200).json(`address added Successfully ${newAddress}`)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

module.exports = router