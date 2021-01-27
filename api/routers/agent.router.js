const router = require('express').Router()

const {
  getAllAgents,
  createAgent,
  getAgentById,
  updateAgent,
  deleteAgent
} = require('../controllers/agent.controller')

router.get('/', getAllAgents)
router.get('/:id', getAgentById)
router.post('/', createAgent)
router.put('/:id', updateAgent)
router.delete('/:id', deleteAgent)

module.exports = router
