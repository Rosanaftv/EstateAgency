const router = require('express').Router()
const { authAgent } = require('../utils')

const {
  getAllAgents,
  createAgent,
  getAgentById,
  getAgentProperties,
  updateAgent,
  deleteAgent,
  deleteAgentProperty
} = require('../controllers/agent.controller')

router.get('/', getAllAgents)
router.get('/properties/me', authAgent, getAgentProperties)
router.get('/me', authAgent,getAgentById)
router.post('/', authAgent, createAgent)
router.put('/:id/', authAgent, updateAgent)
router.delete('/me/:propertyId', authAgent, deleteAgentProperty)
router.delete('/me', authAgent, deleteAgent)

module.exports = router
