const router = require('express').Router()

const {
  authAgent
} = require('../utils')

const {
  getAllProperties,
  getPropertyById,
  getAgentProperties,
  createProperty,
  updateProperty,
  deleteProperty
} = require('../controllers/properties.controller')

router.get('/', getAllProperties)
router.get('/me', authAgent, getAgentProperties)
router.get('/:id', getPropertyById)
router.post('/', authAgent, createProperty)
router.put('/:id/', authAgent, updateProperty)
router.delete('/:id/', authAgent, deleteProperty)

module.exports = router
