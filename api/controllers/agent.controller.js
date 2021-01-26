const agentModel = require('../models/agent.model')

function getAllAgents(req, res) {
  agentModel
    .find()
    .then(agents => {
      res.status(200).json(agents)
    })
    .catch(err => {
      res.status(500).json({ error: 'Agents not found' })
    })

}

function createAgent(req, res) {
  agentModel
    .create(req.body)
    .then(agents => {
      res.status(200).json(agents)
    }).catch(err => {
      res.status(500).json({ error: 'Agent not found' })
    })
}

function getAgentById (req, res){
  agentModel
  .findById(req.params.id)
  .then(response => {
      res.status(200).json(response)
  })
  .catch(err => {
      res.status(500).json({ error: 'Agents not found' })
  }) 
}

function updateAgent (req, res){
  agentModel
  .findByIdAndUpdate (req.params.id, req.body)
  .then(response => {
      res.status(200).send('Updated')
  })
  .catch(err => {
      res.status(500).json({error: 'Not updated'})
  })
}

function deleteAgent (req, res){
  agentModel
  .findByIdAndDelete (req.params.id, {$set: req.body})
  .then(response => {
      res.status(200).send('agent deleted')
  })
  .catch(err => {
      res.status(500).send('agent not deleted')
  })
}

module.exports = 
{
  getAllAgents,
  createAgent, 
  updateAgent, 
  getAgentById,
  deleteAgent
}

