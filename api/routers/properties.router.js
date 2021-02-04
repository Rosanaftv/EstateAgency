const router = require('express').Router()

const {
  authAgent
} = require('../utils')

const {
  getAllProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty
} = require('../controllers/properties.controller')

router.get('/', getAllProperties)
router.get('/:id', getPropertyById)
router.post('/', authAgent, createProperty)
router.put('/:id/me', authAgent, updateProperty)
router.delete('/:id/me', authAgent, deleteProperty)

module.exports = router
