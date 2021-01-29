const router = require('express').Router()
const { authAgent } = require('../utils')

const {
  getAllAgents,
  createAgent,
  getAgentById,
  updateAgent,
  deleteAgent
} = require('../controllers/agent.controller')

router.get('/', getAllAgents)
router.get('/:id', getAgentById)
router.post('/', authAgent, createAgent)
router.put('/:id/', authAgent, updateAgent)
router.delete('/:id/', authAgent, deleteAgent)

module.exports = router
