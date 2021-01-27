const router = require('express').Router()

const { 
  getAllProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty
} = require('../controllers/properties.controller')

router.get('/', getAllProperties)
router.get('/:id', getPropertyById)
router.post('/', createProperty)
router.put('/:id', updateProperty)
router.delete('/:id', deleteProperty)

module.exports = router
