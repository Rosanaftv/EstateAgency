const router = require('express').Router()

const { getAllProperties, createProperty, updateProperty, deleteProperty } = require('../controllers/properties.controller')

router.get('/', getAllProperties)
// router.get('/:id', function() { })
router.post('/', createProperty)
router.put ('/:id', updateProperty)
router.delete ('/:id', deleteProperty)

module.exports = router